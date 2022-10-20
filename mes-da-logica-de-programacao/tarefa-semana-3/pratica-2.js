//Crie uma função no arquivo pratica-2.js que recebendo como argumento um número inteiro maior que zero,
// exiba com console.log() todos os números ímpares até chegar neste número.

function imparesEntre1eN(n) {
    let i = 1;

    if (n < 0) {
        console.log("Valor Inválido");
        return undefined;
    }

    while (i <= n) {
        if (i % 2 != 0) {
            console.log(i);
        }
        i=i +1;
    }
    
}
imparesEntre1eN(17);