const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
        console.log("yes")
    } else {
        nav.classList.remove('active')
        console.log("no")
    }
}