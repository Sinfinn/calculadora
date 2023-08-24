// comentario de una linea
/* comentario de más
de una línea*/
const prompt = require("prompt-sync")(); //esto para poder usar prompt
// ejecutar por terminal: npm install prompt-sync
//indentar control +K control +F

var nombre; 
var n1,n2, suma;



seguir = prompt("Bienvenido a la calculadora, ¿quiere seguir? s/n: ");
if (seguir == "s") {
    seguir = prompt("1.- Suma, 2.- Resta, 3.- Multiplicación, 4.- División, ¿que quiere hacer? s/n: ");
    if (opcion ==1){
        console-log ("esto es suma" )
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        suma = n1 + n2;
        console.log(suma);
    }
    else if (opcion ==2)
    {
        Console.log ("esto es resta" )
    }
    else if (opcion ==3)
    {
        Console.log ("esto es multiplicación" )
    }
    else if (opcion ==4)
    {
        Console.log ("esto es división" )
    }
}
else 
    console.log ("Chau");

