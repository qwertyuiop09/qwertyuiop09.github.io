
	if (typeof window.IPCHFEmail === "undefined") {
		window.IPCHFEmail='info@sale-storm.com';
	}


	var intepriceIPL = 'sale-storm.inteprice.com';
	var intepriceCRT = '07.07.2016';

	var IPclhrDataUpdate = {
		"MMFileType": "3",
		"ExtFormFCStop": {RegExp: '<[^>]+(search|subscribe|password)', Flags: 'i'},
		"ExtFormBtnFC": '[type=submit], input[type=image], input[type=button], button:not([type=reset])',
		"ViewFormClick": '.callhunter_viewform_click, .link_more',
		"ButtonSensitivity":	"0"
	}




	var formsCollection=document.forms;
	for(var r=0;r<formsCollection.length;r++) {
//		if (formsCollection[r].action.indexOf('wpcf7') > -1) {
			for (var i = 0; i < formsCollection[r].elements.length; i++) {
				if (formsCollection[r].elements[i].getAttribute("aria-required")) {
	 				formsCollection[r].elements[i].setAttribute("required", "true");
				}

			}
			if (formsCollection[r].getAttribute('novalidate'))
				formsCollection[r].removeAttribute('novalidate');
//		}
	}
