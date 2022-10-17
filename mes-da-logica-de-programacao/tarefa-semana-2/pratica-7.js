//receba uma string como parâmetro representando um idioma (ex: "es" para espanhol, "pt" para português", "en" para inglês)
//exiba na tela "Hello World!" em diferentes idiomas, para pelo menos 3 idiomas
//se nenhum idioma for informado, exiba "Olá, Mundo!" por padrão

function Hello(idioma){
    if (idioma ==='pt')
        console.log('Olá, Mundo!');
    if (idioma ==='en')
        console.log('Hello world!');
    if (idioma ==='Jp')
        console.log('Kon´nichiwa sekai!');
        if (idioma ==='Zulu')
        console.log('Sawubona Mhlaba');
}
Hello('Zulu');
