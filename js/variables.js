
let mensaje = "Hello World"

// Ej 1//
alert ("Hello Kittie") 

// Ej 2//


document.write  (mensaje)

//Ej 3//

document.write ( 3+5 );

//Ej 4//

let nombre = prompt("Escribe tu nombre");
document.write("Hola"+nombre);

//Ej 5//

var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
document.write("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );

//Ej 6//

var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
if (n1 > n2) {
document.write(n1);
} else {
document.write(n2);
}

//Ej 7//

var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
var n3 = prompt("Escribe otro número");
if (n1 > n2 && n1 > n3) {
document.write(n1);
} else if (n2 > n3) {
document.write(n2);
} else {
document.write(n3);
}

//EJ 8//

var n1 = prompt("Escribe un número");
if (n1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}

