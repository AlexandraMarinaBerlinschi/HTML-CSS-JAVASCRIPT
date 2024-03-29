let rowsCount, colsCount
function drawTable(nrows, ncols) {
    /*
       1. Generați un tabel cu 'nrows' rânduri și 'ncols' coloane
       și adăugați-l în div-ul cu id-ul 'container'.
    */


    const container = document.getElementById('container')

    if (container)
    {
        const table = document.createElement('table')
        container.appendChild(table)

        for (let i = 0 ; i < nrows ; i++)
        {
            const tr = document.createElement('tr')
            table.appendChild(tr)
            for (let j = 0 ; j < ncols; j++)
            {
                const td = document.createElement('td')
                td.classList.add('r' + i)
                td.classList.add('c' + j)
                td.addEventListener('click',()=>{
                    td.style.backgroundColor=culoare
                })
                tr.appendChild(td)
            }
        }
    }

}

function colorCol(column, color) {
    /*
       2. Colorați coloana 'column' din tabla de desenat cu culoarea 'color'.
    */

    const columns = document.getElementsByClassName('c' + column)
    for ( let i = 0; i  < columns.length ; i++)
    {
        columns[i].style.backgroundColor = color
    }

}

function colorRow(row, color) {
    /*
       2. Colorați rândul 'row' din tabla de desenat cu culoarea 'color'.
    */

    const rows = document.getElementsByClassName('r' + row)
    for ( let i = 0; i  < rows.length ; i++)
    {
        rows[i].style.backgroundColor = color
    }
}

function rainbow(target) {
    let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];
    /*
       3. Desenați un curcubeu pe verticală sau orizontală conform argumentului 'target' folosind culorile din 'colors' și funcțiile 'colorCol' și 'colorRow'.
    */
}

function getNthChild(element, n) {
    /*
       4. Întoarceți al n-lea element copil al unui element dat ca argument.
    */
    return element.children[n]
};

function drawPixel(row, col, color) {
    /*
       5. Colorați celula de la linia 'row' și coloana 'col' cu culoarea `color'.
    */
    const cell = document.getElementsByClassName('r' + row + ' ' + 'c' + col)[0]
    if (cell)
    {
        cell.style.backgroundColor = color
    }
}

function drawLine(r1, c1, r2, c2, color) {
    /*
       6. Desenați o linie (orizontală sau verticală) de la celula aflată
       pe linia 'r1', coloana 'c1' la celula de pe linia 'r2', coloana 'c2'
       folosind culoarea 'color'.
       Hint: verificați mai întâi că punctele (r1, c1) și (r2, c2) definesc
       într-adevăr o linie paralelă cu una dintre axe.
    */

    if (r1 === r2) {
        const rows = document.getElementsByClassName('r' + r1)
        for (let j = c1; j <= c2; j++) {
            rows[j].style.backgroundColor = color

        }
    }
    else if (c1 === c2) {
        const columns = document.getElementsByClassName('c' + c1)
        for (let j = r1; j <= r2; j++) {
            columns[j].style.backgroundColor = color

        }
    }
}

function drawRect(r1, c1, r2, c2, color) {
    /*
       7. Desenați, folosind culoarea 'color', un dreptunghi cu colțul din
       stânga sus în celula de pe linia 'r1', coloana 'c1', și cu
       colțul din dreapta jos în celula de pe linia 'r2', coloana 'c2'.
    */
    for (let i = r1; i <= r2; i++)
    {
        drawLine(i,c1,i,c2,color)
    }
}

function drawPixelExt(row, col, color) {
    /*
       8. Colorați celula de la linia 'row' și coloana 'col' cu culoarea 'color'.
       Dacă celula nu există, extindeți tabla de desenat în mod corespunzător.
    */

    if (row > rowsCount)
    {
        for (let i = 0 ; i < row - rowsCount; i++)
        {
            const container = document.getElementById('container');
            if (container)
            {
                const newTr = document.createElement('table')
                container.appendChild(newTr)
            }
        }
    }
    /* if (col > colsCount)
     {
         const rows = document.getElementsByTagName('tr')
         for (let j)
     }*/


}

