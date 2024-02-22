export function addHoverEffect(list, hoverStyle ) {

    for (let i = 0; i < list.length; i++) {
        list[i].onmouseover = function() { this.style.cssText = hoverStyle; };
        list[i].onmouseout = function() { this.style.cssText = 'background-color:: white;'; };
    }
}

