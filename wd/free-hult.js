function checkloadIPactive(w) {
	w.intepriceCallHunterActive = false;
	if (w.jqIPAcode) {
		w.jqIPAcode("#clhtr_mob_banner-startphone").hide();
		w.jqIPAcode("#clhtr_phone_div").hide();
		if (!w.intepriceCHOKS) {
			var consultantOn = ((w.IPclhrDataUpdate)&&Number(IPclhrDataUpdate["consultantOn"]))||((w.IPclhrData)&&Number(IPclhrData["consultantOn"]));
			if (consultantOn) {
				w.intepriceCHOKS=1;
				var style = "{ display: none!important; visibility: hidden!important; }";
				if (consultantOn == 1) {
					w.jqIPAcode("<style>").prop("type", "text/css").html("div#supportTrigger, div#supportTriggerMobile " + style).appendTo("head");
				} else if (consultantOn == 2) {
					w.jqIPAcode("<style>").prop("type", "text/css").html("div#sh_button " + style).appendTo("head");
				} else if ((consultantOn == 3)||(consultantOn == 4)) {
					w.jqIPAcode("<style>").prop("type", "text/css").html("div#jivo_chat_widget, div#jivo-iframe-container " + style).appendTo("head");
				}
			}
		}
	}
	setTimeout(function() { checkloadIPactive(w); }, 2000);
}
setTimeout(function() { checkloadIPactive(window); }, 700);

//function checkloadIPactive(a){a.intepriceCallHunterActive=!1;if(a.jqIPAcode&&(a.jqIPAcode("#clhtr_mob_banner-startphone").hide(),a.jqIPAcode("#clhtr_phone_div").hide(),!a.intepriceCHOKS)){var b=a.IPclhrDataUpdate&&Number(IPclhrDataUpdate.consultantOn)||a.IPclhrData&&Number(IPclhrData.consultantOn);b&&(a.intepriceCHOKS=1,1==b?a.jqIPAcode("<style>").prop("type","text/css").html("div#supportTrigger, div#supportTriggerMobile { display: none!important; visibility: hidden!important; }").appendTo("head"):2==b?a.jqIPAcode("<style>").prop("type","text/css").html("div#sh_button { display: none!important; visibility: hidden!important; }").appendTo("head"):3!=b&&4!=b||a.jqIPAcode("<style>").prop("type","text/css").html("div#jivo_chat_widget, div#jivo-iframe-container { display: none!important; visibility: hidden!important; }").appendTo("head"))}setTimeout(function(){checkloadIPactive(a)},2E3)}setTimeout(function(){checkloadIPactive(window)},700);
//eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 8(a){a.u=!1;v(a.0&&(a.0("#w-x").n(),a.0("#y").n(),!a.o)){z b=a.p&&q(p.r)||a.s&&q(s.r);b&&(a.o=1,1==b?a.0("<9>").c("d","e/f").g("6#A, 6#B { h: i!5; j: k!5; }").l("m"):2==b?a.0("<9>").c("d","e/f").g("6#C { h: i!5; j: k!5; }").l("m"):3!=b&&4!=b||a.0("<9>").c("d","e/f").g("6#D, 6#E-F-G { h: i!5; j: k!5; }").l("m"))}t(7(){8(a)},H)}t(7(){8(I)},J);',46,46,'jqIPAcode|||||important|div|function|checkloadIPactive|style|||prop|type|text|css|html|display|none|visibility|hidden|appendTo|head|hide|intepriceCHOKS|IPclhrDataUpdate|Number|consultantOn|IPclhrData|setTimeout|intepriceCallHunterActive|if|clhtr_mob_banner|startphone|clhtr_phone_div|var|supportTrigger|supportTriggerMobile|sh_button|jivo_chat_widget|jivo|iframe|container|2E3|window|700'.split('|'),0,{}))
//замена ' на \' и \\ на \\\\
//'eval(function(p,a,c,k,e,r){e=function(c){return(c<a?\'\':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!\'\'.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return\'\\\\w+\'};c=1};while(c--)if(k[c])p=p.replace(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);return p}(\'7 8(a){a.u=!1;v(a.0&&(a.0("#w-x").n(),a.0("#y").n(),!a.o)){z b=a.p&&q(p.r)||a.s&&q(s.r);b&&(a.o=1,1==b?a.0("<9>").c("d","e/f").g("6#A, 6#B { h: i!5; j: k!5; }").l("m"):2==b?a.0("<9>").c("d","e/f").g("6#C { h: i!5; j: k!5; }").l("m"):3!=b&&4!=b||a.0("<9>").c("d","e/f").g("6#D, 6#E-F-G { h: i!5; j: k!5; }").l("m"))}t(7(){8(a)},H)}t(7(){8(I)},J);\',46,46,\'jqIPAcode|||||important|div|function|checkloadIPactive|style|||prop|type|text|css|html|display|none|visibility|hidden|appendTo|head|hide|intepriceCHOKS|IPclhrDataUpdate|Number|consultantOn|IPclhrData|setTimeout|intepriceCallHunterActive|if|clhtr_mob_banner|startphone|clhtr_phone_div|var|supportTrigger|supportTriggerMobile|sh_button|jivo_chat_widget|jivo|iframe|container|2E3|window|700\'.split(\'|\'),0,{}))',
