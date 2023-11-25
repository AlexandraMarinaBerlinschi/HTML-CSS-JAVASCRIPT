//function handleClick () {}

const handleClick = (event) => {
    //alert('Ai dat Click')
    console.log(event)
}

//window.handleClick = -----> preia metoda de mai sus 

window.onload = () => {
    const mare = document.getElementById('mare')
    const mic = document.getElementById('mic')

    mic.addEventListener('click',(event) => { event.stopPropagation; console.log('mic')})
    mare.addEventListener('click',() => { console.log('mare')}, {capture: false})

    // event.preventDefault() -->
    /*
    const buton = document.getAnimations('buton')
    const handleClickMakeBgColorRed = (e) => {
        e.target.style.background = 'red'
    }
    */
    buton.onclick = (e) => {
        console.log(e)

    }
    buton.addEventListener('click', (e) => {
        console.log()
    })
}

