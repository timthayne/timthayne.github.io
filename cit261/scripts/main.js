function toggleMenu() {
    document.querySelector('#menu').classList.toggle('responsive');
}

/* attach events */
document.querySelector('#menu').addEventListener('click', toggleMenu, false);