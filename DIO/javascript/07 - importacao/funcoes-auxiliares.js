const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}
// module.exports.gets = gets; outra forma de exportar uma unica função
module.exports = { gets, print };