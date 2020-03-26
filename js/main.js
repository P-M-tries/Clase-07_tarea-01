/*TAREA CLASE 7
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

//   `const contieneSoloLetras = /^[A-z]+$/.test(valor);`
// console.log(/abc/.test("abcde"));
// [A-z0-9]

function validarNombre (nombre) {
    if(nombre.length === 0){
        return 'Este campo no debe estar vacío';
    }

    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    if (!/^[A-z]+$/.test(nombre)) {
        return 'Este campo puede contener únicamente letras'
    }
    return '';

}

function validarCiudad (ciudad) {
    if(ciudad.length === 0) {
        return 'Este campo no debe estar vacío';
    }
    return '';

}

function validarDescripcionRegalo (descripcionRegalo) {
    if(descripcionRegalo.length === 0) {
        return 'Este campo no debe estar vacío';
    }
    if (descripcionRegalo.length > 100) {
        return 'Este campo debe tener menos de 100 caracteres';
    }
    if (!/^[A-z0-9]+$/.test(descripcionRegalo)) {
        return 'Este campo puede contener únicamente letras y números';
    }
    return '';
}

/*
function validarForm () {
    const errores = {
        name: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        descripcionRegalo: validarDescripcionRegalo(descripcionRegalo)
    }

    let cuentaErrores = 0;
    
    if (errores.nombre) {
      console.log(errores.nombre);
      cuentaErrores += 1;
    }
    if (errores.ciudad) {
        console.log(errores.ciudad);
        cuentaErrores += 1;
      }
    if (errores.descripcionRegalo) {
        console.log(errores.descripcionRegalo);
        cuentaErrores += 1;
      }
}

????????
*/
