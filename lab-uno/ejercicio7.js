/**Crea una función que verifique si una contraseña (string) es "segura". 
Considera que es segura si tiene más de 8 caracteres y contiene un 
número */

function esContrasenaSegura(contrasena) {
  if (contrasena === null || contrasena.length <= 8) {
    return false;
  }
  
  let tieneNumero = false;
  for (let i = 0; i < contrasena.length; i++) {
    if (!isNaN(parseInt(contrasena[i])) && contrasena[i] !== ' ') {
      tieneNumero = true;
      break;
    }
  }
  return tieneNumero;
}

function verificarContrasena() {
  let contrasena = prompt("Ingresa la contraseña para verificar:");
  
  if (contrasena === null || contrasena.trim() === '') {
    console.log("No ingresaste ninguna contraseña o cancelaste. Intenta de nuevo.");
    return;
  }

  if (esContrasenaSegura(contrasena)) {
    console.log(`La contraseña "${contrasena}" es segura.`);
  } else {
    console.log(`La contraseña "${contrasena}" NO es segura.`);
  }
}