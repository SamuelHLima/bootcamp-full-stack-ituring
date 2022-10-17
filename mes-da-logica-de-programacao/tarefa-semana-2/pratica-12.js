//Crie uma função que receba um número de 1 a 7 no arquivo pratica-10.js.
//Caso esse parâmetro seja diferente do valor informado, exiba na tela O número ${parâmetro} não é válido para dia de semana.
//Caso o valor esteja entre os valores permitidos, siga a regra a seguir para apresentar o retorno:
//01: Segunda
//02: Terça
//03: Quarta
//04: Quinta
//05: Sexta
//06: Sábado
//07: Domingo

function semana(dia){
    switch(dia){
        case '01':
            return('Segunda');
        case '02':
            return('Terça');            
        case '03':
            return('Quarta');
        case '04':
            return('Quinta');    
        case '05':
            return('Sexta');
        case '06':
            return('Sábado');            
        case '07':
            return('Domingo');
        default:
            return('não é valido para dia da semana.');     
    }
}

console.log(`03 corresponde a ${semana('03')}`);

console.log(`06 corresponde a ${semana('06')}`);

console.log(`O numero 15  ${semana('15')}`);
