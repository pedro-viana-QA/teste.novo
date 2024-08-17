//gera um numero aleatorio, armazena e compara
const num = 100

function numeroMaior(){
    let base = num
    let aleatorio = Math.floor(Math.random() * 10)
    if(aleatorio > base){
        console.log('O numero gerado é maior que a base ' + aleatorio )
        base = aleatorio
        numeroMaior()
    }else{
        numeroMaior()
    }
}

numeroMaior(num)