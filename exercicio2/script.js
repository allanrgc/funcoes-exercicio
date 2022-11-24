/*
a) Uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e imprima o resultado. Invoque a função 
e imprima no console o resultado.

b) Uma função que recebe 2 números e imprime um booleano que informa 
se o primeiro número é **maior ou igual** ao segundo.

c) Uma função que receba um número e imprima no console um boleano 
informando se o número é par ou não.

d) Uma função que receba um valor de salário e retorne o valor 
com o desconto 10% referente ao INSS.  
*/

//a)
function soma () {
    const num1 = +(prompt("Escolha um número"))
    const num2 = +(prompt("Escolha outro número"))
    const res = num1 + num2
    return `O restultado da some é ${res}`
    
}
console.log(soma());

//b)
function maiorOuIgual (num01,num02){
    const res00 = num01 >= num02
    return `Número ${num01} maior que o Número ${num02}? ${res00}`
}
console.log(maiorOuIgual(1,2));

//
function maiorOuIgual2 (){
    const num03 = +(prompt(`2ª pergunta \n Escolha um número`))
    const num04 = +(prompt(`Escolha outro número`))
    const res02 = num03 >= num04
    return `Número ${num03} maior que o Número ${num04}? ${res02}`
}
console.log(maiorOuIgual2());

//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

function parNpar() {
    const num05 = +(prompt(`Para a terceira pergunta escolha um número`))
    const num06 = 2
    const res03 = num05 % num06 === 0
    return `O número ${num05} é par? ${res03}`
}
console.log(parNpar())


//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS. 

function salario (valor) {
   valor = +(prompt(`Quanto foi seu salário mês passado?`))
   const res = valor * 0.9
   return `O valor real recebido com desconto do INSS foi de ${res}`

}
console.log(salario())