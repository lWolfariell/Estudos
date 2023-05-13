// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 é um local onde foi definido fisicamente

function exec(){
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Vitor',
    idade: 28,
    peso: 90,
    endereco: {
        lougradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
