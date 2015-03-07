// SmartQuotes.js 0.1.4
// Kelly Martin (http://kelly-martin.com)
// MIT licensed

(typeof("jQuery")=="function"?jQuery:function(d){var b=document.addEventListener||document.attachEvent,c=document.removeEventListener?"removeEventListener":"detachEvent",a=document.addEventListener?"DOMContentLoaded":"onreadystatechange";b.call(document,a,function(){document[c](a,arguments.callee,false);d()},false)})(function(){var a=document.body;var b=a.childNodes[0];while(b!=null){if(b.nodeType==3){b.nodeValue=b.nodeValue.replace(/(\W|^)"(\S)/g,"$1\u201c$2").replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g,"$1\u201d$2").replace(/([^0-9])"/g,"$1\u201d").replace(/(\W|^)'(\S)/g,"$1\u2018$2").replace(/([a-z])'([a-z])/ig,"$1\u2019$2").replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig,"$1\u2019$3").replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig,"\u2019$2$3").replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/ig,"$1\u2019").replace(/'''/g,"\u2034").replace(/("|'')/g,"\u2033").replace(/'/g,"\u2032")}if(b.hasChildNodes()&&b.firstChild.nodeName!="CODE"){b=b.firstChild}else{do{while(b.nextSibling==null&&b!=a){b=b.parentNode}b=b.nextSibling}while(b&&(b.nodeName=="CODE"||b.nodeName=="SCRIPT"||b.nodeName=="STYLE"))}}});



// StyleFix 1.0.3 & PrefixFree 1.0.7
// Lea Verou
// MIT licensed

(function(){function t(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(!window.addEventListener)return;var e=window.StyleFix={link:function(t){try{if(t.rel!=="stylesheet"||t.hasAttribute("data-noprefix"))return}catch(n){return}var r=t.href||t.getAttribute("data-href"),i=r.replace(/[^\/]+$/,""),s=t.parentNode,o=new XMLHttpRequest,u;o.onreadystatechange=function(){o.readyState===4&&u()};u=function(){var n=o.responseText;if(n&&t.parentNode&&(!o.status||o.status<400||o.status>600)){n=e.fix(n,!0,t);if(i){n=n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,n){return/^([a-z]{3,10}:|\/|#)/i.test(n)?e:'url("'+i+n+'")'});var r=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");n=n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+r,"gi"),"$1")}var u=document.createElement("style");u.textContent=n;u.media=t.media;u.disabled=t.disabled;u.setAttribute("data-href",t.getAttribute("href"));s.insertBefore(u,t);s.removeChild(t);u.media=t.media}};try{o.open("GET",r);o.send(null)}catch(n){if(typeof XDomainRequest!="undefined"){o=new XDomainRequest;o.onerror=o.onprogress=function(){};o.onload=u;o.open("GET",r);o.send(null)}}t.setAttribute("data-inprogress","")},styleElement:function(t){if(t.hasAttribute("data-noprefix"))return;var n=t.disabled;t.textContent=e.fix(t.textContent,!0,t);t.disabled=n},styleAttribute:function(t){var n=t.getAttribute("style");n=e.fix(n,!1,t);t.setAttribute("style",n)},process:function(){t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);t("style").forEach(StyleFix.styleElement);t("[style]").forEach(StyleFix.styleAttribute)},register:function(t,n){(e.fixers=e.fixers||[]).splice(n===undefined?e.fixers.length:n,0,t)},fix:function(t,n,r){for(var i=0;i<e.fixers.length;i++)t=e.fixers[i](t,n,r)||t;return t},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};(function(){setTimeout(function(){t('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()})();(function(e){function t(e,t,r,i,s){e=n[e];if(e.length){var o=RegExp(t+"("+e.join("|")+")"+r,"gi");s=s.replace(o,i)}return s}if(!window.StyleFix||!window.getComputedStyle)return;var n=window.PrefixFree={prefixCSS:function(e,r,i){var s=n.prefix;n.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(e,t,n,r){return t+(n||"")+"linear-gradient("+(90-r)+"deg"}));e=t("functions","(\\s|:|,)","\\s*\\(","$1"+s+"$2(",e);e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+s+"$2$3",e);e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+s+"$2:",e);if(n.properties.length){var o=RegExp("\\b("+n.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(o,s+"$1")},e)}if(r){e=t("selectors","","\\b",n.prefixSelector,e);e=t("atrules","@","\\b","@"+s+"$1",e)}e=e.replace(RegExp("-"+s,"g"),"-");e=e.replace(/-\*-(?=[a-z]+)/gi,n.prefix);return e},property:function(e){return(n.properties.indexOf(e)?n.prefix:"")+e},value:function(e,r){e=t("functions","(^|\\s|,)","\\s*\\(","$1"+n.prefix+"$2(",e);e=t("keywords","(^|\\s)","(\\s|$)","$1"+n.prefix+"$2$3",e);return e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+n.prefix})},prefixProperty:function(e,t){var r=n.prefix+e;return t?StyleFix.camelCase(r):r}};(function(){var e={},t=[],r={},i=getComputedStyle(document.documentElement,null),s=document.createElement("div").style,o=function(n){if(n.charAt(0)==="-"){t.push(n);var r=n.split("-"),i=r[1];e[i]=++e[i]||1;while(r.length>3){r.pop();var s=r.join("-");u(s)&&t.indexOf(s)===-1&&t.push(s)}}},u=function(e){return StyleFix.camelCase(e)in s};if(i.length>0)for(var a=0;a<i.length;a++)o(i[a]);else for(var f in i)o(StyleFix.deCamelCase(f));var l={uses:0};for(var c in e){var h=e[c];l.uses<h&&(l={prefix:c,uses:h})}n.prefix="-"+l.prefix+"-";n.Prefix=StyleFix.camelCase(n.prefix);n.properties=[];for(var a=0;a<t.length;a++){var f=t[a];if(f.indexOf(n.prefix)===0){var p=f.slice(n.prefix.length);u(p)||n.properties.push(p)}}n.Prefix=="Ms"&&!("transform"in s)&&!("MsTransform"in s)&&"msTransform"in s&&n.properties.push("transform","transform-origin");n.properties.sort()})();(function(){function i(e,t){r[t]="";r[t]=e;return!!r[t]}var e={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};e["repeating-linear-gradient"]=e["repeating-radial-gradient"]=e["radial-gradient"]=e["linear-gradient"];var t={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display"};n.functions=[];n.keywords=[];var r=document.createElement("div").style;for(var s in e){var o=e[s],u=o.property,a=s+"("+o.params+")";!i(a,u)&&i(n.prefix+a,u)&&n.functions.push(s)}for(var f in t){var u=t[f];!i(f,u)&&i(n.prefix+f,u)&&n.keywords.push(f)}})();(function(){function s(e){i.textContent=e+"{}";return!!i.sheet.cssRules.length}var t={":read-only":null,":read-write":null,":any-link":null,"::selection":null},r={keyframes:"name",viewport:null,document:'regexp(".")'};n.selectors=[];n.atrules=[];var i=e.appendChild(document.createElement("style"));for(var o in t){var u=o+(t[o]?"("+t[o]+")":"");!s(u)&&s(n.prefixSelector(u))&&n.selectors.push(o)}for(var a in r){var u=a+" "+(r[a]||"");!s("@"+u)&&s("@"+n.prefix+u)&&n.atrules.push(a)}e.removeChild(i)})();n.valueProperties=["transition","transition-property"];e.className+=" "+n.prefix;StyleFix.register(n.prefixCSS)})(document.documentElement);



// Cookie
// via http://stackoverflow.com/a/7577970/1167646

// function setCookie(e,o,n,t,i,c){n||(n=new Date),document.cookie=e+"="+escape(o)+(null==n?"":"; expires="+n.toGMTString())+(null==t?"":"; path="+t)+(null==i?"":"; domain="+i)+(null==c?"":"; secure")}function getCookie(e){for(var o=e+"=",n=o.length,t=document.cookie.length,i=0;t>i;){var c=i+n;if(document.cookie.substring(i,c)==o)return getCookieVal(c);if(i=document.cookie.indexOf(" ",i)+1,0==i)break}return null}function getCookieVal(e){var o=document.cookie.indexOf(";",e);return-1==o&&(o=document.cookie.length),unescape(document.cookie.substring(e,o))}function deleteCookie(e,o,n){document.cookie=e+"="+(null==o?"":"; path="+o)+(null==n?"":"; domain="+n)+"; expires=Thu, 01-Jan-00 00:00:01 GMT"}function saveScroll(){var e=new Date;e.setTime(e.getTime()+24*expdays*60*60*1e3);var o=document.pageXOffset?document.pageXOffset:document.body.scrollLeft,n=document.pageYOffset?document.pageYOffset:document.body.scrollTop;Data=o+"_"+n,setCookie(cookieName,Data,e)}function loadScroll(){if(inf=getCookie(cookieName),inf){var e=inf.split("_");2==e.length&&window.scrollTo(parseInt(e[0]),parseInt(e[1]))}}var cookieName="page_scroll",expdays=365;

//==

/*
cookieName = "page_scroll";
expdays = 365;

// An adaptation of Dorcht's cookie functions.

function setCookie(name, value, expires, path, domain, secure) {
  if (!expires) {
    expires = new Date();
  }
  document.cookie = name + "=" + escape(value) +
    ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    ((secure == null) ? "" : "; secure");
}

function getCookie(name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg) {
      return getCookieVal(j);
    }
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return null;
}

function getCookieVal(offset) {
  var endstr = document.cookie.indexOf(";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}

function deleteCookie(name, path, domain) {
  document.cookie = name + "=" +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    "; expires=Thu, 01-Jan-00 00:00:01 GMT";
}

function saveScroll() { // added function
  var expdate = new Date();
  expdate.setTime(expdate.getTime() + (expdays * 24 * 60 * 60 * 1000)); // expiry date

  var x = (document.pageXOffset ? document.pageXOffset : document.body.scrollLeft);
  var y = (document.pageYOffset ? document.pageYOffset : document.body.scrollTop);
  Data = x + "_" + y;
  setCookie(cookieName, Data, expdate);
}

function loadScroll() { // added function
  inf = getCookie(cookieName);
  if (!inf) {
    return;
  }
  var ar = inf.split("_");
  if (ar.length == 2) {
    window.scrollTo(parseInt(ar[0]), parseInt(ar[1]));
  }
}
*/