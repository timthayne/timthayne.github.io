/* references */
// https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom

let element = document.querySelector("p");

/* change styles */
function makeMeBlue() {
    element.style.color = "blue";
}

/* change classes */

// get or set class
function makeMeRed() {
    element.className = "red";
}

// add one or more classes
function strikeMeThrough() {
    element.classList.add('strike-through');
}

// toggle a class on or off
function boldMe() {
    element.classList.toggle('bold');
}

function removeRed() {
    element.classList.remove('red');
}

function removeBlue() {
    element.removeAttribute("style");
}
