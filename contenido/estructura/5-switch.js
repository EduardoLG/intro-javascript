/** Estructura Switch */
let expresion = 'Mangos'

switch (expresion) {
    case 'Naranjas':
            console.log('Las naranjas cuestan Q 12 la mano')
        break;
    case 'Platanos':
            console.log('Los platanos  cuestan Q 19 la docena')
        break;
    case 'Uvas':
            console.log('Las uvas cuestan Q 25 la libra')
        break;
    // casos compartidos
    case 'Mangos':
    case "Papayas":
        console.log('Los mangos y las papayas vale Q12 la libra')
        break;
    default:
        console.log('No se encontraron con inventario para vender ${expresion}')
        break;
}