const iconMobile = document.querySelector(".icon-menu")
const menuMobile = document.querySelector(".menuMobile");
const link = document.getElementsByTagName("a");


iconMobile.addEventListener("click", menuDesplegable);
window.addEventListener("resize", verificandoAncho);



function menuDesplegable() {
    menuMobile.classList.toggle("inactive");

}
function verificandoAncho() {
    if (window.innerWidth > 767) {
        menuMobile.classList.add("inactive");
    }
}
function closedMobile() {
    menuMobile.classList.add("inactive");
}
