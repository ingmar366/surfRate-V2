class CreateUserView {
  #username = document.querySelector(".create__user-name-input");
  #password = document.querySelector(".create__user-password-input");
  #api = document.querySelector(".create__user-api-input");
  #submit = document.querySelector(".create__user-submit");
  #createUser = document.querySelector(".create__user");

  submitHandler(handler) {
    this.#submit.addEventListener("click", handler);
  }

  getData() {
    const username = this.#username.value;
    const password = this.#password.value;
    const api = this.#api.value;
    return {
      username: `${username}`,
      password: `${password}`,
      apiKey: `${api}`,
    };
  }

  hideCreateForm() {
    this.#createUser.classList.add("hidden");
  }

  showCreateForm() {
    this.#createUser.classList.remove("hidden");
  }
}

export default new CreateUserView();

// username: username,
//       password: password,
//       apiKey: api,
