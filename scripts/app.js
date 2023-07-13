alert("Bienvenido al sistema de calificaciones.");

let sistema = true;

while (sistema) {
    let option = parseInt(
        prompt(
            "A continuación, seleccione la opción que desee:\n 1. Nuevo estudiante\n 2. Calcular promedio\n 3. Salir del sistema."
        )
    );

    function promedio(examen1, examen2, examen3) {
        return (examen1 + examen2 + examen3) / 3;
    }

    switch (option) {
        case 1:
            function crearAlumno(nombre, apellido, curso) {
                const alumno = {
                    nombre: prompt("Escriba el nombre del alumno"),
                    apellido: prompt("Escriba el apellido del alumno"),
                    curso: parseInt(prompt("Escriba el curso del alumno")),
                    mostrarDatos: function () {
                        alert("El alumno se llama " + this.nombre + " " + this.apellido + " y está en el curso " + this.curso);
                    }
                };
                return alumno;
            }
            alert("El alumno ingresado es: " + crearAlumno().mostrarDatos());
            break;
        case 2:
            let nombre = prompt("Ingrese el nombre del alumno");
            let examen1 = parseInt(prompt("Ingrese la nota del primer examen"));
            let examen2 = parseInt(prompt("Ingrese la nota del segundo examen"));
            let examen3 = parseInt(prompt("Ingrese la nota del tercer examen"));
            let resultado = promedio(examen1, examen2, examen3);
            alert("El alumno " + nombre + " tiene promedio de: " + resultado);
            if (resultado >= 7 && resultado <= 10) {
                alert("El alumno se encuentra promocionado.");
            } else if (resultado >= 4 && resultado < 7) {
                alert("El alumno está en condición regular.");
            } else {
                alert("El alumno está desaprobado");
            }
            break;
        case 3:
            sistema = false;
            break;
        default:
            alert("Ingrese una opción válida.");
            break;
    }
}
alert("Gracias por usar el sistema.");
console.log("Gracias por usar el sistema.");
