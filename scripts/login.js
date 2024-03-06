const login_header = document.getElementById("login-heading")
const input_username = document.getElementById("input-Username")
const input_password = document.getElementById("input-password")
const incorrect = document.getElementById("incorrect-error")
const have_account = document.getElementById("have-account")
const login_switch = document.getElementById("login-switch")
const login_btn = document.getElementById("login-btn")

const users = [{
  username: "ali",
  password: "1"
}]
const admin = {
  username: "admin",
  password: "1234"
}

const logger = (param) => console.log(param)

logger(login_btn.innerText)

const validateUserLogin = (username, password) => {
  let found = false

  if (users.length === 0) {
    incorrect.classList.remove("hidden")
  } else {
    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username) {
        found = true

        if (password === users[i].password) {
          window.location.href = "./scripts/main.js"
        } else {
          incorrect.classList.remove("hidden")
          break
        }
      }
    } if (!found) { incorrect.classList.remove("hidden") }
  }
}

const validateAdminLogin = () => {
  const username = input_username.value
  const password = input_password.value

  if (username === admin.username) {
    if (password === admin.password) {
      window.location.href = "./scripts/adminpanel.js"

    } else { incorrect.classList.remove("hidden") }
  } else { validateUserLogin(username, password) }
}


const checkLoginOrSignup = () => {
  if (login_btn.innerText === "Login") {
    validateAdminLogin()
  } else {
    validateSignup()
  }
}

login_btn.addEventListener("click", (event) => {
  checkLoginOrSignup()
})

login_switch.addEventListener("click", () => {

})