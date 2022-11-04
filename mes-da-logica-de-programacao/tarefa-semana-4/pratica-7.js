function Item() {
let produto = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
  };

 return console.log(Object.keys(produto));
}

Item();