# Ethernet

## weight

0

## description

    Ethernet é um protocolo de comunicação que gerencia dispositivos
    e computadores conectados na mesma rede. 
    Sua comunicação pode ser atraves de meio fisico ou sem fio.

## usedFor

- quaisquer aplicação envolvendo 2 dispositivos ou mais
- qualquer implementação de protocolos baseados em tcp/ip
- redes sem fio no geral
- controladora do pick to light

## levels

### 1

- Conhecer as 7 camadas OSI / Ethernet		

### 2

- Saber especificamente alguns dos protocolos de cada camada		
- Saber diferenca entre Unicast/Multicast/Broadcast    

### 3

- Saber abrir uma comunicação TCP/IP
- Saber realizar comandos basicos como o ping
- Saber diferenciar onde usar ethernet / profinet

### 4

- sub-redes
- protocolos de redundância
- loop detection	
- principais regras de firewall
- interpretar monitores de rede
- conhecer algumas das portas mais importantes do tcp/ip

### 5

- Diagnostico de rede usando terminal ou softwares
- Redes TSN	
- Saber utilizar programas de rede como por e.g Wireshark      


# Profinet

## weight

0

## description

    Profinet é o protocolo de rede que é a evolução do profibus, ele
    se tornou padrao para os dispositivos siemens.
    O Profinet por utilizar o meio fisico igual ao ethernet, permite
    que dispositivos sejam conectados nos mesmos switches que os
    dispositivos da rede ethernet.
    Sua principal vantage em relação aos outros protocolos é que
    utiliza o MAC Address como forma de identificar conexoes na rede,
    reduzindo muitos bytes durante a transmissao

## usedFor

- Qualquer equipamento industrial que possua esse protocolo como interface
- PN PN Couplers para realizar a interface dos sistemas Scania com equipamentos de forncedores

## levels

### 1

- Saber a principal diferenca entre PN e Ethernet

### 2

- Saber o que é um sistema deterministico
- Saber o que é um GSD

### 3

- Saber batizar os componetes no TIA Portal
- Entender a configuração basica que existe nos modulos GSD	

### 4    

- Saber diferenciar o que comunica em Profinet, o que comunica em Ethernet
- Conhecer as camadas rede Profinet equivalentes 7 camadas OSI
- Configurações avançadas Profinet no PLC		

### 5 

- Nível 5 em Ethernet
- Perfis: ProfiEnergy e ProfiSafe
- Melhorar performance considerando Scan do PLC, Scan Cycle e limitações do equipamento.
- Conhecer Profinet IRT	

# OPC UA

## weight

0

## description

    Protocolo adotado para a comunicação entre dispositivos com
    fabricantes diferentes, adotado como padrao para a aquisição de
    dados de dispositivos de chao de fabrica e distribuição para as
    camadas superiores de arquitetura de rede

## usedFor

- Qualquer projeto onde haja mais que 2 dispositivos interconectados
- Inserção de qualquer dispositivo na rede LTS
- Conexoes com a rede industrial ou global de qualquer outro dispositivo


## levels

### 1

- Conhecer histórico de comunicação OPC (OPC DA, por exemplo)

### 2

- Conhecer OPC DA	
- Saber utilizar ferramentas OPC UA Client    
- saber quais equipamentos da fabrica possuem implementado

### 3

- Saber diferenciar Subscribe, leitura de cache, leitura de equipamento.
- Saber utilizar o protocolo para o desenvolvimento de aplições externas.	

### 4

- Diferenças de comunicação com servidor OPC ou OPC integrado à CPU do PLC.
- Saber utilizar o simulador Simatic NET.
- Conhecer biblioteca de comunicação OPC UA  (GitHub ou Nuget)
- Onde aplicar corretamente OPC UA e onde não aplicar.
- Saber interpretar diagnóstico

### 5

- Implementar comunicação estável, restabelecer comunicação automaticamente.
- Conhecer limitações do protocolo e dos equipamentos
- Gerar diagnóstico de comunicação

# Modbus

## weight

0

## description

    https://www.embarcados.com.br/protocolo-modbus/

    O protocolo Modbus é um dos protocolos mais utilizados em automação industrial graças à sua simplicidade e facilidade de implementação.
    é baseado na arquitetura mestre escravo e opera em diferentes
padroes de meio fisico (etherenet / rs-485)

## usedFor

- Cobot
- PY do Offset

## levels

### 1

- Conhecer o conceito
- Saber alguma aplicação	

### 2

- Saber abrir uma comunicação e trocar pacotes de dados
- Conhecer aplicacoes/dispositivos que usam esse protocolo

### 3	

- tipos de dados simples: byte, word, int
- comunicação master/slave com simulador (RS232 e TCP/IP)
- conhecer os quais são os operando e o que fazem

### 4

- estruturas dados complexos: float point, double word, string
- byte swap, word swap
- saber a porta padrao para comunicação TCP (firewall)
- comunicação do PLC com simulador
- conhecer tamanho de blocos de dados, performance de comunicação, timeout.	

### 5

- debug de frames byte a byte
- Conhecer os frames do Modbus TCP, Modbus RTU e Modbus RTU over TCP/IP
- Nível 5 em Ethernet
- Conhecer e saber usar o RS485


# Open Protocol

## weight

0

## description

    Open Protocol é um protocolo criado pela atlas copco para maquinas de aperto, sejam elas
    torquimetros ou apertadeiras que tem como objetivo a extração das
    informacoes de configuração, manutenção e resultados das maquinas.
    Sua maior utilização é para a coleta de dados, podendo ser também
    enviados parametros de Job caso o equipamento nao possua nenhum
    outra interface de rede industrial.

## usedFor

- LTS/LBS (Para o envio de jobs nas maquinas que nao possuem interface profinet)
- Testes de apertadeiras
- Soqueteiras sem fio de outros fabricantes

