(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={Sa:!0},ea={};try{ea.__proto__=da;ca=ea.Sa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var fa=ba,ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ja(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ha(c,d,{configurable:!0,writable:!0,value:f})}}
function ka(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function la(){la=function(){};
ia.Symbol||(ia.Symbol=na)}
var na=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function oa(){la();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(ka(this))}});
oa=function(){}}
function pa(a){oa();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a}
var qa=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
ja("Reflect.construct",function(){return qa});
function ra(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ka(a)}}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
ja("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ra(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){sa(a,f)||ha(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!sa(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return sa(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return sa(a,f)&&sa(a[f],this.b)};
b.prototype["delete"]=function(a){return sa(a,f)&&sa(a[f],this.b)?delete a[f][this.b]:!1};
return b});
ja("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return pa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&sa(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,B:h}}return{id:c,list:d,index:-1,B:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ra(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ra([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(u){return!1}}())return a;
oa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.B?c.B.value=b:(c.B={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.B),this.b.previous.next=c.B,this.b.previous=c.B,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.B&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.B.previous.next=a.B.next,a.B.next.previous=a.B.previous,a.B.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).B};
e.prototype.get=function(a){return(a=d(this,a).B)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ja("Set",function(a){function b(a){this.b=new Map;if(a){a=ra(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ra([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
oa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ja("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ja("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
ja("Object.assign",function(a){return a||ta});
var n=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function ua(a){return"number"==typeof a}
function v(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){a.ca=void 0;a.v=function(){return a.ca?a.ca:a.ca=new a}}
function xa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ya(a){return"array"==xa(a)}
function za(a){var b=xa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Aa(a){return"function"==xa(a)}
function Ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ca(a){return a[Da]||(a[Da]=++Ea)}
var Da="closure_uid_"+(1E9*Math.random()>>>0),Ea=0;function Fa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Fa:w=Ga;return w.apply(null,arguments)}
function Ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var Ia=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&r(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function y(a,b){function c(){}
c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Db=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function Ja(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ka(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ka);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(Ka,Error);Ka.prototype.name="CustomError";var La;var Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=t(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},Oa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Qa(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function Ra(a,b){return 0<=Ma(a,b)}
function Sa(a){return Array.prototype.concat.apply([],arguments)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Va(a,b,c,d){return Array.prototype.splice.apply(a,Wa(arguments,1))}
function Wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Xa(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(ya(d))for(var e=0;e<d.length;e+=8192)for(var f=Xa.apply(null,Wa(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;var Ya=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Za=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function $a(a){a=r(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Za("0",Math.max(0,2-b))+a}
function ab(a,b){for(var c=0,d=Ya(String(a)).split("."),e=Ya(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;c=bb(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||bb(0==h[2].length,0==l[2].length)||bb(h[2],l[2]);h=h[3];l=l[3]}while(0==c)}return c}
function bb(a,b){return a<b?-1:a>b?1:0}
function cb(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function db(a){var b=t(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var eb;a:{var fb=n.navigator;if(fb){var gb=fb.userAgent;if(gb){eb=gb;break a}}eb=""}function B(a){return-1!=eb.indexOf(a)}
;function hb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function ib(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a){for(var b in a)return!1;return!0}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function pb(){return B("Safari")&&!(qb()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))}
function qb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
function rb(){return B("Android")&&!(qb()||B("Firefox")||B("Opera")||B("Silk"))}
;function sb(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
function tb(){return sb()||B("iPad")||B("iPod")}
;function ub(a){ub[" "](a);return a}
ub[" "]=va;function vb(a,b){var c=wb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var xb=B("Opera"),C=B("Trident")||B("MSIE"),yb=B("Edge"),zb=yb||C,Ab=B("Gecko")&&!(-1!=eb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Bb=-1!=eb.toLowerCase().indexOf("webkit")&&!B("Edge"),Cb=B("Macintosh"),Db=B("Windows"),Eb=B("Android"),Fb=sb(),Gb=B("iPad"),Hb=B("iPod"),Ib=tb();function Jb(){var a=n.document;return a?a.documentMode:void 0}
var Kb;a:{var Lb="",Mb=function(){var a=eb;if(Ab)return/rv:([^\);]+)(\)|;)/.exec(a);if(yb)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Bb)return/WebKit\/(\S+)/.exec(a);if(xb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Mb&&(Lb=Mb?Mb[1]:"");if(C){var Nb=Jb();if(null!=Nb&&Nb>parseFloat(Lb)){Kb=String(Nb);break a}}Kb=Lb}var Ob=Kb,wb={};function Pb(a){return vb(a,function(){return 0<=ab(Ob,a)})}
var Qb;var Rb=n.document;Qb=Rb&&C?Jb()||("CSS1Compat"==Rb.compatMode?parseInt(Ob,10):5):void 0;var Sb=!Ab&&!C||C&&9<=Number(Qb)||Ab&&Pb("1.9.1"),Tb=C&&!Pb("9");function Ub(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Vb(){this.b="";this.f=Wb}
Vb.prototype.ba=!0;Vb.prototype.aa=function(){return this.b};
var Xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Wb={};function Yb(a){var b=new Vb;b.b=a;return b}
Yb("about:blank");function Zb(){this.b="";this.f=$b}
Zb.prototype.ba=!0;Zb.prototype.aa=function(){return this.b};
function ac(a){if(a instanceof Zb&&a.constructor===Zb&&a.f===$b)return a.b;xa(a);return"type_error:SafeHtml"}
var $b={};function bc(a){var b=new Zb;b.b=a;return b}
bc("<!DOCTYPE html>");bc("");bc("<br>");var cc=Ub(function(){var a=document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});
function dc(a,b){if(cc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=b}
;function D(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
D.prototype.equals=function(a){return a instanceof D&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function ec(a,b){return new D(a.x-b.x,a.y-b.y)}
D.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
D.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
D.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function fc(a,b){this.width=a;this.height=b}
k=fc.prototype;k.Ua=function(){return this.width*this.height};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!this.Ua()};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function gc(a){return a?new hc(ic(a)):La||(La=new hc)}
function E(a){return t(a)?document.getElementById(a):a}
function jc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):kc(document,"*",a,b)}
function F(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):kc(c,"*",a,b)[0]||null}return c||null}
function kc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Ra(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function lc(a,b){hb(b,function(b,d){b&&"object"==typeof b&&b.ba&&(b=b.aa());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:mc.hasOwnProperty(d)?a.setAttribute(mc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function nc(a){a=a.document;a=oc(a)?a.documentElement:a.body;return new fc(a.clientWidth,a.clientHeight)}
function pc(a){var b=qc(a);a=rc(a);return C&&Pb("10")&&a.pageYOffset!=b.scrollTop?new D(b.scrollLeft,b.scrollTop):new D(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function qc(a){return a.scrollingElement?a.scrollingElement:!Bb&&oc(a)?a.documentElement:a.body||a.documentElement}
function rc(a){return a.parentWindow||a.defaultView}
function oc(a){return"CSS1Compat"==a.compatMode}
function sc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function tc(a){return Sb&&void 0!=a.children?a.children:Na(a.childNodes,function(a){return 1==a.nodeType})}
function uc(a){return Ba(a)&&1==a.nodeType}
function vc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function ic(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function wc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(ic(a).createTextNode(String(b)))}}
function xc(a,b){var c=[];return yc(a,b,c,!0)?c[0]:void 0}
function yc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||yc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var zc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ac={IMG:" ",BR:"\n"};function Bc(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Cc(a)||Dc(a)):Cc(a)&&Dc(a))&&C){var c;!Aa(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Cc(a){return C&&!Pb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Dc(a){a=a.tabIndex;return ua(a)&&0<=a&&32768>a}
function Ec(a){if(Tb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Gc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Tb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Gc(a,b,c){if(!(a.nodeName in zc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ac)b.push(Ac[a.nodeName]);else for(a=a.firstChild;a;)Gc(a,b,c),a=a.nextSibling}
function Hc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Ic(a,function(a){return(!e||a.nodeName==e)&&(!c||t(a.className)&&Ra(a.className.split(/\s+/),c))},!0,d)}
function G(a,b){return Hc(a,null,b,void 0)}
function Ic(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function hc(a){this.b=a||n.document||document}
hc.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
hc.prototype.createElement=function(a){return this.b.createElement(String(a))};
hc.prototype.appendChild=function(a,b){a.appendChild(b)};
hc.prototype.isElement=uc;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Jc=window,Kc=document,Lc=Jc.location;function Mc(){}
var Nc=/\[native code\]/;function H(a,b,c){return a[b]=a[b]||c}
function Oc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Pc(){var a;if((a=Object.create)&&Nc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Qc=H(Jc,"gapi",{});var I;I=H(Jc,"___jsl",Pc());H(I,"I",0);H(I,"hel",10);function Rc(){var a=Lc.href;if(I.dpo)var b=I.h;else{b=I.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Sc(a){var b=H(I,"PQ",[]);I.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Tc(a){return H(H(I,"H",Pc()),a,Pc())}
;function Uc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var p=1518500249}else m=d^f^h,p=1859775393;else 60>c?(m=d&f|h&(d|f),p=2400959708):(m=d^f^h,p=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+p+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[m++]=a[d++],p++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}
function d(){var a=[],d=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,p;a();return{reset:a,update:c,digest:d,Va:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Vc(a,b,c){var d=[],e=[];if(1==(ya(c)?2:1))return e=[b,a],A(d,function(a){e.push(a)}),Wc(e.join(" "));
var f=[],g=[];A(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];A(d,function(a){e.push(a)});
a=Wc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Wc(a){var b=Uc();b.update(a);return b.Va().toLowerCase()}
;function Xc(a){this.b=a||{cookie:""}}
k=Xc.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ia()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ya(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ya(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yc=new Xc("undefined"==typeof document?null:document);Yc.f=3950;function Zc(a){var b=Ja(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new Xc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new Xc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&b&&c?[c,Vc(Ja(d),b,a||null)].join(" "):null}return null}
;var $c=H(I,"perf",Pc());H($c,"g",Pc());var ad=H($c,"i",Pc());H($c,"r",[]);Pc();Pc();function bd(a,b,c){b&&0<b.length&&(b=cd(b),c&&0<c.length&&(b+="___"+cd(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=H(ad,"_p",Pc()),H(b,c,Pc())[a]=(new Date).getTime(),b=$c.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function cd(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var dd=Pc(),ed=[];function fd(a){throw Error("Bad hint"+(a?": "+a:""));}
ed.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?I[b]=H(I,b,[]).concat(c):H(I,b,c)}if(b=a.u)a=H(I,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var gd=/^(\/[a-zA-Z0-9_\-]+)+$/,hd=[/\/amp\//,/\/amp$/,/^\/amp$/],id=/^[a-zA-Z0-9\-_\.,!]+$/,jd=/^gapi\.loaded_[0-9]+$/,kd=/^[a-zA-Z0-9,._-]+$/;function ld(a,b,c,d){var e=a.split(";"),f=e.shift(),g=dd[f],h=null;g?h=g(e,b,c,d):fd("no hint processor for: "+f);h||fd("failed to generate load url");b=h;c=b.match(md);(d=b.match(nd))&&1===d.length&&od.test(b)&&c&&1===c.length||fd("failed sanity: "+a);return h}
function pd(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=qd(a);jd.test(c)||fd("invalid_callback");b=rd(b);d=d&&d.length?rd(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ga?"/am="+e(a.ga):"",a.Ea?"/rs="+e(a.Ea):"",a.Na?"/t="+e(a.Na):"","/cb=",e(c)].join("")}
function qd(a){"/"!==a.charAt(0)&&fd("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))fd("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");gd.test(b)||fd("invalid_prefix");c=0;for(d=hd.length;c<d;++c)hd[c].test(b)&&fd("invalid_prefix");c=sd(a,
"k",!0);d=sd(a,"am");e=sd(a,"rs");a=sd(a,"t");return{pathPrefix:b,version:c,ga:d,Ea:e,Na:a}}
function rd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");kd.test(e)&&b.push(e)}return b.join(",")}
function sd(a,b,c){a=a[b];!a&&c&&fd("missing: "+b);if(a){if(id.test(a))return a;fd("invalid: "+b)}return null}
var od=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,nd=/\/cb=/g,md=/\/\//g;function td(){var a=Rc();if(!a)throw Error("Bad hint");return a}
dd.m=function(a,b,c,d){(a=a[0])||fd("missing_hint");return"https://apis.google.com"+pd(a,b,c,d)};
var ud=decodeURI("%73cript"),vd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function wd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function xd(){var a=I.nonce;return void 0!==a?a&&a===String(a)&&a.match(vd)?a:I.nonce=null:Kc.querySelector?(a=Kc.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(vd)?I.nonce=a:I.nonce=null):null:null}
function yd(a){if("loading"!=Kc.readyState)zd(a);else{var b=xd(),c="";null!==b&&(c=' nonce="'+b+'"');Kc.write("<"+ud+' src="'+encodeURI(a)+'"'+c+"></"+ud+">")}}
function zd(a){var b=Kc.createElement(ud);b.setAttribute("src",a);a=xd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Kc.getElementsByTagName(ud)[0])?a.parentNode.insertBefore(b,a):(Kc.head||Kc.body||Kc.documentElement).appendChild(b)}
function Ad(a,b){var c=b&&b._c;if(c)for(var d=0;d<ed.length;d++){var e=ed[d][0],f=ed[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Bd(a,b,c){Cd(function(){var c=b===Rc()?H(Qc,"_",Pc()):Pc();c=H(Tc(b),"_",c);a(c)},c)}
function Dd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ad(a,c);var d=a?a.split(":"):[],e=c.h||td(),f=H(I,"ah",Pc());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split(".");l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,p=m;m&&m.hint==l||(p={hint:l,features:[]},g.push(p));p.features.push(h)}var u=g.length;if(1<u){var q=c.callback;q&&(c.callback=function(){0==--u&&q()})}for(;d=g.shift();)Ed(d.features,c,d.hint)}else Ed(d||[],c,e)}
function Ed(a,b,c){function d(a,b){if(u)return 0;Jc.clearTimeout(p);q.push.apply(q,z);var d=((Qc||{}).config||{}).update;d?d(f):f&&H(I,"cu",[]).push(f);if(b){bd("me0",a,L);try{Bd(b,c,m)}finally{bd("me1",a,L)}}return 1}
a=Oc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var p=null,u=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=H(Tc(c),"r",[]).sort();var q=H(Tc(c),"L",[]).sort(),L=[].concat(l);0<g&&(p=Jc.setTimeout(function(){u=!0;h()},g));
var z=wd(a,q);if(z.length){z=wd(a,l);var ma=H(I,"CP",[]),U=ma.length;ma[U]=function(a){function b(){var a=ma[U+1];a&&a()}
function c(b){ma[U]=null;d(z,a)&&Sc(function(){e&&e();b()})}
if(!a)return 0;bd("ml1",z,L);0<U&&ma[U-1]?ma[U]=function(){c(b)}:c(b)};
if(z.length){var Fc="loaded_"+I.I++;Qc[Fc]=function(a){ma[U](a);Qc[Fc]=null};
a=ld(c,z,"gapi."+Fc,l);l.push.apply(l,z);bd("ml0",z,L);b.sync||Jc.___gapisync?yd(a):zd(a)}else ma[U](Mc)}else d(z)&&e&&e()}
function Cd(a,b){if(I.hee&&0<I.hel)try{return a()}catch(c){b&&b(c),I.hel--,Dd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Qc.load=function(a,b){return Cd(function(){return Dd(a,b)})};function Fd(a,b){this.g=a;this.j=b;this.f=0;this.b=null}
Fd.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Gd(a,b){a.j(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Hd(a){n.setTimeout(function(){throw a;},0)}
var Id;
function Jd(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.ia;c.ia=null;a()}};
return function(a){d.next={ia:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Kd(){this.f=this.b=null}
var Md=new Fd(function(){return new Ld},function(a){a.reset()});
Kd.prototype.add=function(a,b){var c=Md.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Kd.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Ld(){this.next=this.scope=this.b=null}
Ld.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Ld.prototype.reset=function(){this.next=this.scope=this.b=null};function Nd(a,b){Od||Pd();Qd||(Od(),Qd=!0);Rd.add(a,b)}
var Od;function Pd(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Od=function(){a.then(Sd)}}else Od=function(){var a=Sd;
!Aa(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Id||(Id=Jd()),Id(a)):n.setImmediate(a)}}
var Qd=!1,Rd=new Kd;function Sd(){for(var a;a=Rd.remove();){try{a.b.call(a.scope)}catch(b){Hd(b)}Gd(Md,a)}Qd=!1}
;var Td=B("Firefox"),Ud=sb()||B("iPod"),Vd=B("iPad"),Wd=rb(),Xd=qb(),Yd=pb()&&!tb();var Zd=null,$d=null;function ae(){this.f=-1}
;function be(){this.f=-1;this.f=64;this.b=[];this.o=[];this.A=[];this.j=[];this.j[0]=128;for(var a=1;a<this.f;++a)this.j[a]=0;this.l=this.g=0;this.reset()}
y(be,ae);be.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.l=this.g=0};
function ce(a,b,c){c||(c=0);var d=a.A;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
be.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.o,f=this.g;d<b;){if(0==f)for(;d<=c;)ce(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){ce(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){ce(this,e);f=0;break}}this.g=f;this.l+=b}};
be.prototype.digest=function(){var a=[],b=8*this.l;56>this.g?this.update(this.j,56-this.g):this.update(this.j,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.o[c]=b&255,b/=256;ce(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function de(a,b,c){ua(a)?(this.date=ee(a,b||0,c||1),fe(this,c||1)):Ba(a)?(this.date=ee(a.getFullYear(),a.getMonth(),a.getDate()),fe(this,a.getDate())):(this.date=new Date(Ia()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),fe(this,a))}
function ee(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
k=de.prototype;k.getFullYear=function(){return this.date.getFullYear()};
k.getMonth=function(){return this.date.getMonth()};
k.getDate=function(){return this.date.getDate()};
k.getTime=function(){return this.date.getTime()};
k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
k.add=function(a){if(a.f||a.b){var b=this.getMonth()+a.b+12*a.f,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),fe(this,a.getDate()))};
k.W=function(a){return[this.getFullYear(),$a(this.getMonth()+1),$a(this.getDate())].join(a?"-":"")+""};
k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
k.toString=function(){return this.W()};
function fe(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
k.valueOf=function(){return this.date.valueOf()};
function ge(a,b,c,d,e,f,g){this.date=ua(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():Ia())}
y(ge,de);ge.prototype.add=function(a){de.prototype.add.call(this,a);a.hours&&this.date.setUTCHours(this.date.getUTCHours()+a.hours);a.minutes&&this.date.setUTCMinutes(this.date.getUTCMinutes()+a.minutes);a.seconds&&this.date.setUTCSeconds(this.date.getUTCSeconds()+a.seconds)};
ge.prototype.W=function(a){var b=de.prototype.W.call(this,a);return a?b+" "+$a(this.date.getHours())+":"+$a(this.date.getMinutes())+":"+$a(this.date.getSeconds()):b+"T"+$a(this.date.getHours())+$a(this.date.getMinutes())+$a(this.date.getSeconds())};
ge.prototype.equals=function(a){return this.getTime()==a.getTime()};
ge.prototype.toString=function(){return this.W()};function he(){this.g=this.g;this.j=this.j}
he.prototype.g=!1;he.prototype.U=function(){return this.g};
he.prototype.dispose=function(){this.g||(this.g=!0,this.Z())};
he.prototype.Z=function(){if(this.j)for(;this.j.length;)this.j.shift()()};
function ie(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function je(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function J(a,b){return a.classList?a.classList.contains(b):Ra(je(a),b)}
function K(a,b){a.classList?a.classList.add(b):J(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ke(a,b){if(a.classList)A(b,function(b){K(a,b)});
else{var c={};A(je(a),function(a){c[a]=!0});
A(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function M(a,b){a.classList?a.classList.remove(b):J(a,b)&&(a.className=Na(je(a),function(a){return a!=b}).join(" "))}
function le(a,b){a.classList?A(b,function(b){M(a,b)}):a.className=Na(je(a),function(a){return!Ra(b,a)}).join(" ")}
function me(a,b,c){c?K(a,b):M(a,b)}
function ne(a,b,c){J(a,b)&&(M(a,b),K(a,c))}
function oe(a,b){var c=!J(a,b);me(a,b,c)}
;var pe=!C&&!pb();function qe(a,b){if(/-[a-z]/.test(b))return null;if(pe&&a.dataset){if(rb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var re="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function se(){}
se.prototype.next=function(){throw re;};
se.prototype.J=function(){return this};
function te(a){if(a instanceof se)return a;if("function"==typeof a.J)return a.J(!1);if(za(a)){var b=0,c=new se;c.next=function(){for(;;){if(b>=a.length)throw re;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ue(a,b){if(za(a))try{A(a,b,void 0)}catch(c){if(c!==re)throw c;}else{a=te(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==re)throw c;}}}
function ve(a){if(za(a))return Ta(a);a=te(a);var b=[];ue(a,function(a){b.push(a)});
return b}
;function we(a,b){this.g={};this.b=[];this.K=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof we)for(c=xe(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function xe(a){ye(a);return a.b.concat()}
k=we.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||ze;ye(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ze(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.K=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.K++,this.b.length>2*this.f&&ye(this),!0):!1};
function ye(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.K++);this.g[a]=b};
k.forEach=function(a,b){for(var c=xe(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.J=function(a){ye(this);var b=0,c=this.K,d=this,e=new se;e.next=function(){if(c!=d.K)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw re;var e=d.b[b++];return a?e:d.g[e]};
return e};function Ae(a){var b=[];Be(new Ce,a,b);return b.join("")}
function Ce(){}
function Be(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Be(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),De(d,c),c.push(":"),Be(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":De(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ee={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function De(a,b){b.push('"',a.replace(Fe,function(a){var b=Ee[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ee[a]=b);return b}),'"')}
;function Ge(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Ge.prototype.getHeight=function(){return this.bottom-this.top};
Ge.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Ge.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Ge.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function He(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
He.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
He.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
He.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ie(a,b,c){if(t(b))(b=Je(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Je(c,d);f&&(c.style[f]=e)}}
var Ke={};function Je(a,b){var c=Ke[b];if(!c){var d=cb(b);c=d;void 0===a.style[d]&&(d=(Bb?"Webkit":Ab?"Moz":C?"ms":xb?"O":null)+db(d),void 0!==a.style[d]&&(c=d));Ke[b]=c}return c}
function Le(a,b){var c=ic(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Me(a,b){return Le(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Ne(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Oe(a){if(C&&!(8<=Number(Qb)))return a.offsetParent;var b=ic(a),c=Me(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Me(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Pe(a){for(var b=new Ge(0,Infinity,Infinity,0),c=gc(a),d=c.b.body,e=c.b.documentElement,f=qc(c.b);a=Oe(a);)if(!(C&&0==a.clientWidth||Bb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Me(a,"overflow")){var g=Qe(a),h=new D(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
nc(rc(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Qe(a){var b=ic(a),c=new D(0,0);var d=b?ic(b):document;d=!C||9<=Number(Qb)||oc(gc(d).b)?d.documentElement:d.body;if(a==d)return c;a=Ne(a);b=pc(gc(b).b);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Re(a){a=Ne(a);return new D(a.left,a.top)}
function Se(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Te(a){var b=Ue;if("none"!=Me(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Ue(a){var b=a.offsetWidth,c=a.offsetHeight,d=Bb&&!b&&!c;return r(b)&&!d||!a.getBoundingClientRect?new fc(b,c):(a=Ne(a),new fc(a.right-a.left,a.bottom-a.top))}
function Ve(a){var b=Qe(a);a=Te(a);return new He(b.x,b.y,a.width,a.height)}
function We(a){return"rtl"==Me(a,"direction")}
function Xe(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Ye(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Xe(a,c):0}
var Ze={thin:2,medium:4,thick:6};function $e(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Ze?Ze[c]:Xe(a,c)}
;var af=function(){if(Db){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(eb))?a[1]:"0"}return Cb?(a=/10[_.][0-9_.]+/,(a=a.exec(eb))?a[0].replace(/_/g,"."):"10"):Eb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(eb))?a[1]:""):Fb||Gb||Hb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(eb))?a[1].replace(/_/g,"."):""):""}();function bf(a){return(a=a.exec(eb))?a[1]:""}
var cf=function(){if(Td)return bf(/Firefox\/([0-9.]+)/);if(C||yb||xb)return Ob;if(Xd)return tb()?bf(/CriOS\/([0-9.]+)/):bf(/Chrome\/([0-9.]+)/);if(Yd&&!tb())return bf(/Version\/([0-9.]+)/);if(Ud||Vd){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(eb);if(a)return a[1]+"."+a[2]}else if(Wd)return(a=bf(/Android\s+([0-9.]+)/))?a:bf(/Version\/([0-9.]+)/);return""}();function df(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=Me(h,"position")){var m=Qe(h);if(!l){l=We(h);var p;if(p=l){if(p=Yd)p=0<=ab(cf,10);var u;if(u=Ib)u=0<=ab(af,10);p=Ab||p||u}l=p?-h.scrollLeft:!l||zb&&Pb("8")||"visible"==Me(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;m=ec(m,new D(l,h.scrollTop))}}}h=m||new D;m=Ve(a);if(l=Pe(a)){var q=new He(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,q.left);p=
Math.min(m.left+m.width,q.left+q.width);l<=p&&(u=Math.max(m.top,q.top),q=Math.min(m.top+m.height,q.top+q.height),u<=q&&(m.left=l,m.top=u,m.width=p-l,m.height=q-u))}l=gc(a);u=gc(c);if(l.b!=u.b){p=l.b.body;u=rc(u.b);q=new D(0,0);var L=(L=ic(p))?rc(L):window;b:{try{ub(L.parent);var z=!0;break b}catch(Fc){}z=!1}if(z){z=p;do{var ma=L==u?Qe(z):Re(z);q.x+=ma.x;q.y+=ma.y}while(L&&L!=u&&L!=L.parent&&(z=L.frameElement)&&(L=L.parent))}z=ec(q,Qe(p));!C||9<=Number(Qb)||oc(l.b)||(z=ec(z,pc(l.b)));m.left+=z.x;m.top+=
z.y}a=ef(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new D(b,m.top+(a&1?m.height:0));b=ec(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var U;g&&(U=Pe(c))&&(U.top-=h.y,U.right-=h.x,U.bottom-=h.y,U.left-=h.x);return ff(b,c,d,f,U,g,void 0)}
function ff(a,b,c,d,e,f,g){a=new D(a.x,a.y);var h=ef(b,c);c=Te(b);g=g?new fc(g.width,g.height):new fc(c.width,c.height);a=new D(a.x,a.y);g=new fc(g.width,g.height);var l=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=
4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,m+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,m+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.y<
e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=l}else e=256;l=e}f=new He(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new D(f.left,f.top);g instanceof D?(a=g.x,g=g.y):(a=g,g=void 0);b.style.left=Se(a,!1);b.style.top=Se(g,!1);g=new fc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=oc(gc(ic(b)).b),!C||Pb("10")||g&&Pb("8")?(b=b.style,Ab?b.MozBoxSizing="border-box":Bb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(C?(g=Ye(b,"paddingLeft"),f=Ye(b,"paddingRight"),d=Ye(b,"paddingTop"),h=Ye(b,"paddingBottom"),g=new Ge(d,f,h,g)):(g=Le(b,"paddingLeft"),f=Le(b,"paddingRight"),d=Le(b,"paddingTop"),h=Le(b,"paddingBottom"),g=new Ge(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(g))),!C||9<=Number(Qb)?(f=Le(b,"borderLeftWidth"),d=Le(b,"borderRightWidth"),h=Le(b,"borderTopWidth"),b=Le(b,"borderBottomWidth"),b=new Ge(parseFloat(h),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=$e(b,"borderLeft"),d=$e(b,"borderRight"),h=$e(b,"borderTop"),b=$e(b,"borderBottom"),b=new Ge(h,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function ef(a,b){return(b&8&&We(a)?b^4:b)&-9}
;function gf(a){this.b=0;this.A=void 0;this.j=this.f=this.g=null;this.l=this.o=!1;if(a!=va)try{var b=this;a.call(void 0,function(a){hf(b,2,a)},function(a){hf(b,3,a)})}catch(c){hf(this,3,c)}}
function jf(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
jf.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var kf=new Fd(function(){return new jf},function(a){a.reset()});
function lf(a,b,c){var d=kf.get();d.f=a;d.onRejected=b;d.context=c;return d}
gf.prototype.then=function(a,b,c){return mf(this,Aa(a)?a:null,Aa(b)?b:null,c)};
gf.prototype.then=gf.prototype.then;gf.prototype.$goog_Thenable=!0;gf.prototype.cancel=function(a){0==this.b&&Nd(function(){var b=new nf(a);of(this,b)},this)};
function of(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?of(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):pf(c),qf(c,e,3,b)))}a.g=null}else hf(a,3,b)}
function rf(a,b){a.f||2!=a.b&&3!=a.b||sf(a);a.j?a.j.next=b:a.f=b;a.j=b}
function mf(a,b,c,d){var e=lf(null,null,null);e.b=new gf(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof nf?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;rf(a,e);return e.b}
gf.prototype.L=function(a){this.b=0;hf(this,2,a)};
gf.prototype.S=function(a){this.b=0;hf(this,3,a)};
function hf(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.L,f=a.S;if(d instanceof gf){rf(d,lf(e||va,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ba(d))try{var l=d.then;if(Aa(l)){tf(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.A=c,a.b=b,a.g=null,sf(a),3!=b||c instanceof nf||uf(a,c))}}
function tf(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function sf(a){a.o||(a.o=!0,Nd(a.D,a))}
function pf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.j=null);return b}
gf.prototype.D=function(){for(var a;a=pf(this);)qf(this,a,this.b,this.A);this.o=!1};
function qf(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.l;a=a.g)a.l=!1;if(b.b)b.b.g=null,vf(b,c,d);else try{b.g?b.f.call(b.context):vf(b,c,d)}catch(e){wf.call(null,e)}Gd(kf,b)}
function vf(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function uf(a,b){a.l=!0;Nd(function(){a.l&&wf.call(null,b)})}
var wf=Hd;function nf(a){Ka.call(this,a)}
y(nf,Ka);nf.prototype.name="cancel";function N(a){he.call(this);this.A=1;this.l=[];this.o=0;this.b=[];this.f={};this.D=!!a}
y(N,he);k=N.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.A;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.A=e+3;d.push(e);return e};
function xf(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.P(d),b.apply(void 0,arguments))},a)}
function yf(a,b,c){if(b=a.f[b]){var d=a.b;(b=Qa(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.P(b)}}
k.P=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.o)this.l.push(a),this.b[a+1]=va;else{if(c){var d=Ma(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.H=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];zf(this.b[g+1],this.b[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.P(c)}}return 0!=e}return!1};
function zf(a,b,c){Nd(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(A(b,this.P,this),delete this.f[a])}else this.b.length=0,this.f={}};
function Af(a,b){if(b){var c=a.f[b];return c?c.length:0}c=0;for(var d in a.f)c+=Af(a,d);return c}
k.Z=function(){N.w.Z.call(this);this.clear();this.l.length=0};function Bf(a){this.b=a}
Bf.prototype.set=function(a,b){r(b)?this.b.set(a,Ae(b)):this.b.remove(a)};
Bf.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Bf.prototype.remove=function(a){this.b.remove(a)};function Cf(a){this.b=a}
y(Cf,Bf);function Df(a){this.data=a}
function Ef(a){return!r(a)||a instanceof Df?a:new Df(a)}
Cf.prototype.set=function(a,b){Cf.w.set.call(this,a,Ef(b))};
Cf.prototype.f=function(a){a=Cf.w.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Cf.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ff(a){this.b=a}
y(Ff,Cf);Ff.prototype.set=function(a,b,c){if(b=Ef(b)){if(c){if(c<Ia()){Ff.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ia()}Ff.w.set.call(this,a,b)};
Ff.prototype.f=function(a){var b=Ff.w.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ia()||c&&c>Ia())Ff.prototype.remove.call(this,a);else return b}};function Gf(){}
;function Hf(){}
y(Hf,Gf);Hf.prototype.clear=function(){var a=ve(this.J(!0)),b=this;A(a,function(a){b.remove(a)})};function If(a){this.b=a}
y(If,Hf);k=If.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.J=function(a){var b=0,c=this.b,d=new se;d.next=function(){if(b>=c.length)throw re;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Jf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(Jf,If);function Kf(a,b){this.f=a;this.b=null;if(C&&!(9<=Number(Qb))){Lf||(Lf=new we);this.b=Lf.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Lf.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
y(Kf,Hf);var Mf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Lf=null;function Nf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Mf[a]})}
k=Kf.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(Nf(a),b);Of(this)};
k.get=function(a){a=this.b.getAttribute(Nf(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(Nf(a));Of(this)};
k.J=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new se;d.next=function(){if(b>=c.length)throw re;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Of(this)};
function Of(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Pf(a,b){this.f=a;this.b=b+"::"}
y(Pf,Hf);Pf.prototype.set=function(a,b){this.f.set(this.b+a,b)};
Pf.prototype.get=function(a){return this.f.get(this.b+a)};
Pf.prototype.remove=function(a){this.f.remove(this.b+a)};
Pf.prototype.J=function(a){var b=this.f.J(!0),c=this,d=new se;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};var Qf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Rf(a){return a?decodeURI(a):a}
function Sf(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Tf(a,b,c){if(ya(b))for(var d=0;d<b.length;d++)Tf(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Uf(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Tf(a[d],a[d+1],c);return c.join("&")}
function Vf(a){var b=[],c;for(c in a)Tf(c,a[c],b);return b.join("&")}
function Wf(a,b){var c=2==arguments.length?Uf(arguments[1],0):Uf(arguments,1);return Sf(a,c)}
function Xf(a,b){var c=Vf(b);return Sf(a,c)}
;var Yf=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Zf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",Zf);function $f(a){var b=arguments;if(1<b.length)Zf[b[0]]=b[1];else{b=b[0];for(var c in b)Zf[c]=b[c]}}
function O(a,b){return a in Zf?Zf[a]:b}
function ag(a){return O(a,void 0)}
;function bg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){cg(b)}}:a}
function cg(a,b){var c=v("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=O("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),$f("ERRORS",c))}
;function P(a,b){Aa(a)&&(a=bg(a));return window.setTimeout(a,b)}
function dg(a){window.clearTimeout(a)}
;var eg=v("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.P;N.prototype.publish=N.prototype.H;N.prototype.clear=N.prototype.clear;x("ytPubsubPubsubInstance",eg);var fg=v("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",fg);var gg=v("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",gg);var hg=v("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",hg);
function ig(a,b,c){var d=jg();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){fg[e]&&b.apply(c||window,d)};
try{hg[a]?g():P(g,0)}catch(h){cg(h)}},c);
fg[e]=!0;gg[a]||(gg[a]=[]);gg[a].push(e);return e}return 0}
function kg(a){var b=jg();b&&(ua(a)?a=[a]:t(a)&&(a=[parseInt(a,10)]),A(a,function(a){b.unsubscribeByKey(a);delete fg[a]}))}
function Q(a,b){var c=jg();return c?c.publish.apply(c,arguments):!1}
function lg(a,b){hg[a]=!0;var c=jg();c&&c.publish.apply(c,arguments);hg[a]=!1}
function jg(){return v("ytPubsubPubsubInstance")}
;function mg(a,b,c){a&&(a.dataset?a.dataset[ng(b)]=String(c):a.setAttribute("data-"+b,c))}
function og(a,b){return a?a.dataset?a.dataset[ng(b)]:a.getAttribute("data-"+b):null}
function pg(a,b){a&&(a.dataset?delete a.dataset[ng(b)]:a.removeAttribute("data-"+b))}
var qg={};function ng(a){return qg[a]||(qg[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function R(a,b){this.version=a;this.args=b}
;function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};function rg(){}
function sg(){}
rg.prototype=aa(sg.prototype);rg.prototype.constructor=rg;if(fa)fa(rg,sg);else for(var tg in sg)if("prototype"!=tg)if(Object.defineProperties){var ug=Object.getOwnPropertyDescriptor(sg,tg);ug&&Object.defineProperty(rg,tg,ug)}else rg[tg]=sg[tg];rg.w=sg.prototype;function vg(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():P(a,c||0)}
rg.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
wa(rg);rg.v();var wg=v("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.P;N.prototype.publish=N.prototype.H;N.prototype.clear=N.prototype.clear;x("ytPubsub2Pubsub2Instance",wg);var xg=v("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",xg);var yg=v("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",yg);var zg=v("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",zg);
x("ytPubsub2Pubsub2SkipSubKey",null);function T(a,b){var c=Ag();c&&c.publish.call(c,a.toString(),a,b)}
function Bg(a,b,c){var d=Ag();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=v("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(xg[e])try{if(g&&a instanceof S&&a!=d)try{var f=a.b,h=g;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.K){var p=new f;f.K=p.version}var u=f.K}catch(q){}if(!u||h.version!=u)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(f,Ta(h.args))}catch(q){throw q.message=
"yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(c||window,g)}catch(q){cg(q)}},zg[a.toString()]?v("yt.scheduler.instance")?vg(f,1,void 0):P(f,0):f())});
xg[e]=!0;yg[a.toString()]||(yg[a.toString()]=[]);yg[a.toString()].push(e);return e}
function Cg(a){var b=Ag();b&&(ua(a)&&(a=[a]),A(a,function(a){b.unsubscribeByKey(a);delete xg[a]}))}
function Ag(){return v("ytPubsub2Pubsub2Instance")}
;var Dg=0;function Eg(a){var b=a.__yt_uid_key;b||(b=Fg(),a.__yt_uid_key=b);return b}
function Gg(a,b){a=E(a);b=E(b);return!!Ic(a,function(a){return a===b},!0,void 0)}
function Hg(a,b){var c=kc(document,a,null,b);return c.length?c[0]:null}
function Ig(){var a=document,b;Pa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Jg(){me(document.body,"hide-players",!1);A(jc("preserve-players"),function(a){M(a,"preserve-players")})}
var Fg=v("ytDomDomGetNextId")||function(){return++Dg};
x("ytDomDomGetNextId",Fg);var Kg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Lg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Kg||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
Lg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Lg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Lg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=v("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",kb);var Mg=v("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",Mg);
function Ng(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Ba(e[4])&&Ba(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ng(a,b,c,d);if(e)return e;e=++Mg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Lg(d);if(!Ic(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Lg(b);
b.currentTarget=a;return c.call(a,b)};
g=bg(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Og()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
function Pg(a,b,c){var d=a||document;return V(d,"click",function(a){var e=Ic(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Qg(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Og=Ub(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Rg(a,b,c){return Pg(a,b,function(a){return J(a,c)})}
function Sg(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),A(a,function(a){if(a in kb){var b=kb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Og()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[a]}}))}
;var Tg={},Ug="ontouchstart"in document;function Vg(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Ic(c,function(a){return J(a,b)},!0,d)}
function Wg(a){var b="mouseover"==a.type&&"mouseenter"in Tg||"mouseout"==a.type&&"mouseleave"in Tg,c=a.type in Tg||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Tg[b];for(var d in c.f){var e=Vg(b,d,a.target);e&&!Ic(a.relatedTarget,function(a){return a==e},!0)&&c.H(d,e,b,a)}}if(b=Tg[a.type])for(d in b.f)(e=Vg(a.type,d,a.target))&&b.H(d,e,a.type,a)}}
V(document,"blur",Wg,!0);V(document,"change",Wg,!0);V(document,"click",Wg);V(document,"focus",Wg,!0);V(document,"mouseover",Wg);V(document,"mouseout",Wg);V(document,"mousedown",Wg);V(document,"keydown",Wg);V(document,"keyup",Wg);V(document,"keypress",Wg);V(document,"cut",Wg);V(document,"paste",Wg);Ug&&(V(document,"touchstart",Wg),V(document,"touchend",Wg),V(document,"touchcancel",Wg));function Xg(a){this.l=a;this.A={};this.L=[];this.D=[]}
k=Xg.prototype;k.C=function(a){return G(a,X(this))};
function X(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
k.unregister=function(){kg(this.L);this.L.length=0;Cg(this.D);this.D.length=0};
k.init=va;k.dispose=va;function Yg(a,b,c){a.L.push(ig(b,c,a))}
function Zg(a,b,c){a.D.push(Bg(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=w(c,a);b in Tg||(Tg[b]=new N);Tg[b].subscribe(d,e);a.A[c]=e}
function Z(a,b,c,d){if(b in Tg){var e=Tg[b];yf(e,X(a,d),a.A[c]);0>=Af(e)&&(e.dispose(),delete Tg[b])}delete a.A[c]}
k.O=function(a,b,c){var d=this.i(a,b);if(d&&(d=v(d))){var e=Wa(arguments,2);Va(e,0,0,a);d.apply(null,e)}};
k.i=function(a,b){return og(a,b)};
function $g(a,b){mg(a,"tooltip-text",b)}
;var ah=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};x("yt.uix.widgets_",ah);function bh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ya(b[f])?Ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function ch(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=bh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Xf(a,e)+d}
;function dh(a){a=void 0===a?{}:a;Aa(a)&&(a={callback:a});if(a.gapiHintOverride||O("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=bh(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&ob(a,{_c:{jsl:{h:b}}})}Dd("gapi.iframes:gapi.iframes.style.common",a)}
;function eh(){return v("gapi.iframes.getContext")()}
;function fh(a){R.call(this,1,arguments);this.b=a}
y(fh,R);function gh(a){R.call(this,1,arguments);this.b=a}
y(gh,R);function hh(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
y(hh,R);function ih(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.j=c||null;this.g=d||null;this.source=e||null}
y(ih,R);function jh(a,b,c){R.call(this,1,arguments);this.b=a;this.f=b}
y(jh,R);function kh(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.l=b;this.b=c;this.o=d||null;this.j=e||null;this.g=f||null;this.source=g||null}
y(kh,R);
var lh=new S("subscription-batch-subscribe",fh),mh=new S("subscription-batch-unsubscribe",fh),nh=new S("subscription-subscribe",ih),oh=new S("subscription-subscribe-loading",gh),ph=new S("subscription-subscribe-loaded",gh),qh=new S("subscription-subscribe-success",jh),rh=new S("subscription-subscribe-external",ih),sh=new S("subscription-unsubscribe",kh),th=new S("subscription-unsubscirbe-loading",gh),uh=new S("subscription-unsubscribe-loaded",gh),vh=new S("subscription-unsubscribe-success",gh),wh=
new S("subscription-external-unsubscribe",kh),xh=new S("subscription-enable-ypc",gh),yh=new S("subscription-disable-ypc",gh),zh=new S("subscription-prefs",hh),Ah=new S("subscription-prefs-success",hh),Bh=new S("subscription-prefs-failure",hh);function Ch(){var a=Ig();return a?a:null}
;function Dh(a,b){(a=E(a))&&a.style&&(a.style.display=b?"":"none",me(a,"hid",!b))}
function Eh(a){return(a=E(a))?"none"!=a.style.display&&!J(a,"hid"):!1}
function Fh(a){A(arguments,function(a){!za(a)||a instanceof Element?Dh(a,!0):A(a,function(a){Fh(a)})})}
function Gh(a){A(arguments,function(a){!za(a)||a instanceof Element?Dh(a,!1):A(a,function(a){Gh(a)})})}
;function Hh(){Xg.call(this,"tooltip");this.b=0;this.f={}}
y(Hh,Xg);wa(Hh);k=Hh.prototype;k.register=function(){Y(this,"mouseover",this.V);Y(this,"mouseout",this.M);Y(this,"focus",this.ma);Y(this,"blur",this.ha);Y(this,"click",this.M);Y(this,"touchstart",this.Ha);Y(this,"touchend",this.X);Y(this,"touchcancel",this.X)};
k.unregister=function(){Z(this,"mouseover",this.V);Z(this,"mouseout",this.M);Z(this,"focus",this.ma);Z(this,"blur",this.ha);Z(this,"click",this.M);Z(this,"touchstart",this.Ha);Z(this,"touchend",this.X);Z(this,"touchcancel",this.X);this.dispose();Hh.w.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.M(this.f[a]);this.f={}};
k.V=function(a){if(!(this.b&&1E3>Ia()-this.b)){var b=parseInt(this.i(a,"tooltip-hide-timer"),10);b&&(pg(a,"tooltip-hide-timer"),dg(b));b=w(function(){Ih(this,a);pg(a,"tooltip-show-timer")},this);
var c=parseInt(this.i(a,"tooltip-show-delay"),10)||0;b=P(b,c);mg(a,"tooltip-show-timer",b.toString());a.title&&($g(a,Jh(this,a)),a.title="");b=Ca(a).toString();this.f[b]=a}};
k.M=function(a){var b=parseInt(this.i(a,"tooltip-show-timer"),10);b&&(dg(b),pg(a,"tooltip-show-timer"));b=w(function(){if(a){var b=E(Kh(this,a));b&&(Lh(b),sc(b),pg(a,"content-id"));b=E(Kh(this,a,"arialabel"));sc(b)}pg(a,"tooltip-hide-timer")},this);
b=P(b,50);mg(a,"tooltip-hide-timer",b.toString());if(b=this.i(a,"tooltip-text"))a.title=b;b=Ca(a).toString();delete this.f[b]};
k.ma=function(a,b){this.b=0;this.V(a,b)};
k.ha=function(a){this.b=0;this.M(a)};
k.Ha=function(a,b,c){c.changedTouches&&(this.b=0,(a=Vg(b,X(this),c.changedTouches[0].target))&&this.V(a,b))};
k.X=function(a,b,c){c.changedTouches&&(this.b=Ia(),(a=Vg(b,X(this),c.changedTouches[0].target))&&this.M(a))};
function Mh(a,b,c){$g(b,c);a=a.i(b,"content-id");(a=E(a))&&wc(a,c)}
function Jh(a,b){return a.i(b,"tooltip-text")||b.title}
function Ih(a,b){if(b){var c=Jh(a,b);if(c){var d=E(Kh(a,b));if(!d){d=document.createElement("div");d.id=Kh(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=Nh(a,b),l=Kh(a,b,"content");g.id=l;mg(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var m=Ec(b);l=Kh(a,b,"arialabel");f=document.createElement("div");K(f,X(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;wc(f,m);b.setAttribute("aria-labelledby",l);l=Ch()||document.body;l.appendChild(f);l.appendChild(d);Mh(a,b,c);(c=parseInt(a.i(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",K(g,X(a,"normal-wrap")));g=J(b,X(a,"reverse"));Oh(a,b,d,e,h,g)||Oh(a,b,d,e,h,!g);var p=X(a,"tip-visible");
P(function(){K(d,p)},0)}}}}
function Oh(a,b,c,d,e,f){me(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Te(b);f=new D((h.width-10)/2,f?h.height:0);var l=Qe(b);ff(new D(l.x+f.x,l.y+f.y),c,g);f=nc(window);if(1==c.nodeType)var m=Re(c);else c=c.changedTouches?c.changedTouches[0]:c,m=new D(c.clientX,c.clientY);c=Te(d);var p=Math.floor(c.width/2);g=!!(f.height<m.y+h.height);h=!!(m.y<h.height);l=!!(m.x<p);f=!!(f.width<m.x+p);m=(c.width+3)/-2- -5;a=a.i(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Kh(a,b,c){a=X(a)+Eg(b);c&&(a+="-"+c);return a}
function Nh(a,b){var c=null;Db&&J(b,X(a,"masked"))&&((c=E("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Fh(c)):(c=document.createElement("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function Lh(a){var b=E("yt-uix-tooltip-shared-mask"),c=b&&Ic(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Gh(b),document.body.appendChild(b))}
;function Ph(a){var b=Qh();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=ig("LOGGED_IN",function(b){kg(O("LOGGED_IN_PUBSUB_KEY",void 0));$f("LOGGED_IN",!0);a(b)});
$f("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function Qh(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=Wf(a,"mode","subscribe");a=Wf("/signin?context=popup","next",a);return a=Wf(a,"feature","sub_button")}
x("yt.pubsub.publish",Q);function Rh(a){return O("EXPERIMENT_FLAGS",{})[a]}
;var Sh=Math.pow(2,16)-1,Th=null,Uh=0,Vh={log_event:"events",log_interaction:"interactions"},Wh=Object.create(null);Wh.log_event="GENERIC_EVENT_LOGGING";Wh.log_interaction="INTERACTION_LOGGING";var Xh=new Set(["log_event"]),Yh={},Zh=0,$h=v("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",$h);var ai=v("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",ai);var bi=v("ytLoggingTransportDispatchedStats_")||{};
x("ytLoggingTransportDispatchedStats_",bi);x("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{});function ci(){dg(Zh);if(!lb($h)){for(var a in $h){var b=Yh[a];b&&(di(a,b),delete $h[a])}lb($h)||ei()}}
function ei(){dg(Zh);Zh=P(ci,O("LOGGING_BATCH_TIMEOUT",1E4))}
function fi(a,b){b=void 0===b?"":b;$h[a]=$h[a]||{};$h[a][b]=$h[a][b]||[];return $h[a][b]}
function di(a,b){var c=Vh[a],d=bi[a]||{};bi[a]=d;var e=Math.round(Yf());for(m in $h[a]){var f=b.b;f={client:{hl:f.hb,gl:f.gb,clientName:f.fb,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));O("DELEGATED_SESSION_ID")&&!Rh("pageid_as_header_web")&&(f.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});f={context:f};f[c]=fi(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=ai[m])a:{var h=
m;if(g.videoId)var l="VIDEO";else if(g.playlistId)l="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:h,scope:l}]}delete ai[m];f.requestTimeMs=e;if(g=ag("EVENT_ID"))l=(O("BATCH_CLIENT_COUNTER",void 0)||0)+1,l>Sh&&(l=1),$f("BATCH_CLIENT_COUNTER",l),g={serializedEventId:g,clientCounter:l},f.serializedClientEventId=g,Th&&Uh&&Rh("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Th,
roundtripMs:Uh}),Th=g,Uh=0;gi(b,a,f,{retry:Xh.has(a),onSuccess:hi.bind(this,Yf())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function hi(a){Uh=Math.round(Yf()-a)}
;Ia();var ii=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ji(){if(!ii)return null;var a=ii();return"open"in a?a:null}
;var ki={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},li="app debugcss debugjs expflag force_ad_params forced_experiments absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
mi=!1;
function ni(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Qf)[1]||null,e=Rf(a.match(Qf)[3]||null);d&&e?(d=c,c=a.match(Qf),d=d.match(Qf),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Rf(c.match(Qf)[3]||null)==e&&(Number(c.match(Qf)[4]||null)||null)==(Number(a.match(Qf)[4]||null)||null):!0;d=!!Rh("web_ajax_ignore_global_headers_if_set");for(var f in ki)e=O(ki[f]),!e||!c&&!oi(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||oi(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b}
function pi(a){var b=bh(window.location.search),c={};A(li,function(a){b[a]&&(c[a]=b[a])});
return ch(a,c||{},!1)}
function oi(a,b){var c=O("CORS_HEADER_WHITELIST")||{},d=Rf(a.match(Qf)[3]||null);return d?(c=c[d])?Ra(c,b):!1:!0}
function qi(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ri(a,b);var d=si(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&dg(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.R&&b.R.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.za&&0<b.timeout&&(f=P(function(){e||(e=!0,dg(f),b.za.call(b.context||n))},b.timeout))}else ti(a,b)}
function ti(a,b){var c=b.format||"JSON";a=ri(a,b);var d=si(a,b),e=!1,f,g=ui(a,function(a){if(!e){e=!0;f&&dg(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null,h=400<=a.status&&500>a.status,u=500<=a.status&&600>a.status;if(d||h||u)g=vi(c,a,b.Eb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};h=b.context||n;
d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.R&&b.R.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Ca&&0<b.timeout&&(f=P(function(){e||(e=!0,g.abort(),dg(f))},b.timeout))}
function ri(a,b){b.Gb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=ag("XSRF_FIELD_NAME"),d=b.Ia;d&&(d[c]&&delete d[c],a=ch(a,d||{},!0));return a}
function si(a,b){var c=ag("XSRF_FIELD_NAME"),d=ag("XSRF_TOKEN"),e=b.postBody||"",f=b.G,g=ag("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.Fb||Rf(a.match(Qf)[3]||null)&&!b.withCredentials&&Rf(a.match(Qf)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.G&&b.G[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=bh(e),ob(e,f),e=b.Da&&"JSON"==b.Da?JSON.stringify(e):Vf(e));f=e||f&&!lb(f);!mi&&f&&"POST"!=b.method&&(mi=!0,cg(Error("AJAX request with postData should use POST")));
return e}
function vi(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?wi(b):null)d={},A(b.getElementsByTagName("*"),function(a){d[a.tagName]=xi(a)})}c&&yi(d);
return d}
function yi(a){if(Ba(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=bc(a[b]);a[c]=d}else yi(a[b])}}
function wi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function xi(a){var b="";A(a.childNodes,function(a){b+=a.nodeValue});
return b}
function ui(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&bg(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=ji();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;Rh("debug_forward_web_query_parameters")&&(a=pi(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ni(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;function zi(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Cb||O("AUTHORIZATION"))||(a?b="Bearer "+v("gapi.auth.getToken")().Bb:b=Zc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),Rh("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function Ai(a){a=Object.assign({},a);delete a.Authorization;var b=Zc();if(b){var c=new be;c.update(ag("INNERTUBE_API_KEY"));c.update(b);b=c.digest();za(b);if(!Zd)for(Zd={},$d={},c=0;65>c;c++)Zd[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),$d[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=$d;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,p=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[p],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Bi(){var a=new Jf;(a=a.isAvailable()?new Pf(a,"yt.innertube"):null)||(a=new Kf("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Ff(a):null;this.f=document.domain||window.location.hostname}
Bi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,Ia()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ae(b))}catch(f){return}else e=escape(b);b=this.f;Yc.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
Bi.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Yc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Bi.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Yc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ci=new Bi;function Di(a,b,c,d){if(d)return null;d=Ci.get("nextId",!0)||1;var e=Ci.get("requests",!0)||{};e[d]={method:a,request:b,authState:Ai(c),requestTime:Math.round(Yf())};Ci.set("nextId",d+1,86400,!0);Ci.set("requests",e,86400,!0);return d}
function Ei(a){var b=Ci.get("requests",!0)||{};delete b[a];Ci.set("requests",b,86400,!0)}
function Fi(a){var b=Ci.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Yf())-d.requestTime)){var e=d.authState,f=Ai(zi(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Yf())),gi(a,d.method,e,{}));delete b[c]}}Ci.set("requests",b,86400,!0)}}
;function Gi(){var a=this;this.b={innertubeApiKey:ag("INNERTUBE_API_KEY"),innertubeApiVersion:ag("INNERTUBE_API_VERSION"),fb:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:ag("INNERTUBE_CONTEXT_CLIENT_VERSION"),hb:ag("INNERTUBE_CONTEXT_HL"),gb:ag("INNERTUBE_CONTEXT_GL"),ib:ag("INNERTUBE_HOST_OVERRIDE")||"",jb:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};vg(function(){Fi(a)},0,5E3)}
function gi(a,b,c,d){!O("VISITOR_DATA")&&.01>Math.random()&&cg(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",G:c,Da:"JSON",Ca:function(){},
za:d.Ca,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
ya:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Hb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.ib;g&&(f=g);g=a.b.jb||!1;var h=zi(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&Rh("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Di(b,c,h,g))){var p=e.onSuccess,u=e.ya;e.onSuccess=function(a,b){Ei(m);p(a,b)};
c.ya=function(a,b){Ei(m);u(a,b)}}try{Rh("use_fetch_for_op_xhr")?qi(l,e):(e.method="POST",e.G||(e.G={}),ti(l,e))}catch(q){if("InvalidAccessError"==q)m&&(Ei(m),m=0),cg(Error("An extension is blocking network request."),"WARNING");
else throw q;}m&&vg(function(){Fi(a)},0,5E3)}
;var Hi=Ia().toString();var Ii;
if(!(Ii=v("ytLoggingTimeDocumentNonce_"))){var Ji;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Ki=Array(16),Li=new Uint8Array(16);window.crypto.getRandomValues(Li);for(var Mi=0;Mi<Ki.length;Mi++)Ki[Mi]=Li[Mi];Ji=Ki;break a}catch(a){}for(var Ni=Array(16),Oi=0;16>Oi;Oi++){for(var Pi=Ia(),Qi=0;Qi<Pi%23;Qi++)Ni[Oi]=Math.random();Ni[Oi]=Math.floor(256*Math.random())}if(Hi)for(var Ri=1,Si=0;Si<Hi.length;Si++)Ni[Ri%16]=Ni[Ri%16]^Ni[(Ri-1)%16]/4^Hi.charCodeAt(Si),Ri++;Ji=Ni}for(var Ti=Ji,Ui=
[],Vi=0;Vi<Ti.length;Vi++)Ui.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Ti[Vi]&63));Ii=Ui.join("")}var Wi=Ii;x("ytLoggingTimeDocumentNonce_",Wi);function Xi(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Yi(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
x("yt.logging.screen.getRootVeType",function(a){return O(Yi(void 0===a?0:a),void 0)});
x("yt.logging.screen.getCurrentCsn",function(a){a=void 0===a?0:a;var b=O(Xi(a));b||0!=a||(b=O("EVENT_ID"));return b?b:null});
x("yt.logging.screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==O(Xi(c))||b!==O(Yi(c)))$f(Xi(c),a),$f(Yi(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var b={clientDocumentNonce:Wi,clientScreenNonce:a},c={};c.eventTimeMs=Math.round(Yf());c.foregroundHeartbeatScreenAssociated=b;b=String;var f=v("_lact",window);f=null==f?-1:Math.max(Ia()-f,0);c.context={lastActivityMs:b(f)};b=fi("log_event");b.push(c);Yh.log_event=new Gi;b.length>=(Number(Rh("web_logging_max_batch")||0)||20)?
ci():ei()}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Zi(){Xg.call(this,"button");this.b=null;this.g=[];this.f={}}
y(Zi,Xg);wa(Zi);k=Zi.prototype;k.register=function(){Y(this,"click",this.Ja);Y(this,"keydown",this.qa);Y(this,"keypress",this.ra);Yg(this,"page-scroll",this.bb)};
k.unregister=function(){Z(this,"click",this.Ja);Z(this,"keydown",this.qa);Z(this,"keypress",this.ra);$i(this);this.f={};Zi.w.unregister.call(this)};
k.Ja=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
k.qa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=aj(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=xc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ob;else"table"==e&&(f=this.nb);f&&bj(this,a,b,c,w(f,this))}}};
k.bb=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=G(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;cj(this,d,b,!0)}};
function bj(a,b,c,d,e){var f=Eh(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=dj(a,c)){if(r(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var l=void 0===l?"":l;var m=void 0===m?window:m;m=m.location;h=Xf(b.href,h)+l;h instanceof Vb||h instanceof Vb||(h="object"==typeof h&&h.ba?h.aa():String(h),Xb.test(h)||(h="about:invalid#zClosurez"),h=Yb(h));h instanceof Vb&&h.constructor===
Vb&&h.f===Wb?h=h.b:(xa(h),h="type_error:SafeUrl");m.href=h}else Sg(b)}else g&&ej(a,b);else f?27==d.keyCode?(dj(a,c),ej(a,b)):e(b,c,d):(h=J(b,X(a,"reverse"))?38:40,d.keyCode==h&&(Sg(b),d.preventDefault()))}
k.ra=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=aj(this,a),Eh(a)&&c.preventDefault())};
function dj(a,b){var c=X(a,"menu-item-highlight"),d=F(c,b);d&&M(d,c);return d}
function fj(a,b,c){K(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Ca(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.nb=function(a,b,c){var d=dj(this,b);if(d){var e=Hg("table",b);b=kc(document,"td",null,e);d=gj(d,b,kc(document,"td",null,Hg("tr",e)).length,c);-1!=d&&(fj(this,a,b[d]),c.preventDefault())}};
k.ob=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=dj(this,b);d&&(b=Na(kc(document,"li",null,b),Eh),fj(this,a,b[gj(d,b,1,c)]),c.preventDefault())}};
function gj(a,b,c,d){var e=b.length;a=Ma(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function hj(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=X(a,"menu-mask"),Gh(c),b.iframeMask=c);return c}
function cj(a,b,c,d){var e=G(b,X(a,"group")),f=!!a.i(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Ve(b);if(J(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(p){}}J(b,"flip")&&(J(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.i(b,"button-has-sibling-menu")?l=Oe(e):a.i(b,"button-menu-root-container")&&(l=ij(a,b));C&&!Pb("8")&&(l=null);if(l){var m=Ve(l);m=new Ge(-m.top,m.left,m.top,-m.left)}l=new D(0,1);J(b,X(a,"center-menu"))&&(l.x-=Math.round((Te(c).width-Te(b).width)/
2));d&&(l.y+=pc(document).y);if(a=hj(a,b))b=Te(c),a.style.width=b.width+"px",a.style.height=b.height+"px",df(e,f,a,g,l,m,197),d&&Ie(a,"position","fixed");df(e,f,c,g,l,m,197)}
function ij(a,b){if(a.i(b,"button-menu-root-container")){var c=a.i(b,"button-menu-root-container");return G(b,c)}return document.body}
k.La=function(a){if(a){var b=aj(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.i(a,"button-has-sibling-menu")?c=a.parentNode:c=ij(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=hj(this,a);d&&c.appendChild(d);(c=!!this.i(a,"button-menu-fixed"))&&(this.f[Eg(a).toString()]=b);cj(this,a,b,c);lg("yt-uix-button-menu-before-show",a,b);Fh(b);d&&Fh(d);
this.O(a,"button-menu-action",!0);K(a,X(this,"active"));b=w(this.Ka,this,a,!1);d=w(this.Ka,this,a,!0);c=w(this.xb,this,a,void 0);this.b&&aj(this,this.b)==aj(this,a)||$i(this);Q("yt-uix-button-menu-show",a);W(this.g);this.g=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.b=a}}};
function ej(a,b){if(b){var c=aj(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Gh(c);a.O(b,"button-menu-action",!1);var d=hj(a,b),e=Eg(c).toString();delete a.f[e];P(function(){d&&d.parentNode&&(Gh(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=G(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));le(b,f);Q("yt-uix-button-menu-hide",b);W(a.g);a.g.length=0}}
k.xb=function(a,b){var c=aj(this,a);if(c){b&&(b instanceof Zb?dc(c,ac(b)):wc(c,b));var d=!!this.i(a,"button-menu-fixed");cj(this,a,c,d)}};
k.Ka=function(a,b,c){c=Qg(c);var d=G(c,X(this));if(d){d=aj(this,d);var e=aj(this,a);if(d==e)return}d=G(c,X(this,"menu"));e=d==aj(this,a);var f=J(c,X(this,"menu-item")),g=J(c,X(this,"menu-close"));if(!d||e&&(f||g))ej(this,a),d&&b&&this.i(a,"button-menu-indicate-selected")&&((a=F(X(this,"content"),a))&&wc(a,Ec(c)),jj(this,d,c))};
function jj(a,b,c){var d=X(a,"menu-item-selected");A(jc(d,b),function(a){M(a,d)});
K(c.parentNode,d)}
function aj(a,b){if(!b.widgetMenu){var c=a.i(b,"button-menu-id");c=c&&E(c);var d=X(a,"menu");c?ke(c,[d,X(a,"menu-external")]):c=F(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return J(a,X(this,"toggled"))};
k.toggle=function(a){if(this.i(a,"button-toggle")){var b=G(a,X(this,"group")),c=X(this,"toggled"),d=J(a,c);if(b&&this.i(b,"button-toggle-group")){var e=this.i(b,"button-toggle-group");A(jc(X(this),b),function(b){b!=a||"optional"==e&&d?(M(b,c),b.removeAttribute("aria-pressed")):(K(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),oe(a,c)}};
k.click=function(a){if(aj(this,a)){var b=aj(this,a);if(b){var c=G(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(ej(this,c),P(w(this.La,this,a),1)):Eh(b)?ej(this,a):this.La(a)}a.focus()}this.O(a,"button-action")};
function $i(a){a.b&&ej(a,a.b)}
;function kj(a){Xg.call(this,a);this.g=null}
y(kj,Xg);k=kj.prototype;k.C=function(a){var b=Xg.prototype.C.call(this,a);return b?b:a};
k.register=function(){Yg(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
k.dispose=function(){lj(this);kj.w.dispose.call(this)};
k.i=function(a,b){var c=kj.w.i.call(this,a,b);return c?c:(c=kj.w.i.call(this,a,"card-config"))&&(c=v(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.C(a);if(b){K(b,X(this,"active"));var c=mj(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;nj(this,a,c);var d=X(this,"card-visible"),e=this.i(a,"card-delegate-show")&&this.i(b,"card-action");this.O(b,"card-action",a);this.g=a;Gh(c);P(w(function(){e||(Fh(c),Q("yt-uix-card-show",b,a,c));oj(c);K(c,d);Q("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function mj(a,b,c){var d=c||b,e=X(a,"card");c=pj(a,d);var f=E(X(a,"card")+Eg(d));if(f)return a=F(X(a,"card-body"),f),vc(a,c)||(sc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Eg(d);f.className=e;(d=a.i(d,"card-class"))&&ke(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.i(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;sc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function nj(a,b,c){var d=a.i(b,"orientation")||"horizontal",e=F(X(a,"anchor"),b)||b,f=a.i(b,"position"),g=!!a.i(b,"force-position"),h=a.i(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var p=13;var u=8}else m&&!l?(p=12,u=9):!m&&l?(p=9,u=12):(p=8,u=13);var q=We(document.body);f=We(b);q!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var L=new D(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,L=new D(b.offsetWidth+6,-12);var z=Te(c);f=
Math.min(f,(d?z.height:z.width)-24-6);6>f&&(f=6,d?L.y+=12-b.offsetHeight/2:L.x+=12-b.offsetWidth/2);z=null;g||(z=10);b=X(a,"card-flip");a=X(a,"card-reverse");me(c,b,m);me(c,a,l);z=df(e,p,c,u,L,null,z);!g&&z&&(z&48&&(m=!m,p^=4,u^=4),z&192&&(l=!l,p^=1,u^=1),me(c,b,m),me(c,a,l),df(e,p,c,u,L));h&&(e=parseInt(c.style.top,10),g=pc(document).y,Ie(c,"position","fixed"),Ie(c,"top",e-g+"px"));q&&(c.style.right="",e=Ve(c),e.left=e.left||parseInt(c.style.left,10),g=nc(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=F("yt-uix-card-body-arrow",c);g=F("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!q&&m||q&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=F("yt-uix-card-arrow",c);m=F("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Te(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
k.hide=function(a){if(a=this.C(a)){var b=E(X(this,"card")+Eg(a));b&&(M(a,X(this,"active")),M(b,X(this,"card-visible")),Gh(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(sc(b.cardMask),b.cardMask=null))}};
function lj(a){a.g&&a.hide(a.g)}
k.wb=function(a,b){var c=this.C(a);if(c){if(b){var d=pj(this,c);if(!d)return;b instanceof Zb?dc(d,ac(b)):wc(d,b)}J(c,X(this,"active"))&&(c=mj(this,a,c),nj(this,a,c),Fh(c),oj(c))}};
k.isActive=function(a){return(a=this.C(a))?J(a,X(this,"active")):!1};
function pj(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.i(b,"card-id"))?E(c):F(d,b))||(c=document.createElement("div"));var f=c;M(f,d);K(f,e);b.cardContentNode=c}return c}
function oj(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',ke(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function qj(){Xg.call(this,"kbd-nav")}
var rj;y(qj,Xg);wa(qj);k=qj.prototype;k.register=function(){Y(this,"keydown",this.oa);Yg(this,"yt-uix-kbd-nav-move-in",this.wa);Yg(this,"yt-uix-kbd-nav-move-in-to",this.pb);Yg(this,"yt-uix-kbd-move-next",this.xa);Yg(this,"yt-uix-kbd-nav-move-to",this.T)};
k.unregister=function(){Z(this,"keydown",this.oa);W(rj)};
k.oa=function(a,b,c){var d=c.keyCode;if(a=G(a,X(this)))switch(d){case 13:case 32:this.wa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=qe(a,"kbdNavMoveOut");!c;){c=G(a.parentElement,X(this));if(!c)break a;c=qe(c,"kbdNavMoveOut")}c=E(c);this.T(c);Q("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&J(a,X(this,"list")))switch(d){case 40:this.xa(b,a);break;case 38:d=document.activeElement==a,a=sj(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),tj(this,a[b]))}c.preventDefault()}};
k.wa=function(a){var b=qe(a,"kbdNavMoveIn");b=E(b);uj(this,a,b);this.T(b)};
k.pb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}uj(this,d,a);this.T(a)};
k.T=function(a){if(a)if(Bc(a))a.focus();else{var b=xc(a,function(a){return uc(a)?Bc(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function uj(a,b,c){if(b&&c)if(K(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,pe&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
k.xa=function(a,b){var c=document.activeElement==b,d=sj(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),tj(this,d[c]))};
function tj(a,b){if(b){var c=Hc(b,"LI");c&&(K(c,X(a,"highlight")),rj=V(b,"blur",w(function(a){M(a,X(this,"highlight"));W(rj)},a,c)))}}
function sj(a){if("UL"!=a.tagName.toUpperCase())return[];a=Na(tc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Na(Oa(a,function(a){return Eh(a)?xc(a,function(a){return uc(a)?Bc(a):!1}):!1}),function(a){return!!a})}
;function vj(){Xg.call(this,"menu");this.f=this.b=null;this.g={};this.o={};this.j=null}
y(vj,Xg);wa(vj);function wj(a){var b=vj.v();if(J(a,X(b)))return a;var c=b.C(a);return c?c:G(a,X(b,"content"))==b.b?b.f:null}
k=vj.prototype;k.register=function(){Y(this,"click",this.na);Y(this,"mouseenter",this.Za);Yg(this,"page-scroll",this.cb);Yg(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);xj(this,a)});
this.j=new N};
k.unregister=function(){Z(this,"click",this.na);this.f=this.b=null;W(Xa(ib(this.g)));this.g={};hb(this.o,function(a){sc(a)},this);
this.o={};ie(this.j);this.j=null;vj.w.unregister.call(this)};
k.na=function(a,b,c){a&&(b=yj(this,a),!b.disabled&&Gg(c.target,b)&&zj(this,a))};
k.Za=function(a,b,c){a&&J(a,X(this,"hover"))&&Gg(c.target,yj(this,a))&&zj(this,a,!0)};
k.cb=function(){this.b&&this.f&&Aj(this,this.f,this.b)};
function Aj(a,b,c){var d=Bj(a,b);if(d){var e=Te(c);if(e instanceof fc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Se(e,!0);d.style.height=Se(f,!0)}c==a.b&&(e=9,f=8,J(b,X(a,"reversed"))&&(e^=1,f^=1),J(b,X(a,"flipped"))&&(e^=4,f^=4),a=new D(0,1),d&&df(b,e,d,f,a,null,197),df(b,e,c,f,a,null,197))}
function zj(a,b,c){Cj(a,b)&&!c?xj(a,b):(Dj(a,b),!a.b||Gg(b,a.b)?a.Ma(b):xf(a.j,w(a.Ma,a,b)))}
k.Ma=function(a){if(a){var b=Ej(this,a);if(b){lg("yt-uix-menu-before-show",a,b);this.b?Gg(a,this.b)||xj(this,this.f):(this.f=a,this.b=b,J(a,X(this,"sibling-content"))||(sc(b),document.body.appendChild(b)),b.style.minWidth=yj(this,a).offsetWidth-2+"px");var c=Bj(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);M(b,X(this,"content-hidden"));Aj(this,a,b);ke(yj(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);Q("yt-uix-menu-show",a);Fj(b);Gj(this,a);Q("yt-uix-kbd-nav-move-in-to",
b);var d=w(this.yb,this,a),e=w(this.lb,this,a);c=Ca(a).toString();this.g[c]=[V(b,"click",e),V(document,"click",d)];J(a,X(this,"indicate-selected"))&&(d=w(this.mb,this,a),this.g[c].push(V(b,"click",d)));J(a,X(this,"hover"))&&(a=w(this.ab,this,a),this.g[c].push(V(document,"mousemove",a)))}}};
k.ab=function(a,b){var c=Qg(b);c&&(Gg(c,yj(this,a))||Hj(this,c)||Ij(this,a))};
k.yb=function(a,b){var c=Qg(b);if(c){if(Hj(this,c)){var d=G(c,X(this,"content")),e=Hc(c,"LI");e&&d&&vc(d,e)&&lg("yt-uix-menu-item-clicked",c);c=G(c,X(this,"close-on-select"));if(!c)return;d=wj(c)}xj(this,d||a)}};
function Dj(a,b){if(b){var c=G(b,X(a,"content"));c&&A(jc(X(a),c),function(a){!Gg(a,b)&&Cj(this,a)&&Ij(this,a)},a)}}
function xj(a,b){if(b){var c=[];c.push(b);var d=Ej(a,b);d&&(d=jc(X(a),d),d=Ta(d),c=c.concat(d),A(c,function(a){Cj(this,a)&&Ij(this,a)},a))}}
function Ij(a,b){if(b){var c=Ej(a,b);le(yj(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);K(c,X(a,"content-hidden"));var d=Ej(a,b);d&&lc(d,{"aria-expanded":"false"});(d=Bj(a,b))&&d.parentNode&&sc(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.j&&a.j.H("ROOT_MENU_REMOVED"));Q("yt-uix-menu-hide",b);c=Ca(b).toString();W(a.g[c]);delete a.g[c]}}
k.lb=function(a,b){var c=Qg(b);c&&Jj(this,a,c)};
k.mb=function(a,b){var c=Qg(b);if(c){var d=yj(this,a);if(d&&(c=Hc(c,"LI")))if(c=Ec(c).trim(),d.hasChildNodes()){var e=Zi.v();(d=F(X(e,"content"),d))&&wc(d,c)}else wc(d,c)}};
function Gj(a,b){var c=Ej(a,b);if(c){A(c.children,function(a){"LI"==a.tagName&&lc(a,{role:"menuitem"})});
lc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ca(c),c.id=d);(c=yj(a,b))&&lc(c,{"aria-controls":d})}}
function Jj(a,b,c){var d=Ej(a,b);d&&J(b,X(a,"checked"))&&(a=Hc(c,"LI"))&&(a=F("yt-ui-menu-item-checked-hid",a))&&(A(jc("yt-ui-menu-item-checked",d),function(a){ne(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),ne(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Cj(a,b){var c=Ej(a,b);return c?!J(c,X(a,"content-hidden")):!1}
function Fj(a){A(kc(document,"UL",null,a),function(a){a.tabIndex=0;var b=qj.v();ke(a,[X(b),X(b,"list")])})}
function Ej(a,b){var c=og(b,"menu-content-id");return c&&(c=E(c))?(ke(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:F(X(a,"content"),b)}
function Bj(a,b){var c=Ca(b).toString(),d=a.o[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];A(je(b),function(a){e.push(a+"-mask")});
ke(d,e);a.o[c]=d}return d||null}
function yj(a,b){return F(X(a,"trigger"),b)}
function Hj(a,b){return Gg(b,a.b)||Gg(b,a.f)}
;function Kj(){kj.call(this,"clickcard");this.b={};this.f={}}
y(Kj,kj);wa(Kj);k=Kj.prototype;k.register=function(){Kj.w.register.call(this);Y(this,"click",this.ka,"target");Y(this,"click",this.ja,"close")};
k.unregister=function(){Kj.w.unregister.call(this);Z(this,"click",this.ka,"target");Z(this,"click",this.ja,"close");for(var a in this.b)W(this.b[a]);this.b={};for(a in this.f)W(this.f[a]);this.f={}};
k.ka=function(a,b,c){c.preventDefault();b=Hc(c.target,"button");if(!b||!b.disabled){if(b=this.i(a,"card-target"))a=document,a=t(b)?a.getElementById(b):b;b=this.C(a);this.i(b,"disabled")||(J(b,X(this,"active"))?(this.hide(a),M(b,X(this,"active"))):(this.show(a),K(b,X(this,"active"))))}};
k.show=function(a){Kj.w.show.call(this,a);var b=this.C(a),c=Ca(a).toString();if(!og(b,"click-outside-persists")){if(this.b[c])return;b=V(document,"click",w(this.la,this,a));var d=V(window,"blur",w(this.la,this,a));this.b[c]=[b,d]}a=V(window,"resize",w(this.wb,this,a,void 0));this.f[c]=a};
k.hide=function(a){Kj.w.hide.call(this,a);a=Ca(a).toString();var b=this.b[a];b&&(W(b),this.b[a]=null);if(b=this.f[a])W(b),delete this.f[a]};
k.la=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=G(b.target,c)||G(wj(b.target),c));(d=d||G(document.activeElement,c)||G(wj(document.activeElement),c))||this.hide(a)};
k.ja=function(a){(a=G(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Lj(){kj.call(this,"hovercard")}
y(Lj,kj);wa(Lj);k=Lj.prototype;k.register=function(){Y(this,"mouseenter",this.sa,"target");Y(this,"mouseleave",this.ua,"target");Y(this,"mouseenter",this.ta,"card");Y(this,"mouseleave",this.va,"card")};
k.unregister=function(){Z(this,"mouseenter",this.sa,"target");Z(this,"mouseleave",this.ua,"target");Z(this,"mouseenter",this.ta,"card");Z(this,"mouseleave",this.va,"card")};
k.sa=function(a){if(Mj!=a){Mj&&(this.hide(Mj),Mj=null);var b=w(this.show,this,a),c=parseInt(this.i(a,"delay-show"),10);b=P(b,-1<c?c:200);mg(a,"card-timer",b.toString());Mj=a;a.alt&&(mg(a,"card-alt",a.alt),a.alt="");a.title&&(mg(a,"card-title",a.title),a.title="")}};
k.ua=function(a){var b=parseInt(this.i(a,"card-timer"),10);dg(b);this.C(a).isCardHidable=!0;b=parseInt(this.i(a,"delay-hide"),10);b=-1<b?b:200;P(w(this.eb,this,a),b);if(b=this.i(a,"card-alt"))a.alt=b;if(b=this.i(a,"card-title"))a.title=b};
k.eb=function(a){this.C(a).isCardHidable&&(this.hide(a),Mj=null)};
k.ta=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.va=function(a){a&&this.hide(a.cardTargetNode)};
var Mj=null;function Nj(a,b,c,d,e,f){this.b=a;this.A=null;this.g=F("yt-dialog-fg",this.b)||this.b;if(a=F("yt-dialog-title",this.g)){var g="yt-dialog-title-"+Ca(this.g);a.setAttribute("id",g);this.g.setAttribute("aria-labelledby",g)}this.g.setAttribute("tabindex","-1");this.S=F("yt-dialog-focus-trap",this.b);this.fa=!1;this.j=new N;this.D=[];this.D.push(Rg(this.b,w(this.qb,this),"yt-dialog-dismiss"));this.D.push(V(this.S,"focus",w(this.Ya,this),!0));Oj(this);this.Oa=b;this.Qa=c;this.Pa=d;this.L=e;this.Ra=f;this.o=
this.l=null}
var Pj={LOADING:"loading",zb:"content",Ab:"working"};function Qj(a,b){a.U()||a.j.subscribe("post-all",b)}
function Oj(a){a=F("yt-dialog-fg-content",a.b);var b=[];hb(Pj,function(a){b.push("yt-dialog-show-"+a)});
le(a,b);K(a,"yt-dialog-show-content")}
k=Nj.prototype;
k.show=function(){if(!this.U()){this.A=document.activeElement;if(!this.Pa){this.f||(this.f=E("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=nc(a).height,oc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Fh(this.f)}this.pa();c=Rj(this);Sj(c);this.l=V(document,"keydown",w(this.kb,this));c=this.b;d=ig("player-added",this.pa,this);mg(c,"player-ready-pubsub-key",d);this.Qa&&(this.o=V(document,"click",w(this.vb,this)));Fh(this.b);this.g.setAttribute("tabindex","0");Tj(this);this.L||K(document.body,"yt-dialog-active");$i(Zi.v());lj(Kj.v());lj(Lj.v());Q("yt-ui-dialog-show-complete",this)}};
function Uj(){return Pa(jc("yt-dialog"),function(a){return Eh(a)})}
k.pa=function(){if(!this.Ra){var a=this.b;me(document.body,"hide-players",!0);a&&me(a,"preserve-players",!0)}};
function Rj(a){var b=kc(document,"iframe",null,a.b);A(b,function(a){var b=og(a,"onload");b&&(b=v(b))&&V(a,"load",b);if(b=og(a,"src"))a.src=b},a);
return Ta(b)}
function Sj(a){A(document.getElementsByTagName("iframe"),function(b){-1==Ma(a,b)&&K(b,"iframe-hid")})}
function Vj(){A(jc("iframe-hid"),function(a){M(a,"iframe-hid")})}
k.qb=function(a){a=a.currentTarget;a.disabled||(a=og(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.U()){this.j.H("pre-all");this.j.H("pre-"+a);Gh(this.b);lj(Kj.v());lj(Lj.v());this.g.setAttribute("tabindex","-1");Uj()||(Gh(this.f),this.L||M(document.body,"yt-dialog-active"),Jg(),Vj());this.l&&(W(this.l),this.l=null);this.o&&(W(this.o),this.o=null);var b=this.b;if(b){var c=og(b,"player-ready-pubsub-key");c&&(kg(c),pg(b,"player-ready-pubsub-key"))}this.j.H("post-all");Q("yt-ui-dialog-hide-complete",this);"cancel"==a&&Q("yt-ui-dialog-cancelled",this);this.j&&this.j.H("post-"+
a);this.A&&this.A.focus()}};
k.setTitle=function(a){wc(F("yt-dialog-title",this.b),a)};
k.kb=function(a){P(w(function(){this.Oa||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&J(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.vb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.U=function(){return this.fa};
k.dispose=function(){Eh(this.b)&&this.dismiss("dispose");W(this.D);this.D.length=0;P(w(function(){this.A=null},this),0);
this.S=this.g=null;this.j.dispose();this.j=null;this.fa=!0};
k.Ya=function(a){a.stopPropagation();Tj(this)};
function Tj(a){P(w(function(){this.g&&this.g.focus()},a),0)}
x("yt.ui.Dialog",Nj);function Wj(){Xg.call(this,"overlay");this.j=this.f=this.g=this.b=null}
y(Wj,Xg);wa(Wj);k=Wj.prototype;k.register=function(){Y(this,"click",this.da,"target");Y(this,"click",this.hide,"close");Xj(this)};
k.unregister=function(){Wj.w.unregister.call(this);Z(this,"click",this.da,"target");Z(this,"click",this.hide,"close");this.j&&(kg(this.j),this.j=null);this.f&&(W(this.f),this.f=null)};
k.da=function(a){if(!this.b||!Eh(this.b.b)){var b=this.C(a);a=Yj(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.i(b,"disable-shortcuts")||!1,d=!!this.i(b,"disable-outside-click-dismiss")||!1;this.b=new Nj(a,c);this.g=b;var e=F("yt-dialog-fg",a);if(e){var f=this.i(b,"overlay-class")||"",g=this.i(b,"overlay-style")||"default",h=this.i(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));ke(e,f)}this.b.show();Q("yt-uix-kbd-nav-move-to",e||a);Xj(this);c||
d||(c=w(function(a){J(a.target,"yt-dialog-base")&&Zj(this)},this),this.f=V(F("yt-dialog-base",a),"click",c));
this.O(b,"overlay-shown");Q("yt-uix-overlay-shown",b)}}};
function Xj(a){a.j||(a.j=ig("yt-uix-overlay-hide",ak));a.b&&Qj(a.b,function(){var a=Wj.v();a.g=null;a.b.dispose();a.b=null})}
function Zj(a){if(a.b){var b=a.g;a.b.dismiss("overlayhide");b&&a.O(b,"overlay-hidden");a.g=null;a.f&&(W(a.f),a.f=null);a.b=null}}
function Yj(a,b){var c;if(a)if(c=F("yt-dialog",a)){var d=E("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=G(b,"yt-dialog"));return c}
function bk(){var a=Wj.v();if(a.g)a=F("yt-dialog-fg-content",a.g.overlayContentNode);else a:{if(a=jc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=G(a[b],"yt-dialog");if(Eh(c)){a=a[b];break a}}a=null}return a}
k.hide=function(a){a&&a.disabled||Q("yt-uix-overlay-hide")};
function ak(){Zj(Wj.v())}
k.show=function(a){this.da(a)};var ck={},dk=[];function ek(a){a=G(a,"yt-uix-button-subscription-container");return F("yt-dialog",F("unsubscribe-confirmation-overlay-container",a))}
function fk(a,b){W(dk);dk.length=0;ck[b]||(ck[b]=ek(a));Wj.v().show(ck[b]);var c=bk();return new gf(function(a){dk.push(Rg(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function gk(){var a=O("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!O("SESSION_INDEX")&&!O("LOGGED_IN"))}
;function hk(){Xg.call(this,"subscription-button")}
y(hk,Xg);wa(hk);k=hk.prototype;k.register=function(){Y(this,"click",this.ea);Zg(this,oh,this.Ba);Zg(this,ph,this.Aa);Zg(this,qh,this.tb);Zg(this,th,this.Ba);Zg(this,uh,this.Aa);Zg(this,vh,this.ub);Zg(this,xh,this.sb);Zg(this,yh,this.rb)};
k.unregister=function(){Z(this,"click",this.ea);hk.w.unregister.call(this)};
k.isSubscribed=function(a){return!!this.i(a,"is-subscribed")};
k.ea=function(a){var b=this.i(a,"href"),c=this.i(a,"insecure");if(b)a=this.i(a,"target")||"_self",window.open(b,a);else if(!c)if(gk()){b=this.i(a,"channel-external-id");c=this.i(a,"clicktracking");var d=ik(this,a),e=this.i(a,"parent-url");if(this.i(a,"is-subscribed")){var f=this.i(a,"subscription-id"),g=new kh(b,f,d,a,c,e);jk(this,a)?fk(a,b).then(function(){T(sh,g)}):T(sh,g)}else T(nh,new ih(b,d,c,e))}else kk(this,a)};
k.Ba=function(a){this.N(a.b,this.Fa,!0)};
k.Aa=function(a){this.N(a.b,this.Fa,!1)};
k.tb=function(a){this.N(a.b,this.Ga,!0,a.f)};
k.ub=function(a){this.N(a.b,this.Ga,!1)};
k.sb=function(a){this.N(a.b,this.Xa)};
k.rb=function(a){this.N(a.b,this.Wa)};
k.Ga=function(a,b,c){b?(mg(a,"is-subscribed","true"),c&&mg(a,"subscription-id",c),this.i(a,"show-unsub-confirm-dialog")&&(b=new ge,mg(a,"subscribed-timestamp",(b.getTime()/1E3).toString()))):(pg(a,"is-subscribed"),pg(a,"subscribed-timestamp"),pg(a,"subscription-id"));lk(this,a)};
function ik(a,b){if(!a.i(b,"ypc-enabled"))return null;var c=a.i(b,"ypc-item-type"),d=a.i(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.Fa=function(a,b){var c=G(a,"yt-uix-button-subscription-container");me(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function lk(a,b){var c=a.i(b,"style-type"),d=!!a.i(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;me(b,"yt-uix-button-subscribe"+c,!d);me(b,e,d);a.i(b,"subscriber-count-tooltip")&&!a.i(b,"subscriber-count-show-when-subscribed")&&(c=X(Hh.v()),me(b,c,!d),b.title=d?"":a.i(b,"subscriber-count-title"));d?P(function(){K(b,"hover-enabled")},1E3):M(b,"hover-enabled")}
k.Xa=function(a){var b=!!this.i(a,"ypc-item-type"),c=!!this.i(a,"ypc-item-id");!this.i(a,"ypc-enabled")&&b&&c&&(K(a,"ypc-enabled"),mg(a,"ypc-enabled","true"))};
k.Wa=function(a){this.i(a,"ypc-enabled")&&(M(a,"ypc-enabled"),pg(a,"ypc-enabled"))};
function mk(a,b){return Na(jc(X(a)),function(a){return b==this.i(a,"channel-external-id")},a)}
k.Ta=function(a,b,c){var d=Wa(arguments,2);A(a,function(a){b.apply(this,Sa(a,d))},this)};
k.N=function(a,b,c){var d=mk(this,a);this.Ta.apply(this,Sa([d],Wa(arguments,1)))};
function kk(a,b){var c=w(function(a){a.discoverable_subscriptions&&$f("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ea(b)},a);
Ph(c)}
function jk(a,b){if(!a.i(b,"show-unsub-confirm-dialog"))return!1;var c=a.i(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.i(b,"subscribed-timestamp"),10),(new ge).getTime()<1E3*(c+600))?!0:!1}
;function nk(a){this.b=a;this.F=null;O("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(ok(this),V(this.b,"mouseover",w(this.j,this)),V(this.b,"mouseout",w(this.Y,this)),V(this.b,"click",w(this.Y,this)),Bg(qh,Ha(this.f,!0),this),Bg(vh,Ha(this.f,!1),this),pk(this))}
function ok(a){var b={url:O("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=w(a.g,a);eh().open(b,a)}
function pk(a){gk()||ig("LOGGED_IN",function(){this.F&&(this.Y(),this.F.close(),this.F=null,ok(this))},a)}
nk.prototype.g=function(a){this.F=a;a=hk.v().isSubscribed(this.b);this.f(a)};
nk.prototype.j=function(){this.F&&this.F.restyle({show:!0})};
nk.prototype.Y=function(){this.F&&this.F.restyle({show:!1})};
nk.prototype.f=function(a){if(this.F){a={isSubscribed:a};try{this.F.send("msg-hovercard-subscription",a,void 0,v("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function qk(){dh(function(){var a=Te(E("yt-subscribe"));a={width:a.width,height:a.height};var b=rk;eh().ready(a,null,b)})}
function rk(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=E("yt-subscribe"),c=hk.v();if(b=F(X(c),b))a&&(hk.v(),mg(b,"parent-url",a)),new nk(b)}}
;function sk(a){R.call(this,1,arguments);this.b=a}
y(sk,R);function tk(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
y(tk,R);function uk(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(uk,R);function vk(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
y(vk,R);function wk(a){R.call(this,1,arguments)}
y(wk,R);var xk=new S("ypc-core-load",sk),yk=new S("ypc-guide-sync-success",tk),zk=new S("ypc-purchase-success",uk),Ak=new S("ypc-subscription-cancel",wk),Bk=new S("ypc-subscription-cancel-success",vk),Ck=new S("ypc-init-subscription",wk);var Dk=!1,Ek=[];function Fk(a){a.b?Dk?T(rh,a):T(xk,new sk(function(){T(Ck,new wk(a.b))})):Gk(a.f,a.j,a.g,a.source)}
function Hk(a){a.b?Dk?T(wh,a):T(xk,new sk(function(){T(Ak,new wk(a.b))})):Ik(a.f,a.l,a.j,a.g,a.source)}
function Jk(a){Kk(Ta(a.b))}
function Lk(a){Mk(Ta(a.b))}
function Nk(a){Ok(a.g,a.f,a.b)}
function Pk(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(qh,new jh(b,c,a.b.channelInfo))}
function Qk(a){var b=a.b;hb(a.f,function(a,d){T(qh,new jh(d,a,b[d]))})}
function Rk(a){T(vh,new gh(a.f.itemId));a.b&&a.b.length&&(Sk(a.b,vh),Sk(a.b,xh))}
function Gk(a,b,c,d){var e=new gh(a);T(oh,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=O("PLAYBACK_ID"))&&(c.plid=d);(d=O("EVENT_ID"))&&(c.ei=d);b&&Tk(b,c);ti("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ia:f,G:c,onSuccess:function(b,c){var d=c.response;T(qh,new jh(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Q("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
R:function(){T(ph,e)}})}
function Ik(a,b,c,d,e){var f=new gh(a);T(th,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=O("PLAYBACK_ID"))&&(d.plid=a);(a=O("EVENT_ID"))&&(d.ei=a);c&&Tk(c,d);ti("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ia:g,G:d,onSuccess:function(){T(vh,f)},
R:function(){T(uh,f)}})}
function Ok(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new hh(a,b,c);ti("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",G:d,onError:function(){T(Bh,e)},
onSuccess:function(){T(Ah,e)}})}}
function Kk(a){if(a.length){var b=Va(a,0,40);T("subscription-batch-subscribe-loading");Sk(b,oh);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");Sk(b,ph)};
ti("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",G:c,onSuccess:function(c,f){d();var e=f.response,h=e.id;if(ya(h)&&h.length==b.length){var l=e.channel_info_map;A(h,function(a,c){var d=b[c];T(qh,new jh(d,a,l[d]))});
a.length?Kk(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function Mk(a){if(a.length){var b=Va(a,0,40);T("subscription-batch-unsubscribe-loading");Sk(b,th);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");Sk(b,uh)};
ti("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",G:c,onSuccess:function(){d();Sk(b,vh);a.length&&Mk(a)},
onError:function(){d()}})}}
function Sk(a,b){A(a,function(a){T(b,new gh(a))})}
function Tk(a,b){var c=bh(a),d;for(d in c)b[d]=c[d]}
;x("yt.setConfig",$f);x("yt.config.set",$f);x("ytbin.www.subscribeembed.init",function(){Dk=!0;Ek.push(Bg(nh,Fk),Bg(sh,Hk));Dk||Ek.push(Bg(rh,Fk),Bg(wh,Hk),Bg(lh,Jk),Bg(mh,Lk),Bg(zh,Nk),Bg(zk,Pk),Bg(Bk,Rk),Bg(yk,Qk));var a=hk.v(),b=X(a);b in ah||(a.register(),Yg(a,"yt-uix-init-"+b,a.init),Yg(a,"yt-uix-dispose-"+b,a.dispose),ah[b]=a);qk()});}).call(this);
