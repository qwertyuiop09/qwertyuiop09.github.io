var SSCHunterGa=function(b,c){try{var a=window[window.GoogleAnalyticsObject];a(function(){a.getAll().forEach(function(a){a.send("event",b,c)})})}catch(d){}};

var pagecur=window.location.href.toString().split(window.location.host)[1];
if (pagecur.indexOf('wrk=12') >= 0) {

	function docready(f){/in/.test(document.readyState)?setTimeout(docready,9,f):f()}

//без docready не всегда передаются конверсии в аналитикс, и не работает SSCHunterAdwordstrack (так как не успевает до того подгрузится SSCHunterAdwordstrack())
	docready(function(){

//передаем в аналитикс Заинтересованность 1с
		try {
			if(typeof SSCHunterGa=="function")SSCHunterGa("Client Active","ss_send_active");
//			console.log('SSCHunterGa Ok');
		} catch (e) {
			console.log('SSCHunterGa Error, name: ' + e.name + ", message: " + e.message);
		}
//передаем в ads Заинтересованность 2с
		try {

			if (Math.random() < 0.5) {

				setTimeout(function() {

					var AdwConvTime = {
					google_conversion_id: 697356077,
					google_conversion_language: "en",
					google_conversion_format: "3",
					google_conversion_color: "ffffff",
					google_conversion_label: "_mXbCKzbuLYBEK2ew8wC",
					google_remarketing_only: false
						};
//					console.log(typeof(window['google_trackConversion']));
					SSCHunterAdwordstrack(AdwConvTime);
//					console.log('SSCHunterAdwordstrack Ok');


				}, 1000);


			}
		} catch (e) {
			console.log('SSCHunterAdwordstrack Error, name: ' + e.name + ", message: " + e.message);
		}
	});     


}
