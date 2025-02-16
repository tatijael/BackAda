// Tienes un parque de diversiones que permite la entrada a personas
// mayores de 12 años y menores de 60. Escribe una función que reciba una
// lista de edades y devuelva cuántas personas pueden entrar al parque.
// Consigna:
// • Usa un bucle for y condicionales.
// • Usa un array como entrada de la función.
// • Devuelve el número de personas que cumplen con los requisitos.


function amusementPark(ageList) {
    let count = 0;

    for(let i = 0; i < ageList.length; i++) {
      if (ageList[i] > 12 && ageList[i] < 60) {
        count++;
      }
    }
    return count;
}

const ageList = [10, 15, 35, 65, 12, 59]

console.log(amusementPark(ageList)); 
