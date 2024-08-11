//verificando se um usuário pode dirigir
let boolean = Math.random() * 10 / 2
if(boolean >= 1){
    randomBoolean = true
    console.log('Motorista tem CNH')
}else{
    randomBoolean = false
    console.log('Motorista não tem CNH')
}
let idade = parseInt(Math.random() * 100 / 2)
console.log(`O motorista tem ${idade} anos`)

function motoristaPodeDirigir(habilitado, idadeMotorista){
    if(habilitado == true && idadeMotorista >=18){
        console.log( 'O motorista pode dirigir')
    }else{
        console.log( 'O motorista não pode dirigir')
    }
}

motoristaPodeDirigir(randomBoolean, idade)


//verificando se o motorista atende as duas condições


