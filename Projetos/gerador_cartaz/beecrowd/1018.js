<<<<<<< HEAD
/*Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas)
no qual o valor pode ser decomposto. 
As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
A seguir mostre o valor lido e a relação de notas necessárias.


----------Entrada

    O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

----------Saída

Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias,
conforme o exemplo fornecido. 
Não esqueça de imprimir o fim de linha
 após cada linha, caso contrário seu programa
  apresentará a mensagem: “Presentation Error”.*/

let N = 576

let notas = [100, 50, 20, 10, 5, 2, 1];
let i = 0;

console.log(N);

while (i < notas.length) {
    let resto = Math.floor( N / notas[i] );
    console.log(resto + " nota(s) de R$ " + notas[i] + ",00");
    N = N -(resto * notas[i]);
    i++;

=======
/*Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas)
no qual o valor pode ser decomposto. 
As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
A seguir mostre o valor lido e a relação de notas necessárias.


----------Entrada

    O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

----------Saída

Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias,
conforme o exemplo fornecido. 
Não esqueça de imprimir o fim de linha
 após cada linha, caso contrário seu programa
  apresentará a mensagem: “Presentation Error”.*/

let N = 576

let notas = [100, 50, 20, 10, 5, 2, 1];
let i = 0;

console.log(N);

while (i < notas.length) {
    let resto = Math.floor( N / notas[i] );
    console.log(resto + " nota(s) de R$ " + notas[i] + ",00");
    N = N -(resto * notas[i]);
    i++;

>>>>>>> ba92442e26652e6cc0f2d1dbb1f9bfb272676897
}