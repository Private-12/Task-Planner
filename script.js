menu = document.getElementById("menu_butt")
open = false
rotate = 0

menu.addEventListener("click" , opennav)

function opennav() {
    rotate++;
    menu.style.transform = "rotate(" + (rotate*90) + "deg)"
}
