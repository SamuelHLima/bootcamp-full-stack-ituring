# Resumo Aula 1: Construindo a base de tudo

## O que é programação?
- Programação é um trabalho que hoje se faz presente em todos os setores da sociedade e da indústria. Desde a aviação, sistemas bancários e financeiros, no setor de saúde, serviços públicos, redes sociais. Programar é uma atividade essencial para o mundo digital.
- Programação é a espinha dorsal de praticamente qualquer produto, serviço ou empresa de tecnologia. Praticamente toda inovação no mundo tem programação no meio.
- Programação é a profissão que mais cresce no mundo, e está faltando cada vez mais profissionais qualificados para trabalhar com tecnologia.
- Programar é a arte de resolver problemas com código. Toda pessoa programadora é uma resolvedora de problemas.
- Existem vários títulos para quem trabalha com programação, mas no final todo mundo é programador.
- Programar é instruir o computador o que queremos que ele faça. Para isso, usamos uma linguagem de programação.
- Escrevemos instruções/comandos (código) seguindo as regras de sintaxe de uma linguagem de programação. Em seguida, convertemos este código que conseguimos ler em código que o computador consegue processar e executar por meio de um compilador/interpretador.

## Frontend e Backend
- Frontend é o lado do cliente, onde você interage com interfaces e envia/recebe informações para o/do servidor
- Backend é o lado do servidor, o que recebe/processa/envia informações recebidas do cliente e armazena essas informações normalmente em um banco de dados

## Introdução ao terminal
- Pessoas comuns interagem com o sistema operacional por meio da interface de usuário.
- Em programação, vamos precisar muitas vezes interagir com o sistema operacional por meio de comandos de texto. O Terminal tem esse propósito.

### Vejamos os comandos e termos mais comuns do terminal:
- `pwd` (**p**rint **w**orking **d**irectory): exibe qual é o seu diretório corrente
- Termo 'diretório corrente': no terminal, você sempre está em algum lugar, em alguma pasta do seu computador.  Quando você digita o comando `pwd`, ele mostra em qual pasta você está naquela exato momento. A pasta também é chamada de diretório. Ou seja, o diretório que você está é o diretório corrente.
- `ls` (**l**i**s**t files): lista o que está no seu diretório corrente
- `cd <diretório de destino>` (**c**hange **d**irectory): altera o diretório corrente para o diretório de destino
- `cd ..`: volta para o diretório anterior. Ex: se você está em `/diretorio-pai/diretorio-filho` e executa `cd ..`, o seu diretório corrente passa a ser `/diretorio-pai`
- `cd ../../../`: volta três diretórios. Você pode fazer `../` quantas vezes quiser. O número de vezes determinará quantos diretórios você vai voltar pra trás
- `mkdir <nomedodiretório>` (**m**a**k**e **dir**ectory): cria um novo diretório no diretório corrente

## Controle de versão com Git
- O Git é uma ferramenta para você conseguir controlar o que você está construindo.
- Sem uma ferramenta de controle de versão, fica muito difícil escrever código e principalmente trabalhar em um código que também está sendo trabalhado por outras pessoas
- Os principais comandos do git são 'git init', 'git status', 'git add', 'git commit -m "mensagem"' e 'git log'