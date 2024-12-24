const imgsss = document.getElementById('imgs3')
const leftBtn3 = document.getElementById('left3')
const rightBtn3 = document.getElementById('right3')

const img3 = document.querySelectorAll('#imgs3 img')

let idxxx = 0

let intervalll = setInterval(runThird, 2000)

function runThird() {
    idxxx++
    changeImageThird()
}
console.log(img)

function changeImageThird() {
    if(idxxx > img3.length - 1) {
        idxxx = 0
    } else if(idxxx < 0) {
        idxxx = img3.length - 1
    }

    imgs3.style.transform = `translateX(${-idx * 400}px)`
}

function resetIntervalThird() {
    clearIntervalThird(intervalll)
    intervalll = setInterval(runThird, 2000)
}

rightBtn3.addEventListener('click', () => {
    idx++
    changeImageThird()
    resetIntervalThird()
    
})

leftBtn3.addEventListener('click', () => {
    idx--
    changeImageThird()
    resetIntervalThird()
})