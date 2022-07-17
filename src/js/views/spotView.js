class SpotView {
  //getting as input the data from the model (api) and renders the spots onto the screen
  #spotContainer = document.querySelector(`.interface__surfspots`);

  displaySpots(spot) {
    // inserting html for every spot that is selected
    Object.entries(spot.surfspot).forEach((_, ind) => {
      const spotStr = `spot` + (ind + 1);
      this.#spotContainer.insertAdjacentHTML(
        `beforeend`,
        `<div class="surf-spot" action="" data-id="${ind}">
        <h3 class="form__spot-name">Name: 
        ${spot.surfspot[spotStr].name}</h3>
        <h3 class="form__spot-location">Location: ${spot.surfspot[spotStr].location.name}</h3>
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
      console.log(selectedSpot[0].classList.add("surf-spot-active"));
      return;
    }
    spot.closest(`.surf-spot`).classList.add("surf-spot-active");
  }
}

export default new SpotView();
