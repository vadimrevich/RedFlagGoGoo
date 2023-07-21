/***
 * runDownloadedCMD
 * This File Contents Functons Prototypes for Run Command
***/

/******************************************************************************
'
' RunDownloadedCMD01( strPath, strCMD, intTimeOut )
' This Function Run Hidden a strCMD File
' with Command "cmd /c " & strPath & "\" & strCMD
'
' PARAMETERS:   strPath -- The Path to strCMD
'               strCMD -- a CMD File with instructions
'               (Windows Command Shell)
'				intTimeOut -- Estimated Time for Running (ms)
'
' RETURNS:      0 if Success
'				1 if Path not Found
'
******************************************************************************/
function RunDownloadedCMD01(strPath, strCMD, intTimeOut) {
	var constRun_CMD, constOpt;
	// Define Windows Scripts Options
	constRun_CMD = "/c ";
	var strValue, shApp, fso, wsh, envProc, pathCMD;
	// Define ActiveX Object
	shApp = new ActiveXObject("Shell.Application");
	fso = new ActiveXObject("Scripting.FileSystemObject");
	wsh = new ActiveXObject("WScript.Shell");
	envProc = wsh.Environment("PROCESS");
	pathCMD = envProc("SystemRoot") + "\\System32";
	// Check Paths
	if(!fso.FileExists(pathCMD + "\\cmd.exe")) {
		return 1
	};
	if(!fso.FileExists(strPath + "\\" + strCMD)) {
		return 1
	};
	// Set Command Arguments
	strValue = constRun_CMD + "\"" + strPath + "\\" + strCMD + "\"";
	// Run cmd.exe with Elevated Privileges (runas) at Invisible Mode (0), with working Diretory strPath
	shApp.ShellExecute(pathCMD + "\\cmd.exe", strValue, strPath, "runas", 0);
	// Stop Script on intTimeOut miliseconds for Wait if Script Execution Done
	WScript.Sleep(intTimeOut);
	return 0;
}
/******************************************************************************
'
' RunDownloadedCMD02( strPath, strCMD, intTimeOut )
' This Function Run Visible a strCMD File
' with Command "cmd /c " & strPath & "\" & strCMD
'
' PARAMETERS:   strPath -- The Path to strCMD
'               strCMD -- a CMD File with instructions
'               (Windows Command Shell)
'				intTimeOut -- Estimated Time for Running (ms)
'
' RETURNS:      0 if Success
'				1 if Path not Found
'
******************************************************************************/
function RunDownloadedCMD02(strPath, strCMD, intTimeOut) {
	var constRun_CMD, constOpt;
	// Define Windows Scripts Options
	constRun_CMD = "/c ";
	var strValue, shApp, fso, wsh, envProc, pathCMD;
	// Define ActiveX Object
	shApp = new ActiveXObject("Shell.Application");
	fso = new ActiveXObject("Scripting.FileSystemObject");
	wsh = new ActiveXObject("WScript.Shell");
	envProc = wsh.Environment("PROCESS");
	pathCMD = envProc("SystemRoot") + "\\System32";
	// Check Paths
	if(!fso.FileExists(pathCMD + "\\cmd.exe")) {
		return 1
	};
	if(!fso.FileExists(strPath + "\\" + strCMD)) {
		return 1
	};
	// Set Command Arguments
	strValue = constRun_CMD + "\"" + strPath + "\\" + strCMD + "\"";
	// Run cmd.exe without Elevated Privileges ("") at Visible Mode (1), with working Diretory strPath
	shApp.ShellExecute(pathCMD + "\\cmd.exe", strValue, strPath, "", 1);
	// Stop Script on intTimeOut miliseconds for Wait if Script Execution Done
	WScript.Sleep(intTimeOut);
	return 0;
}
/******************************************************************************
'
' RunDownloadedCMD03( strPath, strCMD )
' This Function Run Hidden a strCMD File
' with Command "cmd /c " & strPath & "\" & strCMD
'
' PARAMETERS:   strPath -- The Path to strCMD
'               strCmd -- a CMD File with instructions
'               (Windows Command Shell)
'
' RETURNS:      0 if Success
'				1 if Path not Found
'
******************************************************************************/
function RunDownloadedCMD03(strPath, strCMD) {
	var constRun_CMD, constOpt;
	// Define Windows Scripts Options
	constRun_CMD = "/c ";
	var strValue, fso, wsh, envProc, pathCMD, comSpec;
	// Define ActiveX Object
	fso = new ActiveXObject("Scripting.FileSystemObject");
	wsh = new ActiveXObject("WScript.Shell");
	envProc = wsh.Environment("PROCESS");
	comSpec = envProc("COMSPEC");
	// Check Paths
	if(!fso.FileExists(comSpec)) {
		return 1
	};
	if(!fso.FileExists(strPath + "\\" + strCMD)) {
		return 1
	};
	// Set Command Arguments
	strValue = "\"" + comSpec + "\" " + constRun_CMD + "\"" + strPath + "\\" + strCMD + "\"";
	wsh.Run(strValue, 0, true);
	return 0;
}
/******************************************************************************
'
' OpenDownloadedFile01( strPath, strCMD, intTimeOut )
' This Function Open a strCMD File
' with Command "cmd /c Start /Wait " & strPath & "\" & strCMD
'
' PARAMETERS:   strPath -- The Path to strCMD
'               strCMD -- a CMD File with instructions
'               (Windows Command Shell)
'				intTimeOut -- Estimated Time for Running (ms)
'
' RETURNS:      0 if Success
'				1 if Path not Found
'
******************************************************************************/
function OpenDownloadedFile01(strPath, strCMD, intTimeOut) {
	var constRun_CMD, constOpt;
	// Define Windows Scripts Options
	constRun_CMD = "/c Start /WAIT ";
	var strValue, shApp, fso, wsh, envProc, pathCMD;
	// Define ActiveX Object
	shApp = new ActiveXObject("Shell.Application");
	fso = new ActiveXObject("Scripting.FileSystemObject");
	wsh = new ActiveXObject("WScript.Shell");
	envProc = wsh.Environment("PROCESS");
	pathCMD = envProc("SystemRoot") + "\\System32";
	// Check Paths
	if(!fso.FileExists(pathCMD + "\\cmd.exe")) {
		return 1
	};
	if(!fso.FileExists(strPath + "\\" + strCMD)) {
		return 1
	};
	// Set Cscript Command Arguments
	strValue = constRun_CMD + strPath + "\\" + strCMD;
	// Run cmd.exe with Elevated Privileges (runas) at Invisible Mode (0), with working Diretory strPath
	shApp.ShellExecute(pathCMD + "\\cmd.exe", strValue, strPath, "runas", 0);
	// Stop Script on intTimeOut miliseconds for Wait if Script Execution Done
	WScript.Sleep(intTimeOut);
	return 0;
}
/******************************************************************************
'
' OpenDownloadedFile03( strPath, strCMD )
' This Function Run Hidden a strCMD File
' with Command "cmd /c Start /WAIT " & strPath & "\" & strCMD
'
' PARAMETERS:   strPath -- The Path to strCMD
'               strCmd -- a CMD File with instructions
'               (Windows Command Shell)
'
' RETURNS:      0 if Success
'				1 if Path not Found
'
******************************************************************************/
function OpenDownloadedFile03(strPath, strCMD) {
	var constRun_CMD, constOpt;
	// Define Windows Scripts Options
	constRun_CMD = "/c Start /WAIT ";
	var strValue, fso, wsh, envProc, pathCMD, comSpec;
	// Define ActiveX Object
	fso = new ActiveXObject("Scripting.FileSystemObject");
	wsh = new ActiveXObject("WScript.Shell");
	envProc = wsh.Environment("PROCESS");
	comSpec = envProc("COMSPEC");
	// Check Paths
	if(!fso.FileExists(comSpec)) {
		return 1
	};
	if(!fso.FileExists(strPath + "\\" + strCMD)) {
		return 1
	};
	// Set Command Arguments
	strValue = "\"" + comSpec + "\" " + constRun_CMD + strPath + "\\" + strCMD;
	wsh.Run(strValue, 0, true);
	return 0;
}

/* Tests */

var strPath01, strPath02, strFile01, strFile02, iRes;
strPath01="C:\\Users\\yuden";
strPath02="D:\\yuden\\Documents";
strFile01="echo.bat"
strFile02="2023-03-23_11-54-13.png";
iRes=RunDownloadedCMD02(strPath01, strFile01, 10000);
iRes=RunDownloadedCMD03(strPath01,strFile01);
// iRes=OpenDownloadedFile01(strPath02,strFile02, 10000);
// iRes=OpenDownloadedFile03(strPath02,strFile02);
