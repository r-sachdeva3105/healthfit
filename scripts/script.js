const menu = document.getElementById("list");
const hamburger = document.querySelector("#menuBtn");

hamburger.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}