import {addHoverEffect} from "./modules/hover_effect";
import "./style/scss/main.scss"

let show = false
let hoverStyle
let accordeon = document.getElementsByClassName("accordion")
let accordeon_title = document.getElementsByClassName("block-title")
let text = document.getElementById("accordion-text")

accordeon[0].addEventListener('click', () => {
    if (!show){
        hoverStyle = ''
        accordeon_title[0].style.color = '#3E29E3'
        accordeon[0].style.opacity = 1
        accordeon[0].style.borderBottom = '2px solid #3E29E3'
        text.style.display = 'block'
        show = true
    }
    else {
        hoverStyle = 'cursor: pointer;\n' +
            '      border-bottom-color: #3E29E3;\n' +
            '      opacity: 1;'
        addHoverEffect(show,"accordion", hoverStyle)
        accordeon_title[0].style.color = '#1B1B1B'
        accordeon[0].style.borderBottom = '1px solid #CBCBCC'
        text.style.display = 'none'
        show = false
    }
})
