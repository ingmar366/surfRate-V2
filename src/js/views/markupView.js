class MarkupView {
  #newSessionButton = document.querySelector(".button__new-session");

  newSessionClickHandler(handler) {
    this.#newSessionButton.addEventListener(`click`, handler);
  }
}

export default new MarkupView();
