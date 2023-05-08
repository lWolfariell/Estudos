<<<<<<< HEAD
//importa funções do arquivo funcoes-auxiliares.js

const {gets, print} = require ('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++){
   
    const numeroSorteado = gets();

    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
    
}


print(maiorValorEncontrado);


=======
//importa funções do arquivo funcoes-auxiliares.js

const {gets, print} = require ('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++){
   
    const numeroSorteado = gets();

    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
    
}


print(maiorValorEncontrado);


>>>>>>> 498085619e3a040f0a1b93ffde513ddac4f4a450
