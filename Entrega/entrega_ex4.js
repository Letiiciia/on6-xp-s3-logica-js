
/*4. Crie uma função com as seguintes características:
- A função deve receber 3 parâmetros.
- Se somente um argumento for passado, retorne o valor do argumento.
- Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
- Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
- Se nenhum argumento for passado, retorne "não recebeu parâmetro"
const readline = require('readline-sync')
*/
const readline = require('readline-sync')

const num1 = parseFloat(readline.question('Qual o numero1 ? '))
const num2 = parseFloat(readline.question('Qual o numero2 ? '))
const num3 = parseFloat(readline.question('Qual o numero3 ? '))



function numeros(num1, num2, num3) {

   if(Number.isNaN(num1) && Number.isNaN(num2) && Number.isNaN(num3)){
      return  "Digite algum número"
   }if (Number.isNaN(num1) && Number.isNaN(num2) && !Number.isNaN(num3)) {
      return num3
   } else if (Number.isNaN(num2) && Number.isNaN(num3) && !Number.isNaN(num1)) {
      return num1
   } else if (Number.isNaN(num1) && Number.isNaN(num3) && !Number.isNaN(num2)) {
      return num2
   } else if (!num1) {
      return num2 + num3
   } else if (!num2) {
      return num1 + num3
   } else if (!num3) {
      return num1 + num2
   } else{
      return (num1 + num2) / num3
   }}

console.log(numeros(num1, num2, num3))






