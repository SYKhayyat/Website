const imgss = document.getElementById('imgs2')
const leftBtn2 = document.getElementById('left2')
const rightBtn2 = document.getElementById('right2')

const img2 = document.querySelectorAll('#imgs2 img')

let idxx = 0

let intervall = setInterval(runSecond, 2000)

function runSecond() {
    idxx++
    changeImageSecond()
}
console.log(img)

function changeImageSecond() {
    if(idxx > img2.length - 1) {
        idxx = 0
    } else if(idxx < 0) {
        idxx = img2.length - 1
    }

    imgs2.style.transform = `translateX(${-idx * 400}px)`
}

function resetIntervalSecond() {
    clearIntervalSecond(intervall)
    intervall = setInterval(runSecond, 2000)
}

rightBtn2.addEventListener('click', () => {
    idx++
    changeImageSecond()
    resetIntervalSecond()
})

leftBtn2.addEventListener('click', () => {
    idx--
    changeImageSecond()
    resetIntervalSecond()

})