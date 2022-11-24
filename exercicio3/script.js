/* a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e 
retornar o valor de uma das operações básicas (soma, subtração, multiplicação e 
    divisão).

b) Em seguida, fora das funções, receba do usuário dois números e armazene 
em variáveis.

c) Invoque cada uma das 4 funções, passando como argumento os dois números 
recebidos do usuário.

d) Por fim, crie variáveis para receber o retorno de cada uma das funções e 
imprima o resultado das operações no console.
*/

// const num1 = +(prompt(`Escolha o primeiro número`))
// const num2 = +(prompt(`Escolha o primeiro número`))
// const num3 = +(prompt(`Escolha o primeiro número`))
// const num4 = +(prompt(`Escolha o primeiro número`))

//a)
function soma(num1, num2) {
    const somar = (num1 + num2)
    return `O resultado de é ${somar}`
}

function subtrai(num1, num2) {
    const subtrair = (num1 - num2)
    return `O resultado de é ${subtrair}`
}

function multiplica(num1, num2) {
    const multiplicar = (num1 * num2)
    return `O resultado de é ${multiplicar}`
}

function divide(num1, num2) {
    const dividir = (num1 / num2)
    return `O resultado de é ${dividir}`
}

//b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

const numero1 = +(prompt(`Escolha um número`))
const numero2 = +(prompt(`Escolha outro número`))

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

// console.log(soma(1,2))
// console.log(subtrai(1,2))
// console.log(multiplica(1,2))
// console.log(divide(1,2))

//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.


console.log(`O resultado da soma é:${numero1 + numero2}
\n O resultado da subtração é ${numero1 - numero2} 
\n O resultado da multiplicação é ${numero1 * numero2} 
\n O resultado da subtração é ${numero1 / numero2}`)
