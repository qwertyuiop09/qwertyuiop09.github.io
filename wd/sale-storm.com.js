
var SSCHunterCallback = function(type,undefined,undefined,undefined,undefined,undefined,Conv_value) { if (type == 200) { console.log ( 'ConvTime exist' ); if ((typeof window.yaCounter38359345 == 'object')&&(typeof window.yaCounter38359345.reachGoal == 'function')) { window.yaCounter38359345.reachGoal('HOT_ACTIVITY'); } } else if ((type >= 1)&&(type < 200)) { console.log ( 'ConvCHSnd exist' ); if ((typeof window.yaCounter38359345 == 'object')&&(typeof window.yaCounter38359345.reachGoal == 'function')) { window.yaCounter38359345.reachGoal('CALLHUNTER'); } } else if (type == 201) { console.log ( 'ConvСlick exist' ) } else if (type == 202) { console.log ( 'ConvSubmit exist' ) } else if (type == 203) { console.log ( 'ConvHit exist' ) } else if (type == 204) { console.log ( 'ConvJivo exist' ) } else if (type == 205) { console.log ( 'CallWidget exist' ) } ; if (typeof Conv_value != 'undefined') { console.log ( 'ConvValue exist: ' + Conv_value ) }   }




if (0) {

	(function() {
    	var s = document.createElement('script');
		s.type ='text/javascript';
		s.id = 'supportScript';
		s.charset = 'utf-8';
		s.async = true;
		s.src = '//me-talk.ru/support/support.js?h=ada5a9c9a2be1dd852f84c68ff6e6e00';
		var sc = document.getElementsByTagName('script')[0];
		
		var callback = function(){

			/*
				Здесь вы можете вызывать API. Например, чтобы изменить отступ по высоте:
				supportAPI.setSupportTop(200);
			*/
            
            
		};
		
		s.onreadystatechange = s.onload = function(){
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		
		if (sc) sc.parentNode.insertBefore(s, sc);
		else document.documentElement.firstChild.appendChild(s);
	})();

}

var IPchatConfig = {
//    "widget_color": "#474747",
    "widget_color": "#427cd4",
//    "widget_padding": "100",
//    "widget_padding": "50",
//    "widget_padding": "0",
//    "widget_padding": "75",
    "widget_padding": "70",
//    "widget_orientation": "right",
    "widget_orientation": "bottom",
//    "font_type": "normal",
    "font_type": "bold",
    "offline_widget_label": "Отправьте нам сообщение",
    "offline_form_text": "Оставьте свое сообщение в этой форме, и мы получим его на e-mail и обязательно ответим!",
    "custom_langpack": {
	"lblOfflineMessageSend": "Сообщение отправлено",
        "lblMessageError": "К сожалению, сообщение не было отправлено по техническим причинам",
        "lblLookingForFreeAgent": "Подключаемся...",
        "lblIntroduceName": "Ваше имя",
        "lblEvaluateCancel": "Отменить",
        "lblSend": "Отправить",
        "lblThankYouMessage": "Спасибо за ваше сообщение! Мы&nbsp;обязательно свяжемся с&nbsp;Вами в ближайшее время",
        "lblYourEmail": "Ваш E-mail",
        "lblYourMessage": "Ваше сообщение",
        "lblYourPhone": "Ваш телефон",
        "lnkCloseThisWindow": "Закрыть",
        "ofl_enterMessage": "Пожалуйста, введите сообщение",
        "ofl_enterName": "Пожалуйста, введите имя",
        "ofl_enterValidEmail": "Указан неверный e-mail",
        "ofl_enterValidPhone": "Указан неверный телефон"
    }

};



(function(){ var s = document.createElement('script'); s.type = 'text/javascript'; s.charset="UTF-8"; s.async = true; var a;a="http";a+="\x73\x3a\x2f\x2f";a+="cdn.";a+="sale";a+="-storm";a+=".com";a+="/wd";a+="/";a+="\x63\x61\x6C\x6C\x68\x75\x6E\x74\x65\x72\x2F\x63\x68\x61\x74\x2F\x6A\x73\x2F\x77\x69\x64\x67\x65\x74\x5F\x65\x6E\x5F\x55\x53\x2E\x6A\x73\x3F\x72\x61\x6E\x64\x3D\x31\x34\x34\x35\x32\x36\x37\x39\x39\x37"; s.src = a; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);})();



	if (typeof window.IPCHFEmail === "undefined") {
		window.IPCHFEmail='info@sale-storm.com';
	}




	var setIntervalCountry = setInterval(function() {
		if (window.jQuery) {
			clearInterval(setIntervalCountry);
			window.checkCountry = 'US';
			window.jQuery.getJSON("http://api.wipmania.com/jsonp?callback=?",
				function(data) {
					window.checkCountry = data.address.country_code;
					chCountry();
				});



		}
	}, 10);



	function chCountry() {

		if (typeof window.IPclhrData == 'undefined') {
			setTimeout(function() {
				chCountry();
			}, 200);
			return;
		}


		if (window.checkCountry == "RU") {

			IPclhrData.fields="+Введите ваш телефон(+7)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+7";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+7), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+7), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		} else if (window.checkCountry == "KZ") {

			IPclhrData.fields="+Введите ваш телефон(+7)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+7";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+7), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+7), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};



		} else if (window.checkCountry == "BY") {

			IPclhrData.fields="+Введите ваш телефон(+375)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+375";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+375), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+375), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		} else if (window.checkCountry == "IL") {

			IPclhrData.fields="+Введите ваш телефон(+972)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+972";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+972), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+972), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		} else if (window.checkCountry == "US") {

			IPclhrData.fields="+Введите ваш телефон(+1)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+1";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+1), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+1), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};



		} else if (window.checkCountry == "CA") {

			IPclhrData.fields="+Введите ваш телефон(+1)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+1";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+1), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+1), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};



		} else if (window.checkCountry == "EE") {

			IPclhrData.fields="+Введите ваш телефон(+372)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+372";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+372), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+372), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		} else if (window.checkCountry == "LT") {

			IPclhrData.fields="+Введите ваш телефон(+370)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+370";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+370), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+370), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		} else if (window.checkCountry == "LV") {

			IPclhrData.fields="+Введите ваш телефон(+371)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+371";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+371), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+371), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		} else if (window.checkCountry == "DE") {

			IPclhrData.fields="+Введите ваш телефон(+49)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+49";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+49), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+49), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		} else if (window.checkCountry == "UA") {

			IPclhrData.fields="+Введите ваш телефон(+380)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+380";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+380), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+380), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		} else {

			IPclhrData.fields="+Введите ваш телефон(+380)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*";
			IPclhrData.emptyPhone="+380";

			IPclhrData.PRIFormData={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+380), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};
			IPclhrData.PRIFormDataPh={title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+380), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0};


		}
	}




	var intepriceIPL = 'sale-storm.inteprice.com';
	var intepriceCRT = '07.07.2016';

	var IPclhrDataUpdate = {


	"TimeOnSite": "5",


	"AdwConvRemark": {
	google_conversion_id: 856773215,
	google_custom_params: window.google_tag_params,
	google_remarketing_only: true
		},



	"AdwConvTime": {
	google_conversion_id: 856773215,
	google_conversion_language: "en",
	google_conversion_format: "3",
	google_conversion_color: "ffffff",
	google_conversion_label: "cmBhCK-l7G8Q36TFmAM",
	google_remarketing_only: false
		},


	"AdwConvCHSnd": {
	google_conversion_id: 856773215,
	google_conversion_language: "en",
	google_conversion_format: "3",
	google_conversion_color: "ffffff",
	google_conversion_label: "ie3sCO-j7G8Q36TFmAM",
	google_remarketing_only: false
		},




		"PRIClass": '.priclhr-ring',

//		"PRIOneClick": 1,
		"PRInightOn": 1,
//		"PRITelMask": "789-48-82, 361-14-80, 946-08-82",
		"PRIRingID": "123, 196, 965",


//		"PRIFormData": {title:'Уточните у менеджера необходимые данные', titleworktime:'Позвоните нам, узнайте подробности', titlenight:'Позвоните нам в рабочее время,<br>узнайте подробности', titlenightsize: "12px", fields: "Имя, Ваш Email, +Ваш телефон, Адрес сайта, -Комментарий, <Одноразовый ID(узнайте у менеджера)*", button: "Отправить", callTime: 0},
//		"PRIFormDataPh": {title:'Уточните у менеджера необходимые данные', titleworktime:'Позвоните нам, узнайте подробности', titlenight:'Позвоните нам в рабочее время,<br>узнайте подробности', titlenightsize: "12px", fields: "Имя, Ваш Email, +Ваш телефон, Адрес сайта, -Комментарий, <Одноразовый ID(узнайте у менеджера)*", button: "Отправить", callTime: 0},
		"PRIFormData": {title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+380), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0},
		"PRIFormDataPh": {title:'Заполните форму', titleworktime:'Спасибо, мы скоро ответим!', titlenight:'Спасибо, мы скоро ответим!', titlenightsize: "12px", fields: "Ваше Имя и Email(укажите Email)*, +Ваш телефон(+380), -Комментарий(необязательно), <Одноразовый ID(узнайте ID у менеджера)*", button: "Отправить", callTime: 0},





		"title": "Получить консультацию",
		"titleworktime": "Мы свяжемся с Вами через несколько минут",
		"titlenight": "Мы свяжемся с Вами в рабочее время",
		"button": "Жду ответ!",
		"callTime": "0",
		"fields": "+Введите ваш телефон(+380)*, Введите ваш Email*, Адрес вашего сайта*, -Тема (Ваш вопрос)*",
		"emptyPhone": "+380",



		"MMFileType": "3",
		"ExtFormFCStop": {RegExp: '<[^>]+(search|subscribe|password)', Flags: 'i'},
		"ExtFormBtnFC": '[type=submit], input[type=image], input[type=button], button:not([type=reset])',
		"ViewFormClick": '.callhunter_viewform_click, .link_more',

		"showButton": 	"1",
		"ButtonTransform": 3,
		"ButtonY":	"160",

