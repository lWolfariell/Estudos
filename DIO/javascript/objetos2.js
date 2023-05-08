<<<<<<< HEAD
class Pessoas { //criado uma definição de Carros
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc (){ // nesse exemplo não precisar pegar dados variaveis externas, pois esses dados eu ja tenho dentro da classe
       return this.peso / (this.altura * this.altura);      
    }
    classificarImc(){
       const imc = this.calcularImc();

       if (imc < 18.5) { 
        return (`Hmmm ${this.nome} seu IMC de ${imc} está abaixo do peso!`);
       } else if (imc >= 18.5 && imc < 25 ){
        return (`Eba ${this.nome} seu IMC de ${imc} normal.`);
       } else if (imc >= 25 && imc <30){
        return (`Eita ${this.nome} seu IMC de ${imc} mostra que está acima do peso!`);
       } else if (imc >=30 && imc < 40){
        return (`Vish ${this.nome} seu IMC de ${imc} está em obeso!`);
       } else {
        return (`Perigo ${this.nome}! Seu IMC de ${imc} temos um caso de Obseidade Grave!`);
       }

        }
    
}

const jose = new Pessoas ('José', 70, 1.75);
const vitor = new Pessoas ('Vitor', 80, 1.62);
const thalita = new Pessoas ('Thalita', 90, 1.54);

console.log (jose.classificarImc());
console.log (vitor.classificarImc());
console.log (thalita.classificarImc());




=======
class Pessoas { //criado uma definição de Carros
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc (){ // nesse exemplo não precisar pegar dados variaveis externas, pois esses dados eu ja tenho dentro da classe
       return this.peso / (this.altura * this.altura);      
    }
    classificarImc(){
       const imc = this.calcularImc();

       if (imc < 18.5) { 
        return (`Hmmm ${this.nome} seu IMC de ${imc} está abaixo do peso!`);
       } else if (imc >= 18.5 && imc < 25 ){
        return (`Eba ${this.nome} seu IMC de ${imc} normal.`);
       } else if (imc >= 25 && imc <30){
        return (`Eita ${this.nome} seu IMC de ${imc} mostra que está acima do peso!`);
       } else if (imc >=30 && imc < 40){
        return (`Vish ${this.nome} seu IMC de ${imc} está em obeso!`);
       } else {
        return (`Perigo ${this.nome}! Seu IMC de ${imc} temos um caso de Obseidade Grave!`);
       }

        }
    
}

const jose = new Pessoas ('José', 70, 1.75);
const vitor = new Pessoas ('Vitor', 80, 1.62);
const thalita = new Pessoas ('Thalita', 90, 1.54);

console.log (jose.classificarImc());
console.log (vitor.classificarImc());
console.log (thalita.classificarImc());




>>>>>>> 498085619e3a040f0a1b93ffde513ddac4f4a450
