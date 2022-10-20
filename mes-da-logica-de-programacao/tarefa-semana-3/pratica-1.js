//Este problema nós trabalhamos em aula: criar uma tabuada. Crie uma função que receba apenas 1 argumento de entrada: o número que você utilizará para fazer a tabuada
//Nossa tabuada deverá ir de 1 ao 10
//Neste problema, você deverá utilizar o comando while
//Dentro da função, exiba a tabuada no terminal. Por exemplo, se o valor de entrada da função for 9, você deverá exibir o seguinte resultado na tela com console.log():

function tabuada(x, n) {
    let i = 1;

    while (i <= n) {
        console.log(x*i);
        i++;
        
    }
   
}

tabuada(9, 10);