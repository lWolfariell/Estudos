// criar uma tabuada
/*const numero = 4;


for (let i = 1; i <= 10; i++) {
    console.log (i * numero);
    
}*/

// 2) crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par ecnontrada.

const numeros =[7, 10, 15, 32, 45, 987, 333, 156, 55, 190];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

   
    if (numero % 2 === 0){ // se numero for divisivel por 2 é par
        console.log (numero)
    } 

} 
