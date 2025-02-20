
const { v1: uuidv1, v3:uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');


const idv1 = uuidv1();
console.log('idv1 (Basado en el tiempo):', idv1);

// Ejemplo 2

const NAMESPACE = uuidv3.URL;
const namev3 = "EjemploNombre";

const idv3 = uuidv3(namev3, NAMESPACE);
console.log('idv3 (Basado en el nombre y espacio de nombre):', idv3);


// Ejemplo 3
const idv4 = uuidv4();
console.log('idv4 (Aleatorio):', idv4);

// Ejemplo 4
const namev5 = "OtroNombre";
const idv5 = uuidv5(namev5, NAMESPACE);
console.log('idv5 (Basado en el nombre y espacio de nombre con sha-1):', idv5);
