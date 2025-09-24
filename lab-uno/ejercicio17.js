/**Escribe un programa que cuente cuántos números pares hay en un
arreglo dado. */
function contarPares(arreglo) {
    if (!Array.isArray(arreglo)) {
        console.log("Error: El argumento debe ser un arreglo.");
        return 0;
    }
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        const numero = arreglo[i];
        if (typeof numero === 'number' && numero % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const paresEncontrados = contarPares(numeros);

console.log(`En el arreglo [${numeros}], hay ${paresEncontrados} números pares.`);