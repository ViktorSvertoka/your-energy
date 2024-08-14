import{A as ee,i as U,a as Me}from"./05-modal-exercises-d260ab3f.js";const Be=new ee,J=document.querySelector(".js-list"),re=document.getElementById("pagination-numbers");let M=1;te("Muscles",M);async function te(i,a){try{const{results:d,totalPages:l}=await Be.getFilter(i,a);Oe({results:d,totalPages:l}),Ne(d)}catch(d){console.log(d)}}function Ne(i){J.innerHTML="";const a=i.map(({filter:d,name:l,imgURL:n})=>`
  <li class="filters__item">
    <img class="filters__img-first" src="${n}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${d}</h2>
    <p class="filters__text-first">${l}</p>
    </div>
  </li>
    `).join("");J.insertAdjacentHTML("beforeend",a)}document.querySelectorAll(".btnFilters").forEach(i=>{i.addEventListener("click",()=>{const a=i.innerText;J.innerHTML="",M=1,te(a,M)})});function Oe({results:i,totalPages:a}){if(re.innerHTML="",a<=1)return;const d=i[0].filter;for(let l=1;l<=a;l++){const n=document.createElement("button");n.className="pagination-button",n.textContent=l,re.appendChild(n),n.addEventListener("click",()=>{Ae(d,l)})}ce()}async function Ae(i,a){M=a,await te(i,M),ce(),qe()}const ce=()=>{document.querySelectorAll(".pagination-button").forEach((i,a)=>{i.classList.remove("active-btn"),a+1===M&&i.classList.add("active-btn")})};function qe(){window.scrollTo({top:830,behavior:"auto"})}const de=new ee,Y=document.querySelector(".js-list"),ae=document.getElementById("pagination-numbers"),ue=document.querySelector(".search__form"),fe=document.querySelector(".exersices__span"),K=document.querySelector(".exersices__text");let z=1;Y.addEventListener("click",Re);async function Re(i){if(!i.target.closest(".filters__item"))return;ue.classList.remove("hidden");const a=i.target.closest(".filters__item");let d=a.lastElementChild.children[0].innerText.toLowerCase().replace(/\s/g,"");const l=a.lastElementChild.children[1].innerText.toLowerCase().replace(/\s/g,"%20");d==="bodyparts"&&(d="bodypart");const n={filter:d,name:l};localStorage.setItem("paramSearch",JSON.stringify(n));try{const{results:v,totalPages:p}=await de.getExercises(d,l,z);pe({filter:d,name:l,totalPages:p}),ne(v),me(v)}catch(v){console.log(v)}}function me(i){K.innerText=`${i[0].bodyPart}`,K.classList.remove("hidden"),fe.classList.remove("hidden")}function ne(i){Y.innerHTML="";const a=i.map(({_id:d,rating:l,name:n,burnedCalories:v,bodyPart:p,target:w})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${l}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${U}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${d}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${U}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
              <div class="card__title-svg-btn">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${U}#icon-running-stick-figure"></use>
                </svg>
                </div>
                <h2 class="card__title">${n}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${v}</p>
                <p class="card__text-info"><span>Body part:</span>${p}</p>
                <p class="card__text-info"><span>Target:</span>${w}</p>
              </div>
        </div>
      </li>`).join("");Y.insertAdjacentHTML("beforeend",a)}document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".exercises__btn");i.forEach(a=>{a.addEventListener("click",()=>{i.forEach(d=>d.classList.remove("active")),a.classList.add("active"),ue.classList.add("hidden"),K.classList.add("hidden"),fe.classList.add("hidden")})})});async function ze(i,a,d){z=d;try{const{results:l,totalPages:n}=await de.getExercises(i,a,z);pe({filter:i,name:a,totalPages:n}),ne(l),me(l)}catch(l){console.log(l)}ge(),He()}function pe({filter:i,name:a,totalPages:d}){if(ae.innerHTML="",!(d<=1)){for(let l=1;l<=d;l++){const n=document.createElement("button");n.className="pagination-button",n.textContent=l,ae.appendChild(n),n.addEventListener("click",()=>{ze(i,a,l)})}ge()}}const ge=()=>{document.querySelectorAll(".pagination-button").forEach((i,a)=>{i.classList.remove("active-btn"),a+1===z&&i.classList.add("active-btn")})};function He(){window.scrollTo({top:830,behavior:"auto"})}const De=new ee,Fe=document.querySelector(".search__button"),ve=document.querySelector(".search__input");Fe.addEventListener("click",function(i){i.preventDefault(),ye()});ve.addEventListener("keydown",function(i){i.key==="Enter"&&(i.preventDefault(),ye())});async function ye(i){const{filter:a,name:d}=JSON.parse(localStorage.getItem("paramSearch")),l=ve.value.trim();if(l!=="")try{const n=await De.getSearch(a,d,l);ne(n)}catch(n){console.log(n)}}const ie=document.querySelector(".modal-exercises"),F=document.querySelector(".modal-rating"),Ve=document.querySelector(".rating-close-btn"),he=document.querySelector(".form__btn"),N=document.querySelector(".rating__value"),V=document.querySelector(".rating-email"),W=document.querySelector(".rating-comment");ie.addEventListener("click",We);Ve.addEventListener("click",j);F.addEventListener("click",je);document.addEventListener("keydown",Pe);function We(i){i.target.closest(".modal-exercises__btn-rating")&&(F.classList.remove("is-hidden"),ie.classList.add("hidden"))}function j(){F.classList.add("is-hidden"),ie.classList.remove("hidden")}function je(i){i.target===F&&j()}function Pe(i){i.key==="Escape"&&j()}const Q=document.querySelectorAll(".rating");Q.length>0&&Ge();function B(i,a,d){const l=parseFloat(d)*20;i.style.width=`${l}%`,a.innerHTML=parseFloat(d).toFixed(1)}function Ge(){let i,a,d;for(let p=0;p<Q.length;p++){const w=Q[p];l(w)}function l(p){n(p),B(i,a,d),p.classList.contains("rating_set")&&v(p)}function n(p){i=p.querySelector(".rating__active"),a=p.querySelector(".rating__value"),d=parseFloat(a.innerHTML)}function v(p){const w=p.querySelectorAll(".rating__item");for(let h=0;h<w.length;h++){const C=w[h];C.addEventListener("mouseenter",function(){n(p),B(i,a,(h+1).toFixed(1))}),C.addEventListener("mouseleave",function(){B(i,a,d)}),C.addEventListener("click",function(){n(p);const I=(h+1).toFixed(1);I!=="0.0"&&(d=I,p.dataset.ajax?setRatingValue(d,p):(a.innerHTML=d,B(i,a,d)),O())})}}}function be(){const i=V.value.trim(),a=W.value.trim(),d=N.innerHTML.trim();return i!==""&&a!==""&&d!=="0.0"}function O(){he.disabled=!be()}V.addEventListener("input",O);W.addEventListener("input",O);const Ue=new MutationObserver(O);Ue.observe(N,{childList:!0,subtree:!0});function Xe(){V.value="",W.value="",N.innerHTML="0.0",setTimeout(()=>{const i=document.querySelector(".rating__active");B(i,N,"0.0"),O()},0)}he.addEventListener("click",i=>{if(i.preventDefault(),!be()){console.warn("Форма не валідна. Будь ласка, заповніть всі поля та оберіть оцінку.");return}const a=N.innerHTML,d=V.value,l=W.value;console.log("Поточне значення рейтингу:",a),console.log("Введений email:",d),console.log("Введений коментар:",l),j(),Xe()});const $e=document.querySelector(".footer__link"),P=document.querySelector(".team__backdrop"),Le=document.querySelector(".team__modal-close-btn");function Je(i){i.preventDefault(),Ke(),Ye()}function Ee(i){i.code==="Escape"&&oe()}function we(i){i.target.closest(".team__wrapper")||oe()}function Ce(i){i.preventDefault(),oe()}function Ye(){document.addEventListener("keydown",Ee),P.addEventListener("click",we),Le.addEventListener("click",Ce)}function oe(){document.removeEventListener("keydown",Ee),P.removeEventListener("click",we),Le.removeEventListener("click",Ce),Qe()}function Ke(){P.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function Qe(){P.classList.add("is-hidden"),document.body.classList.remove("modal-open")}$e.addEventListener("click",Je);const Ie=document.querySelector(".scroll__go-top");Ie.addEventListener("click",xe);window.addEventListener("scroll",Ze);function Ze(){const i=window.scrollY,a=document.documentElement.clientHeight;Ie.classList.toggle("scroll__go-top--show",i>a)}function xe(){window.scrollY>0&&(window.scrollBy(0,-75),requestAnimationFrame(xe))}var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Te={exports:{}};(function(i,a){(function(d,l){i.exports=l(d)})(typeof q<"u"?q:window||q.window||q.global,function(d){var l={},n="iziToast";document.querySelector("body");var v=!!/Mobi/.test(navigator.userAgent),p=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),w=typeof InstallTrigger<"u",h="ontouchstart"in document.documentElement,C=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],I={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},x=568,T={};l.children={};var k={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var A=function(r,o){o=o||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(r,o.bubbles,o.cancelable,o.detail),e};A.prototype=window.Event.prototype,window.CustomEvent=A}var y=function(r,o,e){if(Object.prototype.toString.call(r)==="[object Object]")for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&o.call(e,r[t],t,r);else if(r)for(var c=0,f=r.length;c<f;c++)o.call(e,r[c],c,r)},L=function(r,o){var e={};return y(r,function(t,c){e[c]=r[c]}),y(o,function(t,c){e[c]=o[c]}),e},S=function(r){var o=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=r;e.firstChild;)o.appendChild(e.firstChild);return o},G=function(r){var o=btoa(encodeURIComponent(r));return o.replace(/=/g,"")},E=function(r){return r.substring(0,1)=="#"||r.substring(0,3)=="rgb"||r.substring(0,3)=="hsl"},se=function(r){try{return btoa(atob(r))==r}catch{return!1}},b=function(){return{move:function(r,o,e,t){var c,f=.3,s=180;t!==0&&(r.classList.add(n+"-dragged"),r.style.transform="translateX("+t+"px)",t>0?(c=(s-t)/s,c<f&&o.hide(L(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),r,"drag")):(c=(s+t)/s,c<f&&o.hide(L(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),r,"drag")),r.style.opacity=c,c<f&&((p||w)&&(r.style.left=t+"px"),r.parentNode.style.opacity=f,this.stopMoving(r,null)))},startMoving:function(r,o,e,t){t=t||window.event;var c=h?t.touches[0].clientX:t.clientX,f=r.style.transform.replace("px)","");f=f.replace("translateX(","");var s=c-f;e.transitionIn&&r.classList.remove(e.transitionIn),e.transitionInMobile&&r.classList.remove(e.transitionInMobile),r.style.transition="",h?document.ontouchmove=function(u){u.preventDefault(),u=u||window.event;var m=u.touches[0].clientX,g=m-s;b.move(r,o,e,g)}:document.onmousemove=function(u){u.preventDefault(),u=u||window.event;var m=u.clientX,g=m-s;b.move(r,o,e,g)}},stopMoving:function(r,o){h?document.ontouchmove=function(){}:document.onmousemove=function(){},r.style.opacity="",r.style.transform="",r.classList.contains(n+"-dragged")&&(r.classList.remove(n+"-dragged"),r.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){r.style.transition=""},400))}}}();return l.setSetting=function(r,o,e){l.children[r][o]=e},l.getSetting=function(r,o){return l.children[r][o]},l.destroy=function(){y(document.querySelectorAll("."+n+"-overlay"),function(r,o){r.remove()}),y(document.querySelectorAll("."+n+"-wrapper"),function(r,o){r.remove()}),y(document.querySelectorAll("."+n),function(r,o){r.remove()}),this.children={},document.removeEventListener(n+"-opened",{},!1),document.removeEventListener(n+"-opening",{},!1),document.removeEventListener(n+"-closing",{},!1),document.removeEventListener(n+"-closed",{},!1),document.removeEventListener("keyup",{},!1),T={}},l.settings=function(r){l.destroy(),T=r,k=L(k,r||{})},y(I,function(r,o){l[o]=function(e){var t=L(T,e||{});t=L(r,t||{}),this.show(t)}}),l.progress=function(r,o,e){var t=this,c=o.getAttribute("data-iziToast-ref"),f=L(this.children[c],r||{}),s=o.querySelector("."+n+"-progressbar div");return{start:function(){typeof f.time.REMAINING>"u"&&(o.classList.remove(n+"-reseted"),s!==null&&(s.style.transition="width "+f.timeout+"ms "+f.progressBarEasing,s.style.width="0%"),f.time.START=new Date().getTime(),f.time.END=f.time.START+f.timeout,f.time.TIMER=setTimeout(function(){clearTimeout(f.time.TIMER),o.classList.contains(n+"-closing")||(t.hide(f,o,"timeout"),typeof e=="function"&&e.apply(t))},f.timeout),t.setSetting(c,"time",f.time))},pause:function(){if(typeof f.time.START<"u"&&!o.classList.contains(n+"-paused")&&!o.classList.contains(n+"-reseted")){if(o.classList.add(n+"-paused"),f.time.REMAINING=f.time.END-new Date().getTime(),clearTimeout(f.time.TIMER),t.setSetting(c,"time",f.time),s!==null){var u=window.getComputedStyle(s),m=u.getPropertyValue("width");s.style.transition="none",s.style.width=m}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof f.time.REMAINING<"u"?(o.classList.remove(n+"-paused"),s!==null&&(s.style.transition="width "+f.time.REMAINING+"ms "+f.progressBarEasing,s.style.width="0%"),f.time.END=new Date().getTime()+f.time.REMAINING,f.time.TIMER=setTimeout(function(){clearTimeout(f.time.TIMER),o.classList.contains(n+"-closing")||(t.hide(f,o,"timeout"),typeof e=="function"&&e.apply(t))},f.time.REMAINING),t.setSetting(c,"time",f.time)):this.start()},reset:function(){clearTimeout(f.time.TIMER),delete f.time.REMAINING,t.setSetting(c,"time",f.time),o.classList.add(n+"-reseted"),o.classList.remove(n+"-paused"),s!==null&&(s.style.transition="none",s.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},l.hide=function(r,o,e){typeof o!="object"&&(o=document.querySelector(o));var t=this,c=L(this.children[o.getAttribute("data-iziToast-ref")],r||{});c.closedBy=e||null,delete c.time.REMAINING,o.classList.add(n+"-closing"),function(){var u=document.querySelector("."+n+"-overlay");if(u!==null){var m=u.getAttribute("data-iziToast-ref");m=m.split(",");var g=m.indexOf(String(c.ref));g!==-1&&m.splice(g,1),u.setAttribute("data-iziToast-ref",m.join()),m.length===0&&(u.classList.remove("fadeIn"),u.classList.add("fadeOut"),setTimeout(function(){u.remove()},700))}}(),c.transitionIn&&o.classList.remove(c.transitionIn),c.transitionInMobile&&o.classList.remove(c.transitionInMobile),v||window.innerWidth<=x?c.transitionOutMobile&&o.classList.add(c.transitionOutMobile):c.transitionOut&&o.classList.add(c.transitionOut);var f=o.parentNode.offsetHeight;o.parentNode.style.height=f+"px",o.style.pointerEvents="none",(!v||window.innerWidth>x)&&(o.parentNode.style.transitionDelay="0.2s");try{var s=new CustomEvent(n+"-closing",{detail:c,bubbles:!0,cancelable:!0});document.dispatchEvent(s)}catch(u){console.warn(u)}setTimeout(function(){o.parentNode.style.height="0px",o.parentNode.style.overflow="",setTimeout(function(){delete t.children[c.ref],o.parentNode.remove();try{var u=new CustomEvent(n+"-closed",{detail:c,bubbles:!0,cancelable:!0});document.dispatchEvent(u)}catch(m){console.warn(m)}typeof c.onClosed<"u"&&c.onClosed.apply(null,[c,o,e])},1e3)},200),typeof c.onClosing<"u"&&c.onClosing.apply(null,[c,o,e])},l.show=function(r){var o=this,e=L(T,r||{});if(e=L(k,e),e.time={},e.id===null&&(e.id=G(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+n+"#"+e.id).length>0)return!1}catch{console.warn("["+n+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{y(document.querySelectorAll("."+n+"#"+e.id),function(s,u){o.hide(e,s,"replaced")})}catch{console.warn("["+n+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),l.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(n),t.toast.classList.add(n+"-opening"),t.toastCapsule.classList.add(n+"-capsule"),t.toastBody.classList.add(n+"-body"),t.toastTexts.classList.add(n+"-texts"),v||window.innerWidth<=x?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var s=e.class.split(" ");y(s,function(u,m){t.toast.classList.add(u)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(n+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(n+"-layout"+e.layout),e.balloon&&t.toast.classList.add(n+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(n+"-theme-"+e.theme),e.color&&(E(e.color)?t.toast.style.background=e.color:t.toast.classList.add(n+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(n+"-cover"),t.cover.style.width=e.imageWidth+"px",se(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(n+"-close"),t.buttonClose.addEventListener("click",function(s){s.target,o.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(n+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(s){o.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(s){o.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(s){o.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(s){o.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",n+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",n+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(n+"-title"),t.strong.appendChild(S(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(n+"-message"),t.p.appendChild(S(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var c;(function(){e.inputs.length>0&&(t.inputs.classList.add(n+"-inputs"),y(e.inputs,function(s,u){t.inputs.appendChild(S(s[0])),c=t.inputs.childNodes,c[u].classList.add(n+"-inputs-child"),s[3]&&setTimeout(function(){c[u].focus()},300),c[u].addEventListener(s[1],function(m){var g=s[2];return g(o,t.toast,this,m)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(n+"-buttons"),y(e.buttons,function(s,u){t.buttons.appendChild(S(s[0]));var m=t.buttons.childNodes;m[u].classList.add(n+"-buttons-child"),s[2]&&setTimeout(function(){m[u].focus()},300),m[u].addEventListener("click",function(g){g.preventDefault();var ke=s[1];return ke(o,t.toast,this,g,c)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var s=t.toast.offsetHeight,u=t.toast.currentStyle||window.getComputedStyle(t.toast),m=u.marginTop;m=m.split("px"),m=parseInt(m[0]);var g=u.marginBottom;g=g.split("px"),g=parseInt(g[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=s+g+m+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&o.progress(e,t.toast).start()},100)}(),function(){var s=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(n+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(C.indexOf(e.position)==-1){console.warn("["+n+`] Incorrect position.
It can be › `+C);return}v||window.innerWidth<=x?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?s=n+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?s=n+"-wrapper-topCenter":s=n+"-wrapper-center":s=n+"-wrapper-"+s,t.wrapper=document.querySelector("."+n+"-wrapper."+s),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(n+"-wrapper"),t.wrapper.classList.add(s),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+n+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+n+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+n+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(n+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(s){o.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(n+"-animateInside");var s=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(s=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},s[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},s[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},s[2]);var u=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){y(t.buttons.childNodes,function(m,g){setTimeout(function(){m.classList.add("revealIn")},u),u=u+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(u=150,y(t.inputs.childNodes,function(m,g){setTimeout(function(){m.classList.add("revealIn")},u),u=u+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var f=new CustomEvent(n+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(f)}catch(s){console.warn(s)}setTimeout(function(){t.toast.classList.remove(n+"-opening"),t.toast.classList.add(n+"-opened");try{var s=new CustomEvent(n+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(s)}catch(u){console.warn(u)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(h?(t.toast.addEventListener("touchstart",function(s){b.startMoving(this,o,e,s)},!1),t.toast.addEventListener("touchend",function(s){b.stopMoving(this,s)},!1)):(t.toast.addEventListener("mousedown",function(s){s.preventDefault(),b.startMoving(this,o,e,s)},!1),t.toast.addEventListener("mouseup",function(s){s.preventDefault(),b.stopMoving(this,s)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(s){s=s||window.event,s.keyCode==27&&o.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(s){o.hide(e,t.toast,"toast")}),o.toast=t.toast},l})})(Te);var tt=Te.exports;const X=et(tt);const $={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topRight",transitionIn:"fadeInDown",transitionOut:"fadeOutUp"};class R{static success(a){X.success({title:"OK",titleColor:"green",message:a,messageColor:"green",progressBarColor:"green",...$})}static error(a){X.error({title:"Error",titleColor:"red",message:a,messageColor:"red",progressBarColor:"red",...$})}static warning(a){X.warning({title:"Caution",message:a,titleColor:"red",messageColor:"red",progressBarColor:"red",...$})}}const H=document.getElementById("subscribeForm"),D=H.querySelector('input[name="email"]'),le=document.getElementById("subscribeBtn");D.addEventListener("input",nt);H.addEventListener("submit",it);function Se(i){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)}function nt(){const i=D.value,a=Se(i);D.style.borderColor=a?"green":"red"}async function it(i){i.preventDefault();const a=new FormData(H),d=a.get("email");if(!Se(d))return console.error("Invalid email address"),R.error("Invalid email address");try{le.disabled=!0;const n=await Me.post("https://your-energy.b.goit.study/api/subscription",a,{headers:{"Content-Type":"application/json"}});return n.status>=200&&n.status<300?(H.reset(),D.style.borderColor="",R.success(`${n.data.message}`)):(console.error("Server Error:",n.status,n.statusText),R.error(`Server Error: ${n.status} ${n.statusText}`))}catch(n){return console.error("Error:",n.message),R.error(`Error: ${n.message}`)}finally{le.disabled=!1}}let _=document.getElementById("mySVG");_.style.transform="scale(1)";_.style.transition="fill 0.3s ease, transform 0.3s ease";let _e=["var(--color-yellow)","var(--color-black)","var(--color-valid)"],Z=0;_.addEventListener("mouseover",function(){_.style.fill=_e[Z],_.style.transform="scale(1.6) rotate(145deg)"});_.addEventListener("mouseout",function(){_.style.transform="scale(1) rotate(0deg)",Z=(Z+1)%_e.length});document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".bmi__link"),a=document.querySelector(".bmi__backdrop"),d=document.querySelector(".bmi__modal-close-btn"),l=document.querySelector(".aside__img"),n=document.getElementById("bmi-result"),v=document.getElementById("height"),p=document.getElementById("weight"),w=document.getElementById("btn"),h=document.getElementById("weight-condition");function C(E){E.preventDefault(),S(),L()}function I(){S(),L()}function x(E){E.code==="Escape"&&y()}function T(E){E.target.closest(".bmi__wrapper")||y()}function k(E){E.preventDefault(),y()}function A(){document.addEventListener("keydown",x),a.addEventListener("click",T),d.addEventListener("click",k),l.addEventListener("click",I)}function y(){document.removeEventListener("keydown",x),a.removeEventListener("click",T),d.removeEventListener("click",k),l.removeEventListener("click",I),a.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function L(){a.classList.remove("is-hidden"),document.body.classList.add("modal-open"),A()}function S(){v.value="180",p.value="80",n.value=""}function G(){const E=v.value/100,b=(p.value/(E*E)).toFixed(1);n.value=b,b<18.5?h.innerText="Under weight!":b>=18.5&&b<=24.9?h.innerText="Normal weight!":b>=25&&b<=29.9?h.innerText="Overweight!":b>=30&&(h.innerText="Obesity!")}w.addEventListener("click",G),i.addEventListener("click",C)});