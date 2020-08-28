/*Faça um programa que calcule o aumento de um salário. Ele deve solicitar o valor do salário e a porcentagem do aumento. Exiba o valor 
do aumento e do novo salário.Faça um programa que calcule o aumento de um salário. Ele deve solicitar o valor do salário e a porcentagem do
 aumento. Exiba o valor do aumento e do novo salário.
 */
const readline = require('readline-sync')

const salario = parseFloat(readline.question("Valor do salario: "))
const porcentagem = parseFloat(readline.question("Valor da porcentagem: "))

function calculo(parametro1, parametro2) {


    const calculosalario = salario
    const calculoporcentagem = salario * (porcentagem / 100)
    const salarioFinal = calculosalario + calculoporcentagem
    return salarioFinal

}

console.log(calculo(salario, porcentagem))

// não consegui fazer os extras a tempo de entregar o exercicio. 