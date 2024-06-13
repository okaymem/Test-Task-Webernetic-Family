document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const tryButton = document.getElementById("tryButton");
  const closeBtn = document.getElementsByClassName("close")[0];
  const modalBody = document.getElementById("modal-body");

  tryButton.onclick = function () {
    modalBody.innerHTML = getLoginForm();
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function getLoginForm() {
    return `
              <h2>Войти в систему</h2>
              <form id="loginForm">
                  <input class="form-input" type="text" id="username" name="username" placeholder="Email/Телефон" required>
                  <input class="form-input" type="password" id="password" name="password" placeholder="Пароль" required>
                  <div>
                      <input type="checkbox" id="remember" name="remember">
                      <label for="remember">Запомнить пароль</label>
                  </div>
                  <a href="#">Восстановить</a>
                  <button class="form-button" type="submit" id="loginBtn">Войти</button>
                  <button class="form-button" type="button" id="registerBtn">Зарегистрироваться</button>
              </form>
          `;
  }
});
