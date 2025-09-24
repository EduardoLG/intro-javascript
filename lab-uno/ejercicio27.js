/**Escribe un programa que genere un número aleatorio entre 1 y 100,
y pida al usuario que lo adivine, dándole pistas de si su intento es
mayor o menor. */
function adivinarElNumero() {

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let numeroJugador;
    let intentos = 0;

    console.log("¡Adivina el número entre 1 y 100.!");

    do {

        let entrada = prompt("Ingresa un número:");
        numeroJugador = parseInt(entrada);
        intentos++;

        if (isNaN(numeroJugador)) {
            console.log("Ese no es un dato valido. Por favor, ingresa un número.");
            continue;
        }

        if (numeroJugador < numeroSecreto) {
            console.log("El número secreto es mayor. ¡Intenta de nuevo!");
        } else if (numeroJugador > numeroSecreto) {
            console.log("El número secreto es menor. ¡Intenta de nuevo!");
        }

    } while (numeroJugador !== numeroSecreto);

    console.log(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en ${intentos} intentos.`);
}

adivinarElNumero();