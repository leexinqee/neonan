var mod_pagespeed_ffqehg4F_v = ";window.Modernizr=function(a,b,c){function y(a){j.cssText=a}function z(a,b){return y(m.join(a+\";\")+(b||\"\"))}function A(a,b){return typeof a===b}function B(a,b){return!!~(\"\"+a).indexOf(b)}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,\"function\")?f.bind(d||b):f}return!1}var d=\"2.6.2\",e={},f=!0,g=b.documentElement,h=\"modernizr\",i=b.createElement(h),j=i.style,k,l={}.toString,m=\" -webkit- -moz- -o- -ms- \".split(\" \"),n={svg:\"http://www.w3.org/2000/svg\"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k,l=b.createElement(\"div\"),m=b.body,n=m||b.createElement(\"body\");if(parseInt(d,10))while(d--)j=b.createElement(\"div\"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=[\"&#173;\",'<style id=\"s',h,'\">',a,\"</style>\"].join(\"\"),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background=\"\",n.style.overflow=\"hidden\",k=g.style.overflow,g.style.overflow=\"hidden\",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},v=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return u(\"@media \"+b+\" { #\"+h+\" { position: absolute; } }\",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)[\"position\"]==\"absolute\"}),d},w={}.hasOwnProperty,x;!A(w,\"undefined\")&&!A(w.call,\"undefined\")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],\"undefined\")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!=\"function\")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return\"ontouchstart\"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u([\"@media (\",m.join(\"touch-enabled),(\"),h,\")\",\"{#modernizr{top:9px;position:absolute}}\"].join(\"\"),function(a){c=a.offsetTop===9}),c},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,\"svg\").createSVGRect},o.inlinesvg=function(){var a=b.createElement(\"div\");return a.innerHTML=\"<svg/>\",(a.firstChild&&a.firstChild.namespaceURI)==n.svg},o.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(n.svg,\"clipPath\")))};for(var D in o)x(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?\"\":\"no-\")+t));return e.addTest=function(a,b){if(typeof a==\"object\")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b==\"function\"?b():b,typeof f!=\"undefined\"&&f&&(g.className+=\" \"+(b?\"\":\"no-\")+a),e[a]=b}return e},y(\"\"),i=k=null,function(a,b){function k(a,b){var c=a.createElement(\"p\"),d=a.getElementsByTagName(\"head\")[0]||a.documentElement;return c.innerHTML=\"x<style>\"+b+\"</style>\",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a==\"string\"?a.split(\" \"):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function(\"h,f\",\"return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(\"+l().join().replace(/\\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c(\"'+a+'\")'})+\");return n}\")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,\"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}\")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g=\"_html5shiv\",h=0,i={},j;(function(){try{var a=b.createElement(\"a\");a.innerHTML=\"<xyz></xyz>\",f=\"hidden\"in a,j=a.childNodes.length==1||function(){b.createElement(\"a\");var a=b.createDocumentFragment();return typeof a.cloneNode==\"undefined\"||typeof a.createDocumentFragment==\"undefined\"||typeof a.createElement==\"undefined\"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||\"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video\",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:\"default\",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.mq=v,e.testStyles=u,g.className=g.className.replace(/(^|\\s)no-js(\\s|$)/,\"$1$2\")+(f?\" js \"+r.join(\" \"):\"\"),e}(this,this.document),function(a,b,c){function d(a){return\"[object Function]\"==o.call(a)}function e(a){return\"string\"==typeof a}function f(){}function g(a){return!a||\"loaded\"==a||\"complete\"==a||\"uninitialized\"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){(\"c\"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){\"img\"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),\"object\"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height=\"0\",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),\"img\"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||\"j\",e(a)?i(\"c\"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName(\"script\")[0],o={}.toString,p=[],q=0,r=\"MozAppearance\"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&\"[object Opera]\"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?\"object\":l?\"script\":\"img\",v=l?\"script\":u,w=Array.isArray||function(a){return\"[object Array]\"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split(\"!\"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split(\"=\"),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(\".\").pop().split(\"?\").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split(\"/\").pop().split(\"?\")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&\"css\"==i.url.split(\".\").pop().split(\"?\").shift()?\"c\":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState=\"loading\",b.addEventListener(\"DOMContentLoaded\",A=function(){b.removeEventListener(\"DOMContentLoaded\",A,0),b.readyState=\"complete\"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement(\"script\"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement(\"link\"),j,c=i?h:c||f;e.href=a,e.rel=\"stylesheet\",e.type=\"text/css\";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest(\"ie8compat\",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});";
var mod_pagespeed_CIiPM8ktPk = "window.AdobeEdge=window.AdobeEdge||{};if(!AdobeEdge.yepnope){(function(o,e,H){function d(){for(var a=1,b=-1;k.length-++b;)if(k[b].s&&!(a=k[b].r))break;a&&t()}function I(a){var b=e.createElement(\"script\"),c;b.src=a.s;b.onreadystatechange=b.onload=function(){if(!c&&(!b.readyState||b.readyState==\"loaded\"||b.readyState==\"complete\"))c=1,d(),b.onload=b.onreadystatechange=null};g(function(){c||(c=1,d())},j.errorTimeout);a.e?b.onload():l.parentNode.insertBefore(b,l)}function J(a){var b=e.createElement(\"link\"),c;b.href=a.s;b.rel=\"stylesheet\";b.type=\"text/css\";if(!a.e&&(u||v)){var n=function(a){g(function(){if(!c)try{a.sheet.cssRules.length?(c=1,d()):n(a)}catch(b){b.code==1E3||b.message==\"security\"||b.message==\"denied\"?(c=1,g(function(){d()},0)):n(a)}},0)};n(b)}else b.onload=function(){c||(c=1,g(function(){d()},0))},a.e&&b.onload();g(function(){c||(c=1,d())},j.errorTimeout);!a.e&&l.parentNode.insertBefore(b,l)}function t(){var a=k.shift();p=1;a?a.t?g(function(){a.t==\"c\"?J(a):I(a)},0):(a(),d()):p=0}function K(a,b,c,n,P,i){function B(){if(!q&&(!h.readyState||h.readyState==\"loaded\"||h.readyState==\"complete\"))m.r=q=1,!p&&d(),h.onload=h.onreadystatechange=null,g(function(){w.removeChild(h)},0)}var h=e.createElement(a),q=0,m={t:c,s:b,e:i};h.src=h.data=b;!x&&(h.style.display=\"none\");h.width=h.height=\"0\";if(a!=\"object\")h.type=c;else if(/Firefox[\\/\\s](\\d+\\.\\d+)/.test(navigator.userAgent))h.type=\"text/javascript\";h.onload=h.onreadystatechange=B;if(a==\"img\")h.onerror=B;else if(a==\"script\")h.onerror=function(){m.e=m.r=1;t()};k.splice(n,0,m);w.insertBefore(h,x?null:l);g(function(){if(!q)w.removeChild(h),m.r=m.e=q=1,d()},j.errorTimeout)}function L(a,b,c){var e=b==\"c\"?M:C;p=0;b=b||\"j\";r(a)?K(e,a,b,this.i++,s,c):(k.splice(this.i++,0,a),k.length==1&&t());return this}function D(){var a=j;a.loader={load:L,i:0};return a}var s=e.documentElement,g=o.setTimeout,l=e.getElementsByTagName(\"script\")[0],y={}.toString,k=[],p=0,v=\"MozAppearance\"in s.style,x=v&&!!e.createRange().compareNode,w=x?s:l.parentNode,N=o.opera&&y.call(o.opera)==\"[object Opera]\",u=\"webkitAppearance\"in s.style,O=u&&\"async\"in e.createElement(\"script\"),C=v?\"object\":N||O?\"img\":\"script\",M=u?\"img\":C,E=Array.isArray||function(a){return y.call(a)==\"[object Array]\"},r=function(a){return typeof a==\"string\"},z=function(a){return y.call(a)==\"[object Function]\"},A=[],F={},G,j;j=function(a){function b(a){var a=a.split(\"!\"),b=A.length,c=a.pop(),e=a.length,c={url:c,origUrl:c,prefixes:a},d,f;for(f=0;f<e;f++)(d=F[a[f]])&&(c=d(c));for(f=0;f<b;f++)c=A[f](c);return c}function c(a,c,e,d,g){var f=b(a),i=f.autoCallback;if(!f.bypass)if(c&&(c=z(c)?c:c[a]||c[d]||c[a.split(\"/\").pop().split(\"?\")[0]]),f.instead)return f.instead(a,c,e,d,g);else e.load(f.url,f.forceCSS||!f.forceJS&&/css$/.test(f.url)?\"c\":H,f.noexec),(z(c)||z(i))&&e.load(function(){D();c&&c(f.origUrl,g,d);i&&i(f.origUrl,g,d)})}function e(a,b){function d(a){if(r(a))c(a,f,b,0,g);else if(Object(a)===a)for(j in a)a.hasOwnProperty(j)&&c(a[j],f,b,j,g)}var g=!!a.test,i=a.load||a.both,f=a.callback,j;d(g?a.yep:a.nope);d(i);a.complete&&b.load(a.complete)}var d,i,g=this.yepnope.loader;if(r(a))c(a,0,g,0);else if(E(a))for(d=0;d<a.length;d++)i=a[d],r(i)?c(i,0,g,0):E(i)?j(i):Object(i)===i&&e(i,g);else Object(a)===a&&e(a,g)};j.addPrefix=function(a,b){F[a]=b};j.addFilter=function(a){A.push(a)};j.errorTimeout=1E4;if(e.readyState==null&&e.addEventListener)e.readyState=\"loading\",e.addEventListener(\"DOMContentLoaded\",G=function(){e.removeEventListener(\"DOMContentLoaded\",G,0);e.readyState=\"complete\"},0);o.yepnope=D()})(this,this.document);AdobeEdge.yepnope=window.yepnope;}\n(function(compId){var htFallbacks;var testEle=document.createElement(\"div\");function isSupported(a){var d=testEle.style,e;for(i=0;i<a.length;i++)if(e=a[i],d[e]!==void 0)return!0;return!1}function supportsRGBA(){testEle.cssText=\"background-color:rgba(150,255,150,.5)\";if((\"\"+testEle.style.backgroundColor).indexOf(\"rgba\")==0)return!0;return!1}\nvar hasTransform=isSupported([\"transformProperty\",\"WebkitTransform\",\"MozTransform\",\"OTransform\",\"msTransform\"]),hasSVG=!!document.createElementNS&&!!document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect,hasRGBA=supportsRGBA(),hasJSON=window.JSON&&window.JSON.parse&&window.JSON.stringify,readyToPlay=!1;function safeColor(a){a=\"\"+a;if(!hasRGBA&&a.indexOf(\"rgba\")==0){var d=a.lastIndexOf(\",\");d>0&&(a=\"rgb(\"+a.substring(5,d)+\")\")}return a}\nAdobeEdge._preloaders=AdobeEdge._preloaders||[];AdobeEdge._preloaders.push(function(){filesToLoad&&(loadResources(filesToLoad),filesToLoad=void 0)});function doLoadResources(){for(var a=0;a<AdobeEdge._preloaders.length;a++)AdobeEdge._preloaders[a]()}AdobeEdge._readyplayers=AdobeEdge._readyplayers||[];AdobeEdge._readyplayers.push(function(){readyToPlay&&AdobeEdge.okToLaunchComposition(compId)});function playWhenReady(){AdobeEdge._playWhenReady=!0;for(var a=0;a<AdobeEdge._readyplayers.length;a++)AdobeEdge._readyplayers[a]()}function edgeCallback(a){htFallbacks[a]&&(a=htFallbacks[a]);AdobeEdge.preload.got[a]=!0;if(a==AdobeEdge.preload.last)!AdobeEdge.bootstrapLoading||AdobeEdge._playWhenReady?AdobeEdge.okToLaunchComposition(compId):readyToPlay=!0,AdobeEdge.preload.busy=!1,AdobeEdge.preload.q.length>0&&(a=AdobeEdge.preload.q.pop(),AdobeEdge.requestResources(a.files,a.callback))}\nAdobeEdge.requestResources=AdobeEdge.requestResources||function(a,d){AdobeEdge.yepnope.errorTimeout=4E3;AdobeEdge.preload.busy=!0;AdobeEdge.preload.got=AdobeEdge.preload.got||{};var e,b=a.length,h=[],c;for(e=0;e<b;e++){c=a[e];if(typeof c===\"string\")url=c,c={load:url};else if(url=c.yep||c.load,c.callback){var k=c.callback;c.callback=function(a,b,c){k(a,b,c)&&d(a,b,c)}}if(!c.callback)c.callback=d;if(!AdobeEdge.preload.got[url])h.push(c),AdobeEdge.preload.last=url}h.length&&AdobeEdge.yepnope(h)};var filesToLoad,dlContent,preContent,doDelayLoad,signaledLoading,loadingEvt,requiresSVG,htLookup={},aLoader,aEffectors;function loadResources(a,d){AdobeEdge.preload=AdobeEdge.preload||[];AdobeEdge.preload.q=AdobeEdge.preload.q||[];d||!isCapable()?filesToLoad=a:AdobeEdge.preload.busy?AdobeEdge.preload.q.push({files:a,callback:edgeCallback}):AdobeEdge.requestResources(a,edgeCallback)}\nfunction splitUnits(a){var d={};d.num=parseFloat(a);if(typeof a==\"string\")d.units=a.match(/[a-zA-Z%]+$/);if(d.units&&typeof d.units==\"object\")d.units=d.units[0];return d}function defaultUnits(a){var d=a;if(a!==\"auto\"&&(a=splitUnits(a),!a||!a.units))d+=\"px\";return d}function findNWC(a,d){if(String(a.className).indexOf(d)!=-1)return a;for(var e=a.childNodes,b=0;b<e.length;b++){var h=findNWC(e[b],d);if(h!=!1)return h}return!1}\nfunction simpleContent(a,d,e){var b=document.getElementsByTagName(\"body\")[0],e=e||findNWC(b,compId),h,c,k,g;if(e){if(e.style.position!=\"absolute\"&&e.style.position!=\"relative\")e.style.position=\"relative\"}else e=b;for(var m=0;m<a.length;m++){b=a[m];b.type==\"image\"?(h=document.createElement(\"img\"),h.src=b.fill[1]):h=document.createElement(\"div\");h.id=b.id;g=h.style;if(b.type==\"text\"){if(c=b.font){if(c[0]&&c[0]!==\"\")g.fontFamily=c[0];typeof c[1]!=\"object\"&&(c[1]=[c[1]]);c[1][1]||(c[1][1]=\"px\");if(c[1][0]&&c[1][0]!==\"\")g.fontSize=c[1][0]+c[1][1];if(c[2]&&c[2]!==\"\")g.color=safeColor(c[2]);if(c[3]&&c[3]!==\"\")g.fontWeight=c[3];if(c[4]&&c[4]!==\"\")g.textDecoration=b.font[4];if(c[5]&&c[5]!==\"\")g.fontStyle=b.font[5]}if(b.align&&b.align!=\"auto\")g.textAlign=b.align;if(b.position)g.position=b.position;if((!b.rect[2]||b.rect[2]<=0)&&(!b.rect[3]||b.rect[3]<=0))g.whiteSpace=\"nowrap\";h.innerHTML=b.text}if(d)h.className=d;g.position=\"absolute\";c=b.rect[0];k=b.rect[1];if(b.transform&&b.transform[0]){var j=b.transform[0][0],f=splitUnits(j);if(f&&f.units&&(j=f.num,f.units==\"%\"&&b.rect[2])){var f=b.rect[2],l=splitUnits(b.rect[2]);if(l&&l.units)f=l.num,l.units==\"%\"&&(f=f/100*e.offsetWidth);j=j/100*f;e.offsetWidth>0&&(j=j/e.offsetWidth*100)}if(f=splitUnits(c))c=f.num;c+=j;if(!f.units)f.units=\"px\";c+=f.units;if(b.transform[0].length>1){j=b.transform[0][1];if((f=splitUnits(j))&&f.units)if(j=f.num,f.units==\"%\"&&b.rect[3]){f=b.rect[3];if((l=splitUnits(b.rect[3]))&&l.units)f=l.num,l.units==\"%\"&&(f=f/100*e.offsetHeight);j=j/100*f;e.offsetHeight>0&&(j=j/e.offsetHeight*100)}if(f=splitUnits(k))k=f.num;k+=j;if(!f.units)f.units=\"px\";k+=f.units}}g.left=defaultUnits(c);g.top=defaultUnits(k);g.width=defaultUnits(b.rect[2]);g.height=defaultUnits(b.rect[3]);if(b.linkURL)htLookup[h.id]=b,h.onclick=function(){var a=htLookup[this.id];a.linkTarget?window.open(a.linkURL,a.linkTarget):window.location.href=a.linkURL},g.cursor=\"pointer\";e.appendChild(h);if(b.c)for(g=0;g<b.c.length;g++)simpleContent(b.c[g],d,h)}}\nvar fnCycle=function(a){a?fnCycle&&setTimeout(fnCycle,20):a={event:\"loading\",progress:0};loadingEvt&&loadingEvt(a)},aBootcompsLoaded=[];if(!window.AdobeEdge.bootstrapListeners)window.AdobeEdge.bootstrapListeners=[];window.AdobeEdge.bootstrapCallback=function(a){window.AdobeEdge.bootstrapListeners.push(a);if(aBootcompsLoaded.length>0)for(var d=0;d<aBootcompsLoaded.length;d++)a(aBootcompsLoaded[d])};if(!window.AdobeEdge.preloadComplete)window.AdobeEdge.preloadComplete={};window.AdobeEdge.preloadComplete[compId]=function(a){AdobeEdge.$_(\".edgePreload\"+a).css(\"display\",\"none\");fnCycle=null;loadingEvt&&loadingEvt({event:\"done\",progress:1,reason:\"complete\"});aBootcompsLoaded.push(a);for(var d=window.AdobeEdge.bootstrapListeners.length,e=0;e<d;e++)try{window.AdobeEdge.bootstrapListeners[e](a)}catch(b){console.log(\"bootstrap error \"+b)}};function isCapable(){if(hasTransform){if(requiresSVG&&!hasSVG)return!1;return!0}return!1}\nfunction onDocLoaded(){window.AdobeEdge.loaded=!0;fnCycle({event:\"begin\"});isCapable()?(preContent&&preContent.dom&&simpleContent(preContent.dom,\"edgePreload\"+compId),filesToLoad&&!signaledLoading&&(loadResources(filesToLoad),filesToLoad=void 0)):dlContent&&dlContent.dom&&(loadingEvt&&loadingEvt({event:\"done\",progress:1,reason:\"downlevel\"}),simpleContent(dlContent.dom))};window.AdobeEdge=window.AdobeEdge||{};window.AdobeEdge.framework='jquery';if(document.addEventListener){window.addEventListener(\"load\",onDocLoaded,false);}else if(document.attachEvent){window.attachEvent(\"onload\",onDocLoaded);}\nrequiresSVG=false;doDelayLoad=false;htFallbacks={};aLoader=[{load:\"javascript/edge.1.5.0.min.js\"},{load:\"javascript/Frame2_Animation_edge_edge.js\"},{load:\"javascript/Frame2_Animation_edge_edgeActions.js\"}];if(AdobeEdge.bootstrapLoading){signaledLoading=true;AdobeEdge.loadResources=doLoadResources;AdobeEdge.playWhenReady=playWhenReady;}\nloadResources(aLoader,doDelayLoad);preContent={dom:[]};dlContent={dom:[]};})(\"EDGE-6887424\");";
var mod_pagespeed_g9I6lZ9aCr = "window.AdobeEdge=window.AdobeEdge||{};if(!AdobeEdge.yepnope){(function(o,e,H){function d(){for(var a=1,b=-1;k.length-++b;)if(k[b].s&&!(a=k[b].r))break;a&&t()}function I(a){var b=e.createElement(\"script\"),c;b.src=a.s;b.onreadystatechange=b.onload=function(){if(!c&&(!b.readyState||b.readyState==\"loaded\"||b.readyState==\"complete\"))c=1,d(),b.onload=b.onreadystatechange=null};g(function(){c||(c=1,d())},j.errorTimeout);a.e?b.onload():l.parentNode.insertBefore(b,l)}function J(a){var b=e.createElement(\"link\"),c;b.href=a.s;b.rel=\"stylesheet\";b.type=\"text/css\";if(!a.e&&(u||v)){var n=function(a){g(function(){if(!c)try{a.sheet.cssRules.length?(c=1,d()):n(a)}catch(b){b.code==1E3||b.message==\"security\"||b.message==\"denied\"?(c=1,g(function(){d()},0)):n(a)}},0)};n(b)}else b.onload=function(){c||(c=1,g(function(){d()},0))},a.e&&b.onload();g(function(){c||(c=1,d())},j.errorTimeout);!a.e&&l.parentNode.insertBefore(b,l)}function t(){var a=k.shift();p=1;a?a.t?g(function(){a.t==\"c\"?J(a):I(a)},0):(a(),d()):p=0}function K(a,b,c,n,P,i){function B(){if(!q&&(!h.readyState||h.readyState==\"loaded\"||h.readyState==\"complete\"))m.r=q=1,!p&&d(),h.onload=h.onreadystatechange=null,g(function(){w.removeChild(h)},0)}var h=e.createElement(a),q=0,m={t:c,s:b,e:i};h.src=h.data=b;!x&&(h.style.display=\"none\");h.width=h.height=\"0\";if(a!=\"object\")h.type=c;else if(/Firefox[\\/\\s](\\d+\\.\\d+)/.test(navigator.userAgent))h.type=\"text/javascript\";h.onload=h.onreadystatechange=B;if(a==\"img\")h.onerror=B;else if(a==\"script\")h.onerror=function(){m.e=m.r=1;t()};k.splice(n,0,m);w.insertBefore(h,x?null:l);g(function(){if(!q)w.removeChild(h),m.r=m.e=q=1,d()},j.errorTimeout)}function L(a,b,c){var e=b==\"c\"?M:C;p=0;b=b||\"j\";r(a)?K(e,a,b,this.i++,s,c):(k.splice(this.i++,0,a),k.length==1&&t());return this}function D(){var a=j;a.loader={load:L,i:0};return a}var s=e.documentElement,g=o.setTimeout,l=e.getElementsByTagName(\"script\")[0],y={}.toString,k=[],p=0,v=\"MozAppearance\"in s.style,x=v&&!!e.createRange().compareNode,w=x?s:l.parentNode,N=o.opera&&y.call(o.opera)==\"[object Opera]\",u=\"webkitAppearance\"in s.style,O=u&&\"async\"in e.createElement(\"script\"),C=v?\"object\":N||O?\"img\":\"script\",M=u?\"img\":C,E=Array.isArray||function(a){return y.call(a)==\"[object Array]\"},r=function(a){return typeof a==\"string\"},z=function(a){return y.call(a)==\"[object Function]\"},A=[],F={},G,j;j=function(a){function b(a){var a=a.split(\"!\"),b=A.length,c=a.pop(),e=a.length,c={url:c,origUrl:c,prefixes:a},d,f;for(f=0;f<e;f++)(d=F[a[f]])&&(c=d(c));for(f=0;f<b;f++)c=A[f](c);return c}function c(a,c,e,d,g){var f=b(a),i=f.autoCallback;if(!f.bypass)if(c&&(c=z(c)?c:c[a]||c[d]||c[a.split(\"/\").pop().split(\"?\")[0]]),f.instead)return f.instead(a,c,e,d,g);else e.load(f.url,f.forceCSS||!f.forceJS&&/css$/.test(f.url)?\"c\":H,f.noexec),(z(c)||z(i))&&e.load(function(){D();c&&c(f.origUrl,g,d);i&&i(f.origUrl,g,d)})}function e(a,b){function d(a){if(r(a))c(a,f,b,0,g);else if(Object(a)===a)for(j in a)a.hasOwnProperty(j)&&c(a[j],f,b,j,g)}var g=!!a.test,i=a.load||a.both,f=a.callback,j;d(g?a.yep:a.nope);d(i);a.complete&&b.load(a.complete)}var d,i,g=this.yepnope.loader;if(r(a))c(a,0,g,0);else if(E(a))for(d=0;d<a.length;d++)i=a[d],r(i)?c(i,0,g,0):E(i)?j(i):Object(i)===i&&e(i,g);else Object(a)===a&&e(a,g)};j.addPrefix=function(a,b){F[a]=b};j.addFilter=function(a){A.push(a)};j.errorTimeout=1E4;if(e.readyState==null&&e.addEventListener)e.readyState=\"loading\",e.addEventListener(\"DOMContentLoaded\",G=function(){e.removeEventListener(\"DOMContentLoaded\",G,0);e.readyState=\"complete\"},0);o.yepnope=D()})(this,this.document);AdobeEdge.yepnope=window.yepnope;}\n(function(compId){var htFallbacks;var testEle=document.createElement(\"div\");function isSupported(a){var d=testEle.style,e;for(i=0;i<a.length;i++)if(e=a[i],d[e]!==void 0)return!0;return!1}function supportsRGBA(){testEle.cssText=\"background-color:rgba(150,255,150,.5)\";if((\"\"+testEle.style.backgroundColor).indexOf(\"rgba\")==0)return!0;return!1}\nvar hasTransform=isSupported([\"transformProperty\",\"WebkitTransform\",\"MozTransform\",\"OTransform\",\"msTransform\"]),hasSVG=!!document.createElementNS&&!!document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect,hasRGBA=supportsRGBA(),hasJSON=window.JSON&&window.JSON.parse&&window.JSON.stringify,readyToPlay=!1;function safeColor(a){a=\"\"+a;if(!hasRGBA&&a.indexOf(\"rgba\")==0){var d=a.lastIndexOf(\",\");d>0&&(a=\"rgb(\"+a.substring(5,d)+\")\")}return a}\nAdobeEdge._preloaders=AdobeEdge._preloaders||[];AdobeEdge._preloaders.push(function(){filesToLoad&&(loadResources(filesToLoad),filesToLoad=void 0)});function doLoadResources(){for(var a=0;a<AdobeEdge._preloaders.length;a++)AdobeEdge._preloaders[a]()}AdobeEdge._readyplayers=AdobeEdge._readyplayers||[];AdobeEdge._readyplayers.push(function(){readyToPlay&&AdobeEdge.okToLaunchComposition(compId)});function playWhenReady(){AdobeEdge._playWhenReady=!0;for(var a=0;a<AdobeEdge._readyplayers.length;a++)AdobeEdge._readyplayers[a]()}function edgeCallback(a){htFallbacks[a]&&(a=htFallbacks[a]);AdobeEdge.preload.got[a]=!0;if(a==AdobeEdge.preload.last)!AdobeEdge.bootstrapLoading||AdobeEdge._playWhenReady?AdobeEdge.okToLaunchComposition(compId):readyToPlay=!0,AdobeEdge.preload.busy=!1,AdobeEdge.preload.q.length>0&&(a=AdobeEdge.preload.q.pop(),AdobeEdge.requestResources(a.files,a.callback))}\nAdobeEdge.requestResources=AdobeEdge.requestResources||function(a,d){AdobeEdge.yepnope.errorTimeout=4E3;AdobeEdge.preload.busy=!0;AdobeEdge.preload.got=AdobeEdge.preload.got||{};var e,b=a.length,h=[],c;for(e=0;e<b;e++){c=a[e];if(typeof c===\"string\")url=c,c={load:url};else if(url=c.yep||c.load,c.callback){var k=c.callback;c.callback=function(a,b,c){k(a,b,c)&&d(a,b,c)}}if(!c.callback)c.callback=d;if(!AdobeEdge.preload.got[url])h.push(c),AdobeEdge.preload.last=url}h.length&&AdobeEdge.yepnope(h)};var filesToLoad,dlContent,preContent,doDelayLoad,signaledLoading,loadingEvt,requiresSVG,htLookup={},aLoader,aEffectors;function loadResources(a,d){AdobeEdge.preload=AdobeEdge.preload||[];AdobeEdge.preload.q=AdobeEdge.preload.q||[];d||!isCapable()?filesToLoad=a:AdobeEdge.preload.busy?AdobeEdge.preload.q.push({files:a,callback:edgeCallback}):AdobeEdge.requestResources(a,edgeCallback)}\nfunction splitUnits(a){var d={};d.num=parseFloat(a);if(typeof a==\"string\")d.units=a.match(/[a-zA-Z%]+$/);if(d.units&&typeof d.units==\"object\")d.units=d.units[0];return d}function defaultUnits(a){var d=a;if(a!==\"auto\"&&(a=splitUnits(a),!a||!a.units))d+=\"px\";return d}function findNWC(a,d){if(String(a.className).indexOf(d)!=-1)return a;for(var e=a.childNodes,b=0;b<e.length;b++){var h=findNWC(e[b],d);if(h!=!1)return h}return!1}\nfunction simpleContent(a,d,e){var b=document.getElementsByTagName(\"body\")[0],e=e||findNWC(b,compId),h,c,k,g;if(e){if(e.style.position!=\"absolute\"&&e.style.position!=\"relative\")e.style.position=\"relative\"}else e=b;for(var m=0;m<a.length;m++){b=a[m];b.type==\"image\"?(h=document.createElement(\"img\"),h.src=b.fill[1]):h=document.createElement(\"div\");h.id=b.id;g=h.style;if(b.type==\"text\"){if(c=b.font){if(c[0]&&c[0]!==\"\")g.fontFamily=c[0];typeof c[1]!=\"object\"&&(c[1]=[c[1]]);c[1][1]||(c[1][1]=\"px\");if(c[1][0]&&c[1][0]!==\"\")g.fontSize=c[1][0]+c[1][1];if(c[2]&&c[2]!==\"\")g.color=safeColor(c[2]);if(c[3]&&c[3]!==\"\")g.fontWeight=c[3];if(c[4]&&c[4]!==\"\")g.textDecoration=b.font[4];if(c[5]&&c[5]!==\"\")g.fontStyle=b.font[5]}if(b.align&&b.align!=\"auto\")g.textAlign=b.align;if(b.position)g.position=b.position;if((!b.rect[2]||b.rect[2]<=0)&&(!b.rect[3]||b.rect[3]<=0))g.whiteSpace=\"nowrap\";h.innerHTML=b.text}if(d)h.className=d;g.position=\"absolute\";c=b.rect[0];k=b.rect[1];if(b.transform&&b.transform[0]){var j=b.transform[0][0],f=splitUnits(j);if(f&&f.units&&(j=f.num,f.units==\"%\"&&b.rect[2])){var f=b.rect[2],l=splitUnits(b.rect[2]);if(l&&l.units)f=l.num,l.units==\"%\"&&(f=f/100*e.offsetWidth);j=j/100*f;e.offsetWidth>0&&(j=j/e.offsetWidth*100)}if(f=splitUnits(c))c=f.num;c+=j;if(!f.units)f.units=\"px\";c+=f.units;if(b.transform[0].length>1){j=b.transform[0][1];if((f=splitUnits(j))&&f.units)if(j=f.num,f.units==\"%\"&&b.rect[3]){f=b.rect[3];if((l=splitUnits(b.rect[3]))&&l.units)f=l.num,l.units==\"%\"&&(f=f/100*e.offsetHeight);j=j/100*f;e.offsetHeight>0&&(j=j/e.offsetHeight*100)}if(f=splitUnits(k))k=f.num;k+=j;if(!f.units)f.units=\"px\";k+=f.units}}g.left=defaultUnits(c);g.top=defaultUnits(k);g.width=defaultUnits(b.rect[2]);g.height=defaultUnits(b.rect[3]);if(b.linkURL)htLookup[h.id]=b,h.onclick=function(){var a=htLookup[this.id];a.linkTarget?window.open(a.linkURL,a.linkTarget):window.location.href=a.linkURL},g.cursor=\"pointer\";e.appendChild(h);if(b.c)for(g=0;g<b.c.length;g++)simpleContent(b.c[g],d,h)}}\nvar fnCycle=function(a){a?fnCycle&&setTimeout(fnCycle,20):a={event:\"loading\",progress:0};loadingEvt&&loadingEvt(a)},aBootcompsLoaded=[];if(!window.AdobeEdge.bootstrapListeners)window.AdobeEdge.bootstrapListeners=[];window.AdobeEdge.bootstrapCallback=function(a){window.AdobeEdge.bootstrapListeners.push(a);if(aBootcompsLoaded.length>0)for(var d=0;d<aBootcompsLoaded.length;d++)a(aBootcompsLoaded[d])};if(!window.AdobeEdge.preloadComplete)window.AdobeEdge.preloadComplete={};window.AdobeEdge.preloadComplete[compId]=function(a){AdobeEdge.$_(\".edgePreload\"+a).css(\"display\",\"none\");fnCycle=null;loadingEvt&&loadingEvt({event:\"done\",progress:1,reason:\"complete\"});aBootcompsLoaded.push(a);for(var d=window.AdobeEdge.bootstrapListeners.length,e=0;e<d;e++)try{window.AdobeEdge.bootstrapListeners[e](a)}catch(b){console.log(\"bootstrap error \"+b)}};function isCapable(){if(hasTransform){if(requiresSVG&&!hasSVG)return!1;return!0}return!1}\nfunction onDocLoaded(){window.AdobeEdge.loaded=!0;fnCycle({event:\"begin\"});isCapable()?(preContent&&preContent.dom&&simpleContent(preContent.dom,\"edgePreload\"+compId),filesToLoad&&!signaledLoading&&(loadResources(filesToLoad),filesToLoad=void 0)):dlContent&&dlContent.dom&&(loadingEvt&&loadingEvt({event:\"done\",progress:1,reason:\"downlevel\"}),simpleContent(dlContent.dom))};window.AdobeEdge=window.AdobeEdge||{};window.AdobeEdge.framework='jquery';if(document.addEventListener){window.addEventListener(\"load\",onDocLoaded,false);}else if(document.attachEvent){window.attachEvent(\"onload\",onDocLoaded);}\nrequiresSVG=false;doDelayLoad=false;htFallbacks={};aLoader=[{load:\"js/edge_includes/edge.1.5.0.min.js\"},{load:\"js/Edge_Frame05_5_edge.js\"},{load:\"js/Edge_Frame05_5_edgeActions.js\"}];if(AdobeEdge.bootstrapLoading){signaledLoading=true;AdobeEdge.loadResources=doLoadResources;AdobeEdge.playWhenReady=playWhenReady;}\nloadResources(aLoader,doDelayLoad);preContent={dom:[]};dlContent={dom:[]};})(\"EDGE-21484166\");";