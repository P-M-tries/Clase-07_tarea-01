/*TAREA CLASE 7
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */



//   `const contieneSoloLetras = /^[A-z]+$/.test(valor);`
// console.log(/abc/.test("abcde"));
// [A-z0-9]

function validarNombre (nombre) {
    if(nombre.length === 0){
        return 'Este campo no debe estar vacío';
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return 'Este campo puede contener únicamente letras'
    }

    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
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
    if (!/^[a-z0-9 ,\.]+$/i.test(descripcionRegalo)) {
        return 'Este campo puede contener únicamente letras y números';
    }
    if (descripcionRegalo.length >= 100) {
        return 'Este campo debe tener menos de 100 caracteres';
    }
    return '';
}


const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;


function validarFormulario(event) {
    clearErrores();
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };

    const esExito = manejarErrores(errores) === 0;
    let regalo = descripcionRegalo;
    localStorage.setItem("regalo",JSON.stringify(regalo));

    if(esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        redirectToWishlist(regalo);
    }

    event.preventDefault();
}


function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            cantidadErrores ++;
            $form[key].className = 'error'; // funciona solo si la llave tiene el mismo nombre que el atributo name del objeto en html
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            // borran el campo adecuado
            $form[key].className = '';
        }
    });

    return cantidadErrores;
}

function clearErrores() {
    document.querySelector('#errores').innerText = '';

};

function redirectToWishlist(regalo){
    setTimeout(function() {window.location.href = 'file:///C:/Users/Paula/3D%20Objects/Tarea%20Clase%207/Clase-07_tarea-01/wishlist.html'}, 5000);

};




