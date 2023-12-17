import{i as s}from"./05-modal-exercises-d17afdfc.js";const d=document.querySelector(".favorites__list"),l=document.getElementById("favoritesButton");l.addEventListener("click",v());function v(){const t=JSON.parse(localStorage.getItem("exerciseData"));if(t.length!==0){d.innerHTML="";const a=t.map(({_id:e,name:r,burnedCalories:c,bodyPart:i,target:o})=>`
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${e}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${s}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start card__btn" data-id="${e}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${s}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${s}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${r}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${c}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${i}</p>
            <p class="fav-card__text-info"><span>Target:</span>${o}</p>
          </div>
        </div>
      </li>`).join("");d.insertAdjacentHTML("beforeend",a)}}const n=document.querySelector(".favorites__list");n.addEventListener("click",_);function _(t){if(!t.target.closest(".js-remove-btn"))return;const a=t.target.closest(".js-remove-btn").getAttribute("data-id"),r=JSON.parse(localStorage.getItem("exerciseData")).filter(c=>c._id!==a);localStorage.setItem("exerciseData",JSON.stringify(r)),f()}function f(){const t=JSON.parse(localStorage.getItem("exerciseData"));if(t.length===0){n.innerHTML="";const a=`
     <li class="favorites__empty">
            It appears that you haven't added any exercises to your favorites
            yet. To get started, you can add exercises that you like to your
            favorites for easier access in the future.
          </li>
    `;n.insertAdjacentHTML("beforeend",a)}else{n.innerHTML="";const a=t.map(({_id:e,name:r,burnedCalories:c,bodyPart:i,target:o})=>`
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${e}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${s}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start card__btn" data-id="${e}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${s}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${s}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${r}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${c}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${i}</p>
            <p class="fav-card__text-info"><span>Target:</span>${o}</p>
          </div>
        </div>
      </li>`).join("");n.insertAdjacentHTML("beforeend",a)}}
