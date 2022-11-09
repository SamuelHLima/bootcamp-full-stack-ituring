# Aula 9 - A Interface da Web

## 🎯 Objetivos:
* Entender o que são as interfaces da web e quais as principais tecnologias utilizadas em sua base;
* Aprender alguns dos conceitos e termos utilizados no HTML e CSS, além de como essas tecnologias estão inseridas no nosso dia a dia;
* Aprender sobre os fundamentos do HTML e como ele funciona na prática;
* Entender como as User Stories são utilizadas no contexto de Engenharia de Software para solucionar os problemas de um negócio e como elas ajudam no processo de criação de telas.

___

## Tópicos
1. [O que é uma interface da Web?](#1)
2. [O que é HTML e CSS?](#2)
3. [Fundamentos de HTML](#3)
4. [Qual a estrutura padrão do HTML?](#4)
5. [O que são User Stories?](#5)

___

<div id='1'/>

## O que é uma interface da Web? 

Durante nosso dia a dia de uso da internet, é muito comum navergarmos por diversos sites. Além disso, depois que os acessamos, muitas das ações que executamos costumam utilizar Javascript para cumprir com alguma regra que foi especificada.

Por exemplo, quando abrimos o Google e digitamos algo na pesquisa, ao clicarmos no botão de pesquisar, no fundo dos panos existe um código Javascript sendo executado para concretizar o processo de busca.

Dessa forma, quando paramos para analisar toda essa interação, é possível entender que existe algo visual para ser mostrado para o usuário antes de uma ação ser executada. Isso é o que chamamos de **Interface da Web**.

Essa interface é composta por diversos elementos que podem ser modificados para ajudar na interação do usuário com a página.

Botões, textos, imagens são exemplos de elementos com os quais você provavelmente já teve contato enquanto comprava ou buscava algo na internet. Sendo assim, para organizarmos a visualização desses elementos em um site, usamos o **HTML (HyperText Markup Language)**.

Além disso, provavelmente você já deve ter notado algum botão que possuía cor e formato diferentes de acordo com o site acessado. Ou seja, é possível customizarmos o formato, cor e outras propriedades desses elementos através do **CSS (Cascading Style Sheets)**.

___

<div id='2'/>

## O que é HTML e CSS?

Podemos fazer uma analogia inicial com uma casa:

- HTML é como a estrutura da casa, ou seja, assim como a casa possui paredes, teto e móveis, o HTML possui diversos elementos como botões, imagens e textos.

- CSS é a personalização dessa estrutura, ou seja, assim como os móveis de uma casa podem ter formatos/estilos diferentes, no HTML os elementos também podem ser personalizados.

### HTML (HyperText Markup Language)

Muitas pessoas imaginam que o HTML é uma linguagem de programação, porém na verdade ele é uma linguagem de marcação - inclusive sua sigla significa "Linguagem de Marcação de Hipertexto".

Ou seja, o termo "linguagem de marcação" significa estruturar/identificar/apresentar dados - o contrário de linguagens de programação que são utilizadas para executar tarefas. Já o termo "hipertexto" vem da ideia de que podemos ter textos que referenciam outros textos (o famoso link).

Nesse sentido, podemos entender que o HTML é a tecnologia principal utilizada para montar nossa interface da web, visto que é através dele que organizamos toda a base dessa estrutura. 

Portanto, independente da quantidade de outras tecnologias que estejam sendo utilizadas em um site, podemos ter certeza de que no fundo o que está presente ali é um código HTML que está mostrando aquela interface. 

### CSS (Cascading Style Sheets)

O CSS é uma sigla que significa "Folha de Estilo em Cascatas". Ele é utilizado para "decorar" os elementos da nossa página que foram criados utilizando o código HTML.

Além disso, ele é a base da estilização das nossas interfaces da Web, então, mesmo que uma página esteja usando várias outras tecnologias para ajudar em sua personalização, no fundo dos panos o que existe nela é um código de CSS que realiza todas as regras para alterar a aparência dos elementos.

___

<div id='3'/>

## Fundamentos de HTML

Geralmente o código em HTML fica guardando em um arquivo que possui a extensão **.html**, ou seja, na maioria dos casos em que acessamos uma página na web, o navegador renderiza esse arquivo e, dessa forma, nós temos um retorno visual da página que foi acessada.

- Os elementos do HTML tem seu código escrito através do uso de **tags** que podem ter **atributos** para acrescentar novas características.

- Além disso, como o HTML precisa ser interpretado pelo navegador, ele possui uma sintaxe assim como o Javascript.

### Tags

No HTML existem diversos tipos de tags (como botões, textos, links, etc). Elas são utilizadas para delimitar em qual parte da página um determinado elemento começa e termina.

- **Exemplo:** Texto de parágrafo

```html
<p>Isso é um parágrafo</p>
```

No exemplo acima, podemos ver que o ```<p>``` indica o início da tag de parágrafo e o ```</p>``` indica seu final.

Além disso, o texto ```p``` indica que o tipo dessa tag é de parágrafo, porém, vale ressaltar que existem diversos tipos de tags.

Vale ressaltar que, entre o início e o fim da tag nós temos seu conteúdo, que pode ser um texto ou até mesmo **outras tags**.

Sendo assim, ao usar a tag acima, você teria um parágrafo sendo exibido no seu navegador:

<img src="./exemplo_tag_paragraph.png" />

[Veja também uma lista com todas as tags existentes](https://www.w3schools.com/TAgs/default.asp)

### Atributos

Os atributos são utilizados para acrescentarmos características em uma tag (geralmente eles possuem uma chave e um valor). A chave indica qual a característica que será adicionada e o valor indica uma específicação para essa característica.

- **Exemplo:** Texto de parágrafo com informação adicional

```html
<p title="Informação adicional sobre esse parágrafo">Isso é um parágrafo</p>
```

No exemplo acima, podemos ver a utilização do atributo ```title``` com o valor ```"Informação adicional sobre esse parágrafo"```.

Ou seja, estamos informando que ao passar o mouse em cima desse parágrafo, será mostrado o texto "Informação adicional sobre esse parágrafo":

<img src="./exemplo_tag_paragraph_attribute_title.png" />

### Comentários

Assim como no código de Javascript, podemos adicionar comentários no código do HTML (vale lembrar que tudo que fica comentado não é executado):

```html
<!-- Comentário de uma linha -->

<!--
	Comentário de
	várias linhas
-->
```

___

<div id='4'/>

## Qual a estrutura padrão do HTML?

Geralmente toda página da web cumpre com um mesmo padrão de elementos em sua base, conforme pode ser visto no exemplo abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
 <head></head>
 <body></body>
</html>
```

Logo no início da declaração de uma página em HTML é necessário adicionar a informação ```<!DOCTYPE html>``` para que o navegador consiga entender qual o tipo de arquivo que será renderizado.

Por fim, as demais tags utilizadas nessa estrutura padrão assumem responsabilidades diferentes, conforme pode ser visto logo abaixo.

### Tag "html"

Essa tag fica na camada mais externa que serve para definir todo o documento HTML.

Além disso, é necessário fornecer um atributo com a chave ```lang``` com o valor que indica qual é a lingua utilizada na página (português, inglês, etc.). No exemplo acima, usamos o valor ```pt``` que significa que a língua utilizada na página será o "Português".

Esse atributo é utilizado pelas ferramentas de busca (como o Google) para lidar melhor com a identificação dessa página.

[Veja também qual é o código de outras línguas](https://www.w3schools.com/tags/ref_language_codes.asp)

### Tag "head"

É utilizada para informar dados extras sobre a página (por exemplo o título dela). Geralmente esses dados são inseridos através do uso de outras tags.

- **Exemplo:** Título da página

```html
<!DOCTYPE html>
<html lang="pt-BR">
 <head>
	 <title>ITuring Bootcamp</title>
 </head>
 <body></body>
</html>
```

Usando o código acima, você teria o título "ITuring Bootcamp" que está dentro da tag ```title``` sendo mostrado na aba do seu navegador:

<img src="./exemplo_head_tag_title.png" />

Algumas dessas informações extras que podem ser adicionadas na tag ```head``` são úteis para ajudar com que a página seja encontrada mais facilmente em sistemas de busca (como o Google).

### Tag "body"

Adicionamos outras tags dentro dessa para definir como será o conteúdo da página (geralmente é o retorno visual que temos no nosso navegador).

___

<div id='5'/>

## O que são User Stories?

O termo traduzido para o português significa "Estórias de Usuário". Esse método é utilizado para descrever uma necessidade de negócio na linguagem de um usuário.

- **Exemplo:** User Story de uma funcionalidade de cancelamento de reserva de hotel

> **Como** um cliente
>
> **Quero** ser capaz de cancelar minha reserva de hotel
>
> **Para** não perder meu dinheiro caso ocorra alguma emergência

*\*Obs: Geralmente as User Stories são definidas em 'post-it', os famosos blocos de notas.*

Em um projeto real, é comum o time de engenharia criar várias User Stories.

Em seguida, elas são adicionadas em backlog e executadas de acordo com sua prioridade - geralmente priorizam o que entrega mais valor em termos de custo x tempo.

Assim que uma User Story é selecionada para ser implementada, é comum uma pessoa ou equipe de UI/UX definir como será a tela que irá resolver o problema proposto pela User Story.


# Aula 10 - Como aprimorar e debugar o código HTML

## 🎯 Objetivos:
* Entender o conceito de HTML semântico;
* Aprender como utilizar a ferramenta de Devtools para realizar debug no front-end;
* Compreender a importância dos atributos 'class' e 'id', além de como eles são utilizados na prática.

___

## Tópicos

1. [HTML Semântico](#1)
2. [Outras melhorias](#2)
3. [Devtools](#3)
4. [Atributos 'class' e 'id'](#4)

___

<div id='1'/>

## HTML Semântico

Geralmente usamos o código HTML para apresentar informações visualmente.

Nesse sentido, às vezes por pensarmos no HTML apenas como um código que tem o intuito de retornar visualmente algum dado, acabamos não dando atenção para algo muito importante: as tags que estamos utilizando no código.

Como sabemos, usamos as tags para escrever o código HTML e seus tipos são extremamente variados.

Um problema que surge nisso é: geralmente tags de tipos diferentes podem ter um retorno visual igual, porém, talvez o tipo da tag não seja o mais adequado para aquele contexto.

Isso gera alguns problemas como:

- Dificuldade das ferramentas de busca encontrarem o site;

- Dificuldade em utilizar leitores de acessibilidade no site;

- Problemas de usabilidade no site.

Com isso, surge o que chamamos de **HTML Semântico**, que é uma preocupação em escrever o código HTML utilizando as tags de acordo com seu significado.

Abaixo podemos ver um exemplo de uso da ideia de HTML Semântico na escrita de um botão (supondo que ambas as formas de escrita de código trouxessem o mesmo retorno visual):

- **HTML Semântico**

```html
<button>Clique Aqui</button>
```

- **HTML Não Semântico**

```html
<div>Clique Aqui</div>
```

No exemplo acima, ao utilizar a tag correta para mostrar o botão, ganhamos os seguintes benefícios de acessibilidade:

- A capacidade de navegar entre os botões utilizando a tecla **Tab** e de ativá-los utilizando a tecla **Enter**. 
- Os leitores de tela utilizados por deficientes visuais conseguem dizer para a pessoa que aquele elemento é de fato um botão.

[Veja também outros exemplos de HTML Semântico](https://www.w3schools.com/html/html5_semantic_elements.asp)

___

<div id='2'>

## Outras melhorias

Dependendo de como escrevemos o código HTML, ele pode tornar o site mais fácil de ser encontrado em ferramentas de buscas (como o Google) e também mais fácil de ser utilizado por pessoas que tenham algum tipo de deficiência (visual, auditiva, motora ou cognitiva).

Nesse sentido, temos outras melhorias complementares à escrita de escrita de HTML Semântico que trazem inúmeros benefícios para o site que estamos desenvolvendo.

### Acessibilidade

Em alguns casos, pessoas com algum tipo de deficiência podem acessar seu site. Geralmente elas usam tecnologias asistivas para interagirem melhor com o site, como leitores de tela, ampliadores de tela, mouses/teclados especiais.

Nesse sentido, as ferramentas assistivas tem um melhor funcionamento dependendo de padrões que você adota no código HTML.

Ou seja, quando falamos em melhorar a acessibilidade de um site, estamos nos referindo ao processo de tornar possível que qualquer pessoa consiga interagir com seu site da melhor forma possível, mesmo que ela tenha alguma deficiência.

Alguns exemplos de boas práticas de acessibilidade:

- Utilizar atributos específicos para acessibilidade ([WAI-ARIA](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics))

- Definir a língua do documento (usar o atributo `lang` na tag `html` para que a tecnologia assistiva defina perfil de voz e conjunto de caracteres)

- Utilizar **Landmarks** (usar o atributo `role` para adicionar pontos de referência para indicar saltos de conteúdo)

- Utilizar os Elementos de Interação da maneira correta (utilizar tags de input da forma que é especificado na documentação; não confundir o uso das tags `link` e `button`)

- Adicionar um texto alternativo nas imagens (usar o atributo `alt` na tag `img` para descrever aquela imagem)

- HTML Semântico

[Veja mais informações sobre acessibilidade](https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility/HTML)

### SEO

Quando pesquisamos alguma informação em um site de busca (como o Google), o resultado encontrado possui uma ordenação baseada em regras complexas.

Nesse caso, chamamos de SEO o processo de tornar um site mais visível nos resultados de pesquisa (também chamamos isso de ranqueamento). Ou seja, dessa forma conseguimos colocar o site cada vez mais no início das pesquisas.

Alguns exemplos de boas práticas de SEO:

- Utilizar tags específicas para SEO (meta tags de título, palavra-chave, etc. [Veja também outras Meta Tags que podem ser utilizadas](https://www.w3schools.com/tags/tag_meta.asp))

- Utilizar tags para melhorar o compartilhamento do site ([Open Graph Tags](https://ogp.me))

- Utilizar URL amigáveis para as páginas (substituir códigos por textos com maior verbosidade)

- Utilizar nomes amigáveis para as imagens (utilizar um texto mais verboso no nome do arquivo da imagem)

- HTML Semântico

[Veja mais informações sobre SEO](https://developer.mozilla.org/pt-BR/docs/Glossary/SEO)

___

<div id='3'/>

## Devtools

Ao iniciar o desenvolvimento do HTML, é muito comum surgir a necessidade de realizar o processo de debug no código para solucionar os problemas que aparecem.

Nesse sentido, a maioria dos navegadores atuais possuem um recurso chamado de **"Developer Tools"**, que é o que chamamos normalmente de **Devtools**.

Esse recurso nos permite realizar diversas ações de depuração em um site para entendermos alguns comportamentos, como por exemplo: observar os elementos presentes na nossa página e como eles estão configurados/organizados, quanto tempo demorou para carregar alguns recursos dentro da página, etc.

### Como abrir o Devtools

Geralmente os navegadores possuem um conjunto de teclas de atalho para abrir o Devtools, porém isso costuma variar de navegador para navegador.

Ou seja, a forma mais simples de abrir o Devtools em qualquer um deles é clicando com o botão direito na página e, em seguida, clicar na opção "Inpecionar Elemento" ou "Inspect".

<img src="./exemplo_abrir_devtools_pelo_context_menu.png" />

Ao abrir o recurso de Devtools, geralmente aparece um menu lateral ou inferior no seu navegador com diversas informações (isso pode assustar em um primeiro momento, porém ao longo do tempo o Devtools se torna algo bem simples de ser usado).

<img src="./exemplo_devtools_completo.png" />

### Ferramentas disponíveis no Devtools

Após abrir o Devtools, você irá notar que no topo desse recurso existem diversas abas que descrevem a lista de ferramentas disponíveis para serem utilizadas.

<img src="./exemplo_devtools_ferramentas.png" />

#### Elements

Com essa ferramenta somos capazes de visualizar e modificar a estrutura do HTML do site em que estamos navegando.

Ou seja, podemos adicionar novas tags, além de editar (por exemplo mudar atributos e o css) e excluir as existentes. Porém, essas modificações são feitas apenas no seu computador, então caso você recarregar a página ela retornará ao seu estado original.

Podemos também utilizar a seleção de elementos para que a ferramenta já mostre informações sobre um elemento em específico. 

#### Console

Através dessa ferramenta podemos ter um retorno do código Javascript que está sendo executado na página e até mesmo de executar código dentro dessa mesma página.

As categorias das informações de logs geralmente ficam posicionadas na lateral esquerda. Além disso, elas costumam corresponder ao tipo de método do **console** que utilizamos no código Javascript do front-end.

Ou seja, caso executarmos os códigos abaixo na nossa página eles serão categorizados de acordo com o método utilizado:

- ```console.log("Log comum")``` irá retornar o texto "Log comum" em todas as categorias com excessão de avisos e erros.

- ```console.error("Algo deu errado")``` irá retornar o texto "Algo deu errado" na categoria de erros.

- ```console.warn("Aviso")``` irá retornar o texto "Aviso" na categoria de avisos.

- ```console.info("Informação")``` irá retornar o texto "Informação" na categoria de informações.

#### Sources

Com essa ferramenta, somos capazes de ver todos os arquivos que foram importados na página (javascript, html e css). Além disso, podemos selecionar algum desses arquivos para ver qual é o seu conteúdo.

Geralmente quando ocorre algum erro no **Console**, quando clicamos nos detalhes do erro somos direcionados para a aba de **Sources** no arquivo e linha em que ocorreu o problema.

#### Network 

Nessa ferramenta é possível ver todas as requisições que foram realizadas na página, além de detalhes de cada uma, por exemplo: resposta, headers, body, query params, etc.

Podemos também utilizar essa ferramenta para simular como seria abrir a página com outros tipos de conexão, como o 2G e 3G do celular.

#### Performance

Assim como está escrito no nome dessa ferramenta, ela serve para ajudar no debug de performance da página.

Nela somos capazes de executar algo chamado **Profiling** que é um recurso que começa a gravar logs de execução de funções por um tempo determinado.

Quando o processo de **Profiling** finaliza, podemos ver o tempo de execução de funções nesse intervalo de tempo - isso é extremamente útil para analisar funções que possam ter problemas de performance. 

#### Memory 

Essa ferramenta serve para fazermos uma análise da memória utilizada pelo processo de Javascript da página.

Assim como na ferramenta de **Performance**, executamos um **Profiling** que irá capturar logs por um tempo determinado.

Após o processo de **Profiling** ser executado, temos acesso a um relatório com a lista de variáveis alocadas em memória e também quando de memória cada uma delas está utilizando.

#### Application 

É comum utilizarmos alguns recursos específicos do navegador nas nossas aplicações (por exemplo o Local Storage que é um armazenamento do navegador normalmente usado para guardar informações persistidas na página - como a preferência por tema light ou dark).

Ou seja, nessa ferramenta, somos capazes de ver detalhes de cada um desses recursos, além de interagir com eles para realizar testes.

___

<div id='4'>

## Atributos 'class' e 'id'

Durante a criação de um site, na maioria das vezes será necessário estilizar (CSS) ou adicionar scripts (geralmente chamamos de script um pedaço de código escrito em Javascript que é executado dentro do nosso site) em alguns elementos da página. Por conta disso, precisamos de utilizar alguns atributos tanto para localizar o elemento quanto para referenciá-lo no CSS.

Nesse sentido, é muito comum utilizarmos os atributos `class` e `id` para solucionar esses problemas.

*\*Obs: Os atributos 'class' e 'id' podem ser utilizados em conjunto nos elementos da página, tudo vai depender do problema que você está solucionando.*

### Atributo 'id'

Esse atributo especifica uma identificação única para um elemento - ou seja, o nome que for utilizado como valor desse atributo não pode ser reutilizado por outro elemento.

- **Exemplo:** Botão de menu com id

```html
<button id="menu-button">
	Abrir Menu
</button>
```

No exemplo acima, note que como colocamos o `id="menu-button"` nesse botão, não podemos colocar esse mesmo `id="menu-button"` em outro elemento, visto que agora essa é uma identificação única desse botão.

Esse tipo de atributo é geralmente utilizado para **referenciar um elemento em scripts que são executados no site**. Além disso, ele também pode ser utilizado no CSS para referenciar um elemento em uma estilização.

### Atributo 'class'

Geralmente chamamos esse atributo de 'classe'. Ele serve para referenciar um grupo de elementos - diferente do 'id' que especifica um único elemento.

- **Exemplo:** Botões de abrir e fechar um menu com classes

```html
<button class="primary-button">
	Abrir Menu
</button>

<button class="primary-button outlined-button">
	Fechar Menu
</button>
```

No exemplo acima, é possível notar que um elemento pode ter mais de uma classe, basta separar seus valores utilizando um espaço em branco.

Além disso, vale ressaltar que estamos adicionando uma estilização `primary-button` em ambos os botões, porém estamos adicionando uma estilização extra no botão "Fechar Menu" que é a `outlined-button`.

Esse tipo de atributo é geralmente utilizado para **referenciar os elementos do site em uma estilização com CSS**. Porém, também pode ser utilizado para referenciar um conjunto (no caso usamos a palavra 'conjunto' visto que uma mesma classe pode ser utilizada em mais de um elemento) de elementos em um script que é executado no site.
