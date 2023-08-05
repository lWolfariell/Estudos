async function buscaendereco(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try {
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('Cep não existente');
        }

        let cidade = document.getElementById ('cidade');
        let endereco = document.getElementById ('endereco');
        let estado = document.getElementById ('estado');
        let bairro = document.getElementById ('bairro');

        cidade.value = consultaCepConvertida.localidade;
        endereco.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        bairro.value = consultaCepConvertida.bairro;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        console.log(erro)
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
    }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaendereco(cep.value));

/* let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaendereco(valores))
Promise.all(conjuntoCeps).then(resposta => console.log(resposta))
 */
//fecth função assincrona
// faça a requição na apiURL Informada ENTAO pega a resposta e converta em JSON, ENTAO com a resposta mostre na tela;

/* Ao fazer uma requisição para uma API com o fetch, é necessário converter os dados recebidos com o método .json(). Por que isso é necessário?
r: Pois os dados chegam em formato de bytes e precisamos transformar em outro formato para manipulá-los.
O corpo da resposta de uma requisição chega em formato de bytes. Desta forma o .json() transforma o corpo e retorna um json formatado. O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe que a de um objeto JS.
 */