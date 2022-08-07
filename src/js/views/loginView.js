class LoginView {
  #usernameInput = document.querySelector(`.user__login-name-input`);
  #passwordInput = document.querySelector(`.user__login-password-input`);
  #userLogin = document.querySelector(`.user__login`);

  buttonClick(handler) {
    this.#userLogin.addEventListener("click", handler);
  }

  getData() {
    const username = this.#usernameInput.value;
    const password = this.#passwordInput.value;
    return { username: username, password: password };
  }

  hideLoginForm() {
    this.#userLogin.classList.add("hidden");
  }

  showLoginForm() {
    this.#userLogin.classList.remove("hidden");
  }
}

export default new LoginView();
