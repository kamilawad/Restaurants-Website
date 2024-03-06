const login_header = document.getElementById("login-heading")
const input_username = document.getElementById("input-Username")
const input_password = document.getElementById("input-password")
const incorrect = document.getElementById("incorrect-error")
const have_account = document.getElementById("have-account")
const login_switch = document.getElementById("login-switch")
const login_btn = document.getElementById("login-btn")

const users = []
const admin = {
  username: "admin",
  password: "1234"
}


const validateUserLogin = (username, password) => {
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].name) {
      if (password === users[i].password) {
        window.location = "./scripts/main.js"
      } else { incorrect.classList.remove("hidden") }
    } else { incorrect.classList.remove("hidden") }
  }
}

const validateAdminLogin = () => {
  const username = input_username.value
  const password = input_password.value

  if (username === "admin") {
    if (password === "1234") {
      window.location = "./scripts/adminpanel.js"
    } else { incorrect.classList.remove("hidden") }
  } else {
    validateUserLogin()
  }
}

login_btn.addEventListener("click", validateAdminLogin)