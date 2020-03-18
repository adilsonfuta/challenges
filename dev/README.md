# ZRP - Teste Fullstack

## Introdução

Este é um desafio criado pela empresa ZRP, que tem o intuito de averiguar as habilidades dos participantes e possiveis contratados da empresa.

A aplicação consistem em uma rede de cadastro (teste backend) e distribuição (teste frontend) de heroes, levando em consideração o nível da ameaça que estaria atacando uma determinada região.

## Processo de execução do projeto

**Clone o projeto executando esse comando no terminal**
```
git clone https://github.com/wellingtonsa/challenges.git
```
**Entre na pasta do projeto e execute o comando para instalação das dependências/libs do projeto**

```
/* para o backend */
cd challenges/dev/server 

/* para o fromtend */
cd challenges/dev/web-application 

npm install // ou yarn install se preferir
```

  **Por fim, os seguintes comandos podem ser dados:**
  - ``` yarn dev ``` - para executar o projeto
  - ``` yarn test ``` - para executar os testes (somente no backend)

## Principais ferramentas utillizadas

### Frontend

- React.js  
  
  **Algumas tecnologias, linguagens e bibliotecas utilizadas:**

- Hooks
- Styled Components
- Redux e Redux Sagas
- Typescript
- Lottie
- Eslint
- Prettier
- Socket.io

### Backend

- Node.js  
  
  **Algumas tecnologias, linguagens e bibliotecas utilizadas:**

- Express
- Typescript
- Jest
- MongoDB
- Mongoose
- Eslint
- Prettier
- Nodemon


## Estrutura do Projeto

###Frontend

**A estrutura do projeto está dividida da seguinte forma:**
```
 web-application
│
└─── src
    │
    │ + App.tsx
    │ + index.tsx   
    │ + routes.tsx
    │
    └─── assets    
    │   
    └─── common
    │   
    └─── components
    │   
    └─── constants
    │   
    └─── features
    │   
    └─── pages
    │   
    └─── services
    │   
    └─── store
```
- `src`: Representa a pasta que terá todo o código importante da aplicação, incluindo lógica, comunicação com api externa e outros. Nela contém um arquivo em especifico que vale a pena citar, o `routes.tsx` que contém todas as rotas de navegação da aplicação. Além do `App.tsx` e do `index.tsx` que basicamente contém toda a configuração inicial.
- `assets`: Nessa pasta teremos todos os arquivos com extensão diferente da padrão do projeto (tsx e ts) e que servirão de suporte para criação de um outro módulo.
- `common`: Na pasta `common`, gosto de definir que tudo que irá pra lá são componentes que são simples demais pra está dentro de `components` (explicarei essa pasta jajá), mas que tem um número de replicação que o faz poder ser um componente separado. Um exemplo disso são componentes como botões e campos de textos que são padronizados em toda a aplicação (`styled`).
- `components`: Nessa pasta, basicamente teremos todos os componentes que podem ser reutilzados em diferentes contextos dentro da aplicação.
- `constants`: Essa pasta basicamente podemos ter tudo que é constante na aplicação separada por aquivos, como por exemplo cores, images ou caminho de arquivos estáticos. Deixando assim outros componentes que utilizam essas constates com um ccodigo mais legivel.
- `features`: Essa pasta é bem exclusiva, nela teremos todos os componentes que devem ser um componentes separado do restante da página, mas que terá uma utilização bem expecifica na aplicação. Um bom exemplo disso são os Modals (ou Dialogs).
- `pages`: Como o próprio nome sugere, na pasta `pages` estará contido todos as páginas da aplicação. Dito como página um conjunto de componentes inter-relacionados.
- `services`: A pasta `services` conterá os arquivos que cuidarão do contato com os serviços externos. Todos os arquivos contidos aqui terão uma comunicação assincrona e retornarão do serviço externo um erro ou o que foi solicitado (Vale ressaltar que os services não conterão regras de negócio, isso será lidado com outro modulo explicado mais a frente).
- `store`: Por fim, a pasta `store` conterá toda a parte de Redux e Redux Sagas, cuidará principalmente do compartilhamento de estádo, das regras de negócios e da resolução de possiveis problemas relacionados a side-effects.



###Backend

**A estrutura do projeto está dividida da seguinte forma:**
```
 server
│
└─── src
│   │
│   │ + app.ts
│   │ + index.tsx   
│   │ 
│   │
│   └─── app    
│       │   
│       └─── common
│       │   
│       └─── config
│       │   
│       └─── controllers
│       │   
│       └─── middlewares
│       │      
│       └─── models
│       │   
│       └─── routes
│       │   
│       └─── utils
│
└─── __tests__

```
- `src`: Representa a pasta que terá todo o código importante da aplicação, incluindo lógica, confugurações do banco de dados e outros. Nela contém dois aquivos em especifico que valem a pena citar, o `App.tsx` e o `index.tsx` que basicamente contém toda a configuração inicial do nosso servidor.
- `__tests__`: Representa a pasta que terá todos os testes de integração e unitários da aplicação.
- `common`: Na pasta `common`, estão arquivos que contém uma lógica comum para toda ou boa parte da aplicação. Um exemplo disso aplicado ao Typescript é a criação de uma interface de crud, que basicamente todos os controllers terão, então basta extender essa interface criada e você terá uma padronização de código.
- `config`: Nessa pasta, basicamente teremos todas as configurações de serviços externos da aplicação, como credenciais criação da intancia do mongoDB ou do AWS.
- `controllers`: Essa pasta basicamente podemos ter toda a parte 'bruta' da aplicação, são os controllers que irão conter toda a regra de negócio e manipulará a requisição do usuário.
- `middlewares`: Essa pasta é bem exclusiva, nela teremos todos os serviços que precisam estar checar a requisição antes dela chegar aos controllers. Um bom exemplo de um middleware é o de autenticação, sempre que uma requisição que necessita de autenticação é mandada para o servidor, o middleware de autenticação de encarrega de chegar as credenciais do usuário e assim manter a segurança dos serviços prestados penlo servidor.
- `models`: Como o próprio nome sugere, na pasta `models` estará contido todos os modelos de dados representados na aplicação. Dito como modelo uma representação do banco de dados.
- `routes`: A pasta `routes` conterá todas as rotas de serviços do servidor. Os arquivos contidos aqui serão responsaveis pela recepção da requisição do usuário e o direcionamento para o controller adequado.
- `utils`: Por fim, a pasta `utils` conterá todos os arquivos utilitários que serão utilizados dentro da aplicação, geralmente nele são armazenados funções puras que tem um só propósito.

## Resultado

<Image src='https://imgur.com/TRcEoWh.png'>
<Image src='https://imgur.com/T5UMSUH.png'>

## Considerações finais

- No geral, esse challenge me proporcionou mais uma chance de tentar mostrar os meus conhecimentos em um só projeto. Eu tentei adicionar um pouco de tudo que ja estudei e já apliquei, algumas coisas poderiam ser bem mais trabalhadas, como os testes por exemplo. Mas, por conta de algumas variante acabei deixando mais abstrato. Enfim, quero agradecer pelo excelente processo seletivo e espero que tenhamos uma outra oportunidade na próxima fase. Até mais! =D





