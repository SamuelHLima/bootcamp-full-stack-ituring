## Resumo Semana 4 - Lógica de programação: construindo soluções modernas (objetos e métodos)

### O que são Objetos ?
- É uma entidade independente, com propriedades e valores
- Tem propriedades ou métodos associadas a ele, que definem suas características e comportamento
- A sua estrutura é consistida em `chave: valor`.

### Criando um objeto

Você pode definir as propriedades do objeto, atribuindo um valor a cada chave. Veja este exemplo:

```javascript
let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;
```

Você também pode definir objetos com a seguinte sintaxe:

```javascript
let meuCarro = {
  fabricacao: "Ford",
  modelo: "Mustang",
  ano: 1969
}
```

#### Acessando as propriedades

```javascript
meuCarro.fabricacao // Ford
```

Você também pode acessar desta maneira:

```javascript
meuCarro["fabricacao"] // Ford
```

Caso você acesse uma propriedade que não existe, seu retorno será `undefined`.

```javascript
meuCarro.minhaPropriedade // undefined
```

#### Criando e chamando métodos

Você também pode criar métodos dentro de objetos. Olha este exemplo:

```javascript
let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;
meuCarro.mostrarDescricao = function() {
  const descricaoDoCarro = `Carro ${this.fabricacao}, modelo ${this.modelo} e ano ${this.ano}`
  console.log(descricaoDoCarro)
}
```

Chamando o método:
```javascript
meuCarro.mostrarDescricao()
```

Veja que **dentro de qualquer método** que esteja dentro de um objeto (no nosso exemplo, o método`mostrarDescricao()`, para acessar as propriedades do objeto, usamos a palavra reservada `this`. Se utilizar `meuCarro.fabricacao`, por exemplo, vai funcionar, mas e se você resolver mudar o nome da variável? Por isso, **sempre** utilize `this` para acessar as propriedades do objeto.

Agora, criando o método daquela outra maneira:

```javascript
let meuCarro = {
  fabricacao: "Ford",
  modelo: "Mustang",
  ano: 1969,
  mostrarDescricao: function() {
    const descricaoDoCarro = `Carro ${this.fabricacao}, modelo ${this.modelo} e ano ${this.ano}`
    console.log(descricaoDoCarro)
  }
}
```

A chamada do método é da mesma maneira:
```javascript
meuCarro.mostrarDescricao()
```

### Replicando objetos

Ok! Vamos para um novo patamar de organização de solução do código? Veja que essa estrutura dos objetos é perfeitamente replicável, concorda? Ou seja, podemos criar vários outros carros com vários outros valores quanto a fabricação, modelo e ano. Mas imagina ter que criar vários objetos manualmente com essas propriedades? Será que tem um jeito da gente deixar esse "esqueleto" de objeto replicável, de forma que a gente só informa os valores de `fabricacao`, `modelo` e `ano` e assim criamos mais um objeto? Sim, é possível! Com construtores de objetos. Veja como:
```javascript
function Carro(fabricacao, modelo, ano)
  this.fabricacao = fabricacao
  this.modelo = modelo
  this.ano = ano

  this.mostrarDescricao = function() {
    const descricaoDoCarro = `Carro ${this.fabricacao}, modelo ${this.modelo} e ano ${this.ano}`
    console.log(descricaoDoCarro)
  }
}
```

Algumas considerações e regras importantes:
- A função `Carro` é justamente esse "esqueleto" replicável de um objeto
- Veja que **usamos a palavra reservada `this`** para acessar as propriedades! Isso é importantíssimo, nunca se esqueça de usar o `this` quando quiser acessar algo de dentro de um objeto.

Ok, mas então como que eu crio um novo objeto a partir desse "esqueleto"? Da seguinte maneira:
```javascript
let meuCarro = new Carro("Ford", "Mustang", 1969)
```

Se dermos um `console.log()` em `meuCarro`, ele vai mostrar justamente a estrutura de um objeto criado! Quando criamos um objeto de um "esqueleto", o termo técnico para isso é **instanciar um objeto**. Ou seja, quando fazemos
```javascript
let meuCarro = new Carro("Ford", "Mustang", 1969)
```

Estamos **instanciando** um objeto de `Carro`. No caso, instanciamos o objeto `meuCarro` do esqueleto de objetos `Carro`. Podemos considerar então que `Carro` é meio que um tipo de dado? Sim! Da mesma forma que podemos atribuir números e palavras a variáveis, com este código nós também conseguimos atribuir carros a variáveis. :)