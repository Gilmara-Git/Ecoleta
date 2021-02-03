const searchButton = document.querySelector("#page-home main a")
const modalScreen = document.querySelector("#modal")
const closeButton = document.querySelector("#modal .header a")

searchButton.addEventListener("click", ()=>{  
    modalScreen.classList.remove("hide")

})

closeButton.addEventListener("click", ()=>{   
    modalScreen.classList.add("hide")
})