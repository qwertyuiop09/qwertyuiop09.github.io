
var IpAid='market.kharkov.ua';


var intepriceApermissions = {
	"ApprovedDomains":	['market.kharkov.ua'],
	"CallHunter":		true
};


if (typeof window.intepriceCallHunterIni === "undefined") {
	window.intepriceCallHunterIni='config.js';
}


if (typeof intepriceCallHunterInit == 'function') { intepriceCallHunterInit(); }