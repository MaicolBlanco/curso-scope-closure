/* Reasignación y redeclaración */
var firstName; // Valor -> Undefined => Declaramos
firstName = 'Esteban'; // => Asignamos
console.log(firstName);

var lastName = 'Esteban'; // Declaramos y Asignamos
lastName = 'Martin'; // Reasignamos
console.log(lastName);

var secondName = 'Martin'; // declarando / asignando
var secondName = 'Esteban'; // Redeclaramos
console.log(secondName);

/* let */
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kimi'; // reasignar
console.log(fruit);

let fruit = 'Banana'; // error al redeclarar la variable con let
console.log(fruit);

/* const */
const animal = 'Dog'; // declarar y asignar
// animal = 'Cat'; // reasignando -> error al reasignar
const animal = 'snake';  // error al redeclarar la variable con let
console.log(animal);

/* Se puede reasignar o cambiar valoes con objetos */
const vehicle = []; //
vehicle.push('Mazda');
console.log(vehicle);

vehicle.pop();
console.log(vehicle);