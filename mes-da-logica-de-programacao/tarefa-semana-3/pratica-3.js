
exibirNumerosPrimos(5);

function exibirNumerosPrimos(Limite) {
    for(let numero = 2; numero <= Limite; numero++){
        if (NumeroPrimo(numero)) console.log(true);
    }
    
}

function NumeroPrimo(numero) {
    for (let divisor=2; divisor < numero;divisor++){
        if(numero % divisor === 0){
            return false
        }
    }
    return true;
}