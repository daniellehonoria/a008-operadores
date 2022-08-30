
/*
Construa um programa que:

a) Peça ao usuário que insira um número par

b) Imprima no console o resto da divisão desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    Sim. Todos resultam em 0
d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
    Resto é maior que 0
💡 Dica: não se esqueça de converter as respostas para o tipo número
*/

const numero = Number(prompt("Digite um número par"))
const divisão = 2
const result = numero % divisão
console.log("O resto do cálculo de" , numero , "dividido por 2 é " , result)


