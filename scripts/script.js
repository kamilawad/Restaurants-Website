const signUp = document.getElementById('signup-form');

function User(username, password) {
    this.username = username;
    this.password = password;
}

let users = JSON.parse(localStorage.getItem('users')) || [];

function signup(username, password) {
    const user = new User(username, password);
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

signup("kamil", "123456");
signup("ali", "123456");

function Restaurant(name, location, description) {
    this.name = name;
    this.location = location;
    this.favorites = 0;
}