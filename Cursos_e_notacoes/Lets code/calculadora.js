let numX = [1,2,3,4,5,6,7,8,9,10];
let numY = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numY.length; i++) { // selecionado o numero definido pelo indice da variavel numY

    for (let j = 0; j < numX.length; j++) { // e então é selecionado o numero multiplicador

        let result = numY[i] * numX[j] // pega os indice atuais e faça a multiplicação e armazenado o valor na var result
        console.log (numY[i]," x ", numX[j], " = ", result ); // imprima a concatenação a seguir

    }
    
}