function colorMixer(colorA, colorB, amount){
    let cA = colorA * (1 - amount);
    let cB = colorB * (amount);
    return parseInt(cA + cB);
}

function drawPixelAmount(row, col, color, amount) {
    /*
    9. Colorați celula la linia 'row' și coloana 'col' cu culoarea 'color'
    în funcție de ponderea 'amount' primită ca argument (valoare între 0 și 1).
    Dacă 'amount' are valoarea:
    1, atunci celula va fi colorată cu 'color'
    0, atunci celula își va păstra culoarea inițială
    pentru orice altă valoare, culoarea inițială și cea dată de argumentul
    'color' vor fi amestecate. De exemplu, dacă ponderea este 0.5, atunci
    culoarea inițială și cea nouă vor fi amestecate în proporții egale (50%).
    */

    /*
    Hint 1: folosiți funcția colorMixer de mai sus.

    Hint 2: pentru un argument 'color' de forma 'rgb(x,y,z)' puteți folosi
    let newColorArray = color.match(/\d+/g);
    pentru a obține un Array cu trei elemente, corespunzătoare valorilor
    asociate celor trei culori - newColorArray = [x, y, z]

    Hint 3: pentru a afla culoarea de fundal a unui element puteți folosi
    metoda getComputedStyle(element). Accesând proprietatea backgroundColor
    a obiectului întors, veți obține un string de forma 'rgb(x,y,z)'.
    */
}

function delRow(row) {
    /*
       10. Ștergeți linia cu numărul 'row' din tabla de desenat.
    */
}

function delCol(col) {
    /*
       10. Ștergeți coloana cu numărul 'col' din tabla de desenat.
    */
}

function shiftRow(row, pos) {
    /*
       11. Aplicați o permutare circulară la dreapta cu 'pos' poziții a
       elementelor de pe linia cu numărul 'row' din tabla de desenat.
    */
}

function jumble() {
    /*
       12. Folosiți funcția 'shiftRow' pentru a aplica o permutare circulară
       cu un număr aleator de poziții fiecărei linii din tabla de desenat.
    */
}

function transpose() {
    /*
       13. Transformați tabla de desenat în transpusa ei.
    */
}

function flip(element) {
    /*
       14. Inversați ordinea copiilor obiectului DOM 'element' primit ca argument.
    */
}

function mirror() {
    /*
       15. Oglindiți pe orizontală tabla de desenat: luați jumătatea stângă a tablei,
       aplicați-i o transformare flip și copiați-o în partea dreaptă a tablei.
    */
}

function smear(row, col, amount) {
    /*
       16. Întindeți culoarea unei celule de pe linia 'row' și coloana 'col' în celulele
       învecinate la dreapta, conform ponderii date de 'amount' (valoare între 0 și 1).
       Cu colorarea fiecărei celule la dreapta, valoarea ponderii se înjumătățește.
       Hint: folosiți funcția 'drawPixelAmount'.
    */
}

//function handleClick () {}

const handleClick = (event) => {
    //alert('Ai dat Click')
    console.log(event)
}


window.onload = () => {
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
let culoare

window.onload = function(){

    const rows = 20;
    const cols = 20;
    drawTable(rows, cols)
    /*colorCol(3, 'purple')
    colorRow(5, 'pink')
    drawPixel(1 , 2 , 'green')
    drawLine(2,2,2,6,'black')
    drawRect(4,7,7,9,'red')
    */
    const colorPicker=document.getElementById('color')
        colorPicker.addEventListener('change',(event)=>{
            culoare=event.target.value
        })

    const clean=document.getElementById('clean')
    clean.addEventListener('click', () => {
        const cells = document.getElementsByTagName('td')
        for (let i=0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'transparent'
        }
    })
    
}