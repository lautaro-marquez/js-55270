// Inicio del programa
alert("Bienvenido al sistema de calificaciones.");

// Declarar sistema como un booleano para el ciclo while

let sistema = true;

while (sistema) {
    // Declaración de función crearAlumno()

    function crearAlumno(nombre, apellido, curso) {

        // Creación de un objeto alumno con las propiedades de nombre, apellido y curso

        let alumno = {
            nombre: nombre,
            apellido: apellido,
            curso: Number(curso)
        };

        // Mediante el return, se devuelve el objeto alumno con la nueva información

        return alumno;

    };

    // Declaración de función promedio() para calcular el promedio de un alumno

    function promedio(examen1, examen2, examen3) {
        return (examen1 + examen2 + examen3) / 3;
    }

    // Parseado de option como número entero para facilitar ingreso de opción
    
    let option = parseInt(
        prompt(
            "A continuación, seleccione la opción que desee:\n 1. Agregar alumno\n 2.Calcular promedio\n 3. Salir del sistema."
        )
    );

    // Switch para simular un menú interactivo

    switch (option) {
        case 1:
            // Declaramos una variable para contar el número de alumnos
            let numAlumnos = 0;

            // Declaramos un array para almacenar a los alumnos
            let alumnos = [];

            // Declaramos una variable y como valor le asignamos una función
            let nuevoAlumno = crearAlumno(
                prompt("Ingrese el nombre del alumno: "),
                prompt("Ingrese el apellido del alumno: "),
                prompt("Ingrese el curso del alumno: ")
            );

            // Agregamos el nuevo alumno al arreglo alumnos con push
            alumnos.push(nuevoAlumno);

            console.log(alumnos);

            // Accedemos al último elemento del arreglo alumnos usando la variable numAlumnos
            prompt("El alumno ingresado se llama " + alumnos[numAlumnos - 1].nombre + " " + alumnos[numAlumnos - 1].apellido + " y pertenece a " + alumnos[numAlumnos - 1].curso + " año.")

            break;
        case 2:
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
        case 3:
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