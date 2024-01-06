import{A as V,i as D,a as Ee}from"./05-modal-exercises-e1c62cac.js";const we=new V,P=document.querySelector(".js-list"),ee=document.getElementById("pagination-numbers");let S=1;$("Muscles",S);async function $(r,c){try{const{results:f,totalPages:l}=await we.getFilter(r,c);Ie({results:f,totalPages:l}),Ce(f)}catch(f){console.log(f)}}function Ce(r){P.innerHTML="";const c=r.map(({filter:f,name:l,imgURL:n})=>`
  <li class="filters__item">
    <img class="filters__img-first" src="${n}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${f}</h2>
    <p class="filters__text-first">${l}</p>
    </div>
  </li>
    `).join("");P.insertAdjacentHTML("beforeend",c)}document.querySelectorAll(".btnFilters").forEach(r=>{r.addEventListener("click",()=>{const c=r.innerText;P.innerHTML="",S=1,$(c,S)})});function Ie({results:r,totalPages:c}){if(ee.innerHTML="",c<=1)return;const f=r[0].filter;for(let l=1;l<=c;l++){const n=document.createElement("button");n.className="pagination-button",n.textContent=l,ee.appendChild(n),n.addEventListener("click",()=>{xe(f,l)})}ie()}async function xe(r,c){S=c,await $(r,S),ie(),Te()}const ie=()=>{document.querySelectorAll(".pagination-button").forEach((r,c)=>{r.classList.remove("active-btn"),c+1===S&&r.classList.add("active-btn")})};function Te(){window.scrollTo({top:830,behavior:"auto"})}const oe=new V,F=document.querySelector(".js-list"),te=document.getElementById("pagination-numbers"),se=document.querySelector(".search__form"),re=document.querySelector(".exersices__span"),G=document.querySelector(".exersices__text");let A=1;F.addEventListener("click",Se);async function Se(r){if(!r.target.closest(".filters__item"))return;se.classList.remove("hidden");const c=r.target.closest(".filters__item");let f=c.lastElementChild.children[0].innerText.toLowerCase().replace(/\s/g,"");const l=c.lastElementChild.children[1].innerText.toLowerCase().replace(/\s/g,"%20");f==="bodyparts"&&(f="bodypart");const n={filter:f,name:l};localStorage.setItem("paramSearch",JSON.stringify(n));try{const{results:v,totalPages:E}=await oe.getExercises(f,l,A);le({filter:f,name:l,totalPages:E}),J(v),ae(v)}catch(v){console.log(v)}}function ae(r){G.innerText=`${r[0].bodyPart}`,G.classList.remove("hidden"),re.classList.remove("hidden")}function J(r){F.innerHTML="";const c=r.map(({_id:f,rating:l,name:n,burnedCalories:v,bodyPart:E,target:_})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${l}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${D}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${f}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${D}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
              <div class="card__title-svg-btn">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${D}#icon-running-stick-figure"></use>
                </svg>
                </div>
                <h2 class="card__title">${n}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${v}</p>
                <p class="card__text-info"><span>Body part:</span>${E}</p>
                <p class="card__text-info"><span>Target:</span>${_}</p>
              </div>
        </div>
      </li>`).join("");F.insertAdjacentHTML("beforeend",c)}document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".exercises__btn");r.forEach(c=>{c.addEventListener("click",()=>{r.forEach(f=>f.classList.remove("active")),c.classList.add("active"),se.classList.add("hidden"),G.classList.add("hidden"),re.classList.add("hidden")})})});async function _e(r,c,f){A=f;try{const{results:l,totalPages:n}=await oe.getExercises(r,c,A);le({filter:r,name:c,totalPages:n}),J(l),ae(l)}catch(l){console.log(l)}ce(),ke()}function le({filter:r,name:c,totalPages:f}){if(te.innerHTML="",!(f<=1)){for(let l=1;l<=f;l++){const n=document.createElement("button");n.className="pagination-button",n.textContent=l,te.appendChild(n),n.addEventListener("click",()=>{_e(r,c,l)})}ce()}}const ce=()=>{document.querySelectorAll(".pagination-button").forEach((r,c)=>{r.classList.remove("active-btn"),c+1===A&&r.classList.add("active-btn")})};function ke(){window.scrollTo({top:830,behavior:"auto"})}const Me=new V,Be=document.querySelector(".search__button"),de=document.querySelector(".search__input");Be.addEventListener("click",function(r){r.preventDefault(),ue()});de.addEventListener("keydown",function(r){r.key==="Enter"&&(r.preventDefault(),ue())});async function ue(r){const{filter:c,name:f}=JSON.parse(localStorage.getItem("paramSearch")),l=de.value.trim();if(l!=="")try{const n=await Me.getSearch(c,f,l);J(n)}catch(n){console.log(n)}}const Y=document.querySelector(".modal-exercises"),q=document.querySelector(".modal-rating"),Ne=document.querySelector(".rating-close-btn");Y.addEventListener("click",Oe);Ne.addEventListener("click",K);q.addEventListener("click",Ae);document.addEventListener("keydown",ze);function Oe(r){r.target.closest(".modal-exercises__btn-rating")&&(q.classList.remove("is-hidden"),Y.classList.add("hidden"))}function K(){q.classList.add("is-hidden"),Y.classList.remove("hidden")}function Ae(r){r.target==q&&K()}function ze(r){r.key==="Escape"&&K()}const qe=document.querySelector(".footer__link"),R=document.querySelector(".team__backdrop"),fe=document.querySelector(".team__modal-close-btn");function Re(r){r.preventDefault(),De(),He()}function pe(r){r.code==="Escape"&&Q()}function me(r){r.target.closest(".team__wrapper")||Q()}function ge(r){r.preventDefault(),Q()}function He(){document.addEventListener("keydown",pe),R.addEventListener("click",me),fe.addEventListener("click",ge)}function Q(){document.removeEventListener("keydown",pe),R.removeEventListener("click",me),fe.removeEventListener("click",ge),je()}function De(){R.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function je(){R.classList.add("is-hidden"),document.body.classList.remove("modal-open")}qe.addEventListener("click",Re);const U=document.querySelector(".scroll__go-top");U.addEventListener("click",ve);window.addEventListener("scroll",We);function We(){const r=window.pageYOffset,c=document.documentElement.clientHeight;r>c?U.classList.add("scroll__go-top--show"):U.classList.remove("scroll__go-top--show")}function ve(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(ve,0))}var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pe(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var he={exports:{}};(function(r,c){(function(f,l){r.exports=l(f)})(typeof N<"u"?N:window||N.window||N.global,function(f){var l={},n="iziToast";document.querySelector("body");var v=!!/Mobi/.test(navigator.userAgent),E=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),_=typeof InstallTrigger<"u",L="ontouchstart"in document.documentElement,k=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],M={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},w=568,C={};l.children={};var T={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var B=function(s,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(s,i.bubbles,i.cancelable,i.detail),e};B.prototype=window.Event.prototype,window.CustomEvent=B}var g=function(s,i,e){if(Object.prototype.toString.call(s)==="[object Object]")for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&i.call(e,s[t],t,s);else if(s)for(var a=0,u=s.length;a<u;a++)i.call(e,s[a],a,s)},y=function(s,i){var e={};return g(s,function(t,a){e[a]=s[a]}),g(i,function(t,a){e[a]=i[a]}),e},I=function(s){var i=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=s;e.firstChild;)i.appendChild(e.firstChild);return i},H=function(s){var i=btoa(encodeURIComponent(s));return i.replace(/=/g,"")},b=function(s){return s.substring(0,1)=="#"||s.substring(0,3)=="rgb"||s.substring(0,3)=="hsl"},Z=function(s){try{return btoa(atob(s))==s}catch{return!1}},h=function(){return{move:function(s,i,e,t){var a,u=.3,o=180;t!==0&&(s.classList.add(n+"-dragged"),s.style.transform="translateX("+t+"px)",t>0?(a=(o-t)/o,a<u&&i.hide(y(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),s,"drag")):(a=(o+t)/o,a<u&&i.hide(y(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),s,"drag")),s.style.opacity=a,a<u&&((E||_)&&(s.style.left=t+"px"),s.parentNode.style.opacity=u,this.stopMoving(s,null)))},startMoving:function(s,i,e,t){t=t||window.event;var a=L?t.touches[0].clientX:t.clientX,u=s.style.transform.replace("px)","");u=u.replace("translateX(","");var o=a-u;e.transitionIn&&s.classList.remove(e.transitionIn),e.transitionInMobile&&s.classList.remove(e.transitionInMobile),s.style.transition="",L?document.ontouchmove=function(d){d.preventDefault(),d=d||window.event;var p=d.touches[0].clientX,m=p-o;h.move(s,i,e,m)}:document.onmousemove=function(d){d.preventDefault(),d=d||window.event;var p=d.clientX,m=p-o;h.move(s,i,e,m)}},stopMoving:function(s,i){L?document.ontouchmove=function(){}:document.onmousemove=function(){},s.style.opacity="",s.style.transform="",s.classList.contains(n+"-dragged")&&(s.classList.remove(n+"-dragged"),s.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){s.style.transition=""},400))}}}();return l.setSetting=function(s,i,e){l.children[s][i]=e},l.getSetting=function(s,i){return l.children[s][i]},l.destroy=function(){g(document.querySelectorAll("."+n+"-overlay"),function(s,i){s.remove()}),g(document.querySelectorAll("."+n+"-wrapper"),function(s,i){s.remove()}),g(document.querySelectorAll("."+n),function(s,i){s.remove()}),this.children={},document.removeEventListener(n+"-opened",{},!1),document.removeEventListener(n+"-opening",{},!1),document.removeEventListener(n+"-closing",{},!1),document.removeEventListener(n+"-closed",{},!1),document.removeEventListener("keyup",{},!1),C={}},l.settings=function(s){l.destroy(),C=s,T=y(T,s||{})},g(M,function(s,i){l[i]=function(e){var t=y(C,e||{});t=y(s,t||{}),this.show(t)}}),l.progress=function(s,i,e){var t=this,a=i.getAttribute("data-iziToast-ref"),u=y(this.children[a],s||{}),o=i.querySelector("."+n+"-progressbar div");return{start:function(){typeof u.time.REMAINING>"u"&&(i.classList.remove(n+"-reseted"),o!==null&&(o.style.transition="width "+u.timeout+"ms "+u.progressBarEasing,o.style.width="0%"),u.time.START=new Date().getTime(),u.time.END=u.time.START+u.timeout,u.time.TIMER=setTimeout(function(){clearTimeout(u.time.TIMER),i.classList.contains(n+"-closing")||(t.hide(u,i,"timeout"),typeof e=="function"&&e.apply(t))},u.timeout),t.setSetting(a,"time",u.time))},pause:function(){if(typeof u.time.START<"u"&&!i.classList.contains(n+"-paused")&&!i.classList.contains(n+"-reseted")){if(i.classList.add(n+"-paused"),u.time.REMAINING=u.time.END-new Date().getTime(),clearTimeout(u.time.TIMER),t.setSetting(a,"time",u.time),o!==null){var d=window.getComputedStyle(o),p=d.getPropertyValue("width");o.style.transition="none",o.style.width=p}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof u.time.REMAINING<"u"?(i.classList.remove(n+"-paused"),o!==null&&(o.style.transition="width "+u.time.REMAINING+"ms "+u.progressBarEasing,o.style.width="0%"),u.time.END=new Date().getTime()+u.time.REMAINING,u.time.TIMER=setTimeout(function(){clearTimeout(u.time.TIMER),i.classList.contains(n+"-closing")||(t.hide(u,i,"timeout"),typeof e=="function"&&e.apply(t))},u.time.REMAINING),t.setSetting(a,"time",u.time)):this.start()},reset:function(){clearTimeout(u.time.TIMER),delete u.time.REMAINING,t.setSetting(a,"time",u.time),i.classList.add(n+"-reseted"),i.classList.remove(n+"-paused"),o!==null&&(o.style.transition="none",o.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},l.hide=function(s,i,e){typeof i!="object"&&(i=document.querySelector(i));var t=this,a=y(this.children[i.getAttribute("data-iziToast-ref")],s||{});a.closedBy=e||null,delete a.time.REMAINING,i.classList.add(n+"-closing"),function(){var d=document.querySelector("."+n+"-overlay");if(d!==null){var p=d.getAttribute("data-iziToast-ref");p=p.split(",");var m=p.indexOf(String(a.ref));m!==-1&&p.splice(m,1),d.setAttribute("data-iziToast-ref",p.join()),p.length===0&&(d.classList.remove("fadeIn"),d.classList.add("fadeOut"),setTimeout(function(){d.remove()},700))}}(),a.transitionIn&&i.classList.remove(a.transitionIn),a.transitionInMobile&&i.classList.remove(a.transitionInMobile),v||window.innerWidth<=w?a.transitionOutMobile&&i.classList.add(a.transitionOutMobile):a.transitionOut&&i.classList.add(a.transitionOut);var u=i.parentNode.offsetHeight;i.parentNode.style.height=u+"px",i.style.pointerEvents="none",(!v||window.innerWidth>w)&&(i.parentNode.style.transitionDelay="0.2s");try{var o=new CustomEvent(n+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(d){console.warn(d)}setTimeout(function(){i.parentNode.style.height="0px",i.parentNode.style.overflow="",setTimeout(function(){delete t.children[a.ref],i.parentNode.remove();try{var d=new CustomEvent(n+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(d)}catch(p){console.warn(p)}typeof a.onClosed<"u"&&a.onClosed.apply(null,[a,i,e])},1e3)},200),typeof a.onClosing<"u"&&a.onClosing.apply(null,[a,i,e])},l.show=function(s){var i=this,e=y(C,s||{});if(e=y(T,e),e.time={},e.id===null&&(e.id=H(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+n+"#"+e.id).length>0)return!1}catch{console.warn("["+n+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{g(document.querySelectorAll("."+n+"#"+e.id),function(o,d){i.hide(e,o,"replaced")})}catch{console.warn("["+n+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),l.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(n),t.toast.classList.add(n+"-opening"),t.toastCapsule.classList.add(n+"-capsule"),t.toastBody.classList.add(n+"-body"),t.toastTexts.classList.add(n+"-texts"),v||window.innerWidth<=w?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var o=e.class.split(" ");g(o,function(d,p){t.toast.classList.add(d)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(n+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(n+"-layout"+e.layout),e.balloon&&t.toast.classList.add(n+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(n+"-theme-"+e.theme),e.color&&(b(e.color)?t.toast.style.background=e.color:t.toast.classList.add(n+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(n+"-cover"),t.cover.style.width=e.imageWidth+"px",Z(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(n+"-close"),t.buttonClose.addEventListener("click",function(o){o.target,i.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(n+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(o){i.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(o){i.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(o){i.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(o){i.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",n+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",n+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(n+"-title"),t.strong.appendChild(I(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(n+"-message"),t.p.appendChild(I(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var a;(function(){e.inputs.length>0&&(t.inputs.classList.add(n+"-inputs"),g(e.inputs,function(o,d){t.inputs.appendChild(I(o[0])),a=t.inputs.childNodes,a[d].classList.add(n+"-inputs-child"),o[3]&&setTimeout(function(){a[d].focus()},300),a[d].addEventListener(o[1],function(p){var m=o[2];return m(i,t.toast,this,p)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(n+"-buttons"),g(e.buttons,function(o,d){t.buttons.appendChild(I(o[0]));var p=t.buttons.childNodes;p[d].classList.add(n+"-buttons-child"),o[2]&&setTimeout(function(){p[d].focus()},300),p[d].addEventListener("click",function(m){m.preventDefault();var Le=o[1];return Le(i,t.toast,this,m,a)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var o=t.toast.offsetHeight,d=t.toast.currentStyle||window.getComputedStyle(t.toast),p=d.marginTop;p=p.split("px"),p=parseInt(p[0]);var m=d.marginBottom;m=m.split("px"),m=parseInt(m[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=o+m+p+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&i.progress(e,t.toast).start()},100)}(),function(){var o=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(n+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(k.indexOf(e.position)==-1){console.warn("["+n+`] Incorrect position.
It can be › `+k);return}v||window.innerWidth<=w?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?o=n+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?o=n+"-wrapper-topCenter":o=n+"-wrapper-center":o=n+"-wrapper-"+o,t.wrapper=document.querySelector("."+n+"-wrapper."+o),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(n+"-wrapper"),t.wrapper.classList.add(o),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+n+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+n+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+n+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(n+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(o){i.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(n+"-animateInside");var o=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(o=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},o[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},o[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},o[2]);var d=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){g(t.buttons.childNodes,function(p,m){setTimeout(function(){p.classList.add("revealIn")},d),d=d+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(d=150,g(t.inputs.childNodes,function(p,m){setTimeout(function(){p.classList.add("revealIn")},d),d=d+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var u=new CustomEvent(n+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(u)}catch(o){console.warn(o)}setTimeout(function(){t.toast.classList.remove(n+"-opening"),t.toast.classList.add(n+"-opened");try{var o=new CustomEvent(n+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(d){console.warn(d)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(L?(t.toast.addEventListener("touchstart",function(o){h.startMoving(this,i,e,o)},!1),t.toast.addEventListener("touchend",function(o){h.stopMoving(this,o)},!1)):(t.toast.addEventListener("mousedown",function(o){o.preventDefault(),h.startMoving(this,i,e,o)},!1),t.toast.addEventListener("mouseup",function(o){o.preventDefault(),h.stopMoving(this,o)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(o){o=o||window.event,o.keyCode==27&&i.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(o){i.hide(e,t.toast,"toast")}),i.toast=t.toast},l})})(he);var Fe=he.exports;const j=Pe(Fe);const W={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topRight",transitionIn:"fadeInDown",transitionOut:"fadeOutUp"};class O{static success(c){j.success({title:"OK",titleColor:"green",message:c,messageColor:"green",progressBarColor:"green",...W})}static error(c){j.error({title:"Error",titleColor:"red",message:c,messageColor:"red",progressBarColor:"red",...W})}static warning(c){j.warning({title:"Caution",message:c,titleColor:"red",messageColor:"red",progressBarColor:"red",...W})}}const z=document.getElementById("subscribeForm"),ye=z.querySelector('input[name="email"]'),ne=document.getElementById("subscribeBtn");ye.addEventListener("input",Ue);z.addEventListener("submit",Xe);function Ge(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}function Ue(){ye.value}async function Xe(r){r.preventDefault();const c=new FormData(z),f=c.get("email");if(!Ge(f))return console.error("Invalid email address"),O.error("Invalid email address");try{ne.disabled=!0;const n=await Ee.post("https://your-energy.b.goit.study/api/subscription",c,{headers:{"Content-Type":"application/json"}});return n.status>=200&&n.status<300?(z.reset(),O.success(`${n.data.message}`)):(console.error("Server Error:",n.status,n.statusText),O.error(`Server Error: ${n.status} ${n.statusText}`))}catch(n){return console.error("Error:",n.message),O.error(`Error: ${n.message}`)}finally{ne.disabled=!1}}let x=document.getElementById("mySVG");x.style.transform="scale(1)";x.style.transition="fill 0.3s ease, transform 0.3s ease";let be=["var(--color-yellow)","var(--color-black)","var(--color-valid)"],X=0;x.addEventListener("mouseover",function(){x.style.fill=be[X],x.style.transform="scale(1.6) rotate(145deg)"});x.addEventListener("mouseout",function(){x.style.transform="scale(1) rotate(0deg)",X=(X+1)%be.length});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".bmi__link"),c=document.querySelector(".bmi__backdrop"),f=document.querySelector(".bmi__modal-close-btn"),l=document.querySelector(".aside__img"),n=document.getElementById("bmi-result"),v=document.getElementById("height"),E=document.getElementById("weight"),_=document.getElementById("btn"),L=document.getElementById("weight-condition");function k(b){b.preventDefault(),I(),y()}function M(){I(),y()}function w(b){b.code==="Escape"&&g()}function C(b){b.target.closest(".bmi__wrapper")||g()}function T(b){b.preventDefault(),g()}function B(){document.addEventListener("keydown",w),c.addEventListener("click",C),f.addEventListener("click",T),l.addEventListener("click",M)}function g(){document.removeEventListener("keydown",w),c.removeEventListener("click",C),f.removeEventListener("click",T),l.removeEventListener("click",M),c.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function y(){c.classList.remove("is-hidden"),document.body.classList.add("modal-open"),B()}function I(){v.value="180",E.value="80",n.value=""}function H(){const b=v.value/100,h=(E.value/(b*b)).toFixed(1);n.value=h,h<18.5?L.innerText="Under weight!":h>=18.5&&h<=24.9?L.innerText="Normal weight!":h>=25&&h<=29.9?L.innerText="Overweight!":h>=30&&(L.innerText="Obesity!")}_.addEventListener("click",H),r.addEventListener("click",k)});
