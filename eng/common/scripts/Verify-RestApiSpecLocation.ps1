<#
.SYNOPSIS
  Verifies the location of the REST API specification.

.DESCRIPTION
  This script is used to verify the REST API specifications used to generate SDK package are from the main branch of Azure/azure-rest-api-specs repository.

.PARAMETER ServiceDirectory
  The directory path of the service.

.PARAMETER PackageName
  The name of the package.

.PARAMETER ArtifactLocation
  The location of the generated artifact for the package.

.PARAMETER GitHubPat
  The GitHub personal access token used for authentication. By default, it will use the environment variable GH_TOKEN.

.PARAMETER PackageInfoDirectory
  The directory path where the package information is stored.

.EXAMPLE
  Verify-RestApiSpecLocation -ServiceDirectory "/home/azure-sdk-for-net/sdk/serviceab" -PackageName "MyPackage" -ArtifactLocation "/home/ab/artifacts" -GitHubPat "xxxxxxxxxxxx" -PackageInfoDirectory "/home/ab/artifacts/PackageInfo"

#>
[CmdletBinding()]
param (
  [Parameter(Position = 0)]
  [ValidateNotNullOrEmpty()]
  [string] $ServiceDirectory,
  [Parameter(Position = 1)]
  [ValidateNotNullOrEmpty()]
  [string] $PackageName,
  [ValidateNotNullOrEmpty()]
  [string] $ArtifactLocation,
  [Parameter(Position = 2)]
  [string]$GitHubPat = $($env:GH_TOKEN),
  [string]$PackageInfoDirectory
)

. (Join-Path $PSScriptRoot common.ps1)
. (Join-Path $PSScriptRoot Helpers/PSModule-Helpers.ps1)

# Check if github token is set
if (-not $GitHubPat) {
  LogError "GitHubPat is not set. Please set the environment variable GH_TOKEN or pass the GitHubPat parameter."
  exit 1
}

Install-ModuleIfNotInstalled "powershell-yaml" "0.4.1" | Import-Module

# This function is used to verify the 'require' and 'input-file' settings in autorest.md point to the main branch of Azure/azure-rest-api-specs repository
# input-file may be: 
# https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/purview/data-plane/Azure.Analytics.Purview.MetadataPolicies/preview/2021-07-01-preview/purviewMetadataPolicy.json
# or 
# https://github.com/Azure/azure-rest-api-specs/blob/0ebd4949e8e1cd9537ca5a07384c7661162cc7a6/specification/purview/data-plane/Azure.Analytics.Purview.Account/preview/2019-11-01-preview/account.json
function Verify-Url([string]$fileUrl, [string]$configFilePath) {
  if ($fileUrl -match "^https://(raw\.githubusercontent\.com|github\.com)/(?<repo>[^/]*/azure-rest-api-specs)(/(blob|tree))?/(?<commit>[^\/]+(\/[^\/]+)*|[0-9a-f]{40})/(?<path>specification/.*)") {
    $repo = $matches['repo']
    $commit = $matches['commit']
    if ($repo -ne "Azure/azure-rest-api-specs") {
      LogError "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Invalid repo in the file url: $fileUrl. Repo should be 'Azure/azure-rest-api-specs' in the config file:$configFilePath."
      exit 1
    }
    # check the commit hash belongs to main branch
    Verify-CommitFromMainBranch $commit $configFilePath
  }
  else {
    LogError "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Invalid file url: $fileUrl in the config file:$configFilePath. The spec location should point to the main branch of Azure/azure-rest-api-specs repository."
    exit 1
  }
}

# This function is used to verify the 'repo' and 'commit' settings in tsp-location.yaml point to the main branch of Azure/azure-rest-api-specs repository
function Verify-TspLocation([System.Object]$tspLocationObj, [string]$tspLocationYamlPath) {
  $repo = $tspLocationObj["repo"]
  $commit = $tspLocationObj["commit"]
  if ($repo -ne "Azure/azure-rest-api-specs") {
    LogError "Invalid repo setting in the tsp-location.yaml: $repo. Repo should be 'Azure/azure-rest-api-specs'. ServiceDir:$ServiceDirectory, PackageName:$PackageName, tsp-location.yaml path:$tspLocationYamlPath."
    exit 1
  }

  # check the commit hash belongs to main branch
  Verify-CommitFromMainBranch $commit $tspLocationYamlPath
}

