class SessionView {
  #session = document.querySelector(".sessions");
  #sessionContainer = document.querySelector(".sessions__sessions");
  #sessionsHeader = document.querySelector(".sessions__spotname");

  clickHandlerSession(handler) {
    this.#session.addEventListener(`click`, handler);
  }

  toggleLongSessionDescription(e) {
    const closestSessionItem = e.closest(".sessions__item");
    if (!closestSessionItem) return;
    closestSessionItem.classList.toggle("four-rows");
    closestSessionItem.lastElementChild.classList.toggle("toggeling");
  }

  // moves up the container into the map
  showContainer() {
    this.#session.style.transform = `translateY(1%)`;
  }
  #clearSessionContainer() {
    this.#sessionContainer.innerHTML = "";
  }

  // calls functions to render the spots from the model data
  loadSpots(spotData) {
    this.#clearSessionContainer();
    this.#loadHeader(spotData.spot.name);
    this.#loadItems.call(this, spotData);
  }

  //  changes the header name to the name of the currently selected spot
  #loadHeader(name) {
    this.#sessionsHeader.textContent = `${name}`;
  }

  // creates a list for the star items with unique class names based on the star item
  #listLayout(info, prop) {
    return ` <div class="sessions__item-${prop}">
        <h5 class="sessions__item-rating-header">${
          prop.slice(0, 1).toUpperCase() + prop.slice(1)
        }</h5>
        <ul class="rating">
          ${this.#starItems(info, prop)}
        </ul>
      </div>`;
  }

  // make the individual star items and determines where the active is positioned based on the input number
  #starItems(starLocation, reference) {
    let str = "";
    for (let i = 1; i <= 5; i++) {
      str += `<li class="rating-item rating-${reference} ${
        i === starLocation ? "active" : ""
      }" data-rate="${i}"></li>`;
    }
    return str;
  }

  #loadItems(data) {
    if (!data.sessions)
      return this.#sessionContainer.insertAdjacentHTML(
        `afterbegin`,
        `<h5 class="sessions__no-session">No recorded Sessions! Get your lazy body into the water!`
      );
    data.sessions.forEach((session) => {
      const sessionData = session[1];
      this.#sessionContainer.insertAdjacentHTML(
        `afterbegin`,
        `<div class="sessions__item"> <h4 class="sessions__item-date">${
          session.date
        }</h4>${this.#listLayout.call(
          this,
          session.strength,
          "strength"
        )}${this.#listLayout.call(this, session.clean, "clean")}
        ${this.#listLayout.call(this, session.overal, "overal")}
        <div class="sessions__item-extra toggeling"><h5 class="sessions__item-waveheight">Waveheight: ${
          session.waveHeight
        }M</h5>
        <h5 class="sessions__item-swellheight">SwellHeight: ${
          session.swellHeight
        }M</h5>
<h5 class="sessions__item-wind">Wind: ${session.windSpeed}</h5>
<h5
class="sessions__item-direction">Wind Direction: ${session.windDirection}</h5>

<div class="sessions__item-image">
    <h5>Picture:</h5>
    <a href="">Image Session</a>
</div>
<div>
<h5 class="sessions__item-description"> Description: ${session.description}</h5>
</div></div>`
      );
    });
  }
}

export default new SessionView();
