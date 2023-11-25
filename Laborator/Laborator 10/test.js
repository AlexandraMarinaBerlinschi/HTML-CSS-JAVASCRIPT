/*
window.onload = async () => {
    // https://random-data-api.com/api/v2/users

//AWAIT INGHEATA TOT 
    try {
        const rezultat = await fetch ('https://random-data-api.com/api/v2/users')
        const rezultatJson = await rezultat.json()
        console.log(rezultatJson)
    }catch(error)

    const rezultatFetch = 
    fetch('https://random-data-api.com/api/v2/users')
    .then(function(response) { //rezultatul callback-ului din primul then este folosit ca argument pentru callbackul urmator then
        return response.json()
    })
    .then(function(jsonResponse){
        console.log(jsonResponse)
    })
    .catch((error) => {
        console.log('oops, a picat serverul')
    })
    console.log(rezultatFetch)
 
}

 1.formular ce contine un input de tip number si un buton submit
2.la submit pe formular, faceti un fetch la api-ul de mai sus cu query 
parameter ul 'size' setat cu valoarea introdusa de  ( folositi
event.preventDefault() ca sa evitati REFRESH)
NOTE: aveti grija cand size <= 0 , size === 1
3.preluati datele din JSON ul primit si afisati le ca elemente DOM in pagina
( faceti niste div uri si niste imagini folosind campul "avatar" din JSON)
4.aveti si error handling ( daca spamati API ul o sa primiti o eroare cod
http 429 - too many requests)
*/

function JSONToDOM(json) {
    const div = document.createElement('div')
    div.innerText = ' nume ' + json.last_name + ' prenume: '
        +json.first_name
    document.body.appendChild(div)
    const img = document.createElement('img')
    img.src = json.avatar
    document.body.appendChild(img)
}

window.onload = async() => {
    const formular=document.getElementById('formular')

    formular.onsubmit = (event) => {
        event.preventDefault();
        const number=parseInt(formular.number.value);

        fetch('https://random-data-api.com/api/v2/users?size='+number)
        .then (function(response) {
            return response.json()
        })
        .then(function(JSONResponse) {
            if (number===1) {
                JSONToDOM(JSONResponse)
            }else {
                for(let i=0; i< JSONResponse.length;i++) {
                    JSONToDOM(JSONResponse[i])
                }
            }
        })
        .catch((error) => {
            console.log('Pagina este momentan indisponibila')
        })
    }
}

console.log(navigator.userAgent);