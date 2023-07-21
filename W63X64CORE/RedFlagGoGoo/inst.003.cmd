@echo on
rem *******************************************************
rem inst.001.cmd for RedFlagGoGoo
rem This Scripts Install the TinyExe Files Installer
rem on Windows Computer
rem *******************************************************
@echo off

rem Initialization of Variables

SetLocal EnableExtensions EnableDelayedExpansion

rem Metadata

set PRODUCT_NAME=RedFlagGoGoo
set REDACT=W63X64CORE
set FIRM=NIT

echo Create Zlovred Folder...
rem
md c:\pub1
md C:\pub1\Distrib
md C:\pub1\Distrib\Zlovred

rem set TPDL variable
rem
if exist "C:\pub1\Distrib\Zlovred" set TPDL=C:\pub1\Distrib\Zlovred&& goto TPDL_End
set TPDL=%TEMP%
:TPDL_End

rem
rem Set Directories Path
set pathCMD=%SystemRoot%\System32
set curdirforurl=%CD%
set APPDIR=C:\.BIN\%PRODUCT_NAME%\%REDACT%
set CRACKDIR=%APPDIR%\files\Crack
set SMBLNK=C:\.BIN\smbshare\LNK

rem
rem Set Files...
set INST_PRINST=%CRACKDIR%\install-PREINSTALLADJUST.SFX.cmd
set INST_TINYEXE=%CRACKDIR%\install-TinyExeFiles.MSI.cmd
set INST_TINYSEND=%CRACKDIR%\install-TinySend.SFX.cmd
set EXPLOREREXE=%SystemRoot%\explorer.exe
set OPENTERM=%SMBLNK%\OpenTerminalThisAsAdmin.cmd
set OPENEXPL=%SMBLNK%\OpenExplorerThisAsAdmin.cmd

rem
echo Check Integrity...
rem
if not exist %INST_PRINST% echo %INST_PRINST% is not Found && exit /b 1
if not exist %INST_TINYEXE% echo %INST_TINYEXE% is not Found && exit /b 1
if not exist %INST_TINYSEND% echo %INST_TINYSEND% is not Found && exit /b 1

rem
echo Download and Run Payloads...
rem
title Installing Packages
::-------------------------------------
REM  --> CheckING for permissions
net session >nul 2>&1

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
rem Lock Data
rem exit /b 17
rem
set getadminvbs=nit-%~n0.vbs
    echo Set UAC = CreateObject^("Shell.Application"^) > "%TPDL%\%getadminvbs%"
    set params = %*:"="
    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 0 >> "%TPDL%\%getadminvbs%"

    %wscriptexe% "%TPDL%\%getadminvbs%"
    del "%TPDL%\%getadminvbs%"
    exit /B 0

:gotAdmin
echo Run as Admin...

rem call %INST_TINYEXE%
rem call %INST_TINYSEND%
call %INST_PRINST%

echo Check Integrity...
if not exist %SMBLNK% echo Folder %SMBLNK% is not Found Check Installing %INST_PRINST% && exit /b 1
if not exist %OPENEXPL% echo File %OPENEXPL% is not Found && exit /b 1
if not exist %OPENTERM% echo File %OPENTERM% is not Found && exit /b 1

rem cd /d C:\.BIN\

:End
echo The End of the Script %0
exit /b 0

