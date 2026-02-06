menu = document.getElementById("menu_butt")
open = false

menu.addEventListener("click" , opennav)

function opennav() {
    if (open == false) {
        open = true
        menu.style.transform = "rotate(90deg)"
    } else {
        open = false
        menu.style.transform = "rotate(0deg)"
    }
}
