//1. Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const readline = require('readline-sync')

const num = parseFloat(readline.question("Qual a temperatura em Graus Celcius? "))



function temperatura(numEmCelcius){
    return (9 * numEmCelcius/5) + 32
}

console.log(`A conversao de Celcius para Fahrenheit e: ${temperatura(num)}`)
 