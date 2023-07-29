// Inicio del programa
alert("Bienvenido al sistema de calificaciones.");

// Declarar sistema como un booleano para el ciclo while

let sistema = true;

while (sistema) {
        // Parseado de option como número entero para facilitar ingreso de opción
    let option = parseInt(
        prompt(
            "A continuación, seleccione la opción que desee:\n 1. Calcular promedio\n 2. Salir del sistema."
        )
    );

    function promedio(examen1, examen2, examen3) {
        return (examen1 + examen2 + examen3) / 3;
    }

    // Switch para simular un menú interactivo

    switch (option) {
        case 1: 
            // Opción para ingresar las calificaciones del alumno y calcular su promedio
            let nombre = prompt("Ingrese el nombre del alumno");
            let examen1 = parseInt(prompt("Ingrese la nota del primer examen"));
            let examen2 = parseInt(prompt("Ingrese la nota del segundo examen"));
            let examen3 = parseInt(prompt("Ingrese la nota del tercer examen"));
            let resultado = promedio(examen1, examen2, examen3);
            
            // Este alert tiene la finalidad de indicar el promedio del alumno

            alert("El alumno " + nombre + " tiene promedio de: " + resultado);

            // El ciclo if indica la condición del estudiante

            if (resultado >= 7 && resultado <= 10) {
                alert("El alumno se encuentra promocionado.");
            } else if (resultado >= 4 && resultado < 7) {
                alert("El alumno está en condición regular.");
            } else {
                alert("El alumno está desaprobado");
            }
            break;
        case 2:
            // Esta opción es para cerrar el programa aprovechando el booleano de sistema
            sistema = false;
            break;
        default: // Opción por defecto
            alert("Ingrese una opción válida.");
            break;
    }
}

// Finalización del programa

alert("Gracias por usar el sistema.");
console.log("Gracias por usar el sistema.");