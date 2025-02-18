// Ejercicio 13: Inventario de productos
// Consigna:
// Crea un programa para manejar un archivo inventario.json. Debes:
// 1. Agregar productos al inventario con nombre, cantidad y precio.
// 2. Actualizar la cantidad de un producto existente.
// 3. Calcular el valor total del inventario.
// Pista: Usa un ciclo para calcular el valor total.


const fs = require('fs');

const filePath = './inventory.json';

const inventory = [];

const product1 = {
  name: 'Laptop',
  quantity: 10,
  price: 1000
};

const product2 = {
  name: 'Mouse',
  quantity: 50,
  price: 20
};

inventory.push(product1);
inventory.push(product2);

const inventoryJSON = JSON.stringify(inventory, null, 2);

fs.writeFile(filePath, inventoryJSON, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  console.log('File written successfully');
}
);


const productToUpdate = 'Laptop';
const newQuantity = 5;

fs.readFile(filePath, 'utf-8', (err, data) => {

  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const inventory = JSON.parse(data);

  const product = inventory.find((product) => product.name === productToUpdate);

  if (product) {
    product.quantity = newQuantity;
  }

  const inventoryJSON = JSON.stringify(inventory, null, 2);

  fs.writeFile(filePath, inventoryJSON, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File written successfully');
  });
});


fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const inventory = JSON.parse(data);

  let totalValue = 0;

  inventory.forEach((product) => {
    totalValue += product.quantity * product.price;
  });

  console.log('Total inventory value:', totalValue); 
});

