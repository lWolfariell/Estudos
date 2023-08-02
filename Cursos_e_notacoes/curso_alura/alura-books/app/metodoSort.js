/* let precos = [29.98, 11, 1, 101,110];
            //1, 11, 29.98, 101, 110 */

let precosOrdenados = precos.sort((a,b) => {
    return a - b
});

console.log(precosOrdenados);


let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordernarLivrosPorPreco);

function ordernarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco); // pega o preco do produto a - preco do produto b para entao conseguir separar do menor para o maior
    exibirOsLivrosNatela(livrosOrdenados);
    
}


/* let n = [3, 0 , 2, 1, 10, 100];
console.log(n.sort())       

let p = ['Zequinha', 'anna', 'fábio', 'caio', 'Anna', 'lucas']
console.log(p.sort()) */