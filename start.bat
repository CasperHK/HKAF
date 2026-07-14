@echo off
setlocal

set "REPO_ROOT=%~dp0"
if "%REPO_ROOT:~-1%"=="\" set "REPO_ROOT=%REPO_ROOT:~0,-1%"

set "FRONTEND_DIR=%REPO_ROOT%\src\frontend"
set "BACKEND_DIR=%REPO_ROOT%\src\backend"

if not exist "%FRONTEND_DIR%" (
	echo Error: Frontend directory not found: "%FRONTEND_DIR%"
	exit /b 1
)

if not exist "%BACKEND_DIR%" (
	echo Error: Backend directory not found: "%BACKEND_DIR%"
	exit /b 1
)

start "HKAF Frontend" cmd /k "cd /d ""%FRONTEND_DIR%"" && pnpm run dev"
start "HKAF Backend" cmd /k "cd /d ""%BACKEND_DIR%"" && go run ."

echo Started HKAF frontend and backend in separate windows.
exit /b 0
