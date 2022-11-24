/* 
a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

b) Declare uma função que receba um número como parâmetro imprima no console 
a tabuada do dele. Chame esta função várias vezes com números diferentes.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões 
de função, ou __arrow functions__ 
*/

function call(){
    const nome = prompt("Qual seu nome?")
    return `Olá, ${nome}!` //chamando a função
}

console.log(call()); //apresentando o chamado no return

function tabuada(){
    const num = +(prompt("Digite um número")) /* escolha um número para o programa fazer a chamada da tabuada*/
    return `A tabuada do número escolhido é:
    \n ${num} * 1 = ${num*1} 
    \n ${num} * 2 = ${num*2}
    \n ${num} * 3 = ${num*3}
    \n ${num} * 4 = ${num*4}
    \n ${num} * 5 = ${num*5}
    \n ${num} * 6 = ${num*6}
    \n ${num} * 7 = ${num*7}
    \n ${num} * 8 = ${num*8}
    \n ${num} * 9 = ${num*9}`
}

console.log(tabuada())

/*
function call = () => {const num = +(prompt("Digite um número"))
return `A tabuada do número escolhido é:
\n ${num} * 1 = ${num*1}`
} 
*/