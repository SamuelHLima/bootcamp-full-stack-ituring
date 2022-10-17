//receba uma string como parâmetro representando um idioma (ex: "es" para espanhol, "pt" para português", "en" para inglês)
//exiba na tela "Hello World!" em diferentes idiomas, para pelo menos 3 idiomas
//se nenhum idioma for informado, exiba "Olá, Mundo!" por padrão

const verificarQualIdioma = (idioma) => {
    if (idioma === "es"){
        console.log("Espanhol");
    } else if (idioma === "pt") {
        console.log ("Português");
    } else if (idioma === "en"){
        console.log("Inglês");
    } else {
        console.log("Olá,mundo!");
      }
    }

    verificarQualIdioma("es");
    verificarQualIdioma("pt");
    verificarQualIdioma("en");
    verificarQualIdioma("fr");
