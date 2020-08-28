// 3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

const readline = require('readline-sync')

const numMetros = readline.questionInt("Quantos metros? ")

function conversor(numMetros){
  return numMetros * 1000
}

console.log(`O resultado da conversao de metros para milimetros e: ${conversor(numMetros)}`)