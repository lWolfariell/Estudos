<<<<<<< HEAD
/*const alunos = [ 'João', 'Vitor', 'Marina'];

/* formas de colocar/adcionar a array 
alunos.push('Renan');
alunos[4] = 'Vinicius';*/

/*console.log(alunos);
console.log (alunos.pop()); //retira o ultimo do elemento e imprime o valor
console.log (alunos.shift()); //retira o primeiro elemento do array e imprimer o valor
console.log(alunos);

/*const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(notas.length);*/

/*const nome = 'Vitor Guilherme';


for (let i = 0; i < nome.length; i++) {
    
    console.log(nome[i]);
    
}*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;

=======
/*const alunos = [ 'João', 'Vitor', 'Marina'];

/* formas de colocar/adcionar a array 
alunos.push('Renan');
alunos[4] = 'Vinicius';*/

/*console.log(alunos);
console.log (alunos.pop()); //retira o ultimo do elemento e imprime o valor
console.log (alunos.shift()); //retira o primeiro elemento do array e imprimer o valor
console.log(alunos);

/*const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(notas.length);*/

/*const nome = 'Vitor Guilherme';


for (let i = 0; i < nome.length; i++) {
    
    console.log(nome[i]);
    
}*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;

>>>>>>> ba92442e26652e6cc0f2d1dbb1f9bfb272676897
console.log(media);