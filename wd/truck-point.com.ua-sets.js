
var IpAid='truck-point.com.ua';


var intepriceApermissions = {
	"ApprovedDomains":	['truck-point.com.ua'],
	"CallHunter":		true
};


if (typeof window.intepriceCallHunterIni === "undefined") {
	window.intepriceCallHunterIni='config.js';
}


if (typeof intepriceCallHunterInit == 'function') { intepriceCallHunterInit(); }