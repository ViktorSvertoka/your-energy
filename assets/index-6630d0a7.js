import{A as D,a as se,i as N}from"./05-modal-exercises-65434497.js";const oe=document.querySelector(".js-quote"),re=new D;ae();async function ae(){try{const r=await re.getQuote();le(r)}catch(r){console.log(r)}}function le({author:r,quote:d}){oe.innerHTML=`
  <p class="quote__text">${d}</p>
  <h4 class="quote__author">${r}</h4>
    `}const ce=new D,G=document.querySelector(".js-list");U("Muscles");async function U(r){try{const d=await ce.getFilter(r);de(d)}catch(d){console.log(d)}}function de(r){const d=r.map(({filter:p,name:f,imgURL:n})=>`
  <li class="filters__item">
    <img class="filters__img-first" src="${n}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${p}</h2>
    <p class="filters__text-first">${f}</p>
    </div>
  </li>
    `).join("");G.insertAdjacentHTML("beforeend",d)}document.querySelectorAll(".btnFilters").forEach(r=>{r.addEventListener("click",()=>{const d=r.innerText;G.innerHTML="",U(d)})});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".rating-label"),d=document.querySelector(".rating-value"),p=document.querySelector(".rating-form");let f=0;r.forEach(g=>{g.addEventListener("click",()=>{f=g.dataset.rating,n(f)})});function n(g){d.textContent=g;for(let y=0;y<r.length;y++)y<g?r[y].classList.add("active"):r[y].classList.remove("active")}p.addEventListener("submit",function(g){g.preventDefault();const y=document.querySelector(".rating-email").value,E=document.querySelector(".rating-comment").value;if(!y||!E){alert("Please fill out the email and comment fields");return}alert("Rating submitted successfully!")})});const ue=document.querySelector(".footer__link"),M=document.querySelector(".team__backdrop"),X=document.querySelector(".team__modal-close-btn");function fe(r){r.preventDefault(),M.classList.remove("is-hidden"),document.body.classList.add("modal-open"),pe()}function V(r){r.preventDefault(),r.code==="Escape"&&H()}function P(r){r.target.closest(".team__wrapper")||H()}function Q(r){r.preventDefault(),H()}function pe(){document.addEventListener("keydown",V),M.addEventListener("click",P),X.addEventListener("click",Q)}function H(){document.removeEventListener("keydown",V),M.removeEventListener("click",P),X.removeEventListener("click",Q),M.classList.add("is-hidden"),document.body.classList.remove("modal-open")}ue.addEventListener("click",fe);const R=document.querySelector(".scroll__go-top");R.addEventListener("click",Y);window.addEventListener("scroll",me);function me(){const r=window.pageYOffset,d=document.documentElement.clientHeight;r>d?R.classList.add("scroll__go-top--show"):R.classList.remove("scroll__go-top--show")}function Y(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(Y,0))}var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ge(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var K={exports:{}};(function(r,d){(function(p,f){r.exports=f(p)})(typeof x<"u"?x:window||x.window||x.global,function(p){var f={},n="iziToast";document.querySelector("body");var g=!!/Mobi/.test(navigator.userAgent),y=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),E=typeof InstallTrigger<"u",w="ontouchstart"in document.documentElement,j=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],$={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},C=568,I={};f.children={};var B={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var W=function(o,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(o,i.bubbles,i.cancelable,i.detail),e};W.prototype=window.Event.prototype,window.CustomEvent=W}var v=function(o,i,e){if(Object.prototype.toString.call(o)==="[object Object]")for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&i.call(e,o[t],t,o);else if(o)for(var a=0,c=o.length;a<c;a++)i.call(e,o[a],a,o)},h=function(o,i){var e={};return v(o,function(t,a){e[a]=o[a]}),v(i,function(t,a){e[a]=i[a]}),e},T=function(o){var i=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=o;e.firstChild;)i.appendChild(e.firstChild);return i},ee=function(o){var i=btoa(encodeURIComponent(o));return i.replace(/=/g,"")},te=function(o){return o.substring(0,1)=="#"||o.substring(0,3)=="rgb"||o.substring(0,3)=="hsl"},ne=function(o){try{return btoa(atob(o))==o}catch{return!1}},L=function(){return{move:function(o,i,e,t){var a,c=.3,s=180;t!==0&&(o.classList.add(n+"-dragged"),o.style.transform="translateX("+t+"px)",t>0?(a=(s-t)/s,a<c&&i.hide(h(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),o,"drag")):(a=(s+t)/s,a<c&&i.hide(h(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),o,"drag")),o.style.opacity=a,a<c&&((y||E)&&(o.style.left=t+"px"),o.parentNode.style.opacity=c,this.stopMoving(o,null)))},startMoving:function(o,i,e,t){t=t||window.event;var a=w?t.touches[0].clientX:t.clientX,c=o.style.transform.replace("px)","");c=c.replace("translateX(","");var s=a-c;e.transitionIn&&o.classList.remove(e.transitionIn),e.transitionInMobile&&o.classList.remove(e.transitionInMobile),o.style.transition="",w?document.ontouchmove=function(l){l.preventDefault(),l=l||window.event;var u=l.touches[0].clientX,m=u-s;L.move(o,i,e,m)}:document.onmousemove=function(l){l.preventDefault(),l=l||window.event;var u=l.clientX,m=u-s;L.move(o,i,e,m)}},stopMoving:function(o,i){w?document.ontouchmove=function(){}:document.onmousemove=function(){},o.style.opacity="",o.style.transform="",o.classList.contains(n+"-dragged")&&(o.classList.remove(n+"-dragged"),o.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){o.style.transition=""},400))}}}();return f.setSetting=function(o,i,e){f.children[o][i]=e},f.getSetting=function(o,i){return f.children[o][i]},f.destroy=function(){v(document.querySelectorAll("."+n+"-overlay"),function(o,i){o.remove()}),v(document.querySelectorAll("."+n+"-wrapper"),function(o,i){o.remove()}),v(document.querySelectorAll("."+n),function(o,i){o.remove()}),this.children={},document.removeEventListener(n+"-opened",{},!1),document.removeEventListener(n+"-opening",{},!1),document.removeEventListener(n+"-closing",{},!1),document.removeEventListener(n+"-closed",{},!1),document.removeEventListener("keyup",{},!1),I={}},f.settings=function(o){f.destroy(),I=o,B=h(B,o||{})},v($,function(o,i){f[i]=function(e){var t=h(I,e||{});t=h(o,t||{}),this.show(t)}}),f.progress=function(o,i,e){var t=this,a=i.getAttribute("data-iziToast-ref"),c=h(this.children[a],o||{}),s=i.querySelector("."+n+"-progressbar div");return{start:function(){typeof c.time.REMAINING>"u"&&(i.classList.remove(n+"-reseted"),s!==null&&(s.style.transition="width "+c.timeout+"ms "+c.progressBarEasing,s.style.width="0%"),c.time.START=new Date().getTime(),c.time.END=c.time.START+c.timeout,c.time.TIMER=setTimeout(function(){clearTimeout(c.time.TIMER),i.classList.contains(n+"-closing")||(t.hide(c,i,"timeout"),typeof e=="function"&&e.apply(t))},c.timeout),t.setSetting(a,"time",c.time))},pause:function(){if(typeof c.time.START<"u"&&!i.classList.contains(n+"-paused")&&!i.classList.contains(n+"-reseted")){if(i.classList.add(n+"-paused"),c.time.REMAINING=c.time.END-new Date().getTime(),clearTimeout(c.time.TIMER),t.setSetting(a,"time",c.time),s!==null){var l=window.getComputedStyle(s),u=l.getPropertyValue("width");s.style.transition="none",s.style.width=u}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof c.time.REMAINING<"u"?(i.classList.remove(n+"-paused"),s!==null&&(s.style.transition="width "+c.time.REMAINING+"ms "+c.progressBarEasing,s.style.width="0%"),c.time.END=new Date().getTime()+c.time.REMAINING,c.time.TIMER=setTimeout(function(){clearTimeout(c.time.TIMER),i.classList.contains(n+"-closing")||(t.hide(c,i,"timeout"),typeof e=="function"&&e.apply(t))},c.time.REMAINING),t.setSetting(a,"time",c.time)):this.start()},reset:function(){clearTimeout(c.time.TIMER),delete c.time.REMAINING,t.setSetting(a,"time",c.time),i.classList.add(n+"-reseted"),i.classList.remove(n+"-paused"),s!==null&&(s.style.transition="none",s.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},f.hide=function(o,i,e){typeof i!="object"&&(i=document.querySelector(i));var t=this,a=h(this.children[i.getAttribute("data-iziToast-ref")],o||{});a.closedBy=e||null,delete a.time.REMAINING,i.classList.add(n+"-closing"),function(){var l=document.querySelector("."+n+"-overlay");if(l!==null){var u=l.getAttribute("data-iziToast-ref");u=u.split(",");var m=u.indexOf(String(a.ref));m!==-1&&u.splice(m,1),l.setAttribute("data-iziToast-ref",u.join()),u.length===0&&(l.classList.remove("fadeIn"),l.classList.add("fadeOut"),setTimeout(function(){l.remove()},700))}}(),a.transitionIn&&i.classList.remove(a.transitionIn),a.transitionInMobile&&i.classList.remove(a.transitionInMobile),g||window.innerWidth<=C?a.transitionOutMobile&&i.classList.add(a.transitionOutMobile):a.transitionOut&&i.classList.add(a.transitionOut);var c=i.parentNode.offsetHeight;i.parentNode.style.height=c+"px",i.style.pointerEvents="none",(!g||window.innerWidth>C)&&(i.parentNode.style.transitionDelay="0.2s");try{var s=new CustomEvent(n+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(s)}catch(l){console.warn(l)}setTimeout(function(){i.parentNode.style.height="0px",i.parentNode.style.overflow="",setTimeout(function(){delete t.children[a.ref],i.parentNode.remove();try{var l=new CustomEvent(n+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(u){console.warn(u)}typeof a.onClosed<"u"&&a.onClosed.apply(null,[a,i,e])},1e3)},200),typeof a.onClosing<"u"&&a.onClosing.apply(null,[a,i,e])},f.show=function(o){var i=this,e=h(I,o||{});if(e=h(B,e),e.time={},e.id===null&&(e.id=ee(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+n+"#"+e.id).length>0)return!1}catch{console.warn("["+n+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{v(document.querySelectorAll("."+n+"#"+e.id),function(s,l){i.hide(e,s,"replaced")})}catch{console.warn("["+n+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),f.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(n),t.toast.classList.add(n+"-opening"),t.toastCapsule.classList.add(n+"-capsule"),t.toastBody.classList.add(n+"-body"),t.toastTexts.classList.add(n+"-texts"),g||window.innerWidth<=C?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var s=e.class.split(" ");v(s,function(l,u){t.toast.classList.add(l)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(n+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(n+"-layout"+e.layout),e.balloon&&t.toast.classList.add(n+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(n+"-theme-"+e.theme),e.color&&(te(e.color)?t.toast.style.background=e.color:t.toast.classList.add(n+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(n+"-cover"),t.cover.style.width=e.imageWidth+"px",ne(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(n+"-close"),t.buttonClose.addEventListener("click",function(s){s.target,i.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(n+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(s){i.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(s){i.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(s){i.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(s){i.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",n+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",n+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(n+"-title"),t.strong.appendChild(T(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(n+"-message"),t.p.appendChild(T(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var a;(function(){e.inputs.length>0&&(t.inputs.classList.add(n+"-inputs"),v(e.inputs,function(s,l){t.inputs.appendChild(T(s[0])),a=t.inputs.childNodes,a[l].classList.add(n+"-inputs-child"),s[3]&&setTimeout(function(){a[l].focus()},300),a[l].addEventListener(s[1],function(u){var m=s[2];return m(i,t.toast,this,u)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(n+"-buttons"),v(e.buttons,function(s,l){t.buttons.appendChild(T(s[0]));var u=t.buttons.childNodes;u[l].classList.add(n+"-buttons-child"),s[2]&&setTimeout(function(){u[l].focus()},300),u[l].addEventListener("click",function(m){m.preventDefault();var ie=s[1];return ie(i,t.toast,this,m,a)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var s=t.toast.offsetHeight,l=t.toast.currentStyle||window.getComputedStyle(t.toast),u=l.marginTop;u=u.split("px"),u=parseInt(u[0]);var m=l.marginBottom;m=m.split("px"),m=parseInt(m[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=s+m+u+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&i.progress(e,t.toast).start()},100)}(),function(){var s=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(n+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(j.indexOf(e.position)==-1){console.warn("["+n+`] Incorrect position.
It can be › `+j);return}g||window.innerWidth<=C?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?s=n+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?s=n+"-wrapper-topCenter":s=n+"-wrapper-center":s=n+"-wrapper-"+s,t.wrapper=document.querySelector("."+n+"-wrapper."+s),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(n+"-wrapper"),t.wrapper.classList.add(s),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+n+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+n+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+n+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(n+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(s){i.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(n+"-animateInside");var s=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(s=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},s[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},s[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},s[2]);var l=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){v(t.buttons.childNodes,function(u,m){setTimeout(function(){u.classList.add("revealIn")},l),l=l+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(l=150,v(t.inputs.childNodes,function(u,m){setTimeout(function(){u.classList.add("revealIn")},l),l=l+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var c=new CustomEvent(n+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(c)}catch(s){console.warn(s)}setTimeout(function(){t.toast.classList.remove(n+"-opening"),t.toast.classList.add(n+"-opened");try{var s=new CustomEvent(n+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(s)}catch(l){console.warn(l)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(w?(t.toast.addEventListener("touchstart",function(s){L.startMoving(this,i,e,s)},!1),t.toast.addEventListener("touchend",function(s){L.stopMoving(this,s)},!1)):(t.toast.addEventListener("mousedown",function(s){s.preventDefault(),L.startMoving(this,i,e,s)},!1),t.toast.addEventListener("mouseup",function(s){s.preventDefault(),L.stopMoving(this,s)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(s){s=s||window.event,s.keyCode==27&&i.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(s){i.hide(e,t.toast,"toast")}),i.toast=t.toast},f})})(K);var ve=K.exports;const k=ge(ve);const z={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topRight",transitionIn:"fadeInDown",transitionOut:"fadeOutUp"};class S{static success(d){k.success({title:"OK",titleColor:"green",message:d,messageColor:"green",progressBarColor:"green",...z})}static error(d){k.error({title:"Error",titleColor:"red",message:d,messageColor:"red",progressBarColor:"red",...z})}static warning(d){k.warning({title:"Caution",message:d,titleColor:"red",messageColor:"red",progressBarColor:"red",...z})}}const O=document.getElementById("subscribeForm"),J=O.querySelector('input[name="email"]'),F=document.getElementById("subscribeBtn");J.addEventListener("input",he);O.addEventListener("submit",be);function ye(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}function he(){J.value}async function be(r){r.preventDefault();const d=new FormData(O),p=d.get("email");if(!ye(p))return console.error("Invalid email address"),S.error("Invalid email address");try{F.disabled=!0;const n=await se.post("https://your-energy.b.goit.study/api/subscription",d,{headers:{"Content-Type":"application/json"}});return n.status>=200&&n.status<300?(O.reset(),S.success(`${n.data.message}`)):(console.error("Server Error:",n.status,n.statusText),S.error(`Server Error: ${n.status} ${n.statusText}`))}catch(n){return console.error("Error:",n.message),S.error(`Error: ${n.message}`)}finally{F.disabled=!1}}const Le=new D,A=document.querySelector(".js-list");A.addEventListener("click",Ee);async function Ee(r){if(!r.target.closest(".filters__item"))return;const d=r.target.closest(".filters__item");let p=d.lastElementChild.children[0].innerText.toLowerCase().replace(/\s/g,"");const f=d.lastElementChild.children[1].innerText.toLowerCase().replace(/\s/g,"%20");p==="bodyparts"&&(p="bodypart");try{const n=await Le.getExercises(p,f);we(n)}catch(n){console.log(n)}}function we(r){A.innerHTML="";const d=r.map(({_id:p,rating:f,name:n,burnedCalories:g,bodyPart:y,target:E})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${f}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${N}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${p}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${N}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${N}#icon-running-stick-figure"></use>
                </svg>
                <h2 class="card__title">${n}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${g}</p>
                <p class="card__text-info"><span>Body part:</span>${y}</p>
                <p class="card__text-info"><span>Target:</span>${E}</p>
              </div>
        </div>
      </li>`).join("");A.insertAdjacentHTML("beforeend",d)}document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".exercises__btn");r.forEach(d=>{d.addEventListener("click",()=>{r.forEach(p=>p.classList.remove("active")),d.classList.add("active")})})});var b=document.getElementById("mySVG");b.style.transform="scale(1)";b.style.transition="fill 0.3s ease, transform 0.3s ease";var Z=["var(--color-yellow)","var(--color-black)","var(--color-valid)"],q=0;b.addEventListener("mouseover",function(){b.style.fill=Z[q],b.style.transform="scale(1.6) rotate(145deg)"});b.addEventListener("mouseout",function(){b.style.transform="scale(1) rotate(0deg)",q=(q+1)%Z.length});const Ce=document.getElementById("btn"),Ie=document.getElementById("bmi-result"),_=document.getElementById("weight-condition");function Te(){const r=document.getElementById("height").value/100,p=(document.getElementById("weight").value/(r*r)).toFixed(1);Ie.value=p,p<18.5?_.innerText="Under weight":p>=18.5&&p<=24.9?_.innerText="Normal weight":p>=25&&p<=29.9?_.innerText="Overweight":p>=30&&(_.innerText="Obesity")}Ce.addEventListener("click",Te);
