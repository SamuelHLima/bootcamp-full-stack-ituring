//numero aleatorio

function numeroAleatorio () {
    const min = 0;
    const max = 10000;
    const conta = ((max - min) + min);
    const numero = Math.random()*conta;

    return parseInt(numero);
    }

    console.log(numeroAleatorio());
    