<<<<<<< HEAD
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
=======
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
>>>>>>> 498085619e3a040f0a1b93ffde513ddac4f4a450
module.exports = { gets, print };