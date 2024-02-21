export function addHoverEffect(status, className, hoverStyle_one) {
    if (!status){
        return
    }
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].onmouseover = function() { this.style.cssText = hoverStyle_one; };
        elements[i].onmouseout = function() { this.style.cssText = ''; };
    }
}

