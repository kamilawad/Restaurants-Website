const restaurentsContainer = document.getElementById('restaurants-container');
const searchInput = document.getElementById('search-bar');
let favIcons = document.querySelectorAll('.fa-heart');

let restaurants = loadRestaurantsData();

function loadRestaurantsData() {
    const users_JSON = localStorage.getItem("restaurants");
    return users_JSON ? JSON.parse(users_JSON) : [];
}

restaurants = [
    {
        RestaurantName: "Resto",
        place: "Beirut",
        specialty: "Authentic Lebanese cuisine"
    },
    {
        RestaurantName: "Cafe",
        place: "Paris",
        specialty: "French pastries and coffee",
    },
    {
        RestaurantName: "Bella Italia",
        place: "Italia",
        specialty: "Authentic Italian cuisine",
    },
    {
        RestaurantName: "Spice Garden",
        place: "Germany",
        specialty: "German cuisine with a focus on spices",
    },
    {
        RestaurantName: "Smokehouse BBQ",
        place: "USA",
        specialty: "Classic American barbecue dishes",
    },
    {
        RestaurantName: "Ocean View Bistro",
        place: "UAE",
        specialty: "Middle Eastern specialties",
    },
    
];

const saveRestaurants = () => {
    localStorage.setItem("restaurents", JSON.stringify(restaurants));
}

function restaurantCardGenerator(restaurant) {
    return `<div class="restaurant-card flex column center">
    <i class="fa-regular fa-heart"></i>
                <img src="/assets/restaurant2.jpg" alt="" class="restaurant-image">
                <div class="restaurant-description">
                    <h4>${restaurant.RestaurantName}</h4>
                    <p>${restaurant.place}</p>
                    <p>${restaurant.specialty}</p>
                </div>`;
}

function restaurantsLoader() {

    restaurentsContainer.innerHTML = "";
  
    for (let i = 0; i < restaurants.length; i++) {

      const restaurantCard = restaurantCardGenerator(restaurants[i]);
  
      restaurentsContainer.innerHTML += restaurantCard;
    }
}
  
restaurantsLoader();

favIcons = document.querySelectorAll('.fa-heart');

for (let i = 0; i < favIcons.length; i++) {
    favIcons[i].addEventListener('click', function() {
        favIcons[i].classList.toggle('fa-regular');
        favIcons[i].classList.toggle('fa-solid');
    });
}

function search(query) {
    searchResult = [];
    for (let i = 0; i< restaurants.length; i++) {
        if(restaurants[i].RestaurantName.toLowerCase().includes(query.toLowerCase()) || restaurants[i].place.toLowerCase().includes(query.toLowerCase()) || restaurants[i].specialty.toLowerCase().includes(query.toLowerCase())) {
            searchResult.push(restaurants[i]);
        }
        filteredRestaurantsLoader(searchResult);
    }
}

function filteredRestaurantsLoader(results) {

    restaurentsContainer.innerHTML = "";
  
    for (let i = 0; i < results.length; i++) {

      const restaurantCard = restaurantCardGenerator(results[i]);
  
      restaurentsContainer.innerHTML += restaurantCard;
    }
}

searchInput.addEventListener('input', function() {
    const query = this.value;
    search(query);
});