## levels

### 1

- conhecer o conceito da comunicação 
- Saber qual é a porta padrao para comunicação
- Ter conhecimento de onde encontrar o manual do open protocol

### 2

- Saber utilizar o simulador para realizar testes
- Conhecer Header, Data  e Footer da mensagem.

### 3

- Saber como colocar um equipamento OP no lts	
- Conhecer o que sao os MIDs, a diferenca entre MIDs entre fabricantes e
quais sao as MIDs mais importantes	
- Conhecer os dados e revisao dos MIDs básicos:
- Communication Start
- Keep Alive
- Send Identifier
- Abort Job
- Job Subscribe

### 4

- Conhecer todos MIDs utilizados pelo sistema SCADA
- Job Off
- Reset Identifiers	
- By Pass Identifier	
- Batch Increment
- Batch Decrement
- Saber diagnosticar comunicação, se o protocolo está habilitado no equipamento.	
- Debug e interpretação byte a byte		

### 5

- MIDs de resultados de aperto: Last, Old Tightening Result Data.
- MID Trace curve data message
- MID Traces Plot Parameter Message
- MID Set Time / Read Time
- MID Alarmes
- MIDs específicos para Power MACs
- Saber realizar a comunicação via TCP IP com alguma linguagem.


# IO Link

## weight

0

## description

    Novo padrao de comunicação ponto a ponto adotado pela associação
    Profibus Foundation. Tem como principal objetivo prover mais dados
    de um sensor para o dispositivo controlador e ainda sim prover
    dados adicionais de conexao e manutenção.

## usedFor

- Conexao do modulo rfid dos agvs
- Sensores em geral

## levels

### 1

- Saber onde é usado

### 2

- Conhecer fabricantes/dispositivos que contenham esse protocolo

### 3

- Saber que o protocolo esta no nivel de sensores

### 4

- Ja ter feito alguma comunicação com IOLink

### 5

- Saber utilizar os modulos de diagnosticos

# RS 232

## weight

0

## description

    Protocolo RS232 foi criado na decada de 60 para a comunicação de
    perifericos ao computador, possui uma baixa taxa de transmissao e
    vem sendo substituido no mundo da informatica pelo padrao USB.
    Sua principal caracteristica é que foi incorporado em quase todos
    os dispositivos, sendo entao um padrao adotado por diversos
    fabricantes de equipamentos industriais. Seu sucessor o RS 485
    permite que os cabos de conexao sejam mais extensos, aumentou a
    taxa de transmissao de dados e tambem
    permitem que se utilizem ate 32 dispositivos ligados em rede

## usedFor

- Leitores de codigo de barras
- Programação de arduinos

## levels

### 1

- Conhecer aplicacoes que hoje utilizam este protocolo

### 2

- Saber o que significa RX TX e como são ligados
- Saber a diferenca entre RS 232, 485, 422 (superficialmente)

### 3

- Saber criar um programa basico que troca informacoes via porta
serial
- Saber configurar um cartao serial no PLC siemens

### 4

- Ja ter implementado alguma solução que use esse protocolo
- Saber configurar uma porta COM no computador

### 5

- Saber utilizar o monitor serial para identificar os pacotes


# S7 Connection / BSEND BRCV

## weight

0

## description

    Protocolo nativo da familia de controladores da siemens, facil de
    ser implementado e de alta velocidade. Muito utilizada para fazer
    a comunicação Get/Put entre PLCs e em aplicacoes que podem ler as
    memorias internas dos PLCs

 ## usedFor

- Comunicação com qualquer PLC da marca siemens
- comunicação entre PLCs siemens

## levels

### 1

- Saber a diferença entre um GET e um PUT e o que cada um faz

### 2

- Conhecer sobre os tipos de areas de memorias de um PLC

### 3

- Saber como criar uma conexão entre PLCs
- Saber como habilitar as DBs e hardware para permitir a
comunicação
- Conhecer os parametros para a comunicação get put 

### 4

- Saber interpretar os tipos de dados em bytes

### 5

- Saber utilizar o protocolo para o desenvolvimento de aplicações
externas

# Switch

## weight

0

## description

    Switches sao dispositivos de rede que permite a comunicação entre
    dois ou mais outros dispositivos. Switches identificam os pacotes
    recebidos na rede e atraves da sub-rede (ou VLAN) que estao
    incluidos redirecionam para o destino corretamente.

## usedFor

- Qualquer projeto onde haja mais que 2 dispositivos interconectados
- Inserção de qualquer dispositivo na rede LTS
- Conexoes com a rede industrial ou global de qualquer outro dispositivo

## levels

### 1

- Conhecer os modelos disponiveis utilizados
- Saber qual a sua utilização

### 2

- Saber realizar o diagnosticar as portas
- Conhecer sobre a nomenclatura dos switches

### 3

- Saber o significado de uma VLAN
- Conhecer sobre mascaras de rede
- Saber solicitar acesso ao firewall

### 4

- Saber configurar VLANs para os switches especificos
- Saber configurar um switch basico x208

### 5

- Saber o que é um firewall

# Router e AP

## weight

0

## description



## usedFor



## levels

### 1

- []

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Arquitetura

## weight

0

## description

    Arquitetura de rede é como se designa um conjunto de camadas e protocolos 
    de rede. A especificação de uma arquitetura deve conter informações 
    suficientes para permitir que um implementador desenvolva o programa ou 
    construa o hardware de cada camada, de forma que ela obedeça corretamente 
    ao protocolo adequado.


##    usedFor

- Definição de layout de instalacoes
- Definição de qual o hardware adequado para cada operação

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Conhecer as diferentes topologias de rede
- Saber a estrutura basica de software
- Conhecer um pouco sobre a ISA 95
- Saber como funciona a piramide de automação
- Conhecer os diferentes tipos de protocolos de reduncancia
- conhecer como os dispositivos sao interligados hoje na fabrica


