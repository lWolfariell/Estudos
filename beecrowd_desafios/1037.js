/*

Você deve fazer um programa que leia um valor qualquer e apresente
uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) 
este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, 
deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

Entrada

O arquivo de entrada contém um número com ponto flutuante qualquer.
Saída

A saída deve ser uma mensagem conforme exemplo abaixo.

Exemplo Entrada
25.01

Exemplo Saida
Intervalo (25,50]
*/


let entrada = 25.01; // usar essa constante para resolver o problema > let entrada = parseFloat(lines.shift());

if (0 <= entrada && entrada <= 25){

    console.log("Intervalo [0,25]");

        } else if (25 < entrada && entrada <= 50){

            console.log ("Intervalo (25,50]");

                } else if (50 < entrada && entrada <= 75){

                    console.log("Intervalo (50,75]");

                        } else if (75 < entrada && entrada <= 100){

                            console.log("Intervalo (75,100]");

                                } else {

                                    console.log ("Fora de intervalo");

                                }

/* Duvida!!
qual o intuito dos intervalos começarem com "(" e termina"]"?

 ([0,25], (25,50], (50,75], (75,100])

Os intervalos com parênteses e colchetes são chamados de //notação de intervalo// e são usados para representar 
um conjunto de números em um intervalo específico. 
A notação de intervalo é composta por dois símbolos: um par de colchetes [] ou parênteses () e dois números que delimitam o intervalo.
Os colchetes [ ] indicam que o intervalo inclui os números // delimitados //, enquanto os parênteses ( ) indicam que os // números delimitados não estão incluídos.//

No caso específico do desafio, os intervalos são os seguintes:

    [0,25]: inclui todos os números entre 0 e 25, incluindo o 0 e o 25.
    (25,50]: inclui todos os números maiores que 25 e menores ou iguais a 50. O número 25 não está incluído, mas o número 50 está.
    (50,75]: inclui todos os números maiores que 50 e menores ou iguais a 75. O número 50 não está incluído, mas o número 75 está.
    (75,100]: inclui todos os números maiores que 75 e menores ou iguais a 100. O número 75 não está incluído, mas o número 100 está.

Por exemplo, o número 10 está dentro do intervalo [0,25] porque é maior ou igual a 0 e menor ou igual a 25.
Já o número 25.01 está dentro do intervalo (25,50] porque é maior do que 25 e menor ou igual a 50. 
O número 50 não está no intervalo porque a notação usou parênteses em vez de colchetes.*/
