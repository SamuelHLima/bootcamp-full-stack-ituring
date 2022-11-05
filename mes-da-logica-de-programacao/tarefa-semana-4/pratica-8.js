const exibefilme = (filme) => {

    console.log(`${filme.titulo} (Nota: ${filme.Avaliacao})`);
    console.log(`• Duração: ${filme.duraçao} minutos`);
    console.log(`• Ano de Publicação: ${filme.estreia}`);
    console.log(`• Gênero: ${filme.genero}
    `);

}

let Filme1 ={
  titulo: "Estrelas Além do Tempo",
  Avaliacao: 7.8,
  duraçao: 127,
  estreia: 2016,
  genero: ["Biografia", "Drama", "História"]
}

exibefilme(Filme1);

Filme1.titulo= "Top Gun";
Filme1.Avaliacao= 8.6;
Filme1.duraçao= 130;
Filme1.estreia= 2022;
Filme1.genero= ["Ação", "Drama"];

exibefilme(Filme1);

Filme1.titulo= "O jogo da Imitação";
Filme1.Avaliacao= 8.0;
Filme1.duraçao= 114;
Filme1.estreia= 2014;
Filme1.genero= ["Bibliografia", "Drama","suspense","Guerra"];

exibefilme(Filme1);