# STL

## weight

0

## description

    Statement List é uma das linguagens reconhecidas como padrao pela
    IEC. Possui uma sintaxe que se assemelha muito a linguagem
    assembly adotada pelos micro-controladores e por conta disso é uma
    linguagem de alta performance de leitura e escrita a memoria

## usedFor

- LTS / LBS (Blocos padroes antigos)

## levels

### 1

- _

### 2

- _

### 3

- Saber realizar condicoes
- Saber realizar lacoes de repeticoes

### 4

- Saber realizar operacoes de move

### 5

- _

# Graph7

## weight

0

## description

    Graph 7 é uma linguagem apara a programação logica e grafica em
    formato de um fluxograma. É muito utilizado em equipamentos pois
    possui controle sequencial bem determinado.

## usedFor

- _

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- conhecer todos os tipos de transicoes
- saber o conceito e onde é vantajoso aplicar
- entender os conceitos de step e transição


# FBD

## weight

0

## description

    https://www.plcacademy.com/function-block-diagram-programming/ 

    Function Block Diagram ou FBD é uma linguagem grafica baseada em
    blocos e que se assemelha um pouco a linguagem Ladder, de facil
    uso e de facil compreensao é utilzada para realizar logicas mais
    simples.

## usedFor

- 

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber realizar condicoes
- Saber realizar lacoes de repeticoes
- saber realizar operacoes de move

# Ladder

## weight

0

## description

    https://www.plcacademy.com/ladder-logic-tutorial/

    Linguagem de entrada para o mundo de programação de PLCs, seu
    padrao é adotado por todos os fabricantes.
    É uma linguagem grafica e que se assemelha aos diagramas de
    comandos eletricos e seu foco é em operacoes onde a maioria das
    operacoes exigem logica booleana.
    
## usedFor

- LTS / LBS
- Poka Yokes em geral

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Mesmo que SCL itens (1,2,3, etc)
- Saber realizar block moves

# SCL

## weight

0

## description

    Structured Control Language ou SCL é uma linguagem baseada em
    texto que tem como referencia o Pascal. Por ser uma linguagem
    baseada em texto é muito mais simples de ser editada e
    compartilhada em outros meios alem dos softwares de
    desenvolvimento. Sua principal vantagem é a sintaxe mais parecida
    com outras linguagens de programação de alto nivel que permite o
    reuso de muitas funções de outras plataformas e acesso muito mais
    simplificado a estruturas e arrays.

## usedFor

- LTS / LBS
- Poka Yokes em geral

## levels

### 1

- _

### 2

- Saber a sintaxe basica e operadores basicos (if, for, while,
and, or)

- Saber a diferenca entre um FC e uma FB

### 3

- Saber criar lacos for iterados

### 4

- Saber como criar blocos especificos do lts
- Conhecer os tipos de OB existentes

### 5

- Saber o significado dos escopos das variaveis dentros dos blocos
de função

# HW Configuration

## weight

0

## description

    Config e Hardware Config, são operações que realizamos para
    parametrizar novos dispositivos dentro de projetos utilizando o
    TIA Portal, podendo ser desde elementos de controle como os
    PLCs até a configuração de sensores e periféricos através de seus
    modelos GSD.

## usedFor
        

## levels

### 1

- _

### 2

- Inserção de PLCs 
- Inserção de IHMs

### 3

- Criar e associar subnets profinet
- Configuração de Remotas IO

### 4

- Inserção de equipamentos no LTS
- Criar uma S7 Connection
- Configurar um IO Link

### 5

- Configurar um OPC UA Server

# SQL

## weight

0

## description

    Structured Query Language ou SQL é uma linguagem de programação
    criada para a manipulação de bancos de dados. Sua sintaxe é quase
    identica para todos os tipos diferentes de servidores, tornando
    uma linguagem bem flexivel e de aprendizado unico. Suas operações
    mais basicas consistem na consulta de tabelas, inserção, edição e
    exclusão podendo se tornar mais complexa em tarefas como a criação
    de Procedures e Funções internas do banco.

## usedFor

- Database de informacoes do mona para o lts
- Tabelas de configuração do lts
- tabelas internas do unis
- tabelas para a carta de torque
- apontamento de suportes

## levels

### 1

- _

### 2

- Conhecer o significado da sigla SQL
- Saber quais as vantages de utilizar o banco de dados em relação
a outros sisteams de armazenamento

### 3

- Saber as 4 operacoes basicas
- Saber o siginificado de CRUD
- Saber como o banco do LTS é acessado (saber onde esta o
IP/Banco)
- Conhecer a interface do SSMS

### 4

- Saber as qual a porta para solicitação no firewall
- Conhecer as tabelas mais importantes do LTS
- Saber efetuar consultar de parametros nas querys ja feitas
- Saber criar uma nova posição no LTS utilizando queries

### 5

- Saber realizar planos de manutenção
- Saber utilizar o SQL com outras linguagens de programação
- Saber criar stored procedures
- Saber criar usuarios e alterar suas roles

# Design Components

## weight

0

## description

    Objetos utilizados em sistemas supervisorios e IHMs para que os
    usuarios possam interagir com os processos e PLCs podendo ser
    desde simples botões até views parametrizaveis.

##	usedFor

- WinCC
- Ignition

## levels

### 1

- _

### 2

- Conhecer os componentes existentes (listar os componentes)

### 3

- Saber criar ações para cada tipo de componente 
- Saber criar componentes tipo popup

### 4

- Interagir com componentes atraves de scripts

### 5

- Saber criar componentes dinamicamente



# Tag Manager

## weight

0

