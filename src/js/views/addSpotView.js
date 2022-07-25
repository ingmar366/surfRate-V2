class AddSpotView {
  #addSpotContainer = document.querySelector(`.add__spot`);
  #submitButton = document.querySelector(`.add__spot-submit`);
  #inputName = document.querySelector(`.add__spot-name-input`);
  #inputLocation = document.querySelector(`.add__spot-location-input`);

  hideSpotForm() {
    this.#addSpotContainer.classList.add(`hidden`);
  }
  showSpotForm() {
    this.#addSpotContainer.classList.remove(`hidden`);
  }

  clickHandler(handler) {
    this.#submitButton.addEventListener(`click`, handler);
  }

  getInputData() {
    const nameData = this.#inputName.value;
    const locationData = this.#inputLocation.value;
    if (!nameData) {
      this.#inputName.classList.add("invalid-input");
      return;
    }
    if (!locationData) {
      this.#inputLocation.classList.add("invalid-input");
      return;
    }
    [this.#inputName, this.#inputLocation].forEach((el) =>
      el.classList.remove("invalid-input")
    );
    return [nameData, locationData];
  }

  clearFields() {
    this.#inputName.value = this.#inputLocation.value = "";
  }
}

export default new AddSpotView();
