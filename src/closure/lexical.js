/* Tienes una closure cuando una función cualquiera accede a una variable fuera
   de su contexto 
   
   Básicamente una closure es cuando usamos una variable de una funcion “padre” en una 
   función “hijo”. Además para que sea una closure es que estas funciones 
   sean anidadas (“padre-hijo”)*/
const myGlobal = 0;

function myFunction(params) {
    const myNumber = 1;
    console.log(myGlobal);

    function parent(params) { // function interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(params) {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();