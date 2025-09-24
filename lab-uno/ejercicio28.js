/**Crea una función que reciba un número y determine si es un número
primo. */
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    if (numero === 2) {
        return true;
    }

    if (numero % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarNumeroUsuario() {
    const entrada = prompt("Ingresa un número para verificar si es primo:");
    const numero = parseInt(entrada);

    if (isNaN(numero) || entrada === null) {
        console.log("Dato no válido. Por favor, ingresa un número.");
        return;
    }

    if (esPrimo(numero)) {
        console.log(`El número ${numero} SÍ es un número primo.`);
    } else {
        console.log(`El número ${numero} NO es un número primo.`);
    }
}


verificarNumeroUsuario();