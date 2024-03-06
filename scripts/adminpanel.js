const addBtn = document.getElementById("add-user")
const adminUser = document.querySelector(".admin-user-wrapper")
const userInput = document.getElementById("add-input")
const userPasswordInput = document.getElementById("add-password")


const users = []
const restaurants = [{

}]
let newUserContainer;

function addUser(){
    const user_name = userInput.value
    const password = userPasswordInput.value

    if(user_name !== ""){
        const user = {
            username : user_name
        }
        users.push(user)
  
    

    newUserContainer = document.createElement("div");
    newUserContainer.className = 'users-container flex';
    newUserContainer.innerHTML = `<p>Username:${user.username}</p>
                                    <button class="delete-btn">Delete</button>`

    adminUser.appendChild(newUserContainer)
    userInput.value = ""


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

