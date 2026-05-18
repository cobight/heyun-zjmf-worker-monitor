@echo off
chcp 65001 >nul
setlocal EnableExtensions

cd /d "%~dp0"
set "REAL_FILE=%CD%\step1-install.bat"
set "REAL_URL=https://github.com/loqwe/heyun-zjmf-worker-monitor/releases/download/release-step1-bat-v1/step1-install.bat"

if not exist "%REAL_FILE%" (
  powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; $ProgressPreference='SilentlyContinue'; Invoke-WebRequest -Uri '%REAL_URL%' -OutFile '%REAL_FILE%' -UseBasicParsing"
  if errorlevel 1 exit /b 1
)

call "%REAL_FILE%" %*
exit /b %ERRORLEVEL%

rem 步骤1下载包装器
