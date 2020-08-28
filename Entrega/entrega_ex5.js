/*5. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja,
 o resultado de 1 + 2 + 3 + 4 + 5. 
 */




 function somaProgressiva(numero) {
    
 let conta = 0
for (let num = numero; num >= 1; num--) {
    console.log(`numero ${num}`)


       conta += num
        

        

    }
    return conta
}

console.log(somaProgressiva(3))


