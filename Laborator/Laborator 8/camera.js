window.onload = function () {
const imagine = document.getElementById('img')
window.addEventListener('keydown',(event) =>
{
    const key = event.code
    switch (key){
        case "ArrowUp":
            let margine = window.getComputedStyle(imagine).marginTop
            imagine.style.marginTop = parseInt(margine) + 5 + 'px'
            console.log(parseInt(margine) - 5 + 'px')
            break;
        case "ArrowDown":
            let margine2 = window.getComputedStyle(imagine).marginTop
            imagine.style.marginTop = parseInt(margine2) - 5 + 'px'
            break;
        case "ArrowLeft":
            let margine3 = window.getComputedStyle(imagine).marginLeft
            imagine.style.marginLeft = parseInt(margine3) + 5 + 'px'
            break;
        case "ArrowRight":
            let margine4 = window.getComputedStyle(imagine).marginLeft
            imagine.style.marginLeft = parseInt(margine4) - 5 + 'px'
            break;
    }
})
}

/*window.onload = function() {
    setTimeout(() => {
        console.log('salut')
    },5000)
    const elem = setInterval ( () => {
        console.log('hello')
    },1000)
    clearInterval(elem)
}*/
