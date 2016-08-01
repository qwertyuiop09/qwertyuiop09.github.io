
	if (typeof window.IPCHFEmail === "undefined") {
		window.IPCHFEmail='info@sale-storm.com';
	}


	var intepriceIPL = 'sale-storm.inteprice.com';
	var intepriceCRT = '07.07.2016';

	var IPclhrDataUpdate = {
		"MMFileType": "3",
		"ExtFormFCStop": {RegExp: '<[^>]+(search|subscribe|password)', Flags: 'i'},
//		"ExtFormBtnFC": '[type=submit], input[type=image], input[type=button], button:not([type=reset])',
		"ViewFormClick": '.callhunter_viewform_click, .link_more',

		"showButton": 	"0",
		"ButtonY":	"160",
		"ButtonYMobile": 80,
		"ButtonXMobile": 0,
		"ButtonMobilePlace": 'RightTop',
		"ButtonMobileCSS": "background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAACACAYAAAC1KBEFAAAEWUlEQVR4nO3ZX2hbVRwH8N+DgojgXkQQBR2CyGruOQ+CIKIP0vVBfBERFkGfCkqLbZrfASE6KQhjEhhM2IYgFDE+KD5simC7pLnn6GLIkDJSq6w0IsXVSlfHQsQ8/HzoTsm6JrlJc//k3POF72v5fbjn3nN6AlwJiksh7AEs1mIt1mIt1mINrsWaWos1tRZrai3W1FqsqbVYU2uxptZiTa3FmlqLNbUWa2ot1tRarKmNPDZZyVK92SAiourWGuVWFyhZOkncRfOwhY2faW/qzQZNlE8T6xEcaWymOncHtBU8upghLg3BVrdrbbFERPn1y+TkU8OP7fRUW3NMnfD8/kYWu/nvtifs+ZoiVpgZXmzu97wnKBFR7caf5CxMDyc2Wcl6huo4308NJ3Zy6Ux8sFwJurB+yTO03myQMz/EWK4EnVv91hO2vLFMzkVv209ksVztLGl9VGyX3NX54f4a7wV3ihH7rO5YaXYgS3gosJ323LO/nCe2mDYDO1aabfvO9vIVHgps+e+VgXyYIo/96Ncv20L7+fcusthOy7ffpxpJ7Fhplmo3r7WF9nLwjzx2v2uY1kz81Pt1jO/YZCVLmStzngcbK81S4VpnaK9bTSDY1r3Ry9VJt6Xr9e8Eis1U5/YdutOgmepc1/NvryclX7HJSrbr5djeJehl2RLtfJBGi+/1vM0MHOt14Fbw0R8+oFwt3/VpDhp6YGynE85BU95YplH3/YFBD4zttnT7zSA+RgPH9nJ94jX9no58x3Y6v/aazcZ1mih/3PeBwXcsV94vszsld3WejqrjA30/fcFOLp3peiDYL/Vmg/Lrl+nYpf5+fgwFy9XOFpSrebvFr26t0dmVnS3I7yfpC1Y3WclSrnaRqtfXbnuCB/0ROZLYqNdiTa3FmlqLNbUWa2ot1tRarKm1WFNrsabWYk2txZpaizW1FmtqIeHiK1yK5bAHCQQLAPBo4c17mEq/y6TYCnsg37E6iWL6Mabws7CHCgSrw1x8lit0wx4uEKyO46ZfZ1Kshj1kIFgAgMPz4/czhR8yiTfDHtZ37O77nBdPcIVfhT1wIFgdLtMvMoXlsAcPBKvDpBhnUvwRNiAQLAAAdycfYBJPcYX/hQ3xHbuLlimHKfFN2JhAsDqOxJe4xKWwUYFgAQCg8MJdjovTTIq/wsb5j72VRGHyYabwk7CBgWB12OLM01ziQtjQQLC7aImvMoUrscACADx0YfxeR2KGK7FtPFbnKTl9mEn8PBZYncQiPsckqlhgdZiaeYMpsRYLLAAAK0wd4jJ9gitRNx6rM1KcepJJ/DoWWB2niKNcikossDrcxbe4wvVYYAEARhbeeZC74jSXomk8VscppjiX+F0ssDqJoniZKbwSCywAAJwbv5spTHOJm+Zjb2WkmHqESfFpLLA6CZV6hinMxwKr4xTxNSbxt1hgAQCOFN6+j8n0ca7wH+OxOkcK049zKb6IBVaHu/g8V/jj/y/rYstz59Y5AAAAAElFTkSuQmCC) center center no-repeat!important; position:fixed!important;bottom:0;right:0!important;height:128px!important;width:59px!important;cursor:pointer",

		"ButtonSensitivity":	"0"
	}




	var formsCollection=document.forms;
	for(var r=0;r<formsCollection.length;r++) {
//		if (formsCollection[r].action.indexOf('wpcf7') > -1) {
			for (var i = 0; i < formsCollection[r].elements.length; i++) {
				if (formsCollection[r].elements[i].getAttribute("aria-required")) {
//	 				formsCollection[r].elements[i].setAttribute("required", "true");
				}

			}
			if (formsCollection[r].getAttribute('novalidate')) {
//				formsCollection[r].removeAttribute('novalidate');
			}
//		}
	}
