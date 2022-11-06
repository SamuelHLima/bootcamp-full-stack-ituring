

let MediaNotas = function (Local) {
    let i = 0;
    let soma = 0;
    Local.avaliacoes.forEach(function(X) {
        soma += X.nota;
        i++
           
    });
    media = (soma / i).toFixed(2);
    console.log(` média de avaliações do restaurante Turing Gourmet foi de ${media}`);
}


let Local = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

  MediaNotas(Local);