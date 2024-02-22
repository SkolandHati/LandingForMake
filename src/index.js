import "./style/scss/main.scss"

let isOpen = false
let isDrop = false
let accordion = document.querySelector(".accordion")
let dropdown = document.querySelector(".list__one")
let sBtn_text = dropdown.querySelector(".text_md");
console.log(sBtn_text)
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
    let option = menu.querySelectorAll('.text_md')

    if (!isDrop) {
        menu.classList.remove('dropdown-menu__close')
        menu.classList.add('dropdown-menu__active')
        dropButton.classList.add('dropdown_down')
        option.forEach((text_md) => {
            text_md.addEventListener('click', () => {
                let text = sBtn_text.querySelector('.sBtn_text')
                text.innerText = text_md.innerText;
                text_md.style.color = '#3E29E3'
            })
        })
        isDrop = true
    }
    else {
        menu.classList.remove('dropdown-menu__active')
        menu.classList.add('dropdown-menu__close')
        dropButton.classList.remove('dropdown_down')
        isDrop = false
    }
})


