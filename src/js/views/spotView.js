class SpotView {
  //getting as input the data from the model (api) and renders the spots onto the screen
  #spotContainer = document.querySelector(`.interface__surfspots`);

  displaySpots(spot) {
    // inserting html for every spot that is selected
    Object.entries(spot.surfspot).forEach((i, ind) => {
      const spotStr = `spot` + (ind + 1);
      this.#spotContainer.insertAdjacentHTML(
        `beforeend`,
        `<form class="surf-spot" action="" data-id="${ind}">
        <h3 class="form__spot-name">Name: 
        ${spot.surfspot[spotStr].name}</h3>
        <h3 class="form__spot-location">Location: ${spot.surfspot[spotStr].location.name}</h3>
        </form>`
      );
    });
  }

  //adding handler function to the clicks in the spot menu
  addHandlerClick(handler) {
    this.#spotContainer.addEventListener(`click`, handler);
  }
}

export default new SpotView();
