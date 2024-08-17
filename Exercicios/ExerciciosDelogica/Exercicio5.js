const velocidadeMaxima = 80

let velocidadeAtual = Math.floor(Math.random()*100)

if(velocidadeAtual > velocidadeMaxima){
    console.log('O veículo está acima da velocidade' + velocidadeAtual + 'km')
}else{
    console.log('Tudo certo' + velocidadeAtual + 'km')
}