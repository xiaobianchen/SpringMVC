/*2015-07-07 09:47:27*/!function(){function t(t){var e,n;try{return e=[].slice.call(t)}catch(r){e=[],n=t.length;for(var a=0;n>a;a++)e.push(t[a]);return e}}function e(t,e){return t&&t.getAttribute?t.getAttribute(e)||"":""}function n(t,e,n){if(t&&t.setAttribute)try{t.setAttribute(e,n)}catch(r){}}function r(t,e){if(t&&t.removeAttribute)try{t.removeAttribute(e)}catch(r){n(t,e,"")}}function a(t){var e,n=t.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*]+)"));return n&&(e=n[1])&&5==e.split(".").length?e:null}function i(t,e){return 0==t.indexOf(e)}function o(t){for(var e=["javascript:","tel:","sms:","mailto:","tmall://"],n=0,r=e.length;r>n;n++)if(i(t,e[n]))return!0}function c(t){return"string"==typeof t}function u(t){return"[object Array]"===Object.prototype.toString.call(t)}function l(t,e){return t.indexOf(e)>=0}function f(t,e){return t.indexOf(e)>-1}function s(t,e){for(var n=0,r=e.length;r>n;n++)if(f(t,e[n]))return be;return ye}function m(t){return c(t)?t.replace(/^\s+|\s+$/g,""):""}function p(t){return"undefined"==typeof t}function d(t,e){var n=e||"";if(t)try{n=decodeURIComponent(t)}catch(r){}return n}function g(){return se=se||he.getElementsByTagName("head")[0],me||(se?me=se.getElementsByTagName("meta"):[])}function h(t,e){var n,r,a=t.split(";"),i=a.length;for(n=0;i>n;n++)r=a[n].split("="),e[m(r[0])||Me]=d(m(r.slice(1).join("=")))}function v(){var t,n,r,a=g(),i=a.length;for(t=0;i>t;t++)if(n=a[t],"aplus-terminal"==e(n,"name")){r=e(n,"content");break}return r}function b(){var t,n,r,a,i=g();for(t=0,n=i.length;n>t;t++)r=i[t],a=e(r,"name"),a==He&&(pe=e(r,Qe))}function y(t){var n,r,a,o,c,u,l=g();if(l)for(n=0,r=l.length;r>n;n++)if(o=l[n],c=e(o,"name"),c==t)return ue=e(o,"content"),ue.indexOf(":")>=0&&(a=ue.split(":"),pe="i"==a[0]?"i":"u",ue=a[1]),u=e(o,Qe),u&&(pe="i"==u?"i":"u"),le=i(ue,"110"),ce=le?Be:ue,be;return ye}function w(){var t,n,r,a=g(),i=a.length;for(t=0;i>t;t++)if(n=a[t],"aplus-touch"==e(n,"name")){r=e(n,"content");break}return r}function x(){return Math.floor(268435456*Math.random()).toString(16)}function N(t){var e,n,r=[];for(e in t)t.hasOwnProperty(e)&&(n=""+t[e],r.push(i(e,Me)?n:e+"="+encodeURIComponent(n)));return r.join("&")}function _(t){var e,n,r,a=[],o=t.length;for(r=0;o>r;r++)e=t[r][0],n=t[r][1],a.push(i(e,Me)?n:e+"="+encodeURIComponent(n));return a.join("&")}function A(t){var e;try{e=m(t.getAttribute("href",2))}catch(n){}return e||""}function k(t,e,n){return"tap"==e?(j(t,n),void 0):(t[De]((Ce?"on":"")+e,function(t){t=t||ge.event;var e=t.target||t.srcElement;n(e)},ye),void 0)}function j(t,e){var n="ontouchend"in document.createElement("div"),r=n?"touchstart":"mousedown";k(t,r,function(t){e&&e(t)})}function O(t){var e=ge.KISSY;e?e.ready(t):ge.jQuery?jQuery(he).ready(t):"complete"===he.readyState?t():k(ge,"load",t)}function E(t,e){var n,r=new Image,a="_img_"+Math.random(),i=-1==t.indexOf("?")?"?":"&",o=e?u(e)?_(e):N(e):"";return ge[a]=r,r.onload=r.onerror=function(){ge[a]=null},r.src=n=o?t+i+o:t,r=null,n}function T(){var t;if(Te&&!Ke&&(t=we.match(/^[^?]+\?[^?]*spm=([^&#?]+)/),t&&(Ke=t[1]+"_")),!p(ce))return ce;if(ge._SPM_a&&ge._SPM_b&&(ie=ge._SPM_a.replace(/^{(\w*|-)}$/g,"$1"),oe=ge._SPM_b.replace(/^{(\w*|-)}$/g,"$1"),ie&&"-"!=ie&&oe&&"-"!=oe))return Le=be,ce=ie+"."+oe,b(),ce;if(y(He)||y("spm-id"),!ce)return Pe=!0,ce=Be,Be;var n,r,a=he.getElementsByTagName("body");return a=a&&a.length?a[0]:null,a&&(n=e(a,He),n&&(r=ce.split("."),ce=r[0]+"."+n)),f(ce,".")||(Pe=!0,ce=Be),ce}function $(n){var r,a,i,o,c,u,l,f,s=[];for(r=t(n.getElementsByTagName("a")),a=t(n.getElementsByTagName("area")),o=r.concat(a),l=0,f=o.length;f>l;l++){for(u=!1,c=i=o[l];(c=c.parentNode)&&c!=n;)if(e(c,He)){u=!0;break}u||s.push(i)}return s}function B(t,n,r){var a,o,u,f,s,m,p,d,g,h,v,b,y,w,x,N,_;if(n=n||t.getAttribute(He)||""){if(a=$(t),u=n.split("."),x=i(n,"110")&&3==u.length,x&&(N=u[2],u[2]="w"+(N||"0"),n=u.join(".")),c(v=T())&&v.match(/^[\w\-\*]+(\.[\w\-\*]+)?$/))if(l(n,".")){if(!i(n,v)){for(f=v.split("."),u=n.split("."),y=0,b=f.length;b>y;y++)u[y]=f[y];n=u.join(".")}}else l(v,".")||(v+=".0"),n=v+"."+n;if(n.match&&n.match(/^[\w\-\*]+\.[\w\-\*]+\.[\w\-\*]+$/)){for(_=parseInt(e(t,"data-spm-max-idx"))||0,w=0,s=_,b=a.length;b>w;w++)o=a[w],m=A(o),m&&(x&&o.setAttribute(We,N),p=o.getAttribute(qe),p&&Y(p)?U(o,p,r):(d=V(o.parentNode),d.a_spm_ab?(h=d.a_spm_ab,g=d.ab_idx):(h=void 0,s++,g=s),p=h?n+"-"+h+"."+(L(o)||g):n+"."+(L(o)||g),U(o,p,r)));t.setAttribute("data-spm-max-idx",s)}}}function P(t){var e,n=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],r=n.length;for(e=0;r>e;e++)if(-1!=t.indexOf(n[e]))return!0;return!1}function M(t){return t?!!t.match(/^[^\?]*\balipay\.(?:com|net)\b/i):ye}function S(t){return t?!!t.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i):ye}function I(t){for(var n;(t=t.parentNode)&&t.tagName!=Ie;)if(n=e(t,Qe))return n;return""}function C(t,e){if(t&&/&?\bspm=[^&#]*/.test(t)&&(t=t.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!e)return t;var n,r,a,i,o,c,u,l="&";if(-1!=t.indexOf("#")&&(a=t.split("#"),t=a.shift(),r=a.join("#")),i=t.split("?"),o=i.length-1,a=i[0].split("//"),a=a[a.length-1].split("/"),c=a.length>1?a.pop():"",o>0&&(n=i.pop(),t=i.join("?")),n&&o>1&&-1==n.indexOf("&")&&-1!=n.indexOf("%")&&(l="%26"),t=t+"?spm="+Ke+e+(n?l+n:"")+(r?"#"+r:""),u=f(c,".")?c.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(u))return 0;!n&&1>=o&&(r||{htm:1,html:1,php:1}.hasOwnProperty(u)||(t+="&file="+c))}return t}function R(t){return t&&we.split("#")[0]==t.split("#")[0]}function U(t,n,r){if(t.setAttribute(qe,n),!r&&!e(t,Je)&&(fe=ge.g_aplus_pv_id,fe&&(n+="."+fe),fe||ce&&ce!=Be)){var a=A(t),c="i"==(e(t,Qe)||I(t)||pe),u=Oe+"tbspm.1.1?logtype=2&spm=";a&&!P(a)&&(c||!(i(a,"#")||R(a)||o(a.toLowerCase())||M(a)||S(a)))&&(c?(u+=n+"&url="+encodeURIComponent(a)+"&cache="+x(),de==t&&E(u)):r||(a=C(a,n))&&D(t,a))}}function D(t,e){var n,r=t.innerHTML;r&&-1==r.indexOf("<")&&(n=he.createElement("b"),n.style.display="none",t.appendChild(n)),t.href=e,n&&t.removeChild(n)}function L(t){var n;return Pe?n="0":(n=e(t,He),n&&n.match(/^d\w+$/)||(n="")),n}function z(t){for(var e,n,r=t;t&&t.tagName!=Se&&t.tagName!=Ie&&t.getAttribute;){if(n=t.getAttribute(He)){e=n,r=t;break}if(!(t=t.parentNode))break}return e&&!/^[\w\-\.]+$/.test(e)&&(e="0"),{spm_c:e,el:r}}function V(t){for(var n,r={},a="";t&&t.tagName!=Se&&t.tagName!=Ie;){if(!a&&(a=e(t,Fe))){n=parseInt(e(t,"data-spm-ab-max-idx"))||0,r.a_spm_ab=a,r.ab_idx=++n,t.setAttribute("data-spm-ab-max-idx",n);break}if(e(t,He))break;t=t.parentNode}return r}function H(t){var e;return t&&(e=t.match(/&?\bspm=([^&#]*)/))?e[1]:""}function Q(t,e){var n=A(t),r=H(n),a=null,i=ce&&2==ce.split(".").length;return i?(a=[ce,0,L(t)||0],U(t,a.join("."),e),void 0):(n&&r&&(n=n.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"").replace(/\?#/,"#"),D(t,n)),void 0)}function Y(t){var e=t.split(".");return e[0]+"."+e[1]==ce}function J(t,n){de=t,Le&&G();var r,a,i=e(t,qe);if(i&&Y(i))U(t,i,n);else{if(r=z(t.parentNode),a=r.spm_c,!a)return Q(t,n),void 0;Pe&&(a="0"),B(r.el,a,n)}}function K(e){if(e&&1==e.nodeType){r(e,"data-spm-max-idx");var n,a=t(e.getElementsByTagName("a")),i=t(e.getElementsByTagName("area")),o=a.concat(i),c=o.length;for(n=0;c>n;n++)r(o[n],qe)}}function W(t){var e=t.parentNode;if(!e)return"";var n=t.getAttribute(He),r=z(e),a=r.spm_c||0;a&&-1!=a.indexOf(".")&&(a=a.split("."),a=a[a.length-1]);var i=ce+"."+a,o=$e[i]||0;return o++,$e[i]=o,n=n||o,i+".i"+n}function q(t){var n,r=t.tagName;return fe=ge.g_aplus_pv_id,"A"!=r&&"AREA"!=r?n=W(t):(J(t,be),n=e(t,qe)),n=(n||"0.0.0.0").split("."),{a:n[0],b:n[1],c:n[2],d:n[3],e:fe}}function F(t,e){if(e||(e=he),he.evaluate)return e.evaluate(t,he,null,9,null).singleNodeValue;for(var n,r=t.split("/");!n&&r.length>0;)n=r.shift();var a,i=/^.+?\[@id="(.+?)"]$/i,o=/^(.+?)\[(\d+)]$/i;return(a=n.match(i))?e=e.getElementById(a[1]):(a=n.match(o))&&(e=e.getElementsByTagName(a[1])[parseInt(a[2])-1]),e?0==r.length?e:F(r.join("/"),e):null}function G(){var t,e,r,a={};for(t in ze)ze.hasOwnProperty(t)&&(e=F(t),e&&(a[t]=1,r=ze[t],n(e,He,("A"==e.tagName?r.spmd:r.spmc)||"")));for(t in a)a.hasOwnProperty(t)&&delete ze[t]}function X(){if(!Ve){if(!ge.spmData)return Ee||setTimeout(arguments.callee,100),void 0;Ve=be;var t,e,n,r,a=ge.spmData.data;if(a&&u(a)){for(t=0,e=a.length;e>t;t++)n=a[t],r=n.xpath,r=r.replace(/^id\("(.+?)"\)(.*)/g,'//*[@id="$1"]$2'),ze[r]={spmc:n.spmc,spmd:n.spmd};G()}}}function Z(){var t,n,r,a,i=he.getElementsByTagName("iframe"),o=i.length;for(n=0;o>n;n++)t=i[n],!t.src&&(r=e(t,Ye))&&(a=q(t),a?(a=[a.a,a.b,a.c,a.d,a.e].join("."),t.src=C(r,a)):t.src=r)}function te(){function t(){e++,e>10&&(n=3e3),Z(),setTimeout(t,n)}var e=0,n=500;t()}function ee(t,e){var n,r,o="gostr",c="locaid",u={};if(h(e,u),n=u[o],r=u[c],n&&r){i(n,"/")&&(n=n.substr(1));var l=q(t),f=[l.a,l.b,l.c,r].join("."),s=n+"."+f,m=["logtype=2","cache="+Math.random(),"autosend=1","spm-cnt="+[l.a,l.b].join(".")+".0.0"],p=a(we);p&&m.push("spm-pre="+p);var d;for(d in u)u.hasOwnProperty(d)&&d!=o&&d!=c&&m.push(d+"="+u[d]);m.length>0&&(s+="?"+m.join("&"));var g,v={gmkey:"",gokey:m.length>0?m.join("&"):""};setTimeout(function(){if(ke&&window.goldlog&&window.goldlog.call&&(g=window.goldlog.windVaneData)){try{v=JSON.stringify(v),"{}"==v&&(v="")}catch(t){v=""}g.functype="2101",g.logkey="/"+n+"."+f,g.logkeyargs=v,g.extendargs="",delete g.spmcnt,delete g.spmpre,delete g.lzsid,window.goldlog.call("WVTBUserTrack","toUT",g)}},300),E(Oe+s),t.setAttribute(qe,f)}}function ne(t){for(var n;t&&t.tagName!=Se;){n=e(t,Je);{if(n){ee(t,n);break}t=t.parentNode}}}function re(){ke&&je?k(he,"tap",ne):k(he,"mousedown",ne)}function ae(t){for(var e;t&&(e=t.tagName);){if("A"==e||"AREA"==e){J(t,ye);break}if(e==Ie||e==Se)break;t=t.parentNode}}var ie,oe,ce,ue,le,fe,se,me,pe,de,ge=window,he=document,ve=location,be=!0,ye=!1,we=ve.href,xe=ve.protocol,Ne="https:"==xe,_e=Ne?xe:"http:",Ae=/TB\-PD/i.test(navigator.userAgent),ke=Ae?!0:v(),je=w(),Oe=_e+(ke?"//wgo.mmstat.com/":"//gm.mmstat.com/"),Ee=ye,Te=parent!==self,$e={},Be="0.0",Pe=!1,Me="::-plain-::",Se="HTML",Ie="BODY",Ce=!!he.attachEvent,Re="attachEvent",Ue="addEventListener",De=Ce?Re:Ue,Le=ye,ze={},Ve=ye,He="data-spm",Qe="data-spm-protocol",Ye="data-spm-src",Je="data-spm-click",Ke="",We="data-spm-wangpu-module-id",qe="data-spm-anchor-id",Fe="data-spm-ab";s(we,["xiaobai.com","admin.taobao.org"])||(O(function(){Ee=be}),T(),X(),ke||te(),re(),ke&&je?k(he,"tap",ae):(k(he,"mousedown",ae),k(he,"keydown",ae)),ge.g_SPM={resetModule:K,anchorBeacon:J,getParam:q})}();/*2015-06-09 05:21:26*/!function(){function t(t,e,r){t[O]((_?"on":"")+e,function(t){t=t||m.event;var e=t.target||t.srcElement;r(t,e)},!1)}function e(){return/&?\bspm=[^&#]*/.test(location.href)?location.href.match(/&?\bspm=[^&#]*/gi)[0].split("=")[1]:""}function r(t,e){if(t&&/&?\bspm=[^&#]*/.test(t)&&(t=t.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!e)return t;var r,a,i,n,o,c,p,m="&";if(-1!=t.indexOf("#")&&(i=t.split("#"),t=i.shift(),a=i.join("#")),n=t.split("?"),o=n.length-1,i=n[0].split("//"),i=i[i.length-1].split("/"),c=i.length>1?i.pop():"",o>0&&(r=n.pop(),t=n.join("?")),r&&o>1&&-1==r.indexOf("&")&&-1!=r.indexOf("%")&&(m="%26"),t=t+"?spm="+e+(r?m+r:"")+(a?"#"+a:""),p=c.indexOf(".")>-1?c.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(p))return 0;!r&&1>=o&&(a||{htm:1,html:1,php:1}.hasOwnProperty(p)||(t+="&file="+c))}return t}function a(t){function e(t){return t=t.replace(/refpos[=(%3D)]\w*/gi,c).replace(n,"%3D"+a+"%26"+i.replace("=","%3D")).replace(o,a),i.length>0&&(t+="&"+i),t}var r=window.location.href,a=r.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i),i=r.match(/[&\?](pvid=[^&]*)/i),n=new RegExp("%3Dmm_\\d+_\\d+_\\d+","ig"),o=new RegExp("mm_\\d+_\\d+_\\d+","ig");i=i&&i[1]?i[1]:"";var c=r.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);return c=c&&c[0]?c[0]:"",a?(a=a[0],e(t)):t}function i(e){var r=m.KISSY;r?r.ready(e):m.jQuery?jQuery(f).ready(e):"complete"===f.readyState?e():t(m,"load",e)}function n(t,e){return t&&t.getAttribute?t.getAttribute(e)||"":""}function o(t){if(t){var e,r=v.length;for(e=0;r>e;e++)if(t.indexOf(v[e])>-1)return!0;return!1}}function c(t,e){if(t&&/&?\bspm=[^&#]*/.test(t)&&(t=t.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!e)return t;var r,a,i,n,o,c,p,m="&";if(-1!=t.indexOf("#")&&(i=t.split("#"),t=i.shift(),a=i.join("#")),n=t.split("?"),o=n.length-1,i=n[0].split("//"),i=i[i.length-1].split("/"),c=i.length>1?i.pop():"",o>0&&(r=n.pop(),t=n.join("?")),r&&o>1&&-1==r.indexOf("&")&&-1!=r.indexOf("%")&&(m="%26"),t=t+"?spm="+e+(r?m+r:"")+(a?"#"+a:""),p=c.indexOf(".")>-1?c.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(p))return 0;!r&&1>=o&&(a||{htm:1,html:1,php:1}.hasOwnProperty(p)||(t+="&__file="+c))}return t}function p(t){if(o(t.href)){var r=n(t,b);if(!r){if(!u)return;var a=u(t),i=[a.a,a.b,a.c,a.d,a.e].join(".");g&&(i=[a.a||"0",a.b||"0",a.c||"0",a.d||"0"].join("."),i=(e()||"0.0.0.0.0")+"_"+i);var p=c(t.href,i);t.href=p,t.setAttribute(b,i)}}t=void 0}var m=window,f=document,s=location,l=(s.href,m._alimm_spmact_on_);if("undefined"==typeof l&&(l=1),1==l&&(l=1),0==l&&(l=0),l){var d=function(){return{a:0,b:0,c:0,d:0,e:0}},u=m.g_SPM&&m.g_SPM.getParam?m.g_SPM.getParam:d,g=!0;try{g=self.location!=top.location}catch(h){}var b="data-spm-act-id",v=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],_=!!f.attachEvent,w="attachEvent",j="addEventListener",O=_?w:j;t(f,"mousedown",function(t,e){for(var r,a=0;e&&(r=e.tagName)&&5>a;){if("A"==r||"AREA"==r){p(e);break}if("BODY"==r||"HTML"==r)break;e=e.parentNode,a++}}),i(function(){for(var t,i,o=document.getElementsByTagName("iframe"),c=0;c<o.length;c++){t=n(o[c],"mmsrc"),i=n(o[c],"mmworked");var p=u(o[c]),m=[p.a||"0",p.b||"0",p.c||"0",p.d||"0",p.e||"0"].join(".");t&&!i?(g&&(m=[p.a||"0",p.b||"0",p.c||"0",p.d||"0"].join("."),m=e()+"_"+m),o[c].src=r(a(t),m),o[c].setAttribute("mmworked","mmworked")):o[c].setAttribute(b,m)}})}}();