
var IpAid='tidream.com';


var intepriceApermissions = {
	"ApprovedDomains":	['tidream.com'],
	"CallHunter":		true
};


if (typeof window.intepriceCallHunterIni === "undefined") {
	window.intepriceCallHunterIni='config.js';
}


if (typeof intepriceCallHunterInit == 'function') { intepriceCallHunterInit(); }