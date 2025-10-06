# PowerShell script to convert all .jsx files to .tsx
# This script renames all .jsx and .js files in the project to .tsx and .ts

Write-Host "Converting JavaScript/JSX files to TypeScript..." -ForegroundColor Green

# Convert all .jsx files in src directory to .tsx
Get-ChildItem -Path "src" -Filter "*.jsx" -Recurse | ForEach-Object {
    $newName = $_.Name -replace '\.jsx$', '.tsx'
    $newPath = Join-Path $_.DirectoryName $newName
    Write-Host "Renaming: $($_.FullName) -> $newPath" -ForegroundColor Cyan
    Rename-Item -Path $_.FullName -NewName $newName
}

# Convert all .js files in src directory to .ts (excluding node_modules)
Get-ChildItem -Path "src" -Filter "*.js" -Recurse | ForEach-Object {
    $newName = $_.Name -replace '\.js$', '.ts'
    $newPath = Join-Path $_.DirectoryName $newName
    Write-Host "Renaming: $($_.FullName) -> $newPath" -ForegroundColor Cyan
    Rename-Item -Path $_.FullName -NewName $newName
}

Write-Host "`nConversion complete!" -ForegroundColor Green
Write-Host "Note: You may need to fix TypeScript errors in the converted files." -ForegroundColor Yellow
