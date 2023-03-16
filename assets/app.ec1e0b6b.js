import{s as ue,h as W,w as ce,i as fe,d as pe,I as D,a1 as ge,u as ve,l as he,a2 as ze,a3 as ye,a4 as be,a5 as Ee,a6 as we,a7 as Le,a8 as Ce,a9 as He,aa as Oe,ab as Ae,ac as Se,ad as Te,ae as xe,af as Ie}from"./chunks/framework.9bcd12c4.js";import{t as Pe}from"./chunks/theme.651f0415.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var b=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&(n[m]=i[m])}return n},x=function(t){return t.tagName==="IMG"},Ne=function(t){return NodeList.prototype.isPrototypeOf(t)},I=function(t){return t&&t.nodeType===1},U=function(t){var i=t.currentSrc||t.src;return i.substr(-4).toLowerCase()===".svg"},Y=function(t){try{return Array.isArray(t)?t.filter(x):Ne(t)?[].slice.call(t).filter(x):I(t)?[t].filter(x):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(x):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Re=function(t){var i=document.createElement("div");return i.classList.add("medium-zoom-overlay"),i.style.background=t,i},_e=function(t){var i=t.getBoundingClientRect(),m=i.top,p=i.left,P=i.width,N=i.height,h=t.cloneNode(),R=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,O=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=m+R+"px",h.style.left=p+O+"px",h.style.width=P+"px",h.style.height=N+"px",h.style.transform="",h},L=function(t,i){var m=b({bubbles:!1,cancelable:!1,detail:void 0},i);if(typeof window.CustomEvent=="function")return new CustomEvent(t,m);var p=document.createEvent("CustomEvent");return p.initCustomEvent(t,m.bubbles,m.cancelable,m.detail),p},je=function n(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=window.Promise||function(o){function a(){}o(a,a)},p=function(o){var a=o.target;if(a===S){z();return}g.indexOf(a)!==-1&&Z({target:a})},P=function(){if(!(E||!e.original)){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(q-o)>d.scrollOffset&&setTimeout(z,150)}},N=function(o){var a=o.key||o.keyCode;(a==="Escape"||a==="Esc"||a===27)&&z()},h=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o;if(o.background&&(S.style.background=o.background),o.container&&o.container instanceof Object&&(a.container=b({},d.container,o.container)),o.template){var s=I(o.template)?o.template:document.querySelector(o.template);a.template=s}return d=b({},d,a),g.forEach(function(l){l.dispatchEvent(L("medium-zoom:update",{detail:{zoom:u}}))}),u},R=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(b({},d,o))},O=function(){for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];var l=a.reduce(function(r,f){return[].concat(r,Y(f))},[]);return l.filter(function(r){return g.indexOf(r)===-1}).forEach(function(r){g.push(r),r.classList.add("medium-zoom-image")}),A.forEach(function(r){var f=r.type,v=r.listener,w=r.options;l.forEach(function(y){y.addEventListener(f,v,w)})}),u},X=function(){for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];e.zoomed&&z();var l=a.length>0?a.reduce(function(r,f){return[].concat(r,Y(f))},[]):g;return l.forEach(function(r){r.classList.remove("medium-zoom-image"),r.dispatchEvent(L("medium-zoom:detach",{detail:{zoom:u}}))}),g=g.filter(function(r){return l.indexOf(r)===-1}),u},G=function(o,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.addEventListener("medium-zoom:"+o,a,s)}),A.push({type:"medium-zoom:"+o,listener:a,options:s}),u},K=function(o,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.removeEventListener("medium-zoom:"+o,a,s)}),A=A.filter(function(l){return!(l.type==="medium-zoom:"+o&&l.listener.toString()===a.toString())}),u},F=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.target,s=function(){var r={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},f=void 0,v=void 0;if(d.container)if(d.container instanceof Object)r=b({},r,d.container),f=r.width-r.left-r.right-d.margin*2,v=r.height-r.top-r.bottom-d.margin*2;else{var w=I(d.container)?d.container:document.querySelector(d.container),y=w.getBoundingClientRect(),_=y.width,ee=y.height,te=y.left,oe=y.top;r=b({},r,{width:_,height:ee,left:te,top:oe})}f=f||r.width-d.margin*2,v=v||r.height-d.margin*2;var H=e.zoomedHd||e.original,ne=U(H)?f:H.naturalWidth||f,ae=U(H)?v:H.naturalHeight||v,T=H.getBoundingClientRect(),re=T.top,ie=T.left,j=T.width,k=T.height,de=Math.min(Math.max(j,ne),f)/j,me=Math.min(Math.max(k,ae),v)/k,M=Math.min(de,me),se=(-ie+(f-j)/2+d.margin+r.left)/M,le=(-re+(v-k)/2+d.margin+r.top)/M,B="scale("+M+") translate3d("+se+"px, "+le+"px, 0)";e.zoomed.style.transform=B,e.zoomedHd&&(e.zoomedHd.style.transform=B)};return new m(function(l){if(a&&g.indexOf(a)===-1){l(u);return}var r=function _(){E=!1,e.zoomed.removeEventListener("transitionend",_),e.original.dispatchEvent(L("medium-zoom:opened",{detail:{zoom:u}})),l(u)};if(e.zoomed){l(u);return}if(a)e.original=a;else if(g.length>0){var f=g;e.original=f[0]}else{l(u);return}if(e.original.dispatchEvent(L("medium-zoom:open",{detail:{zoom:u}})),q=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,E=!0,e.zoomed=_e(e.original),document.body.appendChild(S),d.template){var v=I(d.template)?d.template:document.querySelector(d.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",r),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,s()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s()})}else s()})},z=function(){return new m(function(o){if(E||!e.original){o(u);return}var a=function s(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(S),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),E=!1,e.zoomed.removeEventListener("transitionend",s),e.original.dispatchEvent(L("medium-zoom:closed",{detail:{zoom:u}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,o(u)};E=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(L("medium-zoom:close",{detail:{zoom:u}})),e.zoomed.addEventListener("transitionend",a)})},Z=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.target;return e.original?z():F({target:a})},$=function(){return d},J=function(){return g},Q=function(){return e.original},g=[],A=[],E=!1,q=0,d=i,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?d=t:(t||typeof t=="string")&&O(t),d=b({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},d);var S=Re(d.background);document.addEventListener("click",p),document.addEventListener("keyup",N),document.addEventListener("scroll",P),window.addEventListener("resize",z);var u={open:F,close:z,toggle:Z,update:h,clone:R,attach:O,detach:X,on:G,off:K,getOptions:$,getImages:J,getZoomedImage:Q};return u};function ke(n,t){t===void 0&&(t={});var i=t.insertAt;if(!(!n||typeof document>"u")){var m=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css",i==="top"&&m.firstChild?m.insertBefore(p,m.firstChild):m.appendChild(p),p.styleSheet?p.styleSheet.cssText=n:p.appendChild(document.createTextNode(n))}}var Me=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ke(Me);const De=je;const Fe={...Pe,setup(){const n=ue(),t=()=>{new De(".main img",{scrollOffset:0,background:"var(--vp-c-bg-overlay)"})};W(()=>{t()}),ce(()=>n.path,()=>fe(()=>t()))}};function V(n){if(n.extends){const t=V(n.extends);return{...t,...n,async enhanceApp(i){t.enhanceApp&&await t.enhanceApp(i),n.enhanceApp&&await n.enhanceApp(i)}}}return n}const C=V(Fe),Ze=pe({name:"VitePressApp",setup(){const{site:n}=ve();return W(()=>{he(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),ze(),ye(),be(),C.setup&&C.setup(),()=>Ee(C.Layout)}});async function qe(){const n=Ue(),t=Be();t.provide(we,n);const i=Le(n.route);return t.provide(Ce,i),t.component("Content",He),t.component("ClientOnly",Oe),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return i.frontmatter.value}},$params:{get(){return i.page.value.params}}}),C.enhanceApp&&await C.enhanceApp({app:t,router:n,siteData:Ae}),{app:t,router:n,data:i}}function Be(){return Se(Ze)}function Ue(){let n=D,t;return Te(i=>{let m=xe(i);return n&&(t=m),(n||t===m)&&(m=m.replace(/\.js$/,".lean.js")),D&&(n=!1),Ie(()=>import(m),[])},C.NotFound)}D&&qe().then(({app:n,router:t,data:i})=>{t.go().then(()=>{ge(t.route,i.site),n.mount("#app")})});export{qe as createApp};
