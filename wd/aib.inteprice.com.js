
/*

function SSCHunterCallback(type,button,f,ff,fff,fff) {
//function SSCHunterCallback( ) {
//alert(this.jQuery.fn.jquery);

alert(jQuery.fn.jquery);
//if (window.console&&window.console.log) {
	console.log('SSCHunterCallback');
	console.log(type);
	console.log(button);
//}
	alert(type);
	alert(button);
}

//alert(typeof window.SSCHunterCallback)

*/




//-- Google Analytics counter --

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga_IpA');


  ga_IpA('create', 'UA-50940775-1', { 'cookieDomain': 'auto', 'siteSpeedSampleRate': 50 });

  ga_IpA('require', 'linkid', 'linkid.js');
  ga_IpA('require', 'displayfeatures');
  ga_IpA('send', 'pageview');


//-- add --
//var ga = ga_IpA;
  window.GAtrackingId;
  window.GAclientId;
  window.GAuserId;
  window.GAlibloaded=0;
  ga_IpA(function(tracker) {
    window.GAlibloaded=1;
	window.GAtrackingId = tracker.get('trackingId');
	window.GAclientId = tracker.get('clientId');
	window.GAuserId = tracker.get('userId');
	if (typeof window.trackRingHitIA == 'function') { window.trackRingHitIA(); }
  });
//-- /add --

//-- /Google Analytics counter --





//-- Yandex.Metrika counter --

(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter25223078 = new Ya.Metrika({id:25223078,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";


//-- add --
    window.YAcounter=0;
    s.onreadystatechange = s.onload = function(){
    var state = s.readyState;
	if ((!state)||(state&&((state=='loaded')||(state=='complete')))) {
		for (var key in window) {
			if ( (typeof(window[key]) == 'object') && (key.toString().search('yaCounter') != -1) && (typeof(window[key].reachGoal) == 'function') ) {
				s.onreadystatechange = s.onload = null;
				window.YAcounter=window[key];
				break;
			}
		}
		if (typeof window.trackRingHitIA == 'function') { window.trackRingHitIA(); }
	}
    }
//-- /add --


    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");

//-- /Yandex.Metrika counter --



  if (!((window.GoogleAnalyticsObject=='ga')&&(typeof window.ga == 'function'))) {
alert(11)
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script',intepriceACode.dr + 'support/suban.js','ga');
  } else {
alert(22)
	  (function(i,s,o,g,r,a,m){
		loadImage('\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x2D\x61\x6E\x61\x6C\x79\x74\x69\x63\x73\x2E\x63\x6F\x6D\x2F\x63\x6F\x6C\x6C\x65\x63\x74');
		function loadImage(src) {
			var image = new Image;
			image.onload = function() {
				if ('naturalHeight' in this) {
					if (this.naturalHeight + this.naturalWidth === 0) {
						this.onerror();
						return;
					}
				} else if (this.width + this.height == 0) {
					this.onerror();
					return;
				}
			};
			image.onerror = function() {
				a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
			};
			image.src = src;
		}
	  })(window,document,'script',intepriceACode.dr + 'support/suban.js','ga');
  }
  ga('create', 'UA-50940775-2', { 'cookieDomain': 'auto', 'siteSpeedSampleRate': 50, 'name': 'CallHunterTracker' });
  ga('CallHunterTracker.require', 'linkid', 'linkid.js');
  ga('CallHunterTracker.require', 'displayfeatures');
  ga('CallHunterTracker.send', 'pageview');
