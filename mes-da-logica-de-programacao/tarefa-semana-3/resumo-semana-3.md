## Resumo Semana 3 - Lógica de programação: iterando e processando

### O que são Loops ?
- Um loop é uma forma de repetir um código diversas vezes.
- Você pode pensar em alguns exemplos cotidianos como: o código de um inimigo em um jogo que deve repetir a ação de te atacar enquanto você tiver vida; ou enquanto houverem items no carrinho de compra, continuar somando os valores.

#### Há diferentes formas de fazer um loop: while, for e forEach.

##### while
while (condicao) { 
	//codigo a ser executado
	i += 1
}

Enquanto a condição for verdadeira, o código dentro do loop será executado. Nesses cenários é muito comum que condição seja algo do tipo `i < tamanhoDeUmaLista`. Sendo assim, é fundamental atualizar o valor de `i` a cada execução. Caso contrário, a condição `i < tamanhoDeUmaLista` será verdadeira para sempre e teremos um erro. Essa variável `i`, chamamos de contador.

while (i < tamanhoDeUmaLista) { 
	//codigo a ser executado
	i += 1 //atualizando o valor de n
}


##### for
for (let i = 0; i < tamanho_da_lista; i++) {
	//código a ser executado
	//Note que aqui não é necessário somar 1 ao i, o loop for já da conta disso.
}

O loop `for` funciona de forma muito semelhante ao loop `while`. Contudo, a variável contador já é automaticamente atualizada a cada repeitção.

##### for (usando of)
for (let item of lista) {
	//codigo a ser executado
}

Fazendo o loop dessa forma não precisamos nos preocupar com o contador. A variável `item` que declaramos passa por todos os elementos de uma lista, um de cada vez, e executará o código entre chaves.

### Listas

- Lista é uma estrutura de dados que agrupa vários dados.
- A lista pode conter dados de quaisquer tipo, inclusive outras listas.

Na prática, listas são muito comuns quando precisamos passar grupos de dados.

_Declaração_

Listas são declaradas assim como declaramos outras variáveis, com a diferença de que o grupo de valores deve ficar entre colchetes. Para declarar uma lista simples, defina como:

let listaDeNumeros = [0,1,2,3,4,5,6,7,8,9]

Para saber mais, acesse:

- [Array](https://www.w3schools.com/js/js_arrays.asp)
- [Métodos](https://www.w3schools.com/js/js_array_methods.asp)

### O que são os métodos nativos
Métodos nativos são funções que já vêm prontas no JavaScript para utilizarmos.
Existem muitas delas e é praticamente impossível decorar todas, de forma que é muito comum recorrermos constantemente a documentação para encontrar uma função que nos ajude a resolver um problema.

A utlização básica de um método nativo é sempre a mesma, juntamos o método ao objeto ou variável no qual queremos aplicá-lo com o uso de um `.`
<objeto ou variável>.<método>

<nome_da_lista>.length

É interessante perceber que quando tentamos usar um método em algo ao qual ele não pertence, um erro é retornado. Por exemplo, a propriedade `length` guarda o tamanhno de uma lista. Caso tente usar `.length` em algo que não é uma lista, como por exemplo um `number`, o JavaScript responde com um erro, ou com `undefined`.
> a = 5
> console.log(a.length)
returns: undefined

#### `.forEach()` 
É muito parecido com o loop `for..of`
Diferenças:
 - Ele é um método, veja que usamos ele da mesma forma que usamos `.length`, colocando um `.forEach` na nossa lista.
 - Esse método recebe uma função como parâmetro. Essa função será executada uma vez para cada item da lista.
 - Para acessarmos os elementos da lista, utilizamos um parâmetro dentro da função que está dentro do `.forEach`.
 
<nome_da_lista>.forEach((parametro) => { 
	//Esse código é executado uma vez para cada item da lista.
})

#### `.filter()`
Outro método que temos é o `.filter`. Da mesma forma, podemos utilizá-lo em listas colocando `.filter` nelas. Assim como o `.forEach` o `.filter`:
- recebe uma função, que será executada uma vez para cada item da lista
- Essa função recebida, tem um parametro para acessarmos o item da lista.
	
A diferença é que no filter, essa função deve retornar `true` ou `false`.

let listaFiltrada = <nome_da_lista>.filter((parametro) => {
	if (parametro) {
		return true
		//o item é adicionado na lista listaFiltrada 
	} else {
		return false
		//o item não é adicionado na lista listaFiltrada
	}	
})

#### `.map()`
O `.map` aplica um pedaço de código para cada item de uma lista. A diferença entre ele o `.forEach`, é que depois de aplicar essa código ao item, ele automaticamente coloca esse elemento modificado em uma nova lista. Ou seja, o retorno do map é uma nova lista modificada.

let listaModificada = <nome_da_lista>.map((parametro) => {
	//codigo para ser executado com o parametro
		return parametroModificado 
})