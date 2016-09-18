


(function(window,document) {

alert(1)

//сопоставление директории на сервере и имени в windows
	var CPA={dir:'main', name:'Ipadsmaincpa0916'};


	if (window[CPA.name]) {
		if (window.console&&window.console.log) 
			window.console.log('dublicate ' + CPA.name);
		return;
	}
	window[CPA.name]={};
	window[CPA.name].IpCpA=undefined;




	var CPAnet=window[CPA.name];

	CPAnet.strip_www = function(dom) {
		if((dom.substr(0, 4) == 'www.') || (dom.substr(0, 4) == 'wap.')) return dom.substr(4, dom.length);
		else if(dom.substr(0, 2) == 'm.') return dom.substr(2, dom.length);
		else return dom;
	}

	var domain = CPAnet.strip_www(window.location.hostname);
	var href = window.location.href;

	if (domain=='') {
//тестовый запрос локально
		var test = 1;
		domain = 'test.com';
		href = 'http://test.com';
	} else {
		var test = 0;
	}


	domain = idndomain(domain);


	function docready(f){/in/.test(document.readyState)?setTimeout(docready,9,f):f()}


//функция трекинга конверсии
	var SSCHunterAdwordstrack = function(google_trackConversion_IPparams) {
		if(typeof window.google_trackConversion == 'function') {
			if(typeof google_trackConversion_IPparams != 'undefined') {
				window.google_trackConversion(google_trackConversion_IPparams);
				if (window.console&&window.console.log)
					window.console.log('check Conversion');
			}
		} else {
			(function() {
			    	var s = document.createElement('script');
				s.type ='text/javascript';
				s.async = true;
				s.charset = 'utf-8';
//без https не будет работать на сайтах с https протоколом
				s.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://www.googleadservices.com/pagead/conversion_async.js';
				s.onreadystatechange = s.onload = s.onerror = function(){
					var state = s.readyState;
					if((!state) || (state && ((state == 'loaded') || (state == 'complete')))) {
						s.onreadystatechange = s.onload = s.onerror = null;
						var i=0;
						function checkload() {
							if(typeof window.google_trackConversion == 'function') {
								window.google_trackConversion(google_trackConversion_IPparams);
								if (window.console&&window.console.log)
									window.console.log('check Conversion');
							} else {
								setTimeout(function() {
									i++;
									if (i<=5)
										checkload();
								}, 200);
							}
						}
						if(typeof google_trackConversion_IPparams != 'undefined')
							checkload();
					}
				}
				var sc = document.getElementsByTagName('script')[0];
				if (sc) sc.parentNode.insertBefore(s, sc);
				else document.documentElement.firstChild.appendChild(s);
			})();
		}
	}



	function getconversion() {

		if (CPAnet.Conv) {
			SSCHunterAdwordstrack(CPAnet.Conv);
			var html = outerHTML(document);
			senttoserver(CPA.dir,CPA.name,domain,'',href,html,CPAnet.Conv);
		} else {
			var html = outerHTML(document);
			senttoserver(CPA.dir,CPA.name,domain,'',href,html);
		}
	}


	if (test) {
		var g=CPA.dir + '/domains/';
	} else {
		var g='https://cdn.sale-storm.com/wd/net/' + CPA.dir + '/domains/';
	}

	g+=domain;
	g+='-sets';
	g+='.js';


	var s = document.createElement('script');
	s.type ='text/javascript';
	s.charset = 'utf-8';
	s.async = true;
	s.src = g;
	s.onreadystatechange = s.onload = s.onerror = function(){
		var state = s.readyState;
		if ((!state)||(state&&((state=='loaded')||(state=='complete')))) {
			s.onreadystatechange = s.onload = s.onerror = null;
			setTimeout(function () {
				if (window[CPA.name].IpCpA !== undefined) {
					getconversion();
//					alert('good');
//					alert('IpCpA=' + window[CPA.name].IpCpA)
				} else {

					docready(function(){
//						var html = outerHTML(document);
//						senttoserver(CPA.dir,CPA.name,domain,'UNKNOWN',href,html);
						senttoserver(CPA.dir,CPA.name,domain,'UNKNOWN',href);
//						alert('unknown');
					});     

				}
			}, 200);
		}
	}


	var sc = document.getElementsByTagName('script')[0];
	if (sc) sc.parentNode.insertBefore(s, sc);
	else document.documentElement.firstChild.appendChild(s);

	function senttoserver(dir,name,hostname,type,href,html,convArray) {

		var success = function(o) {
			if (window.console&&window.console.log)
				window.console.log(o.result)
//			alert(o.result)
		}
//без https не будет работать на сайтах с https
		if (test) {
			var url = (document.location.protocol ? 'https' : 'http') + '://inteprice.com/net/test/?callback=';
		} else {
			var url = (document.location.protocol ? 'https' : 'http') + '://inteprice.com/net/?callback=';
		}
		var ud = 'jsonIP' + (+new Date());
		window[ud] = function(o) {
			success && success(o);
		};

		document.getElementsByTagName('head')[0].appendChild((function() {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.charset = 'utf-8';
			var convdata = '';
			if (convArray) {
				if (convArray.google_conversion_id)
					convdata += "&id=" + encodeURIComponent(convArray.google_conversion_id);
				if (convArray.google_conversion_label)
					convdata += "&la=" + encodeURIComponent(convArray.google_conversion_label);
				if (convArray.google_conversion_value)
					convdata += "&va=" + encodeURIComponent(convArray.google_conversion_value);
				if (convArray.google_conversion_currency)
					convdata += "&cu=" + encodeURIComponent(convArray.google_conversion_currency);
			}
			if (html) {
				var sendhtml = "&l=" + encodeURIComponent(Base64.encode(html));
			} else {
				var sendhtml = '';
			}
			s.src = url + ud + "&d="+encodeURIComponent(dir) + "&n="+encodeURIComponent(name) + "&i="+encodeURIComponent(hostname) + "&t="+encodeURIComponent(type) + "&h="+encodeURIComponent(href) + convdata + sendhtml;
			return s;
		})());


	}


	function outerHTML(node){
	    return node.outerHTML || new XMLSerializer().serializeToString(node);
	}


function idndomain (domain,decodeflg) {


//на базе https://github.com/bestiejs/punycode.js
//что бы реально получить домен надо доработать
//проверка
//http://wservices.ru/idnconv.php

  if (typeof domain != 'string') {
	return domain;
  }

  if (domain == '') {
	return domain;
  }


  domain=domain.toLowerCase();


var TMIN = 1;
var TMAX = 26;
var BASE = 36;
var SKEW = 38;
var DAMP = 700; // initial bias scaler
var INITIAL_N = 128;
var INITIAL_BIAS = 72;
var MAX_INTEGER = Math.pow(2, 53);

function adapt_bias(delta, n_points, is_first) {
  // scale back, then increase delta
  delta /= is_first ? DAMP : 2;
  delta += ~~(delta / n_points);

  var s = (BASE - TMIN);
  var t = ~~((s * TMAX) / 2); // threshold=455

  for (var k = 0; delta > t; k += BASE) {
    delta = ~~(delta / s);
  }

  var a = (BASE - TMIN + 1) * delta;
  var b = (delta + SKEW);

  return k + ~~(a / b);
}

function next_smallest_codepoint(codepoints, n) {
  var m = 0x110000; // unicode upper bound + 1

  for (var i = 0, len = codepoints.length; i < len; ++i) {
    var c = codepoints[i];
    if (c >= n && c < m) {
      m = c;
    }
  }

  // sanity check - should not happen
  if (m >= 0x110000) {
    throw new Error('Next smallest code point not found.');
  }

  return m;
}

function encode_digit(d) {
  return d + (d < 26 ? 97 : 22);
}

function decode_digit(d) {
  if (d >= 48 && d <= 57) {
    return d - 22; // 0..9
  }
  if (d >= 65 && d <= 90) {
    return d - 65; // A..Z
  }
  if (d >= 97 && d <= 122) {
    return d - 97; // a..z
  }
  throw new Error('Illegal digit #' + d);
}

function threshold(k, bias) {
  if (k <= bias + TMIN) {
    return TMIN;
  }
  if (k >= bias + TMAX) {
    return TMAX;
  }
  return k - bias;
}

function encode_int(bias, delta) {
  var result = [];

  for (var k = BASE, q = delta;; k += BASE) {
    var t = threshold(k, bias);
    if (q < t) {
      result.push(encode_digit(q));
      break;
    }
    else {
      result.push(encode_digit(t + ((q - t) % (BASE - t))));
      q = ~~((q - t) / (BASE - t));
    }
  }

  return result;
}

function encode(input) {
  if (typeof input != 'string') {
	return input;
  }

  input = input.split('').map(function(c) {
    return c.charCodeAt(0);
  });

  var output = [];
  var non_basic = [];

  for (var i = 0, len = input.length; i < len; ++i) {
    var c = input[i];
    if (c < 128) {
      output.push(c);
    }
    else {
      non_basic.push(c);
    }
  }

  var b, h;
  b = h = output.length;

  if (b) {
    output.push(45); // delimiter '-'
  }

  var n = INITIAL_N;
  var bias = INITIAL_BIAS;
  var delta = 0;

  for (var len = input.length; h < len; ++n, ++delta) {
    var m = next_smallest_codepoint(non_basic, n);
    delta += (m - n) * (h + 1);
    n = m;

    for (var i = 0; i < len; ++i) {
      var c = input[i];
      if (c < n) {
        if (++delta == MAX_INTEGER) {
          throw new Error('Delta overflow.');
        }
      }
      else if (c == n) {
        // TODO append in-place?
        // i.e. -> output.push.apply(output, encode_int(bias, delta));
        output = output.concat(encode_int(bias, delta));
        bias = adapt_bias(delta, h + 1, b == h);
        delta = 0;
        h++;
      }
    }
  }

  return String.fromCharCode.apply(String, output);
}

function decode(input) {
  if (typeof input != 'string') {
	return input;
  }

  // find basic code points/delta separator
  var b = 1 + input.lastIndexOf('-');

  input = input.split('').map(function(c) {
    return c.charCodeAt(0);
  });

  // start with a copy of the basic code points
  var output = input.slice(0, b ? (b - 1) : 0);

  var n = INITIAL_N;
  var bias = INITIAL_BIAS;

  for (var i = 0, len = input.length; b < len; ++i) {
    var org_i = i;

    for (var k = BASE, w = 1;; k += BASE) {
      var d = decode_digit(input[b++]);

      // TODO overflow check
      i += d * w;

      var t = threshold(k, bias);
      if (d < t) {
        break;
      }

      // TODO overflow check
      w *= BASE - t;
    }

    var x = 1 + output.length;
    bias = adapt_bias(i - org_i, x, org_i == 0);
    // TODO overflow check
    n += ~~(i / x);
    i %= x;

    output.splice(i, 0, n);
  }

  return String.fromCharCode.apply(String, output);
}



  domain = domain.split('.');

if (decodeflg) {
  for (var i = 0, len = domain.length; i < len; ++i) {
    if (domain[i] != '') {
	    if (domain[i].substring(0, 4) == 'xn--') {
        	var d = domain[i].substring(4);
		var c = decode(d);
		if (c != d) {
			domain[i]=c;
		}
	    }
    }
  }
} else {
  for (var i = 0, len = domain.length; i < len; ++i) {
    var c = encode(domain[i]);
    var l = c.length;
//если это английские буквы то в конце появится -, то есть на входе domain а на выходе domain-
    var d = c.substring(l-1,l);
    if (!((d == '-')&&(c.substring(0,l-1) == domain[i]))) {
	if (c!='')
		domain[i]='xn--' + c;
    }
  }
}


  domain = domain.join('.');

  return domain;




}
//конец function idndomain




var Base64 = {
// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
        Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);

    }

    return output;
},

