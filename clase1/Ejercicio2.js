// Escribe una función que reciba un objeto con platos y precios, y devuelva
// los platos cuyo precio sea menor a $20.
// Consigna:
// • Usa un bucle for...in.
// • Usa objetos y arrays.

let menu = {
  'Salad': 15,
  'Soup': 8,
  'Meat': 25,
  'Pasta': 18
}

function cheapDishes(dishes) {
  let cheapDishes = [];

  for (let dish in dishes) {
    if (dishes[dish] < 20 ) {
      cheapDishes.push(dish);
    }
  }   
  return cheapDishes;
}

console.log(cheapDishes); // ['Salad', 'Soup', 'Pasta']