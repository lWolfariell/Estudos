const a = 7
let b = 3
b += a /*está acrecentando, 
equivale essa interpretação
 b = b + a
*/
console.log(b)

b -= 4 // b = b - 4
console.log(b)

b *= 2 // b = b * 2
console.log(b)

b /= 2 // b = b / 2
console.log(b)

b %= 2 /* b = b % 2
B recebe (%) Módulo 2 = se for valor Par recebe 0
se for Impar resultado será 1.
como o resultado é 6 (par) no console log
receberá o valor 0 
*/ 
console.log(b)