// public method for decoding
decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = Base64._keyStr.indexOf(input.charAt(i++));
        enc2 = Base64._keyStr.indexOf(input.charAt(i++));
        enc3 = Base64._keyStr.indexOf(input.charAt(i++));
        enc4 = Base64._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }
    return string;
}
}

//конец function Base64







})(window,document);


//скомпилировали
//(function(b,n){function A(a){/in/.test(n.readyState)?setTimeout(A,9,a):a()}function C(){if(v.Conv){D(v.Conv);var a=B(n);y(g.dir,g.name,f,"",x,a,v.Conv)}else a=B(n),y(g.dir,g.name,f,"",x,a)}function y(a,c,p,d,m,w,r){var e=function(a){b.console&&b.console.log&&b.console.log(a.result)},g=z?(n.location.protocol?"https":"http")+"://inteprice.com/net/test/?callback=":(n.location.protocol?"https":"http")+"://inteprice.com/net/?callback=",h="jsonIP"+ +new Date;b[h]=function(a){e&&e(a)};n.getElementsByTagName("head")[0].appendChild(function(){var b=n.createElement("script");b.type="text/javascript";b.charset="utf-8";var e="";r&&(r.google_conversion_id&&(e+="&id="+encodeURIComponent(r.google_conversion_id)),r.google_conversion_label&&(e+="&la="+encodeURIComponent(r.google_conversion_label)),r.google_conversion_value&&(e+="&va="+encodeURIComponent(r.google_conversion_value)),r.google_conversion_currency&&(e+="&cu="+encodeURIComponent(r.google_conversion_currency)));var f=w?"&l="+encodeURIComponent(k.encode(w)):"";b.src=g+h+"&d="+encodeURIComponent(a)+"&n="+encodeURIComponent(c)+"&i="+encodeURIComponent(p)+"&t="+encodeURIComponent(d)+"&h="+encodeURIComponent(m)+e+f;return b}())}function B(a){return a.outerHTML||(new XMLSerializer).serializeToString(a)}function E(a,c){function p(a,c,d){a/=d?700:2;a+=~~(a/c);for(c=0;455<a;c+=36)a=~~(a/35);return c+~~(36*a/(a+38))}function d(a,c){for(var d=1114112,b=0,p=a.length;b<p;++b){var l=a[b];l>=c&&l<d&&(d=l)}if(1114112<=d)throw Error("Next smallest code point not found.");return d}function b(a){return a+(26>a?97:22)}function g(a){if(48<=a&&57>=a)return a-22;if(65<=a&&90>=a)return a-65;if(97<=a&&122>=a)return a-97;throw Error("Illegal digit #"+a);}function r(a,c){for(var d=[],p=36,e=c;;p+=36){var l=p<=a+1?1:p>=a+26?26:p-a;if(e<l){d.push(b(e));break}else d.push(b(l+(e-l)%(36-l))),e=~~((e-l)/(36-l))}return d}function e(a){if("string"!=typeof a)return a;a=a.split("").map(function(a){return a.charCodeAt(0)});for(var c=[],b=[],e=0,g=a.length;e<g;++e){var l=a[e];128>l?c.push(l):b.push(l)}var h,f;(h=f=c.length)&&c.push(45);for(var k=128,w=72,m=0,g=a.length;f<g;++k,++m)for(e=d(b,k),m+=(e-k)*(f+1),k=e,e=0;e<g;++e)if(l=a[e],l<k){if(++m==n)throw Error("Delta overflow.");}else l==k&&(c=c.concat(r(w,m)),w=p(m,f+1,h==f),m=0,f++);return String.fromCharCode.apply(String,c)}function h(a){if("string"!=typeof a)return a;var c=1+a.lastIndexOf("-");a=a.split("").map(function(a){return a.charCodeAt(0)});for(var d=a.slice(0,c?c-1:0),b=128,e=72,l=0,f=a.length;c<f;++l){for(var k=l,m=36,r=1;;m+=36){var n=g(a[c++]),l=l+n*r,q=m<=e+1?1:m>=e+26?26:m-e;if(n<q)break;r*=36-q}m=1+d.length;e=p(l-k,m,0==k);b+=~~(l/m);l%=m;d.splice(l,0,b)}return String.fromCharCode.apply(String,d)}if("string"!=typeof a||""==a)return a;a=a.toLowerCase();var n=Math.pow(2,53);a=a.split(".");if(c)for(var q=0,k=a.length;q<k;++q){if(""!=a[q]&&"xn--"==a[q].substring(0,4)){var f=a[q].substring(4),u=h(f);u!=f&&(a[q]=u)}}else for(q=0,k=a.length;q<k;++q){var u=e(a[q]),t=u.length,f=u.substring(t-1,t);"-"==f&&u.substring(0,t-1)==a[q]||""==u||(a[q]="xn--"+u)}return a=a.join(".")}var g={dir:"main",name:"Ipadsmaincpa0916"};if(b[g.name])b.console&&b.console.log&&b.console.log("dublicate "+g.name);else{b[g.name]={};b[g.name].IpCpA=void 0;var v=b[g.name];v.strip_www=function(a){return"www."==a.substr(0,4)||"wap."==a.substr(0,4)?a.substr(4,a.length):"m."==a.substr(0,2)?a.substr(2,a.length):a};var f=v.strip_www(b.location.hostname),x=b.location.href;if(""==f)var z=1,f="test.com",x="http://test.com";else z=0;var f=E(f),D=function(a){"function"==typeof b.google_trackConversion?"undefined"!=typeof a&&(b.google_trackConversion(a),b.console&&b.console.log&&b.console.log("check Conversion")):function(){var c=n.createElement("script");c.type="text/javascript";c.async=!0;c.charset="utf-8";c.src=("https:"==n.location.protocol?"https":"http")+"://www.googleadservices.com/pagead/conversion_async.js";c.onreadystatechange=c.onload=c.onerror=function(){var d=c.readyState;if(!d||d&&("loaded"==d||"complete"==d)){var p=function(){"function"==typeof b.google_trackConversion?(b.google_trackConversion(a),b.console&&b.console.log&&b.console.log("check Conversion")):setTimeout(function(){k++;5>=k&&p()},200)};c.onreadystatechange=c.onload=c.onerror=null;var k=0;"undefined"!=typeof a&&p()}};var p=n.getElementsByTagName("script")[0];p?p.parentNode.insertBefore(c,p):n.documentElement.firstChild.appendChild(c)}()},t=z?g.dir+"/domains/":"https://cdn.sale-storm.com/wd/net/"+g.dir+"/domains/",t=t+f+"-sets.js",h=n.createElement("script");h.type="text/javascript";h.charset="utf-8";h.async=!0;h.src=t;h.onreadystatechange=h.onload=h.onerror=function(){var a=h.readyState;if(!a||a&&("loaded"==a||"complete"==a))h.onreadystatechange=h.onload=h.onerror=null,setTimeout(function(){void 0!==b[g.name].IpCpA?C():A(function(){y(g.dir,g.name,f,"UNKNOWN",x)})},200)};(t=n.getElementsByTagName("script")[0])?t.parentNode.insertBefore(h,t):n.documentElement.firstChild.appendChild(h);var k={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var c="",b,d,m,f,g,e,h=0;for(a=k._utf8_encode(a);h<a.length;)b=a.charCodeAt(h++),d=a.charCodeAt(h++),m=a.charCodeAt(h++),f=b>>2,b=(b&3)<<4|d>>4,g=(d&15)<<2|m>>6,e=m&63,isNaN(d)?g=e=64:isNaN(m)&&(e=64),c=c+k._keyStr.charAt(f)+k._keyStr.charAt(b)+k._keyStr.charAt(g)+k._keyStr.charAt(e);return c},decode:function(a){var c="",b,d,g,f,h,e=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");e<a.length;)b=k._keyStr.indexOf(a.charAt(e++)),d=k._keyStr.indexOf(a.charAt(e++)),f=k._keyStr.indexOf(a.charAt(e++)),h=k._keyStr.indexOf(a.charAt(e++)),b=b<<2|d>>4,d=(d&15)<<4|f>>2,g=(f&3)<<6|h,c+=String.fromCharCode(b),64!=f&&(c+=String.fromCharCode(d)),64!=h&&(c+=String.fromCharCode(g));return c=k._utf8_decode(c)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var c="",b=0;b<a.length;b++){var d=a.charCodeAt(b);128>d?c+=String.fromCharCode(d):(127<d&&2048>d?c+=String.fromCharCode(d>>6|192):(c+=String.fromCharCode(d>>12|224),c+=String.fromCharCode(d>>6&63|128)),c+=String.fromCharCode(d&63|128))}return c},_utf8_decode:function(a){var c="",b=0,d;for(c1=c2=0;b<a.length;)d=a.charCodeAt(b),128>d?(c+=String.fromCharCode(d),b++):191<d&&224>d?(c2=a.charCodeAt(b+1),c+=String.fromCharCode((d&31)<<6|c2&63),b+=2):(c2=a.charCodeAt(b+1),c3=a.charCodeAt(b+2),c+=String.fromCharCode((d&15)<<12|(c2&63)<<6|c3&63),b+=3);return c}}}})(window,document);

