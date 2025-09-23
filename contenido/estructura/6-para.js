/** FOR ciclo Para
 * 
 *  for | for - of | for-in
 */

let lista = ['eat','sleep','code','repeat']

for (let i = 0; i < lista.lengt; i++) {
    //console.log(lista[i])
}

// for of [{FOR EACH}]
let canasta = ['manzana','pera','naranja','uva']
for (fruta of canasta) {
    //console.log(fruta)
}

// for - in iterar sobre las propiedades de un objeto 

const listaDeCompras = {
    nombre: 'manzana',
    costo: 3.4,
    cantidad: 12,
    marca: 'manzanita feliz'
}

for (fruta in listaDeCompras) {
    console.log(fruta)
}
for (fruta in listaDeCompras) {
    console.log('${fruta} : ${listaDeCompras[fruta]}')
}
for (fruta of listaDeCompras) {
    console.log('${fruta} : ${listaDeCompras[fruta]}')
}


    
