var SSCHunterGa=function(b,c){try{var a=window[window.GoogleAnalyticsObject];a(function(){a.getAll().forEach(function(a){a.send("event",b,c)})})}catch(d){}};

var pagecur=window.location.href.toString().split(window.location.host)[1];
if (pagecur.indexOf('wrk=12') >= 0) {
//передаем в аналитикс Заинтересованность 1с
	try {
		if(typeof SSCHunterGa=="function")SSCHunterGa("Client Active","ss_send_active");
		console.log('SSCHunterGa Ok';
	} catch (e) {
		console.log('SSCHunterGa Error, name: ' + e.name + ", message: " + e.message);
	}
//передаем в ads Заинтересованность 2с
	try {
		var AdwConvTime = {
		google_conversion_id: 697356077,
		google_conversion_language: "en",
		google_conversion_format: "3",
		google_conversion_color: "ffffff",
		google_conversion_label: "_mXbCKzbuLYBEK2ew8wC",
		google_remarketing_only: false
			};
		SSCHunterAdwordstrack(AdwConvTime);
		console.log('SSCHunterAdwordstrack Ok';
	} catch (e) {
		console.log('SSCHunterAdwordstrack Error, name: ' + e.name + ", message: " + e.message);
	}

}
