let livros = []

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaApi()


//pq função assincrona?
async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaAPI) // espera por uma promessa
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNatela(livrosComDesconto)
}



