function ApresentarFilme() {
let Filme = {
Título: "Estrelas Além do Tempo",
NotaDeAvaliação: 7.8,
Duração: 127,
AnoDePublicação: 2016,
Categoria: "Drama",
};
return console.log(`O filme ${Filme.Título} que estreou em ${Filme.AnoDePublicação} tem a avaliação de ${Filme.NotaDeAvaliação} pelo IMDb.`);
}

ApresentarFilme();