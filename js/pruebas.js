function probarValidarNombre() {
    console.assert(
        validarNombre('Paco98') === 'Este campo puede contener únicamente letras',
        'Validar nombre no validó que el nombre contenga únicamente letras'
    );
    console.assert(
      validarNombre('') === 'Este campo no debe estar vacío',
      'Validar nombre no validó que el nombre no sea vacío'
  );

  console.assert(
      validarNombre(
          'ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );
  console.assert(
      validarNombre('Paco') === '',
      'Validar nombre falló con un nombre válido'
  );
}

function probarValidarCiudad () {
    console.assert(
        validarCiudad('') === 'Este campo no debe estar vacío',
        'Validar ciudad no validó que la ciudad no esté vacía',
    );

    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Validar ciudad falló con una ciudad válida',
    );

}

function probarValidarDescripcionRegalo () {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo no debe estar vacío',
        'Validar descripción regalo no validó que la descripción del regalo no esté vacía',
    );

    console.assert(
        validarDescripcionRegalo(
            '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
            'Este campo debe tener menos de 100 caracteres',
            'Validar descripción regalo no validó que la descripción del regalo no contenga más de 100 caracteres',
    );

    console.assert(
        validarDescripcionRegalo('Nintendo 64 y $$$#@') === 'Este campo puede contener únicamente letras y números',
        'Validar descripción regalo no validó que la descripción del regalo contenga únicamente letras y números',
    );

    console.assert(
        validarDescripcionRegalo('Nintendo 64') === '',
        'Validar descripción regalo falló con una descripción del regalo válida',
    );

}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();

