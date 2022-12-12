
//How far down the menu nav is from the top of the page on load.
var originaloffset = null

//Listen for scrolling
window.addEventListener("scroll", (event) => {

    //Get menu nav element
    var menunav = document.getElementById("menunav")

    //Set the original offset when the page is loaded, will only do once.
    if(originaloffset == null) {
        originaloffset = menunav.offsetTop
    }

    //Once the menunav starts getting moved by sticky change the css styles
    if(originaloffset < menunav.offsetTop){
        menunav.classList.add("menunavstuck")

    //If the menunav becomes unstickied change the styles back.
    } else {
        menunav.classList.remove("menunavstuck")
    }

});

//If the window is resized the position the navbar changes to stuck is wrong
//Doing this, when a user resizes the screen the window will be scrolled back up
//and the offset variable will be correct according to the window size. 
addEventListener("resize", (event) => {
    console.log("RESIZED!")
    window.scroll(0,0)
    originaloffset = menunav.offsetTop
});