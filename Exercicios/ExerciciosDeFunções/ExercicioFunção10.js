//função recebe 1 numero, decremente de 1 em 1 com loop, imprime somente os pares no console

function ePar(numero){
    while(numero >= 0){
        if(numero % 2 == 0){
            console.log(numero)
            numero--
        }else{
            numero--
        }
    }
}

console.log(ePar(50))