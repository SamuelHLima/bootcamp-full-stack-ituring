
//crie uma função que recebe uma cor escrita em texto como parâmetro e retorna o valor no formato RGB
//As cores possíveis que a função poderá receber serão as seguintes:
//"vermelha"
//"laranja"
//"amarela"
//"verde"
//"azul claro"
//"azul marinho"
//"rosa"

function RGB(cor){
    switch(cor){
        case 'vermelha':
            return('rgb(255,0,0)');
        case 'laranja':
            return('rgb(255,128,0)');            
        case 'amarela':
            return('rgb(255,255,0)');
        case 'verde':
            return('rgb(,255,)');    
        case 'azul claro':
            return('rgb(0,255,255)');
        case 'azul marinho':
            return('rgb(0,0,255)');            
        case 'rosa':
            return('rgb(255,0,255)');
        default:
            return('rgb(255,255,255)');     
    }
}

console.log(`Azul claro em RGB é ${RGB('azul claro')}`);

console.log(`Laranja em RGB é ${RGB('laranja')}`);

console.log(`Roxa em RGB é ${RGB('roxa')}`);

console.log(`Vermelha em RGB é ${RGB('vermelha')}`);

console.log(`Verde em RGB é ${RGB('verde')}`);