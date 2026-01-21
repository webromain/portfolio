# Requires: PowerShell 5+
# Usage:
#   powershell -ExecutionPolicy Bypass -File .\scripts\setup.ps1
#   powershell -ExecutionPolicy Bypass -File .\scripts\setup.ps1 -Start
#   powershell -ExecutionPolicy Bypass -File .\scripts\setup.ps1 -InstallNode -Start

[CmdletBinding()]
param(
  [switch]$InstallNode,
  [switch]$Start
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Test-CommandExists([string]$cmd) {
  try { Get-Command $cmd -ErrorAction Stop | Out-Null; return $true } catch { return $false }
}

Write-Host "[setup] Checking Node.js..." -ForegroundColor Cyan
$hasNode = Test-CommandExists 'node'
if (-not $hasNode) {
  if ($InstallNode) {
    Write-Host "[setup] Node.js not found. Attempting install via winget..." -ForegroundColor Yellow
    if (Test-CommandExists 'winget') {
      winget install -e --id OpenJS.NodeJS.LTS
      Write-Host "[setup] If Node was just installed, restart your terminal if 'node -v' still fails." -ForegroundColor Yellow
    } else {
      Write-Error "winget not available. Install Node.js LTS from https://nodejs.org and re-run this script."
    }
  } else {
    Write-Error "Node.js not found. Re-run with -InstallNode or install Node LTS from https://nodejs.org"
  }
}

Write-Host "[setup] Installing npm dependencies..." -ForegroundColor Cyan
if (Test-Path -LiteralPath "$PSScriptRoot\..\package-lock.json") {
  npm ci
} else {
  npm install
}

Write-Host "[setup] Ensuring Tailwind config..." -ForegroundColor Cyan
$root = Resolve-Path "$PSScriptRoot\.."
$twConfig = Join-Path $root 'tailwind.config.js'
if (-not (Test-Path -LiteralPath $twConfig)) {
  Write-Host "[setup] Creating Tailwind & PostCSS configs (npx tailwindcss init -p)..." -ForegroundColor Cyan
  npx tailwindcss init -p
}

Write-Host "[setup] Verifying Tailwind CLI..." -ForegroundColor Cyan
npx tailwindcss -v | Out-Null
npm install react-snowfall

Write-Host "[setup] Done. You can run the dev server with: npm run dev" -ForegroundColor Green
if ($Start) {
  Write-Host "[setup] Starting dev server (Ctrl+C to stop)..." -ForegroundColor Green
  npm run dev
}