# This function is used to verify the specific 'commit' belongs to the main branch of Azure/azure-rest-api-specs repository
function Verify-CommitFromMainBranch([string]$commit, [string]$configFilePath) {
  if ($commit -notmatch "^[0-9a-f]{40}$" -and $commit -ne "main") {
    LogError "Invalid commit hash or branch name: $commit. Branch name should be 'main' or the commit should be a 40-character SHA-1 hash. ServiceDir:$ServiceDirectory, PackageName:$PackageName, please check the config file:$configFilePath."
    exit 1
  }
  if ($commit -eq "main") {
    Write-Host "ServiceDir:$ServiceDirectory, PackageName:$PackageName, Config file:$configFilePath. Branch is $commit branch of Azure/azure-rest-api-specs repository."
    return
  }
  try {
    $searchResult = Search-GitHubCommit -AuthToken $GitHubPat -CommitHash $commit -RepoOwner "Azure" -RepoName "azure-rest-api-specs"
    if ($searchResult.total_count -lt 1) {
      LogError "Commit $commit doesn't exist in 'main' branch of Azure/azure-rest-api-specs repository. ServiceDir:$ServiceDirectory, PackageName:$PackageName, please check the config file:$configFilePath."
      exit 1
    }
    else {
      Write-Host "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Commit $commit exists in 'main' branch of Azure/azure-rest-api-specs repository."
    }
  }
  catch {
    LogError "ServiceDir:$ServiceDirectory, PackageName:$PackageName, Config file:$configFilePath. Failed to search commit $commit with exception:`n$_ "
    exit 1
  }
}

function Verify-YamlContent([string]$markdownContent, [string]$configFilePath) {
  $splitString = '``` yaml|```yaml|```'
  $yamlContent = $markdownContent -split $splitString
  foreach ($yamlSection in $yamlContent) {
    if ($yamlSection) {
      try {
        # remove the lines like: $(tag) == 'package-preview-2023-09'
        $yamlSection = $yamlSection -replace '^\s*\$\(.+\)\s*==.+', ''
        $yamlobj = ConvertFrom-Yaml -Yaml $yamlSection
        if ($yamlobj) {
          $batchValue = $yamlobj["batch"]
          $requireValue = $yamlobj["require"]
          $inputFileValue = $yamlobj["input-file"]
          if ($requireValue) {
            LogDebug "ServiceDir:$ServiceDirectory, PackageName:$PackageName, Config file:$configFilePath. 'require' is set as:$requireValue"
            Verify-Url $requireValue $configFilePath
          }
          elseif ($inputFileValue) {
            LogDebug "ServiceDir:$ServiceDirectory, PackageName:$PackageName, Config file:$configFilePath. 'input-file' is set as:$inputFileValue"
            foreach ($inputFile in $inputFileValue) {
              Verify-Url $inputFile $configFilePath
            }
          }
          elseif ($batchValue) {
            # there are some services which use batch mode for sdk generation, e.g. Azure.AI.Language.QuestionAnswering
            foreach ($batch in $batchValue) {
              $requireValue = $batch["require"]
              $inputFileValue = $batch["input-file"]
              if ($requireValue) {
                LogDebug "ServiceDir:$ServiceDirectory, PackageName:$PackageName, Config file:$configFilePath. 'require' is set as:$requireValue"
                Verify-Url $requireValue $configFilePath
              }
              elseif ($inputFileValue) {
                LogDebug "ServiceDir:$ServiceDirectory, PackageName:$PackageName, Config file:$configFilePath. 'input-file' is set as:$inputFileValue"
                foreach ($inputFile in $inputFileValue) {
                  Verify-Url $inputFile $configFilePath
                }
              }
            }
          }
        }
      }
      catch {
        Write-Host "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Failed to parse yaml section $yamlSection with exception:`n$_ "
      }
    }
  }
}

