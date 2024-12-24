const imgssss = document.getElementById('imgs4')
const leftBtn4 = document.getElementById('left4')
const rightBtn4 = document.getElementById('right4')

const img4 = document.querySelectorAll('#imgs4 img')

let idxxxx = 0

let intervallll = setInterval(runFourth, 2000)

function runFourth() {
    idxxxx++
    changeImageFourth()
}
console.log(img)

function changeImageFourth() {
    if(idxxxx > img4.length - 1) {
        idxxxx = 0
    } else if(idxxxx < 0) {
        idxxxx = img4.length - 1
    }

    imgs4.style.transform = `translateX(${-idx * 400}px)`
}

function resetIntervalFourth() {
    clearIntervalFourth(intervallll)
    intervallll = setInterval(runFourth, 2000)
}

rightBtn4.addEventListener('click', () => {
    idx++
    changeImageFourth()
    resetIntervalFourth()
    
})

leftBtn4.addEventListener('click', () => {
    idx--
    changeImageFourth()
    resetIntervalFourth()
})