/**Crea una función que verifique si una contraseña (string) es "segura". 
Considera que es segura si tiene más de 8 caracteres y contiene un 
número */

function esContrasenaSegura(contrasena) {
    if (contrasena.length <= 8) {
      return false;
    }
    let tieneNumero = false;
    for (let i = 0; i < contrasena.length; i++) {
      if (!isNaN(parseInt(contrasena[i]))) {
        tieneNumero = true;
        break;
      }
    }
    return tieneNumero;
  }
  
  function ejecutarContrasena() {
    let contrasena = prompt("Ingresa la contraseña para verificar:");
    const resultado = document.getElementById('resultado');
  
    if (esContrasenaSegura(contrasena)) {
      resultado.textContent = `La contraseña "${contrasena}" es segura.`;
    } else {
      resultado.textContent = `La contraseña "${contrasena}" NO es segura.`;
    }
  }