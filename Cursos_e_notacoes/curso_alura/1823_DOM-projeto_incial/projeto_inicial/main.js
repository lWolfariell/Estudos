import BotaoConclui from "./componentes/concluirTarefa";
import BotaoDeleta from "./componentes/deletaTarefa";

    const criarTarefa = (evento) => {
        
        evento.preventDefault() // com isso eu consigo capturar o conteudo, sem dar o refresh da pagina

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;


        const tarefa = document.createElement('li');
        tarefa.classList.add('task'); // adcionando a class task para o elemento li
        const conteudo = `<p class="content">${valor}</p>`; // template string

        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa);// agregando a tarefa como filho de lista (ul)

        input.value = '';
    }

    const novaTarefa = document.querySelector('[data-form-button]');

    novaTarefa.addEventListener('click', criarTarefa);


/* um dos problemas que temos durante desenvolvimento do nosso cod javascript é que ele fica no escopo global, assim qualquer usario pode acessa essas funções, para contornar isso podemos usar o IIFFE para  encapsular todo cód a partir de uma arrow function conforme exemplo abaixo:

( () => {
    seu bloco de cód
})() 

*/


/* 

Durante o curso utilizamos o método appendChild que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

Existem outros métodos que podemos utilizar para manipular nós: 

    insertBefore(pai, filho): Coloca um nó antes do outro.
    replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
    removeChild(elemento): Remove um nó da árvore.
    
    */