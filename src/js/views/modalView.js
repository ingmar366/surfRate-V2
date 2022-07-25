class ModalView {
  #modal = document.querySelector(".modal");
  #overlay = document.querySelector(`.overlay`);
  #closeButton = document.querySelector(`.modal__close`);

  toggleModal() {
    this.#modal.classList.toggle("hidden");
    this.#overlay.classList.toggle("hidden");
  }

  closeHandler(handler) {
    [this.#overlay, this.#closeButton].forEach((obj) =>
      obj.addEventListener(`click`, handler)
    );
  }
}

export default new ModalView();
