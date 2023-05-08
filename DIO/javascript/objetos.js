<<<<<<< HEAD
class Carros { //criado uma definição de Carros
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calularViagem (distanciaEmKm,preçoCombustivel){
       return distanciaEmKm * this.gastoMedioPorKm * preçoCombustivel      
    }
}

const fiesta = new Carros('Fiat', 'preto', 1/12);
const palio = new Carros ('fiat', 'prata', 1/10);

console.log(fiesta.calularViagem (75, 5.69));
console.log(palio.calularViagem (75, 5.69));

=======
class Carros { //criado uma definição de Carros
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calularViagem (distanciaEmKm,preçoCombustivel){
       return distanciaEmKm * this.gastoMedioPorKm * preçoCombustivel      
    }
}

const fiesta = new Carros('Fiat', 'preto', 1/12);
const palio = new Carros ('fiat', 'prata', 1/10);

console.log(fiesta.calularViagem (75, 5.69));
console.log(palio.calularViagem (75, 5.69));

>>>>>>> 498085619e3a040f0a1b93ffde513ddac4f4a450
