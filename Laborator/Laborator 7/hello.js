window.onload = function () {
    //const testElement = document.getElementById('test');
    //console.log(testElement);

    //const cevaElement = document.getElementByClassName('ceva');
    //console.log(cevaElement);

    //const.paragraphElements = document.getElementsByTagName('p');
    //console.log(paragraphElements);

    //const test = document.querySelectorAll('body > p:nth-child(1)')
    //console.log(test);

    //const testElement = document.getElementById('test');
    //if (testElement) {
        //testElement.style.backgroundColor = 'red';
        //testElement.classList.add('clasa_mea_noua');
        //console.log(testElement.classList);
        //console.log(testElement.className);
    //}
    
    const myDiv = document.createElement('div');
    const body=document.body;
    body.appendChild(myDiv);

    const testElement = document.getElementById('test');
    testElement.remove();
}