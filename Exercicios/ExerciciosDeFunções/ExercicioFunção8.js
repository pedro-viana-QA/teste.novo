//função recebe string, se tiver mais de 10 carac retorna 'texto muito longo'

function contaCaracteres(frase){
    if(frase.length > 10){
        console.log('Texto muito longo')
        console.log(frase.length)
    }else{
        console.log('Texto dentro do limite')
        console.log(frase.length)
    }
}

contaCaracteres('Meu nome é:')
