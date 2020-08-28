//2. Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.

const readline = require('readline-sync')

const num = parseFloat(readline.question("Qual a temperatura em Fahrenheit? "))

function temperatura(numEmFar){
    return (5*(num - 32)/ 9).toFixed(2)
}

console.log(`O resultado a conversao de Fahrenheit para Celcius e: ${temperatura(num)}`)