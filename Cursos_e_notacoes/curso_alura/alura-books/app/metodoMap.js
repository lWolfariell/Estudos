function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // ...fazer uma copia de todo array e altera o preço
    })
    return livrosComDesconto
}

/* O método map executa uma função para cada elemento do array e devolve um novo array como resultado;

    Aplicamos um desconto através do método map nos preços de cada livro do nosso projeto e entendemos a 
    diferença entre os métodos forEach e map.
 */