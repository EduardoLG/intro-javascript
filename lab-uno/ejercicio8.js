/**Escribe una función que reciba tres números y determine si pueden 
formar un triángulo (la suma de dos lados debe ser mayor que el 
tercero). */

function esTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }
    return a + b > c && a + c > b && b + c > a;
}

function ejecutarTriangulo() {
    let lado1 = parseInt(prompt("Ingresa la longitud del primer lado:"));
    let lado2 = parseInt(prompt("Ingresa la longitud del segundo lado:"));
    let lado3 = parseInt(prompt("Ingresa la longitud del tercer lado:"));

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        console.log("Por favor, ingresa solo números válidos.");
        return;
    }

    if (esTriangulo(lado1, lado2, lado3)) {
      console.log(`Sí, los lados ${lado1}, ${lado2} y ${lado3} pueden formar un triángulo.`);
    } else {
      console.log(`No, los lados ${lado1}, ${lado2} y ${lado3} no pueden formar un triángulo.`);
    }
}