const escola = "Cod3r"

console.log(escola.charAt(4)) // trás o caractere da string acima pelo indice (4)
console.log(escola.charAt(5)) //trará um resultado em branco
console.log(escola.charCodeAt(3)) // trás o código relacio a tabela unicode pelo indice(3)
console.log(escola.indexOf ('3'))

console.log(escola.substring(1)) // imprima a string a partir do indice 1
console.log(escola.substring(0, 3)) // imprima do indice 0 até 3 caracteres

console.log('Escola '.concat(escola).concat("!")) // concat - concatena o texto/string
console.log('Escola ' + escola + "!") // concat - concatena o texto/string
console.log(escola.replace(3,'e')) // susbtitua na strig tudo que for 3 por E

console.log('Ana,Maria,Pedro'.split(',')) // 