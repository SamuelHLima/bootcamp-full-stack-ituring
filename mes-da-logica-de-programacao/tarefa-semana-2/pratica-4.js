
function ValorDesconto(valor , desconto) {
        const ValorFinal = valor *(1 - desconto/100);
    return ValorFinal
}

const valorComDesconto = ValorDesconto (100 , 10);
console.log(valorComDesconto);