## description

    Interface dentro dos softwares supervisorios / IHMs que permite a
    conexao de enderecos de memoria, entradas ou saidas para um
    endereco padronizado e de facil acesso. 

##	usedFor

- WinCC (supervisorio)
- WinCC (IHMs)
- Ignition

## levels

### 1

- _

### 2

- _

### 3

- Saber criar as tags no wincc flexible
- Conhecer a nomemclatura padrao das tags por plc
- Saber criar structs

### 4

- Saber criar tags no wincc

### 5

- saber criar tags no ignition
- saber criar template tags


# Scripts (VB Script, C, Python)

## weight

0

## description

    Scripts sao ferrametas que sao fornecidas pelos supervisorios e
    ihms para que os desenvolvedores consigam realizar tarefas
    avancadas de manipulação de componentes e telas. Os scripts dentro
    do supervisorio possuem um escopo reduzido de funcoes e que só
    podem ser executados se o serviço do supervisorio estiver
    ativo

## usedFor

- Scripts de login nas IHMs
- Scripts de baixa de contratos CIMI no WinCC do lts
- Atualização de cores e mensgens nos supervisorios
- Condicoes para acionamentos de botoes nas IHMs


## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- saber criar scripts para a ihm
- saber ler e escrever em tags atraves de scripts
- saber colocar um script no scheduler

### 5

- saber interagir com os componentes atraves de scripts
- saber acessar o banco de dados do wincc


# Design Best Practices

## weight

0

## description

    O design aborda os conceitos e melhores praticas na construção de
    telas no ambiente industrial e experiencia com o usuario. Quanto
    melhor o nivel de coesao e objetividade, menos tempo a mente
    humana leva para processar a informação e tomar uma ação baseada
    no que esta vendo.

## usedFor

- criação de paginas para web
- criação de telas para ihms
- criação de telas para supervisorios

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Ter feito o curso
- Saber manipular componentes
- Saber criar templates
- conhecer o padrao de cores da scania
- saber utilizar as cores apropriadamente para seu contexto certo
- conhecer as ferramentas para manipulação e alinhamento
- conhecer os conceitos de flex para o perspective

# User Access Control

## weight

0

## description



## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _


# Web Navigator / Perspective

## weight

0

## description

    Web navigators sao a nova alternativa para a visualização das
    telas de supervisorios utilizando o navegador. Por utilizar esse
    metodo de exibição, podem ser compartilhados entre desktops e
    dispositivos moveis 

## usedFor

- WinCC para a visualizaçao das telas ao longo da linha

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Perspective para o Ignition
- saber fazer deploy de paginas web no wincc
- saber como criar designs responsivos para cada plataforma

# HTTP/HTTPS

## weight

0

## description

    Hypermedia Text Protocol ou HTTP é o protocolo padrão de requisição de arquivos html ou de textos comuns na
    internet ou consumo de webservices, sua evolução, o https, garante
    que haja critpografia entre cliente e servidor

##	usedFor

- Paginas web em geral
- Consumo de web apis

## levels

### 1

- _

### 2

- saber a diferenca de http e https

### 3

- conhecer os verbos basicos

### 4

- conhecer os codigos de erro
- saber o que é um servidor proxy e como utilizar redes locais

### 5

- saber criar um cabecalho com o content type e autorização
- saber a porta padrao para cada protocolo


# Javascript

## weight

0

## description

    Linguagem padrao para desenvolvimento de paginas web, com ela é 
    possivel manipular os elementos dentro de uma pagina html e criar
    paginas dinamicas alem de permitir o consumo de dados de apis
    dentro do proprio navegador. 
    É tambem utilizada no lado do servidor em conjunto com o NodeJS
    para aplicacoes real time
    Hoje alguns aplicativos desktop tambem sao criados usando
    javascript, como por exemplo o VSCode

## usedFor

- Paginas web em geral

## levels

### 1

- Conhecer as operações basicas
- Saber onde pode ser utilizado

### 2

- Conhecer as ferramentas de debug do navegador

### 3

- Saber como construir funções
- Saber manipular componentes html
- Conhecer bibliotecas mais importantes

### 4

- Saber utilizar o npm
- Saber como debuggar/diagnosticar

### 5

- Saber manipular componentes html (sem o jquery)
- Saber criar programas no servidor


# Python

## weight

0

## description

    Python é uma linguagem multiparadigma, ou seja, voce pode
    utiliza-la para diversos propositos diferentes.
    É uma linguagem dinamicamente tipada, ou seja, caso ocorra algum
    erro, seu computador nao acusara enquanto voce desenvolve e sim
    quando a aplicação estiver rodando
    A linguagem nao possui a melhor performance em comparação a
    linguagem C, porem é muito pratica e rapida de se implementar,
    nao sendo um problema para aplicacoes que nao sao criticas

##	usedFor

- Cobot
- PY etiquetas do tanque
- Site do apontamento de suportes
- Scripts do powerbi


## levels

### 1

- _
### 2

- Conhecer as instruções basicas
- Ter o python instalado na maquina pessoal

### 3

- Conhecer bibliotecas mais importantes para a nossa area (opc, s7,
  modbus, tcp/ip, etc)
- Saber baixar pacotes / bibliotecas

### 4

- Saber criar classes

### 5

- Saber utilizar lambda functions
- Saber interpretar aquivos yaml

# C# / .Net

## weight

0

## description

    Linguagem criada pela microsoft que agora esta sendo tambem
    utlizada no windows atraves do dotnet core.
    .Net é o framework (conjuntos de bibliotecas padrao) que o c#
    utiliza pra criar alguns tipos de projetos, sendo eles: servicos
    windows, console applications, windows forms, aplicacoes WPF,
    aplicacoes WEB ou webservices

## usedFor

