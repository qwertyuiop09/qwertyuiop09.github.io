

	var IPclhrDataUpdate = {
		"MMFileType": "1",
		"ExtFormFCStop": {RegExp: '<[^>]+(search|keyword|subscribe)', Flags: 'i'},
		"ExtFormBtnFC": IPclhrData.ExtFormBtnFC + ', [type=submit], input[type=image], input[type=button], button:not([type=reset])',

		"B1CFormData": {title:'Купить <font color="green"><!--item--></font>', button:"Заказать", fields:'+Ваш телефон(+380)*, =Артикул[<!--kod-->], =Продукция[<!--item-->], -Ваш комментарий(необязательно)'},
		"B1CFormDataPh": {title:'Купить <font color="green"><!--item--></font>', button:"Заказать", fields:'+Ваш телефон(+380)*, =Артикул[<!--kod-->], =Продукция[<!--item-->], -Ваш комментарий(необязательно)'},

		"consultantOn": "0",
		"consultantOnlineAct": "2",
		"consultantSmsMaxNotify":"3",
		"consultantSmsTimeout":"60",
		"consultantTimeoutNoSnd":"0",
		"consultantSendContacts": 'Ваши контакты для обратной связи',
		"consultantAlwaysShowSupport":"1",
		"consultantMMFolder":""
	}

