

let Desconto = function (valor , descontos) {
    const ValorFinal = valor *(1 - descontos/100);
return ValorFinal
}

const valorComDesconto = Desconto (100 , 10);
console.log(valorComDesconto);

