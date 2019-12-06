var SSCHunterGa=function(b,c){try{var a=window[window.GoogleAnalyticsObject];a(function(){a.getAll().forEach(function(a){a.send("event",b,c)})})}catch(d){}};
var pagecur=window.location.href.toString().split(window.location.host)[1];
if (pagecur.indexOf('wrk=12') >= 0) {
	if(typeof SSCHunterGa=="function")SSCHunterGa("Client Active","ss_send_active");
}
