/* Modo Estricto */
'use strict'; // se usa para ser obligatorio en declarar y asignar las variables
// No se hace uso del hoisting que eleva las variables
// Js lo interpreta var pi; -> Undefined
pi = 3.1416;
console.log(pi);

function myFunction(params) {
    'use strict';
    return pi = 3.1416;
}
console.log(myFunction());
