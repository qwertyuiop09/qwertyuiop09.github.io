
//без предоплаты, логин менеджера
var intepriceIPL = 'karapuzya.inteprice.com';
var intepriceCRT = '10.12.2015';





	(function() {
    	var s = document.createElement('script');
		s.type ='text/javascript';
		s.id = 'supportScript';
		s.charset = 'utf-8';
		s.async = true;
//		s.src = '//online.inteprice.com/support/support.js?h=fae615d1424f3b3e3ae425f52c8adcc5';
	        s.src = '//me-talk.ru/support/support.js?h=fae615d1424f3b3e3ae425f52c8adcc5';

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



	var IPclhrDataUpdate = {


	"workStart": "09",
	"workEnd": "19",
	"workDays": "Mon, Tue, Wed, Thu, Fri, Sat",
"titleworktimesize": "13px",


		"MMFileType": "2",
		"ExtFormFCStop": {RegExp: '<[^>]+(search|subscribe|password)', Flags: 'i'},
//в нестандартных случаях вроде может конфликтовать со стандартной отправкой формы
//		"ExtFormBtnFC": IPclhrData.ExtFormBtnFC + ', [type=submit], input[type=image], input[type=button], button:not([type=reset])',
		"ExtFormBtnFC": 'input#submit_order_button',

		"ButtonSensitivity":	"0",


		"consultantOn": "1",


	"consultantSettings": {
	        phone_field: 1,
	        phone_required: 1,
	        email_field: 0,
	        email_required: 0,
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
		timeout: 15,
	        days: 14,
	        mobile: 0,
	        worktime: 0,
	        message: "Здравствуйте! Если у Вас есть вопросы, я с удовольствием на них отвечу.",
	        invite_off_forced: 1,
	        invite_on_forced: 1,
	        submit: "Получить консультацию",
	        submit_forced: 1,
//	        name: 'Консультант',
	        name: 'Екатерина',
	        name_forced: 0,
//	        avatar: 'data:image/png;base64,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',
	        avatar: 'data:image/png;base64,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',
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
