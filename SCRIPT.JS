// LABORATORIO: Calculadora de Operaciones Básicas
// ----------------------------------------------
// Sesión: Utilizando JavaScript
// Este código está escrito como si lo hubiera desarrollado yo misma,
// siguiendo paso a paso cada punto solicitado en el laboratorio.
// ----------------------------------------------


// Paso 1. Declaración de Variables
// Variables iniciales (pueden ser cambiadas por el usuario más adelante)
let numero1 = 10;
let numero2 = 5;

// Variable para la operación
let operacion = ""; // Aquí el usuario escribirá: suma, resta, multiplicacion o division

console.log("=== Calculadora Básica en JavaScript ===");
console.log("Variables iniciales:");
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);


// Paso 2. Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {

    if (operacion === "suma") {
        return num1 + num2;

    } else if (operacion === "resta") {
        return num1 - num2;

    } else if (operacion === "multiplicacion") {
        return num1 * num2;

    } else if (operacion === "division") {

        // Validar división por cero
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero.";
        }
        return num1 / num2;

    } else {
        return "Error: operación no válida.";
    }
}


// Paso 3. Validaciones — Incluidas dentro de la función arriba.


// Paso 4. Bucle while para realizar varias operaciones
let continuar = true;

while (continuar) {

    // Solicito datos al usuario
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let oper = prompt("Escribe la operación (suma, resta, multiplicacion, division)\nO escribe 'salir' para terminar:").toLowerCase();

    if (oper === "salir") {
        console.log("Saliendo de la calculadora...");
        alert("Gracias por usar la calculadora.");
        continuar = false;
        break;
    }

    // Llamo a la función
    let resultado = realizarOperacion(num1, num2, oper);

    // Muestro el resultado
    console.log("----------------------------------");
    console.log("Número 1:", num1);
    console.log("Número 2:", num2);
    console.log("Operación:", oper);
    console.log("Resultado:", resultado);
    console.log("----------------------------------");

    alert("Resultado: " + resultado);
}


// Paso 5. Mensaje final
console.log("La calculadora ha finalizado correctamente.");