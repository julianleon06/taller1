// 6. Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
    // Por ejemplo, si el usuario ingresó la frase `Hola Mundo` y el número 5, el programa debe imprimir `Hola Mundo` 5 veces:

    // ``` JavaScript
    // Hola Mundo
    // Hola Mundo
    // Hola Mundo
    // Hola Mundo
    // Hola Mundo
    // ```

    let frase = (prompt('ingrese una frase'));
    let cantidad = parseInt(prompt('cantidad de veces de la frase'));
    for (let i = 0; i < cantidad; i++) {
        console.log(frase);
    }