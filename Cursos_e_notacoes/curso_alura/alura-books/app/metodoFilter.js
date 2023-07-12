/* const idades = [10, 22, 42, 16, 50];

const podeDirigir = idades.filter (idade => {
    return idades >= 18
})

console.log(podeDirigir);
console.log(idades); */


const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))


function filtrarLivros () {

    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNatela(livrosFiltrados);

}

/* Realizamos testes na documentação oficial do JavaScript para entender como o método filter funciona;

Atribuímos um evento de click no botão para filtrar os livros por categoria através do filter;

Exibimos os livros filtrados por categoria e que estejam disponíveis. */
