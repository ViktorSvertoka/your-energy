import{i as o}from"./05-modal-exercises-40a94023.js";const l=document.querySelector(".favorites__list"),d=document.getElementById("favoritesButton");d.addEventListener("click",v());function v(){const t=JSON.parse(localStorage.getItem("exerciseData"));if(!(t==null||t.length===0)){l.innerHTML="";const s=t.map(({_id:a,name:i,burnedCalories:r,bodyPart:c,target:e})=>`
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${a}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${o}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start card__btn" data-id="${a}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${o}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${o}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${i}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${r}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${c}</p>
            <p class="fav-card__text-info"><span>Target:</span>${e}</p>
          </div>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s)}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".favorites__list"),s=".fav-filters__item-card",a=6,i=420,r=()=>{t.querySelectorAll(s).length>a?t.classList.add("scrollable"):t.classList.remove("scrollable")},c=()=>{t.querySelectorAll(s).length===1?t.style.width=`${i}px`:t.style.width="auto"},e=()=>{(window.innerWidth||document.documentElement.clientWidth)>=1440?c():t.style.width="auto"};r(),e(),new MutationObserver(n=>{r()}).observe(t,{childList:!0,subtree:!0}),new MutationObserver(n=>{e()}).observe(t,{childList:!0,subtree:!0}),window.addEventListener("resize",e)});
