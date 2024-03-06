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


const validateAdminLogin = () => {
  const username = input_username.value
  const password = input_password.value
  cons
  if (username === "admin") {
    if (password === "1234") {
      window.location = "./scripts/main.js"
    } else {
      incorrect.classList.remove("hidden")
    }
  } else {
    checkuser()
  }
}

login_btn.addEventListener("click")