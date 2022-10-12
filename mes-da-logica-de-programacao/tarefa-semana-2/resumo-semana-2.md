## Resumo Semana 2: Entendendo e criando funções

### Funções

Uma função é um procedimento, um conjunto de instruções que executa uma tarefa, calcula um valor ou realiza alguma ação.
Elas são definidas em JavaScript através da palavra-chave `function`.

Sua sintaxe consiste em:
    - nome da função;
    - argumentos (opcionais);
    - ação (comandos) entre `{ }` - podendo conter ou não um retorno.

Exemplo:
```javascript
function minhaFuncao(meuArgumento) {
    // comandos aqui
    return meuArgumento; // opcional
}
```

A função acima nomeada não é executada automaticamente, o computador quando passa por ela apenas entende que você está declarando uma função. Para de fato chamar a função, faça:
```javascript
minhaFuncao(10);
```
Para saber mais, acesse: 

- [Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

### Comandos Condicionais

Os comandos condicionais permitem a criação de um fluxo de execução a partir de uma condição em seu bloco de código. Podemos definir fluxos específicos em nosso bloco de código a partir da entrada de um registro tomando uma decisão em nosso código.

Sua sintaxe consiste em:
```javascript
if (condicao)
    bloco_de_execucao
```
Com uma cláusula else:
```javascript
if (condicao)
    bloco_de_execucao
else
    bloco_de_execucao_caso_a_primeira_condicao_seja_falsa
```
Você também pode pesquisar sobre como fazer um comando condicional de uma única linha, o operador ternário. Sua sintaxe é:
```javascript
condition ? expr1 : expr2
```
Para saber mais, acesse: 

- [if/else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
- [operador condicional ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