//		"ButtonYMobile": 80,
//		"ButtonXMobile": 0,
//		"ButtonMobilePlace": 'RightTop',
//		"ButtonMobileCSS": "background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAACACAYAAAC1KBEFAAAEWUlEQVR4nO3ZX2hbVRwH8N+DgojgXkQQBR2CyGruOQ+CIKIP0vVBfBERFkGfCkqLbZrfASE6KQhjEhhM2IYgFDE+KD5simC7pLnn6GLIkDJSq6w0IsXVSlfHQsQ8/HzoTsm6JrlJc//k3POF72v5fbjn3nN6AlwJiksh7AEs1mIt1mIt1mINrsWaWos1tRZrai3W1FqsqbVYU2uxptZiTa3FmlqLNbUWa2ot1tRarKmNPDZZyVK92SAiourWGuVWFyhZOkncRfOwhY2faW/qzQZNlE8T6xEcaWymOncHtBU8upghLg3BVrdrbbFERPn1y+TkU8OP7fRUW3NMnfD8/kYWu/nvtifs+ZoiVpgZXmzu97wnKBFR7caf5CxMDyc2Wcl6huo4308NJ3Zy6Ux8sFwJurB+yTO03myQMz/EWK4EnVv91hO2vLFMzkVv209ksVztLGl9VGyX3NX54f4a7wV3ihH7rO5YaXYgS3gosJ323LO/nCe2mDYDO1aabfvO9vIVHgps+e+VgXyYIo/96Ncv20L7+fcusthOy7ffpxpJ7Fhplmo3r7WF9nLwjzx2v2uY1kz81Pt1jO/YZCVLmStzngcbK81S4VpnaK9bTSDY1r3Ry9VJt6Xr9e8Eis1U5/YdutOgmepc1/NvryclX7HJSrbr5djeJehl2RLtfJBGi+/1vM0MHOt14Fbw0R8+oFwt3/VpDhp6YGynE85BU95YplH3/YFBD4zttnT7zSA+RgPH9nJ94jX9no58x3Y6v/aazcZ1mih/3PeBwXcsV94vszsld3WejqrjA30/fcFOLp3peiDYL/Vmg/Lrl+nYpf5+fgwFy9XOFpSrebvFr26t0dmVnS3I7yfpC1Y3WclSrnaRqtfXbnuCB/0ROZLYqNdiTa3FmlqLNbUWa2ot1tRarKm1WFNrsabWYk2txZpaizW1FmtqIeHiK1yK5bAHCQQLAPBo4c17mEq/y6TYCnsg37E6iWL6Mabws7CHCgSrw1x8lit0wx4uEKyO46ZfZ1Kshj1kIFgAgMPz4/czhR8yiTfDHtZ37O77nBdPcIVfhT1wIFgdLtMvMoXlsAcPBKvDpBhnUvwRNiAQLAAAdycfYBJPcYX/hQ3xHbuLlimHKfFN2JhAsDqOxJe4xKWwUYFgAQCg8MJdjovTTIq/wsb5j72VRGHyYabwk7CBgWB12OLM01ziQtjQQLC7aImvMoUrscACADx0YfxeR2KGK7FtPFbnKTl9mEn8PBZYncQiPsckqlhgdZiaeYMpsRYLLAAAK0wd4jJ9gitRNx6rM1KcepJJ/DoWWB2niKNcikossDrcxbe4wvVYYAEARhbeeZC74jSXomk8VscppjiX+F0ssDqJoniZKbwSCywAAJwbv5spTHOJm+Zjb2WkmHqESfFpLLA6CZV6hinMxwKr4xTxNSbxt1hgAQCOFN6+j8n0ca7wH+OxOkcK049zKb6IBVaHu/g8V/jj/y/rYstz59Y5AAAAAElFTkSuQmCC) center center no-repeat!important; position:fixed!important;bottom:0;right:0!important;height:128px!important;width:59px!important;cursor:pointer",

		"ButtonYMobile": 0,
		"ButtonXMobile": 0,
		"ButtonMobilePlace": 'LeftBottom',
		"ButtonMobileCSS": "",

		"ButtonSensitivity":	"0",




		"consultantOn": "4",



	"consultantSettings": {
	        phone_field: 1,
	        phone_required: 1,
	        email_field: 1,
	        email_required: 1,
	        name_field: 1,
	        name_required: 0,
	        fields_forced: 1,
		Simulation: 1,
	        Simulation_forced: 1,
	        ReqContactsTalk: 1,
	        ReqContactsTalk_forced: 1,
	        ReqContactsJivo: 1,
	        ReqContactsJivo_forced: 0,
	        prepare_message: 'Ваш запрос подготовлен к отправке консультанту!<br><br>Для повышения качества нашего обслуживания, просим Вас представиться:',
	        prepare_forced: 1,
	        title: 'Задать вопрос сейчас',
	        title_off_forced: 1,
	        title_on_forced: 1,
		answer: 'Спасибо!</br>Ваш запрос принят, но линия консультанта сейчас занята.</br></br>Консультант обязательно свяжется с Вами чуть позже.',
		timeout: 120,
	        days: 14,
	        mobile: 0,
	        worktime: 0,
	        message: "Здравствуйте! Если у Вас есть вопросы, я с удовольствием на них отвечу.",
	        invite_off_forced: 1,
	        invite_on_forced: 1,
	        submit: "Получить консультацию",
	        submit_forced: 1,
	        name: 'Консультант',
	        name_forced: 0,
	        avatar: 'data:image/png;base64,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',
//	        avatar: '/uploads/avatars/6302a55d9eef792b2ba28d937f7cf794/e63bba5da3f77a8201ac9c75edf1ea56.png',
	        avatar_forced: 0,
		reviewsrem_forced: 1,
	        tpo: 0
	 },




		"consultantOnlineAct": "3",
		"consultantSmsMaxNotify":"3",
		"consultantSmsTimeout":"60",
		"consultantTimeoutNoSnd":"0",
		"consultantSendContacts": 'Ваши контакты для обратной связи',
		"consultantAlwaysShowSupport":"1",
		"consultantMMFolder":""


	}




	var formsCollection=document.forms;
	for(var r=0;r<formsCollection.length;r++) {
//		if (formsCollection[r].action.indexOf('wpcf7') > -1) {
			for (var i = 0; i < formsCollection[r].elements.length; i++) {
				if (formsCollection[r].elements[i].getAttribute("aria-required")) {
	 				formsCollection[r].elements[i].setAttribute("required", "true");
				}

			}
			if (formsCollection[r].getAttribute('novalidate')) {
				formsCollection[r].removeAttribute('novalidate');
			}
//		}
	}
