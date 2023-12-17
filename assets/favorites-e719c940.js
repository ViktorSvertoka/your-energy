import{i as t}from"./05-modal-exercises-a5f9905e.js";const e=document.querySelector(".favorites__list"),d=document.getElementById("favoritesButton");d.addEventListener("click",v());function v(){const a=JSON.parse(localStorage.getItem("exerciseData"));if(console.log("favorite",a),!(a==null||a.length===0)){e.innerHTML="";const r=a.map(({_id:s,name:c,burnedCalories:n,bodyPart:i,target:o})=>`
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${s}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${t}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start card__btn" data-id="${s}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${t}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${t}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${c}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${n}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${i}</p>
            <p class="fav-card__text-info"><span>Target:</span>${o}</p>
          </div>
        </div>
      </li>`).join("");e.insertAdjacentHTML("beforeend",r)}}
