import "./style/scss/main.scss"

let isAccordionOpen = false
let accordion = document.querySelector(".accordion")
accordion.addEventListener('click', () => {
    if (!isAccordionOpen) {
        accordion.classList.add('accordion_open')
        isAccordionOpen = true
    }
    else {
        accordion.classList.remove('accordion_open')
        isAccordionOpen = false
    }
})

let isDropOpen = false
let dropdown = document.querySelector(".list__one")
let dropdownPlaceholder = dropdown.querySelector(".dropdown__selected")
let selectedOption = null;
dropdown.addEventListener('click', () => {
    let dropButton = dropdown.querySelector(".dropdown")
    let menu = dropdown.querySelector(".dropdown-menu")
    let options = menu.querySelectorAll('.text_md')

    if (!isDropOpen) {
        menu.classList.remove('dropdown-menu_close')
        menu.classList.add('dropdown-menu_active')
        dropButton.classList.add('dropdown_down')
        options.forEach((option) => {
            option.addEventListener('click', () => {
                selectedOption?.classList.remove('dropdown__option_active')
                dropdownPlaceholder.innerText = option.innerText
                option.classList.add('dropdown__option_active');
                selectedOption = option;
            })
        })
        isDropOpen = true
    }
    else {
        menu.classList.remove('dropdown-menu_active')
        menu.classList.add('dropdown-menu_close')
        dropButton.classList.remove('dropdown_down')
        isDropOpen = false
    }
})

let switchDesktop = document.querySelector('.switch-buttons_desktop')
let switchMobile = document.querySelector('.switch-buttons_mobile')

let tabDesktopTypography = document.querySelector('.tab__content-desktop')
let tabMobileTypography = document.querySelector('.tab__content-mobile')

function f()  {
    tabDesktopTypography.classList.add('tab__content-desktop-active')
    switchDesktop.classList.add('switch-buttons_desktop-active')
}
f()
switchDesktop.addEventListener( 'click',  () => {
    tabMobileTypography.classList.remove('tab__content-mobile-active')
    switchMobile.classList.remove('switch-buttons_mobile-active')
    tabDesktopTypography.classList.add('tab__content-desktop-active')
    switchDesktop.classList.add('switch-buttons_desktop-active')
})

switchMobile.addEventListener( 'click',  () => {
    tabDesktopTypography.classList.remove('tab__content-desktop-active')
    switchDesktop.classList.remove('switch-buttons_desktop-active')
    tabMobileTypography.classList.add('tab__content-mobile-active')
    switchMobile.classList.add('switch-buttons_mobile-active')
})