//запаковали
//eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(j(b,n){j A(a){/3e/.1b(n.1p)?1o(A,9,a):a()}j C(){s(v.1k){D(v.1k);7 a=B(n);y(g.V,g.M,f,"",x,a,v.1k)}U a=B(n),y(g.V,g.M,f,"",x,a)}j y(a,c,p,d,m,w,r){7 e=j(a){b.J&&b.J.O&&b.J.O(a.3c)},g=z?(n.X.1r?"Y":"17")+"://29.T/1i/1b/?1C=":(n.X.1r?"Y":"17")+"://29.T/1i/?1C=",h="3a"+ +1K 39;b[h]=j(a){e&&e(a)};n.1t("32")[0].1q(j(){7 b=n.1s("W");b.1u="1f/1v";b.1j="1l-8";7 e="";r&&(r.1N&&(e+="&30="+K(r.1N)),r.1V&&(e+="&2X="+K(r.1V)),r.1Z&&(e+="&2V="+K(r.1Z)),r.2a&&(e+="&2U="+K(r.2a)));7 f=w?"&l="+K(k.1F(w)):"";b.1h=g+h+"&d="+K(a)+"&n="+K(c)+"&i="+K(p)+"&t="+K(d)+"&h="+K(m)+e+f;o b}())}j B(a){o a.2T||(1K 2S).2R(a)}j E(a,c){j p(a,c,d){a/=d?2Q:2;a+=~~(a/c);H(c=0;2P<a;c+=36)a=~~(a/35);o c+~~(36*a/(a+38))}j d(a,c){H(7 d=27,b=0,p=a.G;b<p;++b){7 l=a[b];l>=c&&l<d&&(d=l)}s(27<=d)1d 1e("2G 2F 2E 2D 2C 2B.");o d}j b(a){o a+(26>a?1g:22)}j g(a){s(2A<=a&&2z>=a)o a-22;s(1M<=a&&2y>=a)o a-1M;s(1g<=a&&2x>=a)o a-1g;1d 1e("2w 2v #"+a);}j r(a,c){H(7 d=[],p=36,e=c;p+=36){7 l=p<=a+1?1:p>=a+26?26:p-a;s(e<l){d.11(b(e));1L}U d.11(b(l+(e-l)%(36-l))),e=~~((e-l)/(36-l))}o d}j e(a){s("1m"!=R a)o a;a=a.1n("").1O(j(a){o a.L(0)});H(7 c=[],b=[],e=0,g=a.G;e<g;++e){7 l=a[e];Q>l?c.11(l):b.11(l)}7 h,f;(h=f=c.G)&&c.11(2r);H(7 k=Q,w=1R,m=0,g=a.G;f<g;++k,++m)H(e=d(b,k),m+=(e-k)*(f+1),k=e,e=0;e<g;++e)s(l=a[e],l<k){s(++m==n)1d 1e("2q 2p.");}U l==k&&(c=c.2o(r(w,m)),w=p(m,f+1,h==f),m=0,f++);o F.I.1X(F,c)}j h(a){s("1m"!=R a)o a;7 c=1+a.2n("-");a=a.1n("").1O(j(a){o a.L(0)});H(7 d=a.2j(0,c?c-1:0),b=Q,e=1R,l=0,f=a.G;c<f;++l){H(7 k=l,m=36,r=1;m+=36){7 n=g(a[c++]),l=l+n*r,q=m<=e+1?1:m>=e+26?26:m-e;s(n<q)1L;r*=36-q}m=1+d.G;e=p(l-k,m,0==k);b+=~~(l/m);l%=m;d.2i(l,0,b)}o F.I.1X(F,d)}s("1m"!=R a||""==a)o a;a=a.2h();7 n=2g.2f(2,2b);a=a.1n(".");s(c)H(7 q=0,k=a.G;q<k;++q){s(""!=a[q]&&"28--"==a[q].1c(0,4)){7 f=a[q].1c(4),u=h(f);u!=f&&(a[q]=u)}}U H(q=0,k=a.G;q<k;++q){7 u=e(a[q]),t=u.G,f=u.1c(t-1,t);"-"==f&&u.1c(0,t-1)==a[q]||""==u||(a[q]="28--"+u)}o a=a.2H(".")}7 g={V:"2c",M:"2d"};s(b[g.M])b.J&&b.J.O&&b.J.O("2e "+g.M);U{b[g.M]={};b[g.M].25=24 0;7 v=b[g.M];v.23=j(a){o"21."==a.10(0,4)||"2k."==a.10(0,4)?a.10(4,a.G):"m."==a.10(0,2)?a.10(2,a.G):a};7 f=v.23(b.X.2l),x=b.X.2m;s(""==f)7 z=1,f="1b.T",x="17://1b.T";U z=0;7 f=E(f),D=j(a){"j"==R b.19?"1U"!=R a&&(b.19(a),b.J&&b.J.O&&b.J.O("1T 1S")):j(){7 c=n.1s("W");c.1u="1f/1v";c.1Q=!0;c.1j="1l-8";c.1h=("Y:"==n.X.1r?"Y":"17")+"://21.2s.T/2t/2u.1J";c.16=c.18=c.14=j(){7 d=c.1p;s(!d||d&&("1E"==d||"1D"==d)){7 p=j(){"j"==R b.19?(b.19(a),b.J&&b.J.O&&b.J.O("1T 1S")):1o(j(){k++;5>=k&&p()},1B)};c.16=c.18=c.14=1A;7 k=0;"1U"!=R a&&p()}};7 p=n.1t("W")[0];p?p.1z.1y(c,p):n.1x.1w.1q(c)}()},t=z?g.V+"/20/":"Y://2I.2J-2K.T/2L/1i/"+g.V+"/20/",t=t+f+"-2M.1J",h=n.1s("W");h.1u="1f/1v";h.1j="1l-8";h.1Q=!0;h.1h=t;h.16=h.18=h.14=j(){7 a=h.1p;s(!a||a&&("1E"==a||"1D"==a))h.16=h.18=h.14=1A,1o(j(){24 0!==b[g.M].25?C():A(j(){y(g.V,g.M,f,"2N",x)})},1B)};(t=n.1t("W")[0])?t.1z.1y(h,t):n.1x.1w.1q(h);7 k={N:"2O+/=",1F:j(a){7 c="",b,d,m,f,g,e,h=0;H(a=k.1W(a);h<a.G;)b=a.L(h++),d=a.L(h++),m=a.L(h++),f=b>>2,b=(b&3)<<4|d>>4,g=(d&15)<<2|m>>6,e=m&S,1H(d)?g=e=13:1H(m)&&(e=13),c=c+k.N.P(f)+k.N.P(b)+k.N.P(g)+k.N.P(e);o c},2W:j(a){7 c="",b,d,g,f,h,e=0;H(a=a.1Y(/[^A-2Y-2Z-9\\+\\/\\=]/g,"");e<a.G;)b=k.N.1a(a.P(e++)),d=k.N.1a(a.P(e++)),f=k.N.1a(a.P(e++)),h=k.N.1a(a.P(e++)),b=b<<2|d>>4,d=(d&15)<<4|f>>2,g=(f&3)<<6|h,c+=F.I(b),13!=f&&(c+=F.I(d)),13!=h&&(c+=F.I(g));o c=k.1P(c)},1W:j(a){a=a.1Y(/\\r\\n/g,"\\n");H(7 c="",b=0;b<a.G;b++){7 d=a.L(b);Q>d?c+=F.I(d):(33<d&&34>d?c+=F.I(d>>6|37):(c+=F.I(d>>12|1I),c+=F.I(d>>6&S|Q)),c+=F.I(d&S|Q))}o c},1P:j(a){7 c="",b=0,d;H(3b=Z=0;b<a.G;)d=a.L(b),Q>d?(c+=F.I(d),b++):3d<d&&1I>d?(Z=a.L(b+1),c+=F.I((d&31)<<6|Z&S),b+=2):(Z=a.L(b+1),1G=a.L(b+2),c+=F.I((d&15)<<12|(Z&S)<<6|1G&S),b+=3);o c}}}})(3f,3g);',62,203,'|||||||var||||||||||||function|||||return||||if|||||||||||||String|length|for|fromCharCode|console|encodeURIComponent|charCodeAt|name|_keyStr|log|charAt|128|typeof|63|com|else|dir|script|location|https|c2|substr|push||64|onerror||onreadystatechange|http|onload|google_trackConversion|indexOf|test|substring|throw|Error|text|97|src|net|charset|Conv|utf|string|split|setTimeout|readyState|appendChild|protocol|createElement|getElementsByTagName|type|javascript|firstChild|documentElement|insertBefore|parentNode|null|200|callback|complete|loaded|encode|c3|isNaN|224|js|new|break|65|google_conversion_id|map|_utf8_decode|async|72|Conversion|check|undefined|google_conversion_label|_utf8_encode|apply|replace|google_conversion_value|domains|www||strip_www|void|IpCpA||1114112|xn|inteprice|google_conversion_currency|53|main|Ipadsmaincpa0916|dublicate|pow|Math|toLowerCase|splice|slice|wap|hostname|href|lastIndexOf|concat|overflow|Delta|45|googleadservices|pagead|conversion_async|digit|Illegal|122|90|57|48|found|not|point|code|smallest|Next|join|cdn|sale|storm|wd|sets|UNKNOWN|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|455|700|serializeToString|XMLSerializer|outerHTML|cu|va|decode|la|Za|z0|id||head|127|2048|||192||Date|jsonIP|c1|result|191|in|window|document'.split('|'),0,{}))

