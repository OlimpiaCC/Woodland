const iconOpen = document.querySelector(".menu-mobile");

const menu = document.querySelector(".menu__list");


if (window.innerWidth < 890) {
    iconOpen.addEventListener("click", () => menu.classList.toggle("menu__list__active"))
};