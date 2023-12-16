import{A as k,i as M,a as se}from"./sprite-c729b006.js";const ne=document.querySelector(".js-quote"),oe=new k;ae();async function ae(){try{const a=await oe.getQuote();re(a)}catch(a){console.log(a)}}function re({author:a,quote:d}){ne.innerHTML=`
  <p class="quote__text">${d}</p>
  <h4 class="quote__author">${a}</h4>
    `}const le=new k,X=document.querySelector(".js-list");P("Muscles");async function P(a){try{const d=await le.getFilter(a);ce(d)}catch(d){console.log(d)}}function ce(a){const d=a.map(({filter:m,name:u,imgURL:i})=>`
  <li class="filters__item">
    <img class="filters__img-first" src="${i}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${m}</h2>
    <p class="filters__text-first">${u}</p>
    </div>
  </li>
    `).join("");X.insertAdjacentHTML("beforeend",d)}document.querySelectorAll(".btnFilters").forEach(a=>{a.addEventListener("click",()=>{const d=a.innerText;X.innerHTML="",P(d)})});const F="/your-energy/assets/modal-exercise-image-3ecfcf3d.jpg",de="/your-energy/assets/modal-exercise-image@2x-88eeae48.jpg",ue=new k,q=document.querySelector(".modal-exercises"),R=document.querySelector(".overlay"),U=document.querySelector(".js-list");U.addEventListener("click",fe);console.log(U);async function fe(a){if(a.target.closest(".card__btn"))try{const d=a.target.closest(".card__btn").getAttribute("data-id"),m=await ue.getExercisesById(d),u=ve(m);pe(u),me(),document.querySelector(".modal-exercises__btn-close").addEventListener("click",G)}catch(d){console.log(d)}}function me(){const a=window.innerWidth-document.body.offsetWidth+"px";q.classList.remove("hidden"),R.classList.remove("hidden"),document.body.style.paddingRight=a,document.body.style.overflow="hidden"}function pe(a){q.innerHTML=a}function ge(a){const d="#EEA10C",m="#F4F4F4";let i="";for(let h=0;h<5;h++){const b=`starGradient${h}`,C=h+1<=a?100:h<a?a%1*100:0,S=[{offset:"0%",color:d,opacity:"1"},{offset:`${C}%`,color:d,opacity:"1"},{offset:`${C+1}%`,color:m,opacity:"0.20"}],x=`
        <linearGradient id="${b}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${S.map(w=>`<stop offset="${w.offset}" style="stop-color:${w.color};stop-opacity:${w.opacity}" />`).join("")}
        </linearGradient>
      `,E=`url(#${b})`;i+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${x}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${E}" fill-opacity="1"/></svg>`}return`${Number.isInteger(a)?`${a}.0`:a.toFixed(1)} ${i}`}function ve({_id:a,bodyPart:d,equipment:m,gifUrl:u,name:i,target:g,description:v,rating:h,burnedCalories:b,time:C,popularity:S}){const x=E(u);function E(I){return I===null||!I?`srcset = '${F} 1x,${de} 2x'
      src = '${F}'`:`src="${I}"`}const w=ge(h);return`
  <div class="modal-exercises__container" data-id="${a}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="${M}#icon-menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${x}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${i}</h2>
      <div class="modal-exercises__rating">${w}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${g}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Body Part</h3>
              <p class="modal-exercises__text">${d}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Equipment</h3>
              <p class="modal-exercises__text">${m}</p>
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
        <button class="modal-exercises__btn-favorites modal-exercises__btn" data-id="${a}">
            Add to favorites
            <svg class="btn-favorites__icon">
              <use href="${M}#icon-favorites"></use>
            </svg>
          </button>
        <button class="modal-exercises__btn-rating modal-exercises__btn">Give a rating</button>
      </div>
    </div>
  </div>
`}function G(){q.classList.add("hidden"),R.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}R.addEventListener("click",function(a){a.target===R&&G()});window.addEventListener("keydown",function(a){a.key==="Escape"&&!q.classList.contains("hidden")&&G()});document.addEventListener("DOMContentLoaded",function(){const a=document.querySelectorAll(".rating-label"),d=document.querySelector(".rating-value"),m=document.querySelector(".rating-form");let u=0;a.forEach(g=>{g.addEventListener("click",()=>{u=g.dataset.rating,i(u)})});function i(g){d.textContent=g;for(let v=0;v<a.length;v++)v<g?a[v].classList.add("active"):a[v].classList.remove("active")}m.addEventListener("submit",function(g){g.preventDefault();const v=document.querySelector(".rating-email").value,h=document.querySelector(".rating-comment").value;if(!v||!h){alert("Please fill out the email and comment fields");return}alert("Rating submitted successfully!")})});const D=document.querySelector(".scroll__go-top");D.addEventListener("click",Q);window.addEventListener("scroll",he);function he(){const a=window.pageYOffset,d=document.documentElement.clientHeight;a>d?D.classList.add("scroll__go-top--show"):D.classList.remove("scroll__go-top--show")}function Q(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(Q,0))}var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ye(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Y={exports:{}};(function(a,d){(function(m,u){a.exports=u(m)})(typeof N<"u"?N:window||N.window||N.global,function(m){var u={},i="iziToast";document.querySelector("body");var g=!!/Mobi/.test(navigator.userAgent),v=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),h=typeof InstallTrigger<"u",b="ontouchstart"in document.documentElement,C=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],S={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},x=568,E={};u.children={};var w={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var I=function(o,s){s=s||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(o,s.bubbles,s.cancelable,s.detail),e};I.prototype=window.Event.prototype,window.CustomEvent=I}var y=function(o,s,e){if(Object.prototype.toString.call(o)==="[object Object]")for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&s.call(e,o[t],t,o);else if(o)for(var r=0,c=o.length;r<c;r++)s.call(e,o[r],r,o)},L=function(o,s){var e={};return y(o,function(t,r){e[r]=o[r]}),y(s,function(t,r){e[r]=s[r]}),e},O=function(o){var s=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=o;e.firstChild;)s.appendChild(e.firstChild);return s},J=function(o){var s=btoa(encodeURIComponent(o));return s.replace(/=/g,"")},ee=function(o){return o.substring(0,1)=="#"||o.substring(0,3)=="rgb"||o.substring(0,3)=="hsl"},te=function(o){try{return btoa(atob(o))==o}catch{return!1}},T=function(){return{move:function(o,s,e,t){var r,c=.3,n=180;t!==0&&(o.classList.add(i+"-dragged"),o.style.transform="translateX("+t+"px)",t>0?(r=(n-t)/n,r<c&&s.hide(L(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),o,"drag")):(r=(n+t)/n,r<c&&s.hide(L(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),o,"drag")),o.style.opacity=r,r<c&&((v||h)&&(o.style.left=t+"px"),o.parentNode.style.opacity=c,this.stopMoving(o,null)))},startMoving:function(o,s,e,t){t=t||window.event;var r=b?t.touches[0].clientX:t.clientX,c=o.style.transform.replace("px)","");c=c.replace("translateX(","");var n=r-c;e.transitionIn&&o.classList.remove(e.transitionIn),e.transitionInMobile&&o.classList.remove(e.transitionInMobile),o.style.transition="",b?document.ontouchmove=function(l){l.preventDefault(),l=l||window.event;var f=l.touches[0].clientX,p=f-n;T.move(o,s,e,p)}:document.onmousemove=function(l){l.preventDefault(),l=l||window.event;var f=l.clientX,p=f-n;T.move(o,s,e,p)}},stopMoving:function(o,s){b?document.ontouchmove=function(){}:document.onmousemove=function(){},o.style.opacity="",o.style.transform="",o.classList.contains(i+"-dragged")&&(o.classList.remove(i+"-dragged"),o.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){o.style.transition=""},400))}}}();return u.setSetting=function(o,s,e){u.children[o][s]=e},u.getSetting=function(o,s){return u.children[o][s]},u.destroy=function(){y(document.querySelectorAll("."+i+"-overlay"),function(o,s){o.remove()}),y(document.querySelectorAll("."+i+"-wrapper"),function(o,s){o.remove()}),y(document.querySelectorAll("."+i),function(o,s){o.remove()}),this.children={},document.removeEventListener(i+"-opened",{},!1),document.removeEventListener(i+"-opening",{},!1),document.removeEventListener(i+"-closing",{},!1),document.removeEventListener(i+"-closed",{},!1),document.removeEventListener("keyup",{},!1),E={}},u.settings=function(o){u.destroy(),E=o,w=L(w,o||{})},y(S,function(o,s){u[s]=function(e){var t=L(E,e||{});t=L(o,t||{}),this.show(t)}}),u.progress=function(o,s,e){var t=this,r=s.getAttribute("data-iziToast-ref"),c=L(this.children[r],o||{}),n=s.querySelector("."+i+"-progressbar div");return{start:function(){typeof c.time.REMAINING>"u"&&(s.classList.remove(i+"-reseted"),n!==null&&(n.style.transition="width "+c.timeout+"ms "+c.progressBarEasing,n.style.width="0%"),c.time.START=new Date().getTime(),c.time.END=c.time.START+c.timeout,c.time.TIMER=setTimeout(function(){clearTimeout(c.time.TIMER),s.classList.contains(i+"-closing")||(t.hide(c,s,"timeout"),typeof e=="function"&&e.apply(t))},c.timeout),t.setSetting(r,"time",c.time))},pause:function(){if(typeof c.time.START<"u"&&!s.classList.contains(i+"-paused")&&!s.classList.contains(i+"-reseted")){if(s.classList.add(i+"-paused"),c.time.REMAINING=c.time.END-new Date().getTime(),clearTimeout(c.time.TIMER),t.setSetting(r,"time",c.time),n!==null){var l=window.getComputedStyle(n),f=l.getPropertyValue("width");n.style.transition="none",n.style.width=f}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof c.time.REMAINING<"u"?(s.classList.remove(i+"-paused"),n!==null&&(n.style.transition="width "+c.time.REMAINING+"ms "+c.progressBarEasing,n.style.width="0%"),c.time.END=new Date().getTime()+c.time.REMAINING,c.time.TIMER=setTimeout(function(){clearTimeout(c.time.TIMER),s.classList.contains(i+"-closing")||(t.hide(c,s,"timeout"),typeof e=="function"&&e.apply(t))},c.time.REMAINING),t.setSetting(r,"time",c.time)):this.start()},reset:function(){clearTimeout(c.time.TIMER),delete c.time.REMAINING,t.setSetting(r,"time",c.time),s.classList.add(i+"-reseted"),s.classList.remove(i+"-paused"),n!==null&&(n.style.transition="none",n.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},u.hide=function(o,s,e){typeof s!="object"&&(s=document.querySelector(s));var t=this,r=L(this.children[s.getAttribute("data-iziToast-ref")],o||{});r.closedBy=e||null,delete r.time.REMAINING,s.classList.add(i+"-closing"),function(){var l=document.querySelector("."+i+"-overlay");if(l!==null){var f=l.getAttribute("data-iziToast-ref");f=f.split(",");var p=f.indexOf(String(r.ref));p!==-1&&f.splice(p,1),l.setAttribute("data-iziToast-ref",f.join()),f.length===0&&(l.classList.remove("fadeIn"),l.classList.add("fadeOut"),setTimeout(function(){l.remove()},700))}}(),r.transitionIn&&s.classList.remove(r.transitionIn),r.transitionInMobile&&s.classList.remove(r.transitionInMobile),g||window.innerWidth<=x?r.transitionOutMobile&&s.classList.add(r.transitionOutMobile):r.transitionOut&&s.classList.add(r.transitionOut);var c=s.parentNode.offsetHeight;s.parentNode.style.height=c+"px",s.style.pointerEvents="none",(!g||window.innerWidth>x)&&(s.parentNode.style.transitionDelay="0.2s");try{var n=new CustomEvent(i+"-closing",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(n)}catch(l){console.warn(l)}setTimeout(function(){s.parentNode.style.height="0px",s.parentNode.style.overflow="",setTimeout(function(){delete t.children[r.ref],s.parentNode.remove();try{var l=new CustomEvent(i+"-closed",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(f){console.warn(f)}typeof r.onClosed<"u"&&r.onClosed.apply(null,[r,s,e])},1e3)},200),typeof r.onClosing<"u"&&r.onClosing.apply(null,[r,s,e])},u.show=function(o){var s=this,e=L(E,o||{});if(e=L(w,e),e.time={},e.id===null&&(e.id=J(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+i+"#"+e.id).length>0)return!1}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{y(document.querySelectorAll("."+i+"#"+e.id),function(n,l){s.hide(e,n,"replaced")})}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),u.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(i),t.toast.classList.add(i+"-opening"),t.toastCapsule.classList.add(i+"-capsule"),t.toastBody.classList.add(i+"-body"),t.toastTexts.classList.add(i+"-texts"),g||window.innerWidth<=x?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var n=e.class.split(" ");y(n,function(l,f){t.toast.classList.add(l)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(i+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(i+"-layout"+e.layout),e.balloon&&t.toast.classList.add(i+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(i+"-theme-"+e.theme),e.color&&(ee(e.color)?t.toast.style.background=e.color:t.toast.classList.add(i+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(i+"-cover"),t.cover.style.width=e.imageWidth+"px",te(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(i+"-close"),t.buttonClose.addEventListener("click",function(n){n.target,s.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(i+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(n){s.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(n){s.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(n){s.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(n){s.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",i+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",i+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(i+"-title"),t.strong.appendChild(O(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(i+"-message"),t.p.appendChild(O(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var r;(function(){e.inputs.length>0&&(t.inputs.classList.add(i+"-inputs"),y(e.inputs,function(n,l){t.inputs.appendChild(O(n[0])),r=t.inputs.childNodes,r[l].classList.add(i+"-inputs-child"),n[3]&&setTimeout(function(){r[l].focus()},300),r[l].addEventListener(n[1],function(f){var p=n[2];return p(s,t.toast,this,f)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(i+"-buttons"),y(e.buttons,function(n,l){t.buttons.appendChild(O(n[0]));var f=t.buttons.childNodes;f[l].classList.add(i+"-buttons-child"),n[2]&&setTimeout(function(){f[l].focus()},300),f[l].addEventListener("click",function(p){p.preventDefault();var ie=n[1];return ie(s,t.toast,this,p,r)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var n=t.toast.offsetHeight,l=t.toast.currentStyle||window.getComputedStyle(t.toast),f=l.marginTop;f=f.split("px"),f=parseInt(f[0]);var p=l.marginBottom;p=p.split("px"),p=parseInt(p[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=n+p+f+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&s.progress(e,t.toast).start()},100)}(),function(){var n=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(i+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(C.indexOf(e.position)==-1){console.warn("["+i+`] Incorrect position.
It can be › `+C);return}g||window.innerWidth<=x?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?n=i+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?n=i+"-wrapper-topCenter":n=i+"-wrapper-center":n=i+"-wrapper-"+n,t.wrapper=document.querySelector("."+i+"-wrapper."+n),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(i+"-wrapper"),t.wrapper.classList.add(n),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+i+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+i+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+i+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(i+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(n){s.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(i+"-animateInside");var n=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(n=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},n[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},n[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},n[2]);var l=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){y(t.buttons.childNodes,function(f,p){setTimeout(function(){f.classList.add("revealIn")},l),l=l+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(l=150,y(t.inputs.childNodes,function(f,p){setTimeout(function(){f.classList.add("revealIn")},l),l=l+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var c=new CustomEvent(i+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(c)}catch(n){console.warn(n)}setTimeout(function(){t.toast.classList.remove(i+"-opening"),t.toast.classList.add(i+"-opened");try{var n=new CustomEvent(i+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(n)}catch(l){console.warn(l)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(b?(t.toast.addEventListener("touchstart",function(n){T.startMoving(this,s,e,n)},!1),t.toast.addEventListener("touchend",function(n){T.stopMoving(this,n)},!1)):(t.toast.addEventListener("mousedown",function(n){n.preventDefault(),T.startMoving(this,s,e,n)},!1),t.toast.addEventListener("mouseup",function(n){n.preventDefault(),T.stopMoving(this,n)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(n){n=n||window.event,n.keyCode==27&&s.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(n){s.hide(e,t.toast,"toast")}),s.toast=t.toast},u})})(Y);var be=Y.exports;const H=ye(be);const $={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topRight",transitionIn:"fadeInDown",transitionOut:"fadeOutUp"};class B{static success(d){H.success({title:"OK",titleColor:"green",message:d,messageColor:"green",progressBarColor:"green",...$})}static error(d){H.error({title:"Error",titleColor:"red",message:d,messageColor:"red",progressBarColor:"red",...$})}static warning(d){H.warning({title:"Caution",message:d,titleColor:"red",messageColor:"red",progressBarColor:"red",...$})}}const A=document.getElementById("subscribeForm"),K=A.querySelector('input[name="email"]'),V=document.getElementById("subscribeBtn");K.addEventListener("input",Le);A.addEventListener("submit",xe);function we(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)}function Le(){K.value}async function xe(a){a.preventDefault();const d=new FormData(A),m=d.get("email");if(!we(m))return console.error("Invalid email address"),B.error("Invalid email address");try{V.disabled=!0;const i=await se.post("https://your-energy.b.goit.study/api/subscription",d,{headers:{"Content-Type":"application/json"}});return i.status>=200&&i.status<300?(A.reset(),B.success(`${i.data.message}`)):(console.error("Server Error:",i.status,i.statusText),B.error(`Server Error: ${i.status} ${i.statusText}`))}catch(i){return console.error("Error:",i.message),B.error(`Error: ${i.message}`)}finally{V.disabled=!1}}const Ee=new k,j=document.querySelector(".js-list");j.addEventListener("click",Ce);async function Ce(a){if(!a.target.closest(".filters__item"))return;const d=a.target.closest(".filters__item");let m=d.lastElementChild.children[0].innerText.toLowerCase().replace(/\s/g,"");const u=d.lastElementChild.children[1].innerText.toLowerCase().replace(/\s/g,"%20");m==="bodyparts"&&(m="bodypart");try{const i=await Ee.getExercises(m,u);_e(i)}catch(i){console.log(i)}}function _e(a){j.innerHTML="";const d=a.map(({_id:m,rating:u,name:i,burnedCalories:g,bodyPart:v,target:h})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${u}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${M}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${m}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${M}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${M}#icon-running-stick-figure"></use>
                </svg>
                <h2 class="card__title">${i}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${g}</p>
                <p class="card__text-info"><span>Body part:</span>${v}</p>
                <p class="card__text-info"><span>Target:</span>${h}</p>
              </div>
        </div>
      </li>`).join("");j.insertAdjacentHTML("beforeend",d)}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelectorAll(".exercises__btn");a.forEach(d=>{d.addEventListener("click",()=>{a.forEach(m=>m.classList.remove("active")),d.classList.add("active")})})});var _=document.getElementById("mySVG");_.style.transform="scale(1)";_.style.transition="fill 0.3s ease, transform 0.3s ease";var Z=["var(--color-yellow)","var(--color-black)","var(--color-valid)"],W=0;_.addEventListener("mouseover",function(){_.style.fill=Z[W],_.style.transform="scale(1.6) rotate(145deg)"});_.addEventListener("mouseout",function(){_.style.transform="scale(1) rotate(0deg)",W=(W+1)%Z.length});const Ie=document.getElementById("btn"),Te=document.getElementById("bmi-result"),z=document.getElementById("weight-condition");function Se(){const a=document.getElementById("height").value/100,m=(document.getElementById("weight").value/(a*a)).toFixed(1);Te.value=m,m<18.5?z.innerText="Under weight":m>=18.5&&m<=24.9?z.innerText="Normal weight":m>=25&&m<=29.9?z.innerText="Overweight":m>=30&&(z.innerText="Obesity")}Ie.addEventListener("click",Se);
