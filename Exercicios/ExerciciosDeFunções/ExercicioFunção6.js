// função detecta o tipo de dado passado e retorna uma mensagem para cada tipo

function tipoDado(aleatorio){
    switch(typeof(aleatorio)){
        case 'number':
            console.log('O tipo de dado é numerico');
            break;
        case 'string':
            console.log('O tipo de dado é string');
            break;
        case 'boolean':
            console.log('O tipo de dado é boleano');
            break;
        default:
            console.log('Dado undefined');
            break;    
    }
}

tipoDado(2)
tipoDado('Pedro')
tipoDado(true)


