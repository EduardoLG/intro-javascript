/**
 * TIPO DE DATO 'number'
 */

// 1 entero y decimal
const entero = 42
const decimal = 3.14

// 2 notacion cientifica
const cientifica = 5e3

// 3 infinitos y NaN (not a number)
const infinito = Infinity
const noEsNumero = NaN

// Operaciones aritemticas 
// 1 suma, resta, multiplicacion y division
const suma = 5 + 6
const resta = 5 - 2
const multiplicacion = 7 * 8 
const division = 7 / 8

// 2 modulo y exponenciacion
const modulo = 16 % 2
const exponenciacion = 2 ** 4

// 3 Presicion, javascript tiene problemas de calculo

const resultado = 0.1 + 0.2

console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado == 0.3)

//Operaciones avanzadas 
const raizcuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizcuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)