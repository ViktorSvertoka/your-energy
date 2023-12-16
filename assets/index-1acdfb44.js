import{A as R,a as oe,i as A}from"./sprite-578f308f.js";document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("homeButton"),l=document.getElementById("favoritesButton");o.addEventListener("click",()=>{console.log("Home button clicked"),o.classList.add("active"),l.classList.remove("active")}),l.addEventListener("click",()=>{console.log("Favorites button clicked"),l.classList.add("active"),o.classList.remove("active")})});const ae=document.querySelector(".js-open-menu"),re=document.querySelector(".js-close-menu"),U=document.querySelector("#mobile-menu"),F=document.querySelector("[data-menu-backdrop]"),le=document.querySelectorAll(".menu__nav-link");function ce(){U.classList.add("is-open"),F.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function G(){U.classList.remove("is-open"),F.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}ae.addEventListener("click",()=>{ce()});re.addEventListener("click",()=>{G()});F.addEventListener("click",()=>{G()});le.forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("href").substring(1),u=document.getElementById(l);u&&(u.scrollIntoView({behavior:"smooth"}),G())})});document.addEventListener("DOMContentLoaded",()=>{const o=window.location.pathname;if(o.includes("index.html")){const l=document.getElementById("homeButton");l.classList.add("active"),l.addEventListener("click",X)}else if(o.includes("favorites.html")){const l=document.getElementById("favoritesButton");l.classList.add("active"),l.addEventListener("click",X)}});const X=o=>{o.currentTarget.classList.contains("active")?o.preventDefault():alert("Button clicked!")},de=document.querySelector(".js-quote"),ue=new R;fe();async function fe(){try{const o=await ue.getQuote();me(o)}catch(o){console.log(o)}}function me({author:o,quote:l}){de.innerHTML=`
  <p class="quote__text">${l}</p>
  <h4 class="quote__author">${o}</h4>
    `}const pe=new R,Q=document.querySelector(".js-list");Y("Muscles");async function Y(o){try{const l=await pe.getFilter(o);ge(l)}catch(l){console.log(l)}}function ge(o){const l=o.map(({filter:u,name:f,imgURL:i})=>`
  <li class="filters__item">
    <img class="filters__img-first" src="${i}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${u}</h2>
    <p class="filters__text-first">${f}</p>
    </div>
  </li>
    `).join("");Q.insertAdjacentHTML("beforeend",l)}document.querySelectorAll(".btnFilters").forEach(o=>{o.addEventListener("click",()=>{const l=o.innerText;Q.innerHTML="",Y(l)})});const ve=new R,q=document.querySelector(".modal-exercises"),k=document.querySelector(".overlay"),he=document.querySelector(".js-list");he.addEventListener("click",ye);async function ye(o){if(o.target.closest(".card__btn"))try{const l=o.target.closest(".card__btn").getAttribute("data-id"),u=await ve.getExercisesById(l),f=we(u);Le(f),be(),document.querySelector(".modal-exercises__btn-close").addEventListener("click",V)}catch(l){console.log(l)}}function be(){const o=window.innerWidth-document.body.offsetWidth+"px";q.classList.remove("hidden"),k.classList.remove("hidden"),document.body.style.paddingRight=o,document.body.style.overflow="hidden"}function Le(o){q.innerHTML=o}function Ee(o){const l="#EEA10C",u="#F4F4F4";let i="";for(let h=0;h<5;h++){const b=`starGradient${h}`,C=h+1<=o?100:h<o?o%1*100:0,S=[{offset:"0%",color:l,opacity:"1"},{offset:`${C}%`,color:l,opacity:"1"},{offset:`${C+1}%`,color:u,opacity:"0.20"}],w=`
        <linearGradient id="${b}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${S.map(L=>`<stop offset="${L.offset}" style="stop-color:${L.color};stop-opacity:${L.opacity}" />`).join("")}
        </linearGradient>
      `,x=`url(#${b})`;i+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${w}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${x}" fill-opacity="1"/></svg>`}return`${Number.isInteger(o)?`${o}.0`:o.toFixed(1)} ${i}`}function we({_id:o,bodyPart:l,equipment:u,gifUrl:f,name:i,target:g,description:v,rating:h,burnedCalories:b,time:C,popularity:S}){const w=x(f);function x(I){return I===null||!I?`srcset = './img/modal-exercise-image.jpg 1x,./img/modal-exercise-image@2x.jpg 2x'
      src = './img/modal-exercise-image.jpg'`:`src="${I}"`}const L=Ee(h);return`
  <div class="modal-exercises__container" data-id="${o}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="/img/sprite.svg#icon-menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${w}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${i}</h2>
      <div class="modal-exercises__rating">${L}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${g}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Body Part</h3>
              <p class="modal-exercises__text">${l}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Equipment</h3>
              <p class="modal-exercises__text">${u}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Popular</h3>
              <p class="modal-exercises__text">${S}</p>
            </li>
            
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Burned Calories</h3>
              <p class="modal-exercises__text">${b}/${C}</p>
            </li>
          </ul>
          <p class="modal-exercises__description">${v}</p>
        </div>

      <div class="modal-exercises__btn-container">
        <button class="modal-exercises__btn-favorites modal-exercises__btn" data-id="${o}">
            Add to favorites
            <svg class="btn-favorites__icon">
              <use href="/img/sprite.svg#icon-favorites"></use>
            </svg>
          </button>
        <button class="modal-exercises__btn-rating modal-exercises__btn">Give a rating</button>
      </div>
    </div>
  </div>
`}function V(){q.classList.add("hidden"),k.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}k.addEventListener("click",function(o){o.target===k&&V()});window.addEventListener("keydown",function(o){o.key==="Escape"&&!q.classList.contains("hidden")&&V()});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".rating-label"),l=document.querySelector(".rating-value"),u=document.querySelector(".rating-form");let f=0;o.forEach(g=>{g.addEventListener("click",()=>{f=g.dataset.rating,i(f)})});function i(g){l.textContent=g;for(let v=0;v<o.length;v++)v<g?o[v].classList.add("active"):o[v].classList.remove("active")}u.addEventListener("submit",function(g){g.preventDefault();const v=document.querySelector(".rating-email").value,h=document.querySelector(".rating-comment").value;if(!v||!h){alert("Please fill out the email and comment fields");return}alert("Rating submitted successfully!")})});const $=document.querySelector(".scroll__go-top");$.addEventListener("click",K);window.addEventListener("scroll",xe);function xe(){const o=window.pageYOffset,l=document.documentElement.clientHeight;o>l?$.classList.add("scroll__go-top--show"):$.classList.remove("scroll__go-top--show")}function K(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(K,0))}var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ce(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Z={exports:{}};(function(o,l){(function(u,f){o.exports=f(u)})(typeof B<"u"?B:window||B.window||B.global,function(u){var f={},i="iziToast";document.querySelector("body");var g=!!/Mobi/.test(navigator.userAgent),v=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),h=typeof InstallTrigger<"u",b="ontouchstart"in document.documentElement,C=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],S={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},w=568,x={};f.children={};var L={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var I=function(a,s){s=s||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(a,s.bubbles,s.cancelable,s.detail),e};I.prototype=window.Event.prototype,window.CustomEvent=I}var y=function(a,s,e){if(Object.prototype.toString.call(a)==="[object Object]")for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&s.call(e,a[t],t,a);else if(a)for(var r=0,d=a.length;r<d;r++)s.call(e,a[r],r,a)},E=function(a,s){var e={};return y(a,function(t,r){e[r]=a[r]}),y(s,function(t,r){e[r]=s[r]}),e},M=function(a){var s=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=a;e.firstChild;)s.appendChild(e.firstChild);return s},te=function(a){var s=btoa(encodeURIComponent(a));return s.replace(/=/g,"")},ie=function(a){return a.substring(0,1)=="#"||a.substring(0,3)=="rgb"||a.substring(0,3)=="hsl"},se=function(a){try{return btoa(atob(a))==a}catch{return!1}},T=function(){return{move:function(a,s,e,t){var r,d=.3,n=180;t!==0&&(a.classList.add(i+"-dragged"),a.style.transform="translateX("+t+"px)",t>0?(r=(n-t)/n,r<d&&s.hide(E(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),a,"drag")):(r=(n+t)/n,r<d&&s.hide(E(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),a,"drag")),a.style.opacity=r,r<d&&((v||h)&&(a.style.left=t+"px"),a.parentNode.style.opacity=d,this.stopMoving(a,null)))},startMoving:function(a,s,e,t){t=t||window.event;var r=b?t.touches[0].clientX:t.clientX,d=a.style.transform.replace("px)","");d=d.replace("translateX(","");var n=r-d;e.transitionIn&&a.classList.remove(e.transitionIn),e.transitionInMobile&&a.classList.remove(e.transitionInMobile),a.style.transition="",b?document.ontouchmove=function(c){c.preventDefault(),c=c||window.event;var m=c.touches[0].clientX,p=m-n;T.move(a,s,e,p)}:document.onmousemove=function(c){c.preventDefault(),c=c||window.event;var m=c.clientX,p=m-n;T.move(a,s,e,p)}},stopMoving:function(a,s){b?document.ontouchmove=function(){}:document.onmousemove=function(){},a.style.opacity="",a.style.transform="",a.classList.contains(i+"-dragged")&&(a.classList.remove(i+"-dragged"),a.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){a.style.transition=""},400))}}}();return f.setSetting=function(a,s,e){f.children[a][s]=e},f.getSetting=function(a,s){return f.children[a][s]},f.destroy=function(){y(document.querySelectorAll("."+i+"-overlay"),function(a,s){a.remove()}),y(document.querySelectorAll("."+i+"-wrapper"),function(a,s){a.remove()}),y(document.querySelectorAll("."+i),function(a,s){a.remove()}),this.children={},document.removeEventListener(i+"-opened",{},!1),document.removeEventListener(i+"-opening",{},!1),document.removeEventListener(i+"-closing",{},!1),document.removeEventListener(i+"-closed",{},!1),document.removeEventListener("keyup",{},!1),x={}},f.settings=function(a){f.destroy(),x=a,L=E(L,a||{})},y(S,function(a,s){f[s]=function(e){var t=E(x,e||{});t=E(a,t||{}),this.show(t)}}),f.progress=function(a,s,e){var t=this,r=s.getAttribute("data-iziToast-ref"),d=E(this.children[r],a||{}),n=s.querySelector("."+i+"-progressbar div");return{start:function(){typeof d.time.REMAINING>"u"&&(s.classList.remove(i+"-reseted"),n!==null&&(n.style.transition="width "+d.timeout+"ms "+d.progressBarEasing,n.style.width="0%"),d.time.START=new Date().getTime(),d.time.END=d.time.START+d.timeout,d.time.TIMER=setTimeout(function(){clearTimeout(d.time.TIMER),s.classList.contains(i+"-closing")||(t.hide(d,s,"timeout"),typeof e=="function"&&e.apply(t))},d.timeout),t.setSetting(r,"time",d.time))},pause:function(){if(typeof d.time.START<"u"&&!s.classList.contains(i+"-paused")&&!s.classList.contains(i+"-reseted")){if(s.classList.add(i+"-paused"),d.time.REMAINING=d.time.END-new Date().getTime(),clearTimeout(d.time.TIMER),t.setSetting(r,"time",d.time),n!==null){var c=window.getComputedStyle(n),m=c.getPropertyValue("width");n.style.transition="none",n.style.width=m}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof d.time.REMAINING<"u"?(s.classList.remove(i+"-paused"),n!==null&&(n.style.transition="width "+d.time.REMAINING+"ms "+d.progressBarEasing,n.style.width="0%"),d.time.END=new Date().getTime()+d.time.REMAINING,d.time.TIMER=setTimeout(function(){clearTimeout(d.time.TIMER),s.classList.contains(i+"-closing")||(t.hide(d,s,"timeout"),typeof e=="function"&&e.apply(t))},d.time.REMAINING),t.setSetting(r,"time",d.time)):this.start()},reset:function(){clearTimeout(d.time.TIMER),delete d.time.REMAINING,t.setSetting(r,"time",d.time),s.classList.add(i+"-reseted"),s.classList.remove(i+"-paused"),n!==null&&(n.style.transition="none",n.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},f.hide=function(a,s,e){typeof s!="object"&&(s=document.querySelector(s));var t=this,r=E(this.children[s.getAttribute("data-iziToast-ref")],a||{});r.closedBy=e||null,delete r.time.REMAINING,s.classList.add(i+"-closing"),function(){var c=document.querySelector("."+i+"-overlay");if(c!==null){var m=c.getAttribute("data-iziToast-ref");m=m.split(",");var p=m.indexOf(String(r.ref));p!==-1&&m.splice(p,1),c.setAttribute("data-iziToast-ref",m.join()),m.length===0&&(c.classList.remove("fadeIn"),c.classList.add("fadeOut"),setTimeout(function(){c.remove()},700))}}(),r.transitionIn&&s.classList.remove(r.transitionIn),r.transitionInMobile&&s.classList.remove(r.transitionInMobile),g||window.innerWidth<=w?r.transitionOutMobile&&s.classList.add(r.transitionOutMobile):r.transitionOut&&s.classList.add(r.transitionOut);var d=s.parentNode.offsetHeight;s.parentNode.style.height=d+"px",s.style.pointerEvents="none",(!g||window.innerWidth>w)&&(s.parentNode.style.transitionDelay="0.2s");try{var n=new CustomEvent(i+"-closing",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(n)}catch(c){console.warn(c)}setTimeout(function(){s.parentNode.style.height="0px",s.parentNode.style.overflow="",setTimeout(function(){delete t.children[r.ref],s.parentNode.remove();try{var c=new CustomEvent(i+"-closed",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(c)}catch(m){console.warn(m)}typeof r.onClosed<"u"&&r.onClosed.apply(null,[r,s,e])},1e3)},200),typeof r.onClosing<"u"&&r.onClosing.apply(null,[r,s,e])},f.show=function(a){var s=this,e=E(x,a||{});if(e=E(L,e),e.time={},e.id===null&&(e.id=te(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+i+"#"+e.id).length>0)return!1}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{y(document.querySelectorAll("."+i+"#"+e.id),function(n,c){s.hide(e,n,"replaced")})}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),f.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(i),t.toast.classList.add(i+"-opening"),t.toastCapsule.classList.add(i+"-capsule"),t.toastBody.classList.add(i+"-body"),t.toastTexts.classList.add(i+"-texts"),g||window.innerWidth<=w?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var n=e.class.split(" ");y(n,function(c,m){t.toast.classList.add(c)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(i+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(i+"-layout"+e.layout),e.balloon&&t.toast.classList.add(i+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(i+"-theme-"+e.theme),e.color&&(ie(e.color)?t.toast.style.background=e.color:t.toast.classList.add(i+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(i+"-cover"),t.cover.style.width=e.imageWidth+"px",se(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(i+"-close"),t.buttonClose.addEventListener("click",function(n){n.target,s.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(i+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(n){s.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(n){s.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(n){s.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(n){s.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",i+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",i+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(i+"-title"),t.strong.appendChild(M(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(i+"-message"),t.p.appendChild(M(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var r;(function(){e.inputs.length>0&&(t.inputs.classList.add(i+"-inputs"),y(e.inputs,function(n,c){t.inputs.appendChild(M(n[0])),r=t.inputs.childNodes,r[c].classList.add(i+"-inputs-child"),n[3]&&setTimeout(function(){r[c].focus()},300),r[c].addEventListener(n[1],function(m){var p=n[2];return p(s,t.toast,this,m)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(i+"-buttons"),y(e.buttons,function(n,c){t.buttons.appendChild(M(n[0]));var m=t.buttons.childNodes;m[c].classList.add(i+"-buttons-child"),n[2]&&setTimeout(function(){m[c].focus()},300),m[c].addEventListener("click",function(p){p.preventDefault();var ne=n[1];return ne(s,t.toast,this,p,r)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var n=t.toast.offsetHeight,c=t.toast.currentStyle||window.getComputedStyle(t.toast),m=c.marginTop;m=m.split("px"),m=parseInt(m[0]);var p=c.marginBottom;p=p.split("px"),p=parseInt(p[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=n+p+m+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&s.progress(e,t.toast).start()},100)}(),function(){var n=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(i+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(C.indexOf(e.position)==-1){console.warn("["+i+`] Incorrect position.
It can be › `+C);return}g||window.innerWidth<=w?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?n=i+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?n=i+"-wrapper-topCenter":n=i+"-wrapper-center":n=i+"-wrapper-"+n,t.wrapper=document.querySelector("."+i+"-wrapper."+n),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(i+"-wrapper"),t.wrapper.classList.add(n),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+i+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+i+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+i+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(i+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(n){s.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(i+"-animateInside");var n=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(n=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},n[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},n[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},n[2]);var c=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){y(t.buttons.childNodes,function(m,p){setTimeout(function(){m.classList.add("revealIn")},c),c=c+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(c=150,y(t.inputs.childNodes,function(m,p){setTimeout(function(){m.classList.add("revealIn")},c),c=c+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var d=new CustomEvent(i+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(d)}catch(n){console.warn(n)}setTimeout(function(){t.toast.classList.remove(i+"-opening"),t.toast.classList.add(i+"-opened");try{var n=new CustomEvent(i+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(n)}catch(c){console.warn(c)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(b?(t.toast.addEventListener("touchstart",function(n){T.startMoving(this,s,e,n)},!1),t.toast.addEventListener("touchend",function(n){T.stopMoving(this,n)},!1)):(t.toast.addEventListener("mousedown",function(n){n.preventDefault(),T.startMoving(this,s,e,n)},!1),t.toast.addEventListener("mouseup",function(n){n.preventDefault(),T.stopMoving(this,n)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(n){n=n||window.event,n.keyCode==27&&s.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(n){s.hide(e,t.toast,"toast")}),s.toast=t.toast},f})})(Z);var _e=Z.exports;const H=Ce(_e);const D={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topRight",transitionIn:"fadeInDown",transitionOut:"fadeOutUp"};class O{static success(l){H.success({title:"OK",titleColor:"green",message:l,messageColor:"green",progressBarColor:"green",...D})}static error(l){H.error({title:"Error",titleColor:"red",message:l,messageColor:"red",progressBarColor:"red",...D})}static warning(l){H.warning({title:"Caution",message:l,titleColor:"red",messageColor:"red",progressBarColor:"red",...D})}}const z=document.getElementById("subscribeForm"),J=z.querySelector('input[name="email"]'),P=document.getElementById("subscribeBtn");J.addEventListener("input",Te);z.addEventListener("submit",Se);function Ie(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)}function Te(){J.value}async function Se(o){o.preventDefault();const l=new FormData(z),u=l.get("email");if(!Ie(u))return console.error("Invalid email address"),O.error("Invalid email address");try{P.disabled=!0;const i=await oe.post("https://your-energy.b.goit.study/api/subscription",l,{headers:{"Content-Type":"application/json"}});return i.status>=200&&i.status<300?(z.reset(),O.success(`${i.data.message}`)):(console.error("Server Error:",i.status,i.statusText),O.error(`Server Error: ${i.status} ${i.statusText}`))}catch(i){return console.error("Error:",i.message),O.error(`Error: ${i.message}`)}finally{P.disabled=!1}}const Me=new R,j=document.querySelector(".js-list");j.addEventListener("click",Be);async function Be(o){if(!o.target.closest(".filters__item"))return;const l=o.target.closest(".filters__item");let u=l.lastElementChild.children[0].innerText.toLowerCase().replace(/\s/g,"");const f=l.lastElementChild.children[1].innerText.toLowerCase().replace(/\s/g,"%20");u==="bodyparts"&&(u="bodypart");try{const i=await Me.getExercises(u,f);Oe(i)}catch(i){console.log(i)}}function Oe(o){j.innerHTML="";const l=o.map(({_id:u,rating:f,name:i,burnedCalories:g,bodyPart:v,target:h})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${f}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${A}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${u}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${A}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${A}#icon-running-stick-figure"></use>
                </svg>
                <h2 class="card__title">${i}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${g}</p>
                <p class="card__text-info"><span>Body part:</span>${v}</p>
                <p class="card__text-info"><span>Target:</span>${h}</p>
              </div>
        </div>
      </li>`).join("");j.insertAdjacentHTML("beforeend",l)}var _=document.getElementById("mySVG");_.style.transform="scale(1)";_.style.transition="fill 0.3s ease, transform 0.3s ease";var ee=["var(--color-yellow)","var(--color-black)","var(--color-valid)"],W=0;_.addEventListener("mouseover",function(){_.style.fill=ee[W],_.style.transform="scale(1.6) rotate(145deg)"});_.addEventListener("mouseout",function(){_.style.transform="scale(1) rotate(0deg)",W=(W+1)%ee.length});const Ne=document.getElementById("btn"),ke=document.getElementById("bmi-result"),N=document.getElementById("weight-condition");function ze(){const o=document.getElementById("height").value/100,u=(document.getElementById("weight").value/(o*o)).toFixed(1);ke.value=u,u<18.5?N.innerText="Under weight":u>=18.5&&u<=24.9?N.innerText="Normal weight":u>=25&&u<=29.9?N.innerText="Overweight":u>=30&&(N.innerText="Obesity")}Ne.addEventListener("click",ze);
