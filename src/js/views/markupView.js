class MarkupView {
  #newSessionButton = document.querySelector(".button__new-session");
  #loginButton = document.querySelector(".login__button");

  newSessionClickHandler(handler) {
    this.#newSessionButton.addEventListener(`click`, handler);
  }

  loginClickHandler(handler) {
    this.#loginButton.addEventListener(`click`, handler);
  }
}

export default new MarkupView();
