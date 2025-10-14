@echo off
setlocal enabledelayedexpansion

:: Portfolio Setup Script for Windows
:: This script helps set up and deploy your new React portfolio

echo.
echo ========================================
echo    Portfolio Setup Script (Windows)
echo ========================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js v16 or higher.
    pause
    exit /b 1
)
echo [OK] Node.js is installed
node --version

:: Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed. Please install npm.
    pause
    exit /b 1
)
echo [OK] npm is installed
npm --version

echo.
echo What would you like to do?
echo 1) Initial setup (backup old files, install dependencies)
echo 2) Install dependencies only
echo 3) Run development server
echo 4) Build for production
echo 5) Deploy to GitHub Pages
echo 6) Full deployment (build + deploy)
echo 7) Exit
echo.
set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" goto initial_setup
if "%choice%"=="2" goto install_deps
if "%choice%"=="3" goto dev_server
if "%choice%"=="4" goto build
if "%choice%"=="5" goto deploy
if "%choice%"=="6" goto full_deploy
if "%choice%"=="7" goto exit_script
goto invalid_choice

:initial_setup
echo.
echo [INFO] Starting initial setup...

:: Backup old files
if exist "index.html" (
    if not exist "index-new.html" (
        echo [INFO] Backing up old files...
        if not exist "old-portfolio" mkdir old-portfolio
        move /Y index.html old-portfolio\ >nul 2>nul
        move /Y script.js old-portfolio\ >nul 2>nul
        move /Y styles_v2.css old-portfolio\ >nul 2>nul
        move /Y webgl.js old-portfolio\ >nul 2>nul
        move /Y README.md old-portfolio\ >nul 2>nul
        echo [OK] Old files backed up to old-portfolio\
    )
)

:: Rename new files
if exist "index-new.html" (
    move /Y index-new.html index.html >nul
    echo [OK] Renamed index-new.html to index.html
)

if exist "README-new.md" (
    move /Y README-new.md README.md >nul
    echo [OK] Renamed README-new.md to README.md
)

:: Create public folder and copy photo
if not exist "public" mkdir public
if exist "photo.jpg" (
    copy /Y photo.jpg public\ >nul
    echo [OK] Copied photo.jpg to public\
)

:: Install dependencies
echo [INFO] Installing dependencies...
call npm install

if %errorlevel% equ 0 (
    echo [OK] Dependencies installed successfully!
    echo.
    echo [INFO] Setup complete! You can now run:
    echo   npm run dev     - Start development server
    echo   npm run build   - Build for production
    echo   npm run deploy  - Deploy to GitHub Pages
) else (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
goto end

:install_deps
echo [INFO] Installing dependencies...
call npm install

if %errorlevel% equ 0 (
    echo [OK] Dependencies installed successfully!
) else (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
goto end

:dev_server
echo [INFO] Starting development server...
call npm run dev
goto end

:build
echo [INFO] Building for production...
call npm run build

if %errorlevel% equ 0 (
    echo [OK] Build completed successfully!
    echo [INFO] Build output is in the 'dist' folder
) else (
    echo [ERROR] Build failed
    pause
    exit /b 1
)
goto end

:deploy
echo [INFO] Deploying to GitHub Pages...
call npm run deploy

if %errorlevel% equ 0 (
    echo [OK] Deployment successful!
    echo [INFO] Your site will be live at: https://jermiah.github.io/portfolio/
    echo [WARNING] Note: It may take 1-2 minutes for changes to appear
) else (
    echo [ERROR] Deployment failed
    pause
    exit /b 1
)
goto end

:full_deploy
echo [INFO] Building and deploying...

:: Build
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)
echo [OK] Build completed!

:: Deploy
call npm run deploy
if %errorlevel% equ 0 (
    echo [OK] Deployment successful!
    echo.
    echo ========================================
    echo   Your portfolio is now live!
    echo ========================================
    echo.
    echo Visit: https://jermiah.github.io/portfolio/
    echo.
    echo [WARNING] Note: It may take 1-2 minutes for changes to appear
) else (
    echo [ERROR] Deployment failed
    pause
    exit /b 1
)
goto end

:invalid_choice
echo [ERROR] Invalid choice
pause
exit /b 1

:exit_script
echo [INFO] Exiting...
exit /b 0

:end
echo.
echo [OK] Done!
echo.
pause
