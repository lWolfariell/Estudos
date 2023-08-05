//Declarando normalmente uma função com dois parametros
/* function soma(numero1, numero2) {
    return numero1+numero2
} */


//Arrow Function dentro de uma variavel com dois parametros
/* const soma = (numero1, numero2) => {
    return numero1 + numero2
} */

//Arrow Function sem usar return
/* const soma = (num1, num2) => num1 + num2; // retornar sem usar return

console.log(soma(20, 30));
 */


/* const comunidade = () => {
    return 'CollabCode'
}

console.log(comunidade()) 
*/

/* const double = num => num * 2

console.log(double(8)) */
/* 
const soma = (num1,num2, num3) => num1 + num2 + num3;

console.log(soma(20,22,35)); */


//retornando um JSON sem return
/* 
const getPerso = () => ({nome: 'Miguel', olhos:'azul'});

console.log(getPerso()); */


// IIFE com Arrow function
/* (() => {
    const getPerso = () => ({ nome: 'Miguel', olhos: 'azul' });
    console.log(getPerso())
})()
 */

// O this é muito mais simples

(() => {
    function Person () {
        this.ano = 0;

        setInterval(() => {
            this.ano = this.ano + 1;
            console.log('Qual This?', this) 
            console.log('Qual é a idade?', this.ano) 
        }, 1000)
    }

    const p1 = new Person()
})()
