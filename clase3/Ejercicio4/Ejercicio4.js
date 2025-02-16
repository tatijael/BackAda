// Actividad 4: Control de inventario
// Consigna: Crea un programa para llevar el control de un inventario. El
// programa debe permitirte:
// 1. Agregar un producto: Registrar un producto con su nombre y
// cantidad disponible.
// 2. Listar los productos: Mostrar todos los productos registrados.
// 3. Actualizar la cantidad de un producto: Modificar la cantidad de
// un producto en el inventario.
// Pistas:
// • Usa un archivo JSON para guardar los productos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada producto debe tener un ID único que se pueda utilizar para
// actualizar su cantidad.

const fs = require('fs');
const filePath = './inventory.json';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function addProduct(productName, quantity) {
  const data = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(data);

  products.push({ id: products.length + 1, name: productName, quantity: quantity });

  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
  console.log('Product added successfully');
}

function listProducts() {
  const data = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(data);

  console.log('Registered products:', products);
}

function updateProductQuantity(id, newQuantity) {
  const data = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(data);

  const productIndex = products.findIndex(product => product.id === id);

  if (productIndex === -1) {
    console.error('Product not found');
    return;
  }

  products[productIndex].quantity = newQuantity;

  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
  console.log('Product quantity updated successfully');
}

// Ejemplos de uso
addProduct('Laptop', 10);
addProduct('Mouse', 20);
listProducts();
updateProductQuantity(1, 5);
listProducts();
