import "./style/scss/main.scss"

let isOpen = false
let isDrop = false
let accordion = document.querySelector(".accordion")

let dropdown = document.querySelector(".list__one")

accordion.addEventListener('click', () => {
    if (!isOpen) {
        accordion.classList.add('accordion_open')
        isOpen = true
    }
    else {
        accordion.classList.remove('accordion_open')
        isOpen = false
    }
})

dropdown.addEventListener('click', () => {
    let dropButton = dropdown.querySelector(".dropdown")
    let menu = dropdown.querySelector(".dropdown-menu")
    if (!isDrop) {
        menu.classList.add('dropdown-menu__active')
        dropButton.classList.add('dropdown_down')
        isDrop = true
    }
    else {
        menu.classList.remove('dropdown-menu__active')
        dropButton.classList.remove('dropdown_down')
        isDrop = false
    }
})


