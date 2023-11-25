let jucator1=prompt("NUME JUCATOR 1")
let jucator2=prompt("NUME JUCATOR 2")

const matrice = [["-", "-", "-"],
                ["-", "-", "-"],
                ["-", "-", "-"]]

let isGameOver = false;
let turn = 1;

function logMatrix() {
    for(let i=0; i<3; i++) {
        console.log(matrice[i].toString())
    }
}
/*
const wincheck = { [[1, 2, 3], 
                  [4, 5, 6], 
                  [7, 8, 9], 
                  [1, 4, 7], 
                  [2, 5, 8], 
                  [3, 6, 9], 
                  [1, 5, 9], 
                  [3, 5, 7]]
}
function Wincheck { 
    for(i=0;i<3;i++) if(matrice[0][i]==wincheck

}
*/
do {
    if (turn%2==1) {
        let mutare = prompt(jucator1+" introdu linia si coloana pentru x")
        let linie = parseInt(mutare.split(' ')[0])
        let coloana = parseInt(mutare.split(' ')[1])
        console.log(jucator1+" a facut o mutare")
        matrice[linie][coloana]="x"
        logMatrix()
    } else {
        let mutare = prompt(jucator2+" introdu linia si coloana pentru 0")
        let linie = parseInt(mutare.split(' ')[0])
        let coloana = parseInt(mutare.split(' ')[1])

        console.log(jucator2+" a facut o mutare")
        matrice[linie][coloana]="0"
        logMatrix()
    }
    turn++
}while(!isGameOver && turn<10)
