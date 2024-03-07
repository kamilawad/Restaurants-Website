const addUserBtn = document.getElementById("add-user")
const adminUser = document.querySelector(".admin-user-wrapper")
const userInput = document.getElementById("add-input")
const userPasswordInput = document.getElementById("add-password")
const restaurantNameInput = document.getElementById("name-input")
const adminRestaurant = document.querySelector(".admin-restaurant-wrapper")
const addRestaurantBtn = document.getElementById("add-restaurant")
const restaurantLocationInput = document.getElementById("location-input")
const restaurantfeaturesInput = document.getElementById("features-input")
const tabs = document.getElementById("tab-box")
const adminRestaurantsContainer= document.querySelector(".admin-restaurants-container")
const adminUsersContainer = document.querySelector(".admin-users-container")



const users = []
const restaurants = []

}]
let newUserContainer;
let newRestaurantContainer;

adminUsersContainer.style.display = "block";
adminRestaurantsContainer.style.display = "none";




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
        newUserContainer.innerHTML = `<p>Username: ${user.username} Password: ${user.pass}</p>
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


function addRestaurants(){
        const restaurantName = restaurantNameInput.value
        const restaurantLocation = restaurantLocationInput.value
        const restaurantfeatures = restaurantfeaturesInput.value

        if(restaurantName !== ""){
            const restaurant = {
                name: restaurantName,
                location: restaurantLocation,
                feature : restaurantfeatures

            }
            restaurants.push(restaurant)
            

            newRestaurantContainer = document.createElement("div")
            newRestaurantContainer.className = "restaurant-container flex"
            newRestaurantContainer.innerHTML = `<ul>
            <li>Name: ${restaurant.name}</li>
            <li>Location: ${restaurant.location}</li>
            <li>Feature: ${restaurant.feature}</li>
        </ul>
        <button class="delete-btn">Delete</button>`

        adminRestaurant.appendChild(newRestaurantContainer)


        restaurantLocationInput.value = "";
        restaurantNameInput.value = "";
        restaurantfeaturesInput.value = "";

        }
    

}
adminRestaurant.addEventListener("click", function(e){
    if(e.target.tagName == "BUTTON"){
        e.target.parentNode.remove()
    }
})

addUserBtn.addEventListener("click",function(){
    addUser()
})

addRestaurantBtn.addEventListener("click",function(){
    addRestaurants()
})

