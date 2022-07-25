class AddSessionView {
  #addSessionContainer = document.querySelector(".add__session");
  #addSessionHeader = document.querySelector(".add__session-spot");
  #text = document.querySelector(".add__session-info-text");

  hideSessionForm(selectedSpotName) {
    this.#addSessionContainer.classList.add("hidden");
    this.#addSessionHeader.textContent = selectedSpotName;
  }
  showSessionForm(selectedSpotName) {
    this.#addSessionContainer.classList.remove("hidden");
    this.#addSessionHeader.textContent = selectedSpotName;
  }

  clickHandler(handler) {
    this.#addSessionContainer.addEventListener("click", handler);
  }

  #clearStars(className) {
    document
      .querySelectorAll(`.${className}`)
      .forEach((item) => item.classList.remove(`active`));
  }

  #clearText() {
    this.#text.value = "";
  }

  settingStars(element) {
    this.#clearStars(element.classList[1]);
    element.classList.add(`active`);
  }

  // GETTING WHICH STAR IS SELECTED
  #getStarData(condition) {
    const elements = document.querySelectorAll(
      `.add__session-item-${condition}`
    );
    const starLocation = Object.entries(elements).filter((element) =>
      element[1].classList.contains(`active`)
    );
    if (starLocation.length === 0) return undefined;
    return starLocation[0][1].dataset.rate;
  }

  // GETTING IMAGE AND TRANSFORM TO 64BASE
  #getImageData() {
    const imageEl = document.querySelector("#image-upload").files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      const results = reader.result;
      return results;
    };
    const image = reader.readAsDataURL(imageEl);
  }

  #getTextData() {
    return this.#text.value;
  }

  getInputData() {
    // console.log(this.#getStarData(`strength`));
    return {
      strength: this.#getStarData(`strength`),
      clean: this.#getStarData(`clean`),
      overal: this.#getStarData(`condition`),
      description: this.#getTextData(),
    };
    // this.#getImageData();
  }

  clearAndClose() {
    this.#clearStars("add__session-item-strength");
    this.#clearStars("add__session-item-condition");
    this.#clearStars("add__session-item-clean");
    this.#clearText();
    this.hideSessionForm();
  }
}

export default new AddSessionView();
