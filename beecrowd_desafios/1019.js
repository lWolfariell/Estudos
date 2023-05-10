<<<<<<< HEAD

let segundosTotal = 140153;

let segundos = segundosTotal % 60;

let minutos = Math.floor(segundosTotal / 60); //OK

let horas = Math.floor(minutos / 60);

minutos = minutos % 60

=======

let segundosTotal = 140153;

let segundos = segundosTotal % 60;

let minutos = Math.floor(segundosTotal / 60); //OK

let horas = Math.floor(minutos / 60);

minutos = minutos % 60

>>>>>>> ba92442e26652e6cc0f2d1dbb1f9bfb272676897
console.log(`${horas}:${minutos}:${segundos}`);