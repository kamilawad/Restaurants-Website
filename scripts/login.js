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


const validateSignup = () => {
  const username = input_username.value
  const password = input_password.value

  if (username !== admin.username) {
    for (let i = 0; i < users.length; i++) {
      if (username !== users[i].username) {
        users.push({
          username: username,
          password: password
        })
        window.location.href = "./scripts/main.js"
      } else {
        incorrect.classList.remove("hidden")
        break
      }
    }
  } else { incorrect.classList.remove("hidden") }
}

const switchToSignup = () => {
  login_header.innerText = "Sign Up"
  have_account.innerText = "Already have an account?"
  login_switch.innerText = "Log-In"
  login_btn.innerText = "SignUp"
  incorrect.innerText = "User Already Exists"
  incorrect.classList.add("hidden")
}

const switchToLogin = () => {
  login_header.innerText = "Log In"
  have_account.innerText = "Don't have an account?"
  login_switch.innerText = "Sign-Up"
  login_btn.innerText = "LogIn"
  incorrect.innerText = "Incorrect Usename or Password"
  incorrect.classList.add("hidden")
}

const loginSignupToggle = () => {
  if (login_switch.innerText === "Sign-Up") {
    switchToSignup()
  } else { switchToLogin() }
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
  loginSignupToggle()
})