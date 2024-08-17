//função recebe idade, se maior de 18 pode entrar na auto escola

function allowed(idade){
    if(idade >= 18){
        console.log('Pode entrar na auto escola')
    }else{
        console.log('Não pode entrar na auto escola')
    }
}

allowed(17)
allowed(19)
allowed(18)