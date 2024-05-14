// 9. Escribe un programa que:
//     - Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
//     - Elimine el segundo elemento.
//     - Recorra e imprima el arreglo.

//     Ejemplo:

//     ``` JavaScript
//         Ingresa un número> 5
//         1
//         3
//         4
//         5
//     ```

//     NOTA: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.


let num2 = parseFloat(prompt('digite un numero'));
let lista = [];
for (let i = 1; i <= num2; i++) {
    lista.push( i );
}
lista.splice(1,1);

console.log(lista);