function Verify-PackageVersion() {
  try {
    $packages = @{}
    if ($FindArtifactForApiReviewFn -and (Test-Path "Function:$FindArtifactForApiReviewFn")) {
      $packages = &$FindArtifactForApiReviewFn $ArtifactLocation $PackageName
    }
    else {
      LogError "The function for 'FindArtifactForApiReviewFn' was not found.`
      Make sure it is present in eng/scripts/Language-Settings.ps1 and referenced in eng/common/scripts/common.ps1.`
      See https://github.com/Azure/azure-sdk-tools/blob/main/doc/common/common_engsys.md#code-structure"
      exit 1
    }
    if (-not $PackageInfoDirectory) {
      $PackageInfoDirectory = Join-Path -Path $ArtifactLocation "PackageInfo"
      if (-not (Test-Path -Path $PackageInfoDirectory)) {
        # Call Save-Package-Properties.ps1 script to generate package info json files
        $savePropertiesScriptPath = Join-Path -Path $PSScriptRoot "Save-Package-Properties.ps1"
        & $savePropertiesScriptPath -serviceDirectory $ServiceDirectory -outDirectory $PackageInfoDirectory
      }
    }

    $continueValidation = $false
    if ($packages) {
      foreach ($pkgPath in $packages.Values) {
        $pkgPropPath = Join-Path -Path $PackageInfoDirectory "$PackageName.json"
        if (-Not (Test-Path $pkgPropPath)) {
          Write-Host "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Package property file path $($pkgPropPath) is invalid."
          continue
        }
        # Get package info from json file
        $pkgInfo = Get-Content $pkgPropPath | ConvertFrom-Json
        $version = [AzureEngSemanticVersion]::ParseVersionString($pkgInfo.Version)
        if ($null -eq $version) {
          LogError "ServiceDir:$ServiceDirectory, Version info is not available for package $PackageName, because version '$(pkgInfo.Version)' is invalid. Please check if the version follows Azure SDK package versioning guidelines."
          exit 1
        }

        Write-Host "Version: $($version)"
        Write-Host "SDK Type: $($pkgInfo.SdkType)"
        Write-Host "Release Status: $($pkgInfo.ReleaseStatus)"

        # Ignore the validation if the package is not GA version
        if ($version.IsPrerelease) {
          Write-Host "ServiceDir:$ServiceDirectory, Package $PackageName is marked with version $version, the version is a prerelease version and the validation of spec location is ignored."
          exit 0
        }
        $continueValidation = $true
      }
    }
    if ($continueValidation -eq $false) {
      Write-Host "ServiceDir:$ServiceDirectory, no package info is found for package $PackageName, the validation of spec location is ignored."
      exit 0
    }
  }
  catch {
    LogError "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Failed to retrieve package and validate package version with exception:`n$_ "
    exit 1
  }
}

try {
  # Verify package version is not a prerelease version, only continue the validation if the package is GA version
  #Verify-PackageVersion

  $ServiceDir = Join-Path $RepoRoot 'sdk' $ServiceDirectory
  $PackageDirectory = Join-Path $ServiceDir $PackageName

  # JavaScript SDK repo has different convention for the package directory name
  if ($Language -eq "javascript") {
    $prefixOfRlcPkg = "azure-rest-"
    $prefixOfAzurePkg = "azure-"
    if ($PackageName -match $prefixOfRlcPkg) {
      $PackageDirectory = Join-Path $ServiceDir ($PackageName.Substring($prefixOfRlcPkg.Length) + "-rest")
    }
    else {
      $PackageDirectory = Join-Path $ServiceDir $PackageName.Substring($prefixOfAzurePkg.Length)
    }
  }
  Push-Location $PackageDirectory

  # Load tsp-location.yaml if existed
  $tspLocationYamlPath = Join-Path $PackageDirectory "tsp-location.yaml"
  $autorestMdPath = Join-Path $PackageDirectory "src/autorest.md"
  $swaggerReadmePath = Join-Path $PackageDirectory "swagger/README.md"
  $tspLocationYaml = @{}
  if (Test-Path -Path $tspLocationYamlPath) {
    # typespec scenario
    $tspLocationYaml = Get-Content -Path $tspLocationYamlPath -Raw | ConvertFrom-Yaml
    Verify-TspLocation $tspLocationYaml $tspLocationYamlPath
  }
  elseif ($Language -eq "dotnet") {
    # only dotnet language sdk uses 'autorest.md' to configure the sdk generation
    if (Test-Path -Path $autorestMdPath) {
      try {
        $autorestMdContent = Get-Content -Path $autorestMdPath -Raw
        Verify-YamlContent $autorestMdContent $autorestMdPath
      }
      catch {
        Write-Host "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Failed to parse autorest.md file:$autorestMdPath with exception:`n$_ "
      }
    }
  }
  elseif ($Language -eq "java" -or $Language -eq "javascript" -or $Language -eq "python" -or $Language -eq "go") {
    # for these languages we ignore the validation because they always use the latest spec from main branch to release SDK
    # mgmt plane packages: azure-core-management|azure-resourcemanager|azure-resourcemanager-advisor (java), azure-mgmt-devcenter (python), azure-arm-advisor (js), armaad (go)
    if ($PackageName -match "^(arm|azure-mgmt|azure-resourcemanager|azure-core-management|azure-arm|azure-rest-arm)[-a-z]*$") {
      Write-Host "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Ignore the validation for $Language management plane package."
      exit 0
    }
    # for these languages they use 'swagger/readme.md' to configure the sdk generation for data plane scenarios
    if (Test-Path -Path $swaggerReadmePath) {
      try {
        $swaggerReadmeContent = Get-Content -Path $swaggerReadmePath -Raw
        Verify-YamlContent $swaggerReadmeContent $swaggerReadmePath
      }
      catch {
        Write-Host "ServiceDir:$ServiceDirectory, PackageName:$PackageName. Failed to parse swagger/readme.md file:$swaggerReadmePath with exception:`n$_ "
      }
    }
  }
}
catch {
  Write-Host "ServiceDir:$ServiceDirectory, PackageName:$PackageName, PackageDirectory:$PackageDirectory. Failed to validate spec location with exception:`n$_ "
}
finally {
  Pop-Location
}
