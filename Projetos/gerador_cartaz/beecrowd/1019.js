
let segundosTotal = 140153;

let segundos = segundosTotal % 60;

let minutos = Math.floor(segundosTotal / 60); //OK

let horas = Math.floor(minutos / 60);

minutos = minutos % 60

console.log(`${horas}:${minutos}:${segundos}`);