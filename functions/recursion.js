let n = 35
function retornaNumeroPar(n){
    if(n % 2 == 0){
        console.log(`O numero ${n} é par`)
    }else{
        n--
        retornaNumeroPar(n)
    }
}

retornaNumeroPar(n)