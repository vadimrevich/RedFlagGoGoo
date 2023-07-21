/***
 *
 * auxbuttons.js
 *
***/
"use strict"

function buttonsiteclick(){
    var aSite;
    aSite = 'http://main.nitsar.ru.net/modx/information.html';
	window.location.href = aSite;
}

function buttonclose(){
	var confirm_result = confirm("Вы хотите закрыть страницу?");
	if(confirm_result==true){
		window.open('','_self').close();
	}
}

function buttonmainclick(){
    var aSite;
    aSite = 'index.html';
    window.open(aSite, '_blank');
}

function buttonwebapplication(){
    var aSite;
    aSite = 'http://file.netip4.ru/PROGS/NIT/DefenderDefeat/html/main.html';
    window.open( aSite, '_blank');
}

