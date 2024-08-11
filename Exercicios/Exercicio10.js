//verificando se um número é primo
let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)
let qtdDivisoes = 0 

for(let i = 1; i <= randomNumber; i++){
    if(randomNumber % i == 0){
        qtdDivisoes++
    }
}

if(qtdDivisoes > 2){
    console.log(`O numero ${randomNumber} não é primo`)
}else{
    console.log(`O numero ${randomNumber} é primo`)
}