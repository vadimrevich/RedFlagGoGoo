/***
 *
 * runBrowsers.js
 * This Script Opens the URL theURL at Browswer Window
 * 
 * PARAMETERS:  NONE
 * RETURNS: 0 (usually)
 * 
***/

/**********************************************************
 * runsAtBrowser01
 * This Function Open a String Parameter "theURL" 
 * at a Default Browser Window
 */

function runsAtBrowswer01( theURL ) {
    var const_CMD;
    var strValue, shApp, fso, wsh, envProc, pathCMD;
    // Define Comand Constant
    const_CMD = "/c Start "
    // Define ActuveX Objects
    shApp = new ActiveXObject("Shell.Application");
    fso = new ActiveXObject("Scripting.FileSystemObject");
    wsh = new ActiveXObject("WScript.Shell");
    envProc = wsh.Environment("PROCESS");
	pathCMD = envProc("SystemRoot") + "\\System32";
    // Check Path
    if(!fso.FileExists(pathCMD + "\\cmd.exe")) {
		return 1
	};
    // Set Command Arguments
    strValue = const_CMD + theURL;
    // Run cmd.exe without Elevated Privileges ("") at Visible Mode (1), with Default working Diretory
	shApp.ShellExecute(pathCMD + "\\cmd.exe", strValue, "", "", 1);
    return 0; 
}

var iRes, theURL;
theURL = "http://localhost/";
iRes = runsAtBrowswer01(theURL);
