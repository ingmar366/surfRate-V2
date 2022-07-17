class SessionView {
  #session = document.querySelector(".sessions");
  #sessionContainer = document.querySelector(".sessions__sessions");
  #sessionsHeader = document.querySelector(".sessions__spotname");

  clickHandlerSession(handler) {
    this.#session.addEventListener(`click`, handler);
  }

  toggleLongSessionDescription(e) {
    e.closest(".sessions__item").classList.toggle("four-rows");
    e.closest(".sessions__item").lastElementChild.classList.toggle("toggeling");
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
    this.#loadHeader(spotData.name);
    this.#loadItems.call(this, spotData.sessions);
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

  // make the individual star items
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
    if (!data.session1)
      return this.#sessionContainer.insertAdjacentHTML(
        `afterbegin`,
        `<h5 class="sessions__no-session">No recorded Sessions! Get your lazy body into the water!`
      );
    Object.entries(data).forEach((session) => {
      const sessionData = session[1];
      this.#sessionContainer.insertAdjacentHTML(
        `afterbegin`,
        `<div class="sessions__item">
                              <h4 class="sessions__item-date">${
                                sessionData.date
                              }</h4>
                              ${this.#listLayout.call(
                                this,
                                sessionData.strength,
                                "strength"
                              )}
                              ${this.#listLayout.call(
                                this,
                                sessionData.clean,
                                "clean"
                              )}
                              ${this.#listLayout.call(
                                this,
                                sessionData.overal,
                                "overal"
                              )}
                              <div class="sessions__item-extra toggeling">
                              <h5 class="sessions__item-waveheight">Waveheight: ${
                                sessionData.waveheight
                              }M</h5>
                              <h5 class="sessions__item-swellheight">SwellHeight: ${
                                sessionData.swellheight
                              }M</h5>
                              <h5 class="sessions__item-wind">Wind: ${
                                sessionData.wind
                              }</h5>
                              <h5 class="sessions__item-direction">WindDirection: ${
                                sessionData.windDirection
                              }</h5>

                              <div class="sessions__item-image">
                                  <h5>Picture:</h5>
                                  <a href="">Image Session</a>
                              </div>

                              <h5 class="sessions__item-description">Description: ${
                                sessionData.description
                              }</h5>
                              </div>
                          </div>`
      );
    });
  }
}

export default new SessionView();
