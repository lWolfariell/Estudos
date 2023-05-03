let playerSymbol = "X"
let gameOver = false

let allVictory = [
    [1, 2, 3], // primeira linha
    [4, 5, 6], // segunda linha
    [7, 8, 9], // terceira linha
    [1, 4, 7], // primeira coluna
    [2, 5, 8], // segunda coluna
    [3, 6, 9], // terceira coluna
    [1, 5, 9], // diagonal esquerda para direita
    [9, 5, 1], // diagonal direita para esquerda
    [7, 5, 3],  // diagonal direita para esquerda
    [3, 5, 7]  // diagonal direita para esquerda
  ];

  let a = parseInt(lines);
  let b = parseInt(lines);
  let abs = parseInt(lines);
  
  let maiorAB = (a+b+abs(a-b))/2
  let quemEhMaior = abs > maiorAB
  
  let x = 30
  let distancia = 2*x

console.log (distancia," minutos");

  console.log(allVictory)

  