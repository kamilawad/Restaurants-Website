const addUserBtn = document.getElementById("add-user")
const adminUser = document.querySelector(".admin-user-wrapper")
const userInput = document.getElementById("add-input")
const userPasswordInput = document.getElementById("add-password")
const restaurantNameInput = document.getElementById("name-input")
const adminRestaurant = document.querySelector(".admin-restaurant-wrapper")
const addRestaurantBtn = document.getElementById("add-restaurant")
const restaurantLocationInput = document.getElementById("location-input")
const restaurantfeaturesInput = document.getElementById("features-input")



const users = []
const restaurants = []

}]
let newUserContainer;
let newRestaurantContainer;




function addUser(){
    const user_name = userInput.value
    const password = userPasswordInput.value

    if(user_name !== "" && userPasswordInput !== "" ){
        const user = {
            username : user_name,
            pass : password
        }
        users.push(user)
  
    

    newUserContainer = document.createElement("div");
    newUserContainer.className = 'users-container flex';
    newUserContainer.innerHTML = `<p>Username: ${user.username} Password : ${user.pass}</p>
                                    <button class="delete-btn">Delete</button>`

    adminUser.appendChild(newUserContainer)
    userInput.value = ""
    userPasswordInput.value = ""


    }
    else{

    }
}
adminUser.addEventListener("click", function(element){
    if(element.target.tagName === "BUTTON"){
        element.target.parentNode.remove()
    }
})



addBtn.addEventListener("click",function(){
    addUser()
})

