# Aula 11 - Como estilizar uma Interface da Web

## 🎯 Objetivos:
* Entender como escrever o código CSS, além de como utilizá-lo junto do HTML;
* Aprender como funciona a utilização de seletores para aplicar o CSS em elementos da página;
* Aprender a utilizar o método BEM para melhorar a nomenclatura das classes.

___

## Tópicos
1. [Fundamentos de CSS](#1)
2. [Seletores](#2)
3. [Método BEM](#3)

___

<div id='1'/>

## Fundamentos de CSS

O CSS (Cascading Style Sheets) é utilizado para personalizar os elementos que estruturamos em tela através do HTML. Ou seja, o código CSS descreve como os elementos HTML devem ser exibidos em tela (permitindo manipular posições, cores, fontes e várias outros aspectos visuais).

### Sintaxe

A escrita do CSS consiste em utilizar **Seletores** e **Propriedades** para definir uma regra de personalização para um ou mais elementos.

- **Seletor:** Define quais elementos serão estilizados, ou seja, definimos "a localização" desses elementos em página. Geralmente usamos classes, id e tag para fazer essa localização.

- **Propriedades:** São as informações de personalização que serão aplicadas nos elementos encontrados através de um **Seletor**. Geralmente as propriedades são escritas no formato chave-valor, ou seja, elas começam com o tipo da estilização e finalizam com o valor dessa estilização. Por fim, vale ressaltar que no fim da escrita de cada propriedade devemos adicionar um `;`.

	[Veja uma lista completa das propriedades de CSS](https://www.w3.org/Style/CSS/all-properties.en.html)

Ou seja, no código CSS nós escolhemos quais elementos vamos estilizar e, em seguida, definimos quais serão as estilizações aplicadas nesses elementos.

- **Exemplo:** Usar texto branco e fundo preto em todos elementos com a tag `<button>`, ou seja, os elementos com estrutura ```<button></button>```.

```css
button {
	background-color: #000000;
	color: #FFFFFF;
}
```

### Comentários

É comum surgir a necessidade de adicionar comentários para documentar o código, sendo assim, é possível escrever comentários no código CSS.

Eles geralmente começam com um `/*` e terminam com um `*/`, conforme pode ser visto no exemplo abaixo:

- **Exemplo:** Comentário em código CSS

```css
/*
	Esse é um comentário em um código CSS.
*/
```

### Inserindo CSS na página

Existem diversas formas de inserir um código CSS na página. Nesse sentido, o ideal é entender como todas elas funcionam, visto que isso facilita a tomada de decisão sobre qual formato utilizar quando você estiver construindo um site.

#### Tag `<style>`

Geralmente usamos a tag `<style>` dentro da tag `head` para definir um código CSS dentro da página. Podemos utilizar diversas tags `<style>` para organizar melhor as estilizações.

- **Exemplo:** Inserção de código CSS através da tag `<style>` dentro da tag `<head>` da página.

```html
<head>
	<style>
		button {
			background-color: #000000;
			color: #FFFFFF;
		}
	</style>
</head>
```

#### Inline

Podemos inserir uma estilização em um elemento fazendo uso do atributo `style`. O valor desse atributo são as propriedades de estilização que serão aplicadas no elemento.

- **Exemplo:** Inserção de código CSS diretamente em um elemento através do atriuto `style`.

```html
<button style="background-color: #000000; color: #FFFFFF">CLIQUE AQUI</button>
```

#### Arquivo Externo

Podemos escrever todo o código CSS em um arquivo com extensão `.css` e fazer a importação dele dentro do HTML para que a estilização seja aplicada dentro da página. Geralmente fazemos a importação de arquivos CSS na tag `<head>`.

*\*Obs: É mais comum utilizar esse formato, visto que ele nos permite organizar/estruturar melhor todas as estilizações. Além disso, ele pode ajudar no carregamento da parte principal da página, visto que cada arquivo é carregado separadamente.*

- **Exemplo:** Inserção de código CSS através de um arquivo externo.

Arquivo `styles.css`

```css
button {
	background-color: #000000;
	color: #FFFFFF;
}
```

Importação do arquivo `styles.css` dentro do código HTML

```html
<head>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

___

<div id='2'/>

## Seletores

Como vimos anteriormente, os seletores nos ajudam a definir quais elementos serão estilizados em uma página. Ou seja, somos capazes de definir a localização desses elementos dentro do CSS.

[Veja uma lista completa com os padrões de seletores](https://www.w3schools.com/cssref/css_selectors.asp)

### id, class, tag

A forma mais comum de selecionar quais elementos estilizar, é fazendo uso do atributo `id`, atributo `class` ou indicando o nome de uma `tag`.

- **Exemplo:** Usar a cor preta no texto dos elementos com a tag `<h1>`, ou seja, os elementos com estrutura ```<h1></h1>```.

```css
h1 {
	color: #000000;
}
```

- **Exemplo:** Usar a cor preta no texto dos elementos que usam a classe "title", ou seja, os elementos com o atributo `class="title"`.

```css
.title {
	color: #000000;
}
```

- **Exemplo:** Usar a cor preta no texto do elemento com id "title", ou seja, o elemento com o atributo `id="title"`.

```css
#title {
	color: #000000;
}
```

### Combinação de Seletores

É possível combinar seletores para centralizar regras de personalização, além de criar lógicas mais variadas para problemas que queremos resolver com a estilização.

- **Exemplo:** Reutilizar uma estilização em mais de um seletor

Supondo que temos uma estilização igual para dois elementos

```css
h1 {
	color: #000000;
}

h2 {
	color: #000000;
}
```

Podemos combinar os seletores, separando por uma vírgula `,` para reutilizar a mesma estilização nesse conjunto de seletores.

```css
h1, h2 {
	color: #000000;
}
```

- **Exemplo:** Especificar um elemento dentro do outro através do seletor

```css
header h1 {
	color: #000000;
}
```

No exemplo acima, estamos dizendo que todo `<h1>` que estiver dentro de uma `<header>` será estilizado com `color: #000000`. Ou seja, na prática funcionará conforme o exemplo abaixo.

```html
<header>
	<div>
		<!-- ✅ Será estilizado, pois está dentro da <header> -->
		<h1>TEXTO</h1>
	</div>

	<!-- ✅ Será estilizado, pois está dentro da <header> -->
	<h1>TEXTO</h1>
</header>

<!-- 🚫 Não será estilizado, pois não está dentro da <header> -->
<h1>TEXTO</h1>
```

- **Exemplo:** Elemento com classe ou id especificados

```css
h1.title {
	color: #000000;
}

h2#subtitle {
	color: #FFF000;
}
```

No exemplo acima, estamos dizendo que:

\- Todo `<h1>` que possuir o atributo `class="title"` será estilizado com `color: #000000`.

\- Todo `<h2>` que possuir o atributo `id="subtitle"` será estilizado com `color: #FFF000`.

Ou seja, na prática teríamos o seguinte comportamento:

```html
<!-- 🚫 Não será estilizado, pois não possui classe 'title' -->
<h1>TEXTO</h1>
<!-- ✅ Será estilizado, pois possui classe 'title' -->
<h1 class="title">TEXTO</h1>

<!-- 🚫 Não será estilizado, pois não pois possui id 'subtitle' -->
<h2>TEXTO</h2>
<!-- ✅ Será estilizado, pois possui id 'subtitle' -->
<h2 id="subtitle">TEXTO</h2>
```

### Padrões úteis de Seletores

Os seletores possuem diversos padrões, podendo ser usados até mesmo para localizar elementos que tenham um determinado atributo, dentre outras características.

Por padrão, no CSS temos "pseudo-classes" que denotam um estado especial para um elemento (por exemplo quando o mouse está sendo passado em cima do elemento). Essas "pseudo-classes" podem ser utilizadas junto de seletores para criar novas lógicas.

- **Exemplo:** Seletor que localiza o primeiro elemento dentro de outro

```css
h1:first-child {
	background-color: #000000;
}
```

No exemplo acima, estamos dizendo que caso o `<h1>` for o primeiro elemento "filho" de outro elemento, terá `background-color: #000000`.

```html
<div>
	<!-- ✅ Será estilizado, pois é o primeiro elemento 'filho' do <div> -->
	<h1>TEXTO</h1>

	<!-- 🚫 Não será estilizado, pois não é o primeiro elemento 'filho' do <div> -->
	<h1>TEXTO</h1>
</div>
```

- **Exemplo:** Seletor que localiza o último elemento "filho" dentro de outro

```css
h2:last-child {
	background-color: #000000;
}
```

No exemplo acima, estamos dizendo que caso o `<h2>` for o último elemento "filho" de outro elemento, terá `background-color: #000000`.

```html
<div>
	<!-- 🚫 Não será estilizado, pois não é o último elemento 'filho' do <div> -->
	<h2>TEXTO</h2>

	<!-- ✅ Será estilizado, pois é o último elemento 'filho' do <div> -->
	<h2>TEXTO</h2>
</div>
```

- **Exemplo:** Seletor que localiza todos os elementos dentro de outro elemento

```css
div > * {
	background-color: #000000;
}
```

No exemplo acima, estamos dizendo que todos os elementos que estiverem dentro de um `div`, terão `background-color: #000000`.

```html
<div>
	<!-- ✅ Será estilizado, pois é "filho" do <div> -->
	<h1>TEXTO</h1>

	<!-- ✅ Será estilizado, pois é "filho" do <div> -->
	<h2>TEXTO</h2>
</div>
```

### Precedência de Seletores

Os elementos da página podem ser estilizados por diversas regras de personalização ao mesmo tempo.

Sendo assim, é comum essas regras se sobreporem e, essa sobreposição ocorre de acordo com o nível de especificidade de um seletor.

#### Hierarquia de Especificidade

A hierarquia da especificidade é a seguinte (da maior para a menor):

1. Quando utilizamos a estilização diretamente no elemento através do atributo `style`.

2. Quando usamos o seletor de atributo `id`.

3. Quando utilizamos o seletor de atributo `class` (também chamado de classe).
	- Seletores de atributo e pseudo-classes também entram aqui.

4. Quando utilizamos o seletor de `tag` (também chamado de elemento)
	- Seletores de pseudo elementos também entram aqui.

Além da regra de hierarquia, quanto mais informações fornecermos para um seletor, mais específico ele se tornará.

- **Exemplo:** Utilizar um seletor de mesma hierarquia porém mais específico

```css
/* Seletor de 'tag' menos específico */
h1 {
	background-color: #FF0000;
}

/* Seletor de 'tag' mais específico */
div h1 {
	background-color: #FFF111;
}
```

Na prática, teremos o seguinte comportamento:

```html
<div>
	<!-- Será estilizado com o seletor 'div h1' que é mais específico -->
	<h1>TEXTO</h1>
</div>
```

- **Exemplo**: Especificidade igual de seletores

Quando temos seletores iguais na definição de uma regra de estilização, a última regra definida será aplicada.

```css
/* É ignorado por ter sido definido primeiro */
h1 {
	background-color: #FF0000;
}

/* É aplicado por ter sido definido por último */
h1 {
	background-color: #FFF111;
}
```

#### Sobreposição de Importância (⚠️ Não recomendado)

Uma prática não recomendada, é a de adicionar uma propriedade dentro da regra de estilização que é capaz de ignorar qualquer outra regra que tenha sido feita anteriormente.

Ou seja, isso faz com que a hierarquia de especificidade "perca" seu funcionamento.

Levando em consideração o exemplo anterior, o seletor 'div h1' é mais específico e portanto é aplicado:

```css
h1 {
	background-color: #FF0000;
}

div h1 {
	background-color: #FFF111;
}
```

Porém, caso utilizarmos a propriedade de importância, é possível "ignorar" qualquer regra de especificidade existente:

```css
h1 {
	/*
		A propriedade '!important' faz com que agora
		a estilização de 'background-color: #FF0000'
		seja aplicada independente do fato do seletor
		'h1' ser menos específico que o 'div h1'.
	*/
	background-color: #FF0000 !important;
}

div h1 {
	background-color: #FFF111;
}
```

___

<div id='3'/>

## Método BEM

Dar nome para tudo que está ao nosso redor é algo extremamente difícil, porém muito importante, visto que facilita o entendimento.

O mesmo ocorre quando estamos lidando com a nomenclatura das classes, visto que dependendo do nome que colocamos nelas, podemos facilitar sua reutilização e até mesmo o entendimento de outros desenvolvedores que estejam mexendo naquele código.

Nesse sentido, surge o método BEM (Block, Element, Modifier) que traz uma proposta de nomenclatura que divide e pensa a arquitetura da interface em blocos, elementos e modificadores.

### Arquitetura de Interface

#### Bloco

É único e independente, ou seja, não se repete. Além disso, geralmente é o primeiro componente idealizado/construído que carrega os comportamentos e estilos mais genéricos. Por fim, um bloco pode conter elementos ou outros blocos.

*\*Obs: O nome da classe de um **Bloco** geralmente descreve seu propósito (menu, form, etc.) e não o seu estilo/estado (branco, padding, etc.).*

<img src="./exemplo_metodo_bem_block.png" />

#### Elemento

Ele está diretamente atrelado a um bloco, ou seja, não pode ser utilizado sem a existência de um bloco.

*\*Obs: O nome da classe de um **Elemento** geralmente descreve seu propósito (text, input, etc.) e não o seu estilo/estado (preto, padding, etc.).*

<img src="./exemplo_metodo_bem_element.png" />

#### Modificador

Carrega características específicas de aparência, estado e comportamento. Além disso, é opcional e pode estar atrelado tanto a um **Bloco** quanto a um **Elemento**.

*\*Obs: O nome da classe de um **Modificador** sempre descreve características, por exemplo `disabled` (estado), `color-white` (aparência), `fade-to-below` (comportamento).*

<img src="./exemplo_metodo_bem_modifier.png" />

### Nomenclatura

Dessa forma, a nomenclatura do método BEM utiliza essa divisão de arquitetura de interface de **Blocos, Elementos e Modificadores**, propondo a utilização do seguinte padrão:

`Bloco__Elemento_Modificador`

Caso o nome do **Bloco, Elemento ou Modificador** for composto, o mais comum é utilizar um hífen `-` para separar as palavras.

- **Exemplo:** Nomenclatura de um elemento de input com estado desabilitado dentro de um bloco de formulário de pesquisa

	`search-form__content-input_disabled`


# Aula 12 - Gerando espaçamento e posicionando os elementos de uma interface

## 🎯 Objetivos:
* Ter noção de quais são as principais unidades de medida usadas no CSS;
* Aprender as diversas formas de criar espaçamentos entre os elementos;
* Entender as melhores maneiras de posicionar os elementos ao longo da página;

___

## Tópicos
1. [Espaçamentos](#1)
2. [Posicionamentos](#2)

___

<div id='1'/>

## Espaçamentos

Quando acessamos uma página, ao olhar para os elementos presentes nela, é possível entender que existe um espaço entre eles, para garantir que as informações fiquem mais organizadas e melhores de entender.

Nesse sentido, temos um conjunto de informações de personalização do CSS que são dedicadas para lidar apenas com os espaçamentos dos elementos que estão presentes na tela.

### Unidades de medida

Para criar espaçamentos, precisamos utilizar medidas para definir o "tamanho" desses espaçamentos. Sendo assim, existem dois tipos de medidas: Abosluto e Relativo.

[Veja mais informações sobre todas as unidades de medida](https://www.w3schools.com/cssref/css_units.asp)

#### Medidas Absolutas

São medidas que não estão referenciadas a nenhuma outra medida, ou seja, não dependem de um valor de referência. Podemos considerar nesse caso unidades definidas pela física.

Nesse sentido, existem várias unidades que podem ser utilizadas, porém o mais comum será utilizarmos:

- **Pixel (px)**

#### Medidas Relativas

Diferente das medidas absolutas, as relativas dependem de uma outra unidade de medida como base.

Os tipos de medidas relativas mais comum de utilizarmos são:

- **REM (rem):** muito útil para criar páginas responsivas, ele utiliza como base um valor definido no *root* da página.

- **Porcentagem (%):** geralmente essa porcentagem é relativa ao tamanho do elemento **pai** do elemento **filho** que estamos estilizando.

- **Viewport Width (vw):** utiliza como base o tamanho da largura da tela como um todo.

- **Viewport Height (vh):** utiliza como base o tamanho da altura da tela como um todo.

### Padding

O padding é utilizado para dizer qual a distância que um elemento quer ter com relação aos outros elementos que estão dentro dele.

O valor do padding pode ser definido em todas as direções (cima, direita, baixo, esquerda).

<img src="./exemplo_padding.png" />

Nessa imagem, é possível visualizar que o elemento é a delimitação laranja, logo, a delimitação verde é a distância entre o próprio elemento e outros elementos que estão dentro dele.

- **Exemplo:** Aumentando a distância entre um botão e o texto dentro dele em 8px para todas as direções

```css
button {
	/* 1ª Forma (segue a ordem: cima, direita, baixo, esquerda) */
	padding: 8px 8px 8px 8px;

	/* 2ª Forma (utiliza uma propriedade para cada direção) */
	padding-top: 8px;
	padding-right: 8px;
	padding-bottom: 8px;
	padding-left: 8px;

	/* 3ª Forma (todas as direções com um valor) */
	padding: 8px;
}
```

[Veja mais informações sobre o padding](https://www.w3schools.com/css/css_padding.asp)

### Margin

O margin é utilizado para dizer qual distância um elemento quer ter com relação a outros elementos que estão ao seu redor.

O valor do margin pode ser definido em todas as direções (cima, direita, baixo, esquerda).

<img src="./exemplo_margin.png" />

Nessa imagem, é possível entender que temos dois elementos: um delimitado pela cor verde e outro pela cor laranja. O espaço que existe entre eles é uma configuração de margin.

- **Exemplo:** Aumentando a distância entre um título e outros elementos ao seu redor em 8px para todas as distâncias.

```css
h1 {
	/* 1ª Forma (segue a ordem: cima, direita, baixo, esquerda) */
	margin: 8px 8px 8px 8px;

	/* 2ª Forma (utiliza uma propriedade para cada direção) */
	margin-top: 8px;
	margin-right: 8px;
	margin-bottom: 8px;
	margin-left: 8px;

	/* 3ª Forma (todas as direções com um valor) */
	margin: 8px;
}
```

[Veja mais informações sobre o margin](https://www.w3schools.com/css/css_margin.asp)

### Debug no Devtools

Podemos usar o Devtools para depurar o espaçamento de determinados elementos da tela.

Para isso, basta abrir a aba de **Elements** do Devtools, em seguida, selecionar um elemento na página.

Na lateral direita do Devtools será possível ver um conjunto de informações de estilização desse elemento. Nessa lateral, basta abrir a aba **Computed** que serão mostrados detalhes sobre o espaçamento do elemento selecionado (margin, padding, border).

<img src="./exemplo_espacamento_devtools.png" />

___

<div id='2'/>

## Posicionamentos

Ao acessar um site, é possível notar que os elementos ocupam posições diferentes em cada área da tela, seja para organizar a UI ou até mesmo para melhorar a interação do usuário com ela.

Nesse sentido, o CSS oferece diversas formas de alterar o posicionamento de um elemento, algumas são mais comuns de serem utilizadas e outras serão implementadas apenas em casos mais específicos.

### Tamanho de Elementos

Para personalizar o tamanho de um elemento, podemos utilizar as propriedades `width` (largura) e `height` (altura) com o seu valor sendo uma unidade de medida.

- **Exemplo:** Botão com altura e largura definidos

```css
button {
	/* 
		Como estamos usando uma porcentagem (%) que é uma unidade
		relativa, isso significa que a largura do botão será uma
		porcentagem em cima do valor total da largura do um elemento
		no qual ele está inserido.
	*/
	width: 100%;

	/* 
		Nesse caso, como estamos usando a unidade de pixels (px) que
		é uma unidade absoluta, significa que o botão terá uma altura
		de 18 pixels.
	*/
	height: 18px;
}
```

### Display

A propriedade mais utilizada atualmente no CSS para lidar com os posicionamentos é o `display`, com ele somos capazes de definir diversos tipos de posicionamentos de acordo com o problema que estamos resolvendo.

#### Display None

Podemos utilizar a propriedade `display: none` em um elemento para escondê-lo.

#### Display Inline

Podemos utilizar a propriedade `display: inline` para mostrar todos os elementos em apenas uma linha.

<img src="./exemplo_display_inline.png" />

*\*Obs: Na imagem acima, aplicamos a propriedade `display: inline` em todos os elementos de cor amarela.*

#### Display Block

Podemos utilizar a propriedade `display: block` para mostrar todos os elementos com quebras de linha.

<img src="./exemplo_display_block.png" />

*\*Obs: Na imagem acima, aplicamos a propriedade `display: block` em todos os elementos de cor amarela.*

#### Display Inline Block

Podemos utilizar a propriedade `display: inline-block` para mostrar todos os elementos em uma linha, porém, a altura da linha será relativa ao tamanho do maior elemento.

<img src="./exemplo_display_inline_block.png" />

*\*Obs: Na imagem acima, aplicamos a propriedade `display: inline-block` em todos os elementos de cor amarela.*

#### Display Table

Essa propriedade é utilizada para lidar com os elementos seguindo a ideia de construção de uma tabela, que geralmente é feita com a tag `<table>`, porém, com o `display: table` não precisamos usar essa tag diretamente.

### Flexbox

Antes do advento do Flexbox, era comum utilizarmos a propriedade de `display` da seguinte maneira:

- **Block:** para definir seções em uma página

- **Inline:** para definir textos

- **Table:** para definir dados multidimensionais em tela (como acontece em uma tabela)

No entanto, esses formatos antigos eram um tanto quanto complexos de se utilizar para construir as páginas. Sendo assim, o Flexbox foi criado com o intuito de tornar mais fácil a criação de interfaces bem estruturadas e responsivas.

Para utilizar o Flexbox basta usar a propriedade `display: flex` no elemento "pai" que engloba os elementos "filhos" que serão posicionados. A partir daí, temos algumas propriedades principais que são utilizadas para manipular esses elementos "filhos":

\- **flex-direction:** controla a direção em que os elementos serão posicionados no Flexbox (em linha, ou coluna)

\- **align-items:** controla o alinhamento dos elementos no eixo contrário ao da direção do Flexbox (caso considerarmos uma linha como o eixo X, ele mudará o alinhamento dos elementos no eixo Y, caso considerarmos uma coluna como o eixo Y, ele mudará o alinhamento dos elementos no eixo X)

\- **justify-content:** controle o alinhamento dos elementos no eixo igual a direção do Flebox (caso considerarmos uma linha como o eixo X, ele mudará o alinhamento dos elementos no eixo X, caso considerarmos uma coluna como o eixo Y, ele mudará o alinhamento dos elementos no eixo Y)

[Veja mais informações sobre o Flexbox](https://www.w3schools.com/css/css3_flexbox_container.asp)

- **Exemplo:** Alinhando elementos "filhos" um abaixo do outro no centro de um elemento "pai"

```css
.container-cinza {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
```

<img src="./exemplo_display_flex_column_center.png" />

*\*Obs: Na imagem acima, aplicamos as propriedades no elemento de cor cinza.*

- **Exemplo:** Alinhando elementos "filhos" um ao lado do outro no centro de um elemento "pai"

```css
.container-cinza {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
```

<img src="./exemplo_display_flex_row_center.png" />

*\*Obs: Na imagem acima, aplicamos as propriedades no elemento de cor cinza.*

### Grid

Através do Grid, somos capazes de delimitar uma parte da tela como se fosse um tabuleiro de xadrez. Ou seja, podemos definir linhas e colunas que formam pequenas áreas, nas quais somos capazes de posicionar elementos.

Para usar o grid, basta adicionarmos a propriedade `display: grid` no elemento "pai" de um conjunto de elementos "filhos". A partir daí, temos algumas propriedades principais que são utilizadas para manipular esses elementos "filhos":

\- **grid-template-columns:** a largura de cada coluna (o valor é uma unidade de medida)

\- **grid-template-rows:** a altura de cada linha (o valor é uma unidade de medida)

\- **grid-gap:** a distância entre as linhas e colunas que separam os elementos (o valor é uma unidade de medida)

[Veja mais infomações sobre o Grid](https://www.w3schools.com/css/css_grid.asp)

- **Exemplo**: Uma área de grid 3x3 (3 linhas e 3 colunas) completamente preenchida

```css
.container-cinza {
	display: grid;
	grid-template-columns: 80px 80px 80px;
	grid-template-rows: 80px 80px 80px;
	grid-gap: 8px;
}
```

<img src="./exemplo_display_grid.png" />

*\*Obs: Na imagem acima, aplicamos as propriedades no elemento de cor cinza.*

### Position

Podemos dizer que existem dois tipos de posicionamentos: **relativo e estático**. Eles são definidos a partir da propriedade `position`.

O posicionamento estático já é o padrão que temos nos elementos da nossa página, ou seja, em teoria é como se todo elemento já estivesse com uma propriedade `position: static` ativa.

O posicionamento relativo é feito com base em alguma outra informação, seja o próprio elemento, um elemento "pai" ou até mesmo com relação à tela como um todo.

Quando estamos usando o posicionamento relativo (relative, absolute, fixed), é possível utilizarmos propriedades para manipular a posição desses elementos:

\- **top:** à que distância o elemento deve ficar do topo relativo

\- **right:** à que distância o elemento deve ficar da direita relativa

\- **bottom:** à que distância o elemento deve ficar do fundo relativo

\- **left:** à que distância o elemento deve ficar da esquerda relativa

#### Position Relative

Quando usamos o `position: relative` em algum elemento, estamos movendo ele do seu posicionamento normal, porém, utilizando o mesmo espaço que ele utilizava originalmente.

- **Exemplo:** Movendo o bloco amarelo para cima do vermelho sem mudar a posição do bloco vermelho

```css
.bloco-amarelo {
	position: relative;
	top: 10px;
}
```

<img src="./exemplo_position_relative.png" />

#### Position Absolute

Quando usamos o `position: absolute` em algum elemento, estamos movendo ele do seu posicionamento normal, porém, ele **não** ocupa mais o espaço que ocupava anteriormente e, seu posicionamento é feito com relação ao elemento "pai" mais próximo - que estiver com posicionamento relativo ativado.

- **Exemplo:** Mudando posicionamento do bloco amarelo de acordo com o elemento "pai", desocupando o espaço que utilizava anteriormente.

```css
.container-cinza {
	position: relative;
}

.bloco-amarelo {
	position: absolute;
	top: 10px;
}
```

<img src="./exemplo_position_absolute.png" />

#### Position Fixed

Quando usamos o `position: fixed` em algum elemento, estamos movendo ele do seu posicionamento normal, porém, ele **não** ocupa mais o espaço que ocupava anteriormente e, seu posicionamento é feito com relação à tela como um todo.

- **Exemplo:** Mudando posicionamento do bloco amarelo de acordo com a tela, desocupando o espaço que utilizava anteriormente.

```css
.bloco-amarelo {
	position: fixed;
	top: 10px;
}
```

<img src="./exemplo_position_fixed.png" />
