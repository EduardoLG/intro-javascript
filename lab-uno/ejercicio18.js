/**Crea una función que invierta una cadena de texto (ej. "hola" ->
"aloh"). */
function invertirCadena(cadena) {
    if (typeof cadena !== 'string') {
        console.log("Error: El argumento debe ser una cadena de texto.");
        return "";
    }
    return cadena.split('').reverse().join('');
}


function invertirPalabraDeUsuario() {
    const palabra = prompt("Ingresa una palabra para invertir:");

    if (palabra === null || palabra.trim() === "") {
        console.log("No se ingresó ninguna palabra.");
        return;
    }
    
    const palabraInvertida = invertirCadena(palabra);
    
    console.log(`La palabra original es: "${palabra}"`);
    console.log(`La palabra invertida es: "${palabraInvertida}"`);
}

invertirPalabraDeUsuario();