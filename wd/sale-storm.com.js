
	if (typeof window.IPCHFEmail === "undefined") {
		window.IPCHFEmail='info@sale-storm.com';
	}


	var intepriceIPL = 'sale-storm.inteprice.com';
	var intepriceCRT = '07.07.2016';

	var IPclhrDataUpdate = {

		"MMFileType": "3",
		"ExtFormFCStop": {RegExp: '<[^>]+(search|subscribe|password)', Flags: 'i'},
		"ExtFormBtnFC": '[type=submit], input[type=image], input[type=button], button:not([type=reset])',
		"ButtonSensitivity":	"0"


	}




//var formsCollection=document.forms;

//for(var r=0;r<formsCollection.length;r++)
//{
//    alert(formsCollection[r].action);
//formsCollection[r].removeAttribute('novalidate')
//}


/*
var formsCollection=document.forms;

for(var r=0;r<formsCollection.length;r++)
{
//    alert(formsCollection[r].action);
	
for (var i = 0; i < formsCollection[r].elements.length; i++) {
		if (formsCollection[r].elements[i].getAttribute("aria-required")) {
		formsCollection[r].elements[i].setAttribute("required", "true");
	}

}	
	
formsCollection[r].removeAttribute('novalidate')
}
*/