- Servico de baixa de parametros do banco do lts para o PLC
- Servico de carga de informacoes do contrato cimi para o banco do
LTS
- Servico de Login da Biometria
- Servico do Dashbord de equipamentos
- Console do Cardapio
- Software do painel de chaves
- Poka Yoke do Offset
- Tela do LES (IT)
- Tela do Takt (IT)
- Construção de Windows Services em Geral

## levels

### 1

- _

### 2

- ter instalado ao menos uma IDE
- conhecer a sintaxe basica da linguagem

### 3

- saber criar uma console application
- saber criar um windows forms ou UWP
- saber criar variaveis dentro do app.config

### 4

- saber criar uma pagina usando MVC
- saber utilizar biblioteca snap7
- saber utilizar biblioteca para o OPCUA
- conhecer as aplicacoes desenvolvidas e onde estao armazenadas

### 5

- saber criar servicos
- saber realizar conexoes com bancos de dados atraves de ORMs, e.g
entity framework
- saber realizar o controle de versao


# HTML

## weight

0

## description

    Hypetext Markup Language ou HTML é uma linguagem de marcação
    (e não de programação) que se tornou a padrão para a representação em navegadores. 
    Um arquivo HTML utiliza tags que servem para criar uma estrutura
    em arvore (DOM) que permite que os dados fiquem contextualizados
    de acordo com sua utilização e estilização

## usedFor

- Paginas web em geral

## levels

### 1

- Saber o que a sigla significa

### 2

- Saber onde os arquivos podem ser editados

### 3

- _

### 4

- _  

### 5

- Saber adicionar classes e estilos
- Saber adicionar scripts no documento
- Conhecer tags basicas (div, a, p, h)

# CSS

## weight

0

## description

    Linguagem de marcação que permite a estilização de documentos
    html.
    Um bom dominio em CSS permite que os usuarios tenham uma melhor experiencia
    com as aplicacoes web utilizando padrões conhecidos e uma melhor
    renderização tanto em desktops como em dispositivos móveis.

## usedFor

- Paginas web em geral

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber o que sao classes
- Saber o que sao seletores
- Saber o que sao pseudo-classes
- Conhecer as boas praticas de uso
- conhecer o flexbox
- conhecer o grid
- conhecer cores em hexadecimal
- saber importar ou chamar o css dentro de um arquivo html

# Bootstrap

## weight

0

## description

    Bootstrap é um framework CSS + Javascript que permite a rapida
    implementação de estilos e de design padronizados

##	usedFor

- Pagina inicial de Chassis
- Paginas em geral da Scania

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber onde baixar
- conhecer os componentes basicos
- conhecer componentens avancados que usam javascript
- saber utlizar o conceito de containers e rows

# Angular

## weight

0

## description

    Framework javascript para a criação de SPA (single page
    applications), permite o desenvolvimento mais rapido de aplicacoes
    web que escalam

##	usedFor

- Pride
- Picking By Light
- Webtakt (IT) Novos sites e aplicacoes criados pela Scania IT

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber utilizar o ng-cli
- saber criar componentes atraves do terminal
- conhecer a linguagem typescript
- saber criar paginas dinamicas
- saber como criar servicos


# NodeJS

## weight

0

## description

    Ambiente para desenvolvimento de aplições no backend, sua
    linguagem de programação principal é o javascript, podendo ser
    tambem utilizada com typescript. As aplicacoes desenvolvidas neste
    ambiente possuem melhor performance em real time

## usedFor

- Picking by Light
- Kanban digital (antigo)
- Logistic Call
- Web Popids
- Takt da revisao (antigo)
- Pride (para os tablets)

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber instalar o ambiente
- Saber com utiilizaar o npm
- saber utilizar o basico da biblioteca socket.io


# JSON / XML

## weight

0

## description

    Formatos de arquivos padronizados e estruturados para a
    transferencia de dados atraves de servicos web. Json significa
    JavaScript Object Notation, enquanto XML Signifca eXtended Markup
    Language. Json é um pouco mais leve em relação ao tamanho final
    do arquivo por conter menos caracteres, porem o XML ainda é 
    utilizado por ser um padrao que ainda é utilizado por
    sistemas antigos.

## usedFor

- Configuracoes de arquivos executaveis (.net)
- configuração dos mais diversos tipos de programas
- consumo de webservices

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber o conceito de arvore
- saber onde cada uma é aplicada
- saber utilizar as boas praticas de estruturação
- conhecer todos os tipos suporatdos em json

# SOAP

## weight

0

## description

    Simple Object Access Protocol ou SOAP, é um protocolo de troca de
    informações estruturada baseada em XML que utilizam o protocolo
    HTTP como meio de de transmissão.

## usedFor

- Web services criados pela area de IT e.g: MIX, Sind, etc.

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5
    
- saber criar uma aplicação SOAP
- saber comunicar com um servico via SOAP
- saber utilizar o soap ui
- saber como é o formato da mensagem
- saber o significado do SOAP

# Flask

## weight

0

## description

    Framework Python para a criação de aplicativos Web e Webservices e
    de rapida implementação.

## usedFor

- Sistema de apontamento de suportes.

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber o que é
- Saber colocar aplicação em produção
- saber criar rotas que recebem parametros
- saber integrar com o banco de dados
- saber criar rotas
- saber retornar resultados em formato JSON

# REST

## weight

0

## description

    Padrão utilizado para a transferencia de dados atraves de web
    APIs. Seu conhecimento permite o desenvolvimento de serviços mais
    auto explicativos e padronizados.

## usedFor

- Servico de aquisição de parametros do mix
- Servico da cadeirinha
- Servico de dados das remotas Sick

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber onde é aplicado
- conhecer a estrutura basica de uma requisição
- conhecer as boas praticas

# GIT / TFS / Version Dog

## weight

0

## description

    Git é um programa criado inicialmente em tela de comando para
    verificar status, atualizar, fazer backup e versionmento de
    codigos. Seu site principal e mais conhecido é utilizado por
    milhoes de usuarios do mundo e la estao hospedados todos os tipos
    de codigo de diversas linguagens de modo livre.
    O uso do git é fundamental para desenvolvedores que precisam
    compartilhar codigo. O git tem uma implementação criada para as
    versoes superiores ao TIA 16.
    TFS possui as mesmas caracteristicas do github, porem é um padrao
    utilizado para o ambiente microsoft, tendo como maior linguagem o
    C#


## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Entender o conceito de trunck e branches
- saber realizar commits
- fazer commits objetivos
- ter uma conta no github/gitlab
- saber clonar um repositorio
- saber fazer deploy nestes repositorios

# Componentes de Painel

## weight

0

## description

    Componentes que vao no interior de cada painel ou painel princial
    do lts, takt e red

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber o que é uma chave geral 
- Saber qual o fabricante
- Saber qual é o componente X

# QRCode / Data Matrix

## weight

0

## description

    Codigo padrão para transferencia de dados por imagem utilizando
    figuras em 2 dimensões. Possuem uma maior capacidade de dados em
    comparação aos códigos 1D.

## usedFor 

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber utilizar o leitor
- Conhecer a teoria 
- Saber os diferentes fabricantes

# IO Wireless / Botao sem fio

## weight

0

## description

    Dispositivos que permitem a comunicação sem fio entre base e
    receptor, podendo ser dispositivos utilizando os mais diversos
    tipos de protocolos, como o Wifi ou o ZigBee


##    usedFor

- Botoes schnider
- IO sem fio

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Projetos Eletricos

## weight

0

## description

    Projetos eletricos sao...

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber a simbologia de cada componenten
- saber identificar cada tag
- saber projetar 
- saber interpretar

# Desenho Tecnico


## weight

0

## description

    A habilidade em desenho tecnico permite que a pessoa...

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber interpretar cotas
- saber interpretar desenhos com cortes e hashuras
- saber represetar mesmo que em croquis conceitos de pecas
- saber utilizar plataformas de desenho de mercado
- saber interpretar simbologias dos desenhos


# Pneumatico / Hidraulico

## weight

0

## description

    Sistemas pneumaticos possuem atuadores, valvulas e fontes de
    energia de acordo com a aplicação
    um sistema pneumatico geralmente é utilizado para projetos onde se
    necessita de uma movimetação linear e de baixa forca de atuação em 
    contrapartida, sistemas hidraulicos sao empregados onde se necessita de uma
    atuação de maior forca e maior precisa no movimento

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- conhecer os tipos de equipamentos que precisamn deste tipo de
fonte de alimentação e qual o mais adequado a ser utilizado
dependendo da situação
- saber a representação de cada simbolo
- saber realizar a conexao corretamente


# Eletrico

## weight

0

## description

    Comandos eletricos

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber fazer comandos eletricos
- saber quais tipos de cabeamentos utilizar
- conhecer os tipos de conetores e conexoes

# Sistemas de Visao

## weight

0

## description

## usedFor


## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _


# RFID

## weight

0

## description

    Radio Frequency Identification é um padrao de comunicação sem fio que utiliza ondas de radio para enviar e receber dados através de antenas e receptores.
    sua comunicação pode ocorrer tanto de maneira ativa como de maneira passiva

## usedFor

- identifica;ao dos produtos na fa0
- identificação dos produtos no endflow
- identifição dos tanques na pmtq
- identificação dos agvs ao longo da fabrica e nas pre montagens
- identificação do produto na pm grade

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber configurar a gravação
- saber configurar a leitura

# Leitores Biometricos

## weight

0

## description

    Leitores biometricos sao utilizados para permitir que um
    colaborador seja associado a uma posição de trabalho.
    A vantagem dos leitores biometricos em relação aos cartoes é que eles 
    possuem uma identificação unica
    fabricante: Virdi

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber cadastrar um leitor do zero
- saber realizar o diagnostico utilizando o software UNIS
- saber cadastrar uma pessoa no unis
- cadastrar um leitor no banco do lts
- saber cadastrar um cartao da scania no unis

# Eletronica Geral

## weight

0

## description

    Eletronica é o campo da fisica que estuda o comportamento dos
    eletrons

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Saber conceitors basicos de aterramento
- saber diferença entre potencia e comando


# Arduino, ESP32, NodeMCU

## weight

0

    São placas de baixo custo utilizadas para prototipagens e pequenos projetos
    em geral, muito presentes em projetos residenciais e vem ganhando espaco na
    industria para se criar dispositivos IoT

## usedFor

- painel de chaves
- radar da pista de testes
- contador de giros de empilhadeira

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber qual software é utlizado para programar
- conhecer a sintaxe basica da linguagem que ele utiliza
- saber fazer uma comunicação do tipo serial
- saber uma conexao do tipo ethernet
- saber acionar saidas analogicas e digitais

# PEIP

## weight

0

## description

    Planejamento para Compra de Equipamentos e Investimentos é um
    padrao com 10 passos que devem ser seguidos para todos os projetos
    de engenharia que envolvam forncedores e areas suportes,
    utilizando este metodo corretamente as chances de um projeto
    apresentar defeitos na entrega e na pos operação são reduzidas
    drasticamente

## usedFor

- Qualquer projeto que envolva a compra e instalação de equipamentos

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber quais sao os passos
- implementar os passos corretamente durante o projeto
- saber qual o significado da sigla

# Agile (Scrum/Kanban)

## weight

0

## description

    https://agilemanifesto.org/iso/ptbr/manifesto.html

    A metodologia ágil é um modelo e uma filosofia que propõe alternativas à gestão de projetos tradicional e tem a função de aprimorar o processo de desenvolvimento de um produto ou serviço. O objetivo final é fazer entregas com rapidez e com maior frequência, conforme surgem as necessidades do cliente.
    O SCRUM é uma implementação do Agile que foca no desenvolvimento
    interativo e incremental, reuniões diárias e entrega continua.

## levels

### 1

- _

### 2

- Conhecer o manifesto agil

### 3

- _

### 4

- _

### 5

- Ter se envolvido em tarefas que requerem priorização em IT

# EPIC

## weight

0

## description

    Sistema criado internamente utilizando o MS Access que tem como
    objetivo o acompanhamento de projetos da Engenharia, anotação de
    gastos de projetos e coleta dos dados para geração de relatórios.

## usedFor

- Qualquer projeto do roadmap
- Projetos rapidos de introdução de apertadeiras ou torquimetros

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- manter os projetos e os custos sempre atualizados

# Estrutura de Pastas

## weight

0

## description

    conhecimento das pastas tanto para os projetos do peip como para a estrutura interna da organização.

## usedFor 

- _

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber onde colocar os backups
- saber onde esta o way of working
- saber onde esta o organograma da area
- saber onde esta o roadmap do ano atual
- saber criar um projeto com todas as pastas necessarias


# Office 365

## weight

0

## description

    Conjunto de pacotes cedidos pela microsoft

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- word
- power point
- excel
- teams
- outlook
- one note

# Jira

## weight

0

## description

    Sistema utilizado para o acompanhamento de projetos desenvolvidos
    por t.i (tambem utilizado em outras fabricas para gerenciamento de
            projetos internos)

## usedFor

- acompanhamento de chamados em it
- acompanhamento de pedidos do fit

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber abrir chamados
- acompanhamento de atividades
- conhecer o fluxo


# TFP

## weight

0

## description

    Technical Regulations for Machines and Production Equipment é um
    documento que contem as diretivas, padrões, requerimentos e best
    practices para a aquisição de equipamentos na Scania e que é
    necessário seguir a risca para que os fornecedores possam
    construir os equipamentos que serão aceitos para o Handover para a
    area de manutenção.

## usedFor

- Saber o que é o item H
- Saber o que é o item J

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Pride (rota 2030)

## weight

0

## description

    Sistema criado para realizar o apontamento de horas e recursos
    para os projetos de inovação e implementação de novas tecnologias
    na fabrica

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- fazer o apontamento correto das horas 

# Gerar NF

## weight

0

## description

- _

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Power Apps

## weight

0

## description

    Conjunto de aplicacoes da microsoft criado para automatizar
    processos com as ferramentas office ou outras

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Power BI

## weight

0

## description

    Sistema criado para desenvolvimento de visualização de dados,
    extração e criação de modelos de machine learning. Sua versao
    desktop é disponivel para todos, porem sua versao web necessita
    de liberação

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- power query
- python
- linguagem dax
- relacionamento
- importar os dados

# Mona (LTS)

## weight

0

## description

    Sistema que gerencia as pecas e parametros que irao ser produzidos
    para cada veiculo. E atraves dele que podemos fazer consultas e
    cadastrar parametros que eventualmente serao utiilizados para
    fornecer jobs para as maquinas

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber acessar o mona
- saber consultar xxx

# LES / Web LES

## weight

0

## description

    Sistema que exibe os parametros e fotos cadastrados pelo mona para
    facilitar a sua montagem do produto

## usedFor

- Qualquer posto com o sistema LTS implementado
- Montagens que possuem instrucoes conectadas com o mona

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber solicitar uma nova instancia
- saber os procedimentos para executar a release
- saber diagnosticar os eventuais erros nos clients
- saber acessar as telas via vnc
- saber realizar a parametrização do multicast

# TAKT / TTS

## weight

0

## description

    Takt - É a nomenclatura padrão para o sistema de gerenciamento de
    tempo e padronização do ritmo de trabalho nos processos de
    montagem e logística.
    TTS - Sistema Scania desenvolvido para a atualização das mensagens
    que são apresentadas ao se chamar o Andon nas telas de Takt.

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber pedir uma instancia nova
- cadastrar as mensagens no sistema
- saber criar um db de interface para buscar informacoes
- como alterar os parametros (PMs e truck)
- como trocar os sinais de andon

# Neo Grid

## weight

0

## description

- _

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Visa

## weight

0

## description

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Coin

## weight

0

## description

    Sistema utilizado para verificar o saldo de projetos

## usedFor

- Qualquer projeto que tenha uma conta associada

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber consultar o valor restante da conta projeto

# Maximo

## weight

0

## description

    Sistema que gerencia o estoque de pecas de almoxarifado, permite
    que sejam abertar o.s e requisicoes de compras 

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber abrir uma RC
- saber consultar uma os
- saber consultar um pedido de compra
- saber requisitiar um material do almoxarifado


# In-Sight

## weight

0

## description

- _

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# CV-X Series

## weight

0

## description

- _
## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# 3dXML Player

## weight

0

## description

- _

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# 3D Experience

## weight

0

## description

- _
## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Keyence Nav / IV2

## weight

0

## description

- _
## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# Visual Studio / Visual Studio Code

## weight

0

## description

    Visual Studio ou VS é uma IDE (Integrated Development
    Environment) onde se é possivel gerir todo um projeto de
    determinadas linguagens. Todas as ferramentas necessárias para um
    projeto básico já vem instaladas por padrão e possuem ferramentas
    de debug de alto nível. É fortemente recomendado para a criação de
    aplicativos desktop que possuam telas ou Windows Services com a linguagem
    C#.
    Visual Studio Code ou VS Code é um Editor de texto altamente
    extensivel que permite a programação de diversas linguagens de
    programação. Através de suas extensões é possivel desenvolver
    qualquer tipo de aplicativo em qualquer linguagem e ainda possui
    outras ferramentas muito uteis para a produtividade.

## usedFor

- Desenvolvimento de serviços
- Desenvolvimento de paginas web
- Consulta em logs

## levels

### 1

- saber a diferenca entre os dois

### 2

- saber baixar extensoes
- saber onde baixar

### 3

- saber utilizar o gerenciador de pacotes
- saber abrir um arquivo pelo terminal de comando

### 4

- saber usar o debugger
- saber gerar uma versão de build

### 5

- saber utilizar o versionamento

# Catia

## weight

0

## description

    Software utilizado para a visualização e simulação fisica de pecas, princialmente nas utilizadas no caminhao

## usedFor

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _


# AutoCAD

## weight

0

## description

    Software para a criação e visualização de pecas mecanicas e layouts
    Possui algumas versões free e online para a consulta de desenhos
    basicos.

## usedFor

- Layouts de fabrica
- Croquis para a elaboração de dispositivos

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# E-Plan

## weight

0

## description

    Software para a criação e atualização de diagramas eletricos

## usedFor

- Documentação oficial dos projetos eletricos

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- _

# WinCC

## weight

0

## description

    Sistema Scada Siemens que integra facilmente com dispositivos da
    fabricante. Possui interface diferente para o desenvolvimento do
    servidor em comparação ao desenvolvimento integrado no TIA Portal.
    Os scripts que rodam no servidor podem ser criados tanto na
    linguagem C como em VB Script.

## usedFor

- LTS/LBS

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- conhecer o tag manager
- conhecer as telas da aplicação existente
- saber como criar conexoes opc
- saber como fazer backup 
- saber como restaurar o projeto

# Ignition (Designer/Gateway)

## weight

0

## description

    Sistema Scada desenvolvido pela Inductive Automation. Possue
    sistema de licenciamento modular assim como suas expansões. O
    sistema possui 2 tipos de interface ao usuarios, sendo uma delas
    executada em Java (Vision) ou podendo rodar em navegadores web
    (Perspective)

## usedFor

- Endflow
- Processos de cabinas

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber resetar a senha
- saber utilizar o console
- saber criar drivers opc
- saber configurar telas de client
- saber baixar os aplicativos client e designer
- saber diagnosticar os diversos modulos
- conhecer os modulos principais

# Tia Portal

## weight

0

## description

## usedFor

- Qualquer processo que utilize algum dispositivo siemens
- Diagnostico de dispositivos conectados na mesma interface de rede

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber fazer archive
- utlizar as libraries
- importar os arquivos gsd
- mudar o ip e nome profinet via rede
- saber alterar as interfaces de rede

# SBC - Single Board Computer (Linux)

## weight

0

## description

    Placas para fins de programação com sistemas operacionais
    funcionais (mais comumente Linux), de baixo custo e que possuem as
    interfaces necessarias para executar programas de baixa
    complexidade e ainda possuem interfaces adicionais para a
    integração com diversos dispositivos industriais.

## Onde é utilizado:

- Raspberries em geral
- Poka yoka das etiquetas do tanque
- Raspberry Server dos processos logisticos

## levels

### 1

- saber diferenciar um sistema que possui unix

### 2

- comandos basicos de linux

### 3

- acessar ssh

### 4

- mudar o ip
- instalar os pacotes via apt-get ou curl

### 5

- manipular arquivos
- criar arquivos .sh
- criar scripts de inicialiazação


# MQTT

## weight

0

## description

    Padrao recentemente adotado pela industria de simples
    implementação e de baixa complexidade de integração. Padrao muito
    utilizado para dispositivos IoT

## usedFor

- Nao implementado em solucoes da fabrica ainda
- Protocolo padrao de alguns dispositivos IoT
- AWS

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber o que é
- saber como criar um broker
- saber como os topicos sao criados
- saber o que significa o qos e quais sao eles


# NoSQL

## weight

0

## description

    Padrão não relacional para a criação de banco de dados. Facil de
    aplicação e compreensão, pois, utiliza a mesma sintaxe dos
    arquivos .json para armazenamento. Vem se tornando a melhor opção para a 
    criação de Data Lakes e internet das coisas.

## usedFor

- Cardapio web
- pick by light

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber a sua importancia e diferenciação diante ao sql
tradicioanl

# Cobot

## weight

0

## description

    Cobot ou robo colaborativo é um equipamento que foi introduzido
    recentemente nos processos fabris

## usedFor

- processo de inspeção da qualidade nas valvulas
- processo de aparafusamento do bloco em (motores)
- injeção de adesivo no parabrisa em (cabinas montagem)

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber um pouco sobre robos colaborativos
- diferenca entre um cobot e um robo convencional
- tipos de trabalho colaborativo
- protocolos
- programação utilizando o pendant
- programação de comandos avancados
- diferenca entre os tipos de movimentos

# Machine Learning

## weight

0

## description

    Aprendizado de maquina que permite que algoritimos extraiam
    informacoes de dados e possam realizar previsões com bases nos
    padrões entre as variaveis correlacionadas.

## usedFor

- Inspeção das etiquetas do tanque de ar
- Poka yokes com sensores de visao
- poka yoke para as caixas vazias

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- Quais sao os diferentes tipos de aplicação
- conhecer algumas bibliotecas
- conhecer alguns tipos de algoritimos
- redes neurais

# OpenCV

## weight

0

## description

    Biblioteca escrita em C e python que permite que imagens sejam
    editadas e manipuladas para realizar filtros e identificação de
    padroes

## usedFor

- Inspeção das etiquetas do tanque de ar

## levels

### 1

- _

### 2

- _

### 3

- _

### 4

- _

### 5

- saber baixar a biblioteca
- saber aplicar filtros
- saber abrir e salvar imagens
- saber trabalhar com as imagens em formatos numericos


