const mobileMenu = document.querySelector(".mobile-menu")
const burgerButton = document.querySelector(".burger-button")

burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu--open")
})