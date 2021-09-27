let icon = document.querySelector(".fas");
icon.addEventListener("click",()=>{
    let option = document.querySelector(".hamburger-option");
    if(option.style.display == "none"){
        option.style.display  = "block";
        icon.classList = "fas fa-times";
    }
    else {
        option.style.display = "none";
        icon.classList = "fas fa-bars";
    }
})