console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = 'Salvador'

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);


const podeCmprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

console.log('Destino Existe: ',destinoExiste)

