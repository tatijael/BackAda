// Actividad 10: Gestión de compras
// Consigna: Crea un programa que registre las compras realizadas. El
// programa debe permitirte:
// 1. Agregar una compra: Registrar una compra con su nombre y
// precio.
// 2. Listar las compras: Mostrar todas las compras registradas.
// 3. Eliminar una compra: Eliminar una compra de la lista.
// Pistas:
// • Usa un archivo JSON para guardar las compras.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada compra debe tener un ID único.

const fs = require('fs');

const filePath = './purchases.json';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function addPurchase(name, price) {
  const data = fs.readFileSync(filePath, 'utf8');
  const purchases = JSON.parse(data);

  purchases.push({ id: purchases.length + 1, name, price });

  fs.writeFileSync(filePath, JSON.stringify(purchases, null, 2));
  console.log('Purchase added successfully');
}

function listPurchases() {
  const data = fs.readFileSync(filePath, 'utf8');
  const purchases = JSON.parse(data);

  console.log('Registered purchases:', purchases);
}

function deletePurchase(id) {
  const data = fs.readFileSync(filePath, 'utf8');
  const purchases = JSON.parse(data);

  const purchaseIndex = purchases.findIndex(purchase => purchase.id === id);

  if (purchaseIndex === -1) {
    console.error('Purchase not found');
    return;
  }

  purchases.splice(purchaseIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(purchases, null, 2));
  console.log('Purchase deleted successfully');
}


addPurchase('Milk', 2.5);
addPurchase('Bread', 1.5);
addPurchase('Eggs', 3);
listPurchases();
deletePurchase(1);
listPurchases();
