import{i as n}from"./sprite-578f308f.js";const d=document.querySelector(".favorites__list"),l=document.getElementById("favoritesButton");l.addEventListener("click",_());function _(){const t=JSON.parse(localStorage.getItem("exerciseData"));if(t!==null){d.innerHTML="";const e=t.map(({_id:a,name:s,burnedCalories:r,bodyPart:c,target:i})=>`
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${a}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${n}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start" data-id="${a}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${n}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${n}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${s}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${r}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${c}</p>
            <p class="fav-card__text-info"><span>Target:</span>${i}</p>
          </div>
        </div>
      </li>`).join("");d.insertAdjacentHTML("beforeend",e)}}const o=document.querySelector(".favorites__list");o.addEventListener("click",v);function v(t){if(!t.target.closest(".js-remove-btn"))return;const e=t.target.closest(".js-remove-btn").getAttribute("data-id"),s=JSON.parse(localStorage.getItem("exerciseData")).filter(r=>r._id!==e);localStorage.setItem("exerciseData",JSON.stringify(s)),u(s)}function u(t){if(t.length!==0){o.innerHTML="";const e=t.map(({_id:a,name:s,burnedCalories:r,bodyPart:c,target:i})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <button class="card__btn" id="remove" data-id="${a}" type="button">Remove
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${icons}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
              <button class="card__btn" data-id="${a}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${icons}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${icons}#icon-running-stick-figure"></use>
                </svg>
                <h2 class="card__title">${s}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${r}</p>
                <p class="card__text-info"><span>Body part:</span>${c}</p>
                <p class="card__text-info"><span>Target:</span>${i}</p>
              </div>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",e)}}
