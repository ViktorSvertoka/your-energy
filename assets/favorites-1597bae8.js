import{i}from"./sprite-82e4ec91.js";const l=document.querySelector(".favorites__list"),d=document.getElementById("favoritesButton");d.addEventListener("click",_());function _(){const t=JSON.parse(localStorage.getItem("exerciseData"));if(t!==null){l.innerHTML="";const a=t.map(({_id:e,name:s,burnedCalories:r,bodyPart:c,target:n})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <button class="card__btn js-remove-btn" data-id="${e}" type="button">Remove
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${i}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
              <button class="card__btn" data-id="${e}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${i}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${i}#icon-running-stick-figure"></use>
                </svg>
                <h2 class="card__title">${s}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${r}</p>
                <p class="card__text-info"><span>Body part:</span>${c}</p>
                <p class="card__text-info"><span>Target:</span>${n}</p>
              </div>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",a)}}const o=document.querySelector(".favorites__list");o.addEventListener("click",u);function u(t){if(!t.target.closest(".js-remove-btn"))return;const a=t.target.closest(".js-remove-btn").getAttribute("data-id"),s=JSON.parse(localStorage.getItem("exerciseData")).filter(r=>r._id!==a);localStorage.setItem("exerciseData",JSON.stringify(s)),p(s)}function p(t){if(t.length!==0){o.innerHTML="";const a=t.map(({_id:e,name:s,burnedCalories:r,bodyPart:c,target:n})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <button class="card__btn" id="remove" data-id="${e}" type="button">Remove
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${icons}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
              <button class="card__btn" data-id="${e}" type="button">Start
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
                <p class="card__text-info"><span>Target:</span>${n}</p>
              </div>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",a)}}
