
var IpAid='defas.com.ua';


var intepriceApermissions = {
	"ApprovedDomains":	['defas.com.ua','antivzlom-okna.com.ua'],
	"CallHunter":		true
};


if (typeof window.intepriceCallHunterIni === "undefined") {
	window.intepriceCallHunterIni='config.js';
}


if (typeof intepriceCallHunterInit == 'function') { intepriceCallHunterInit(); }