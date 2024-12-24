const button1 = document.getElementById("bcd")
const button2 = document.getElementById("cde")
const captions = document.getElementsByTagName("figcaption")


button1.addEventListener('click', () => {
    for(var i = 0; i < captions.length; ++i){
    captions[i].className="inactive"}
})
button2.addEventListener('click', () => {
    for(var i = 0; i < captions.length; ++i){
    captions[i].className="active-class"}
})