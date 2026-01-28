Write-Host "Starting Shikha Garments Project..."

# Get the script's directory to ensure we start from the root
$root = $PSScriptRoot

# Start Backend
Write-Host "Launching Backend Server (Window: Backend)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "& {`$Host.UI.RawUI.WindowTitle = 'Backend'; cd '$root\backend'; if (Test-Path 'venv') { .\venv\Scripts\activate }; python manage.py runserver 0.0.0.0:8000}"

# Start Frontend
Write-Host "Launching Frontend Server (Window: Frontend)..."
# Using npx vite directly as requested to avoid npm script issues
Start-Process powershell -ArgumentList "-NoExit", "-Command", "& {`$Host.UI.RawUI.WindowTitle = 'Frontend'; cd '$root\frontend'; npx vite --host 0.0.0.0}"

# Wait for servers to spin up
Write-Host "Waiting 5 seconds for servers to start..."
Start-Sleep -Seconds 5

# Open URLs in default browser (Laptop view)
Write-Host "Opening Laptop View..."
Start-Process "http://localhost:5173"
Start-Process "http://10.171.156.2:5173/"

Write-Host "Opening Admin Panel..."
Start-Process "http://127.0.0.1:8000/admin/"

# Print Mobile Instructions
Write-Host ""
Write-Host "TO VIEW ON MOBILE, OPEN: http://10.171.156.2:5173" -ForegroundColor Green
Write-Host ""
Write-Host "Done! Servers are running."
