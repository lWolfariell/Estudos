const criarTarefa = (evento) => {
    evento.preventDefault() // com isso eu consigo capturar o conteudo, sem dar o refresh da pagina

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;


    const tarefa = document.createElement('li');
    tarefa.classList.add('task'); // adcionando a class task para o elemento li
    const conteudo = `<p class="content">${valor}</p>`; // template string

    tarefa.innerHTML = conteudo

    tarefa.appendChild(botaoConclui())
    lista.appendChild(tarefa);// agregando a tarefa como filho de lista (ul)

    input.value = '';
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const botaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'
    botaoConclui.addEventListener('click', () => {
        console.log('Fui Clicado');
    })

    return botaoConclui
}


/* 

Durante o curso utilizamos o método appendChild que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

Existem outros métodos que podemos utilizar para manipular nós: 

    insertBefore(pai, filho): Coloca um nó antes do outro.
    replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
    removeChild(elemento): Remove um nó da árvore.
    
    */