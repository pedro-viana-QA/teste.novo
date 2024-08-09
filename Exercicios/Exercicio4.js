// A função math.pow() exibe a potência de um número, deve-se informar o número e a potência que deseja elevar

//console.log(`3 elevado ao quadrado é igual a ${Math.pow(3,2)}`)
let num1, num2

function gerarNumero(){
    num1 = Math.round(Math.random()*10)
    num2 = Math.round(Math.random()*10)}

function retornaPotencia(){
    console.log(Math.pow(num1,num2))}

if(num1 != 0 && num2 != 0){
    retornaPotencia()
}else{
    gerarNumero()
    retornaPotencia()
}

console.log(num1, num2)




