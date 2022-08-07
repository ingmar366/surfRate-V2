class SpotView {
  //getting as input the data from the model (api) and renders the spots onto the screen
  #spotContainer = document.querySelector(`.interface__surfspots`);

  displaySpots(spot) {
    // console.log(spot);
    this.#spotContainer.innerHTML = "";
    // inserting html for every spot that is selected
    Object.entries(spot).forEach((item, ind) => {
      const spotStr = `spot` + (ind + 1);
      this.#spotContainer.insertAdjacentHTML(
        `beforeend`,
        `<div class="surf-spot" action="" data-id="${ind + 1}">
        <h3 class="form__spot-name">Name: 
        ${item[1].spot.name}</h3>
        <h3 class="form__spot-location">Location: ${item[1].spot.sec_name}</h3>
        </div>`
      );
    });
  }

  //adding handler function to the clicks in the spot menu
  addHandlerClick(handler) {
    this.#spotContainer.addEventListener(`click`, handler);
  }

  activeSpot(spot) {
    const allSpots = document.querySelectorAll(`.surf-spot`);
    allSpots.forEach((s) => s.classList.remove("surf-spot-active"));

    if (typeof spot === "string") {
      const selectedSpot = Array.from(allSpots).filter((spotItem) => {
        if (spotItem.dataset.id == spot) return spotItem;
      });
      selectedSpot[0].classList.add("surf-spot-active");
      return;
    }
    spot.closest(`.surf-spot`).classList.add("surf-spot-active");
  }
}

export default new SpotView();
