## :rocket: About

GoBarber is a web application developed during [Rocketseat](https://rocketseat.com.br/)'s GoStack Bootcamp.
Barbers can register on the platform to offer their services and clients (that are also registered) can find them and set an appointment with the barber they choose.

We've developed the Backend using Node.js, the web page with ReactJS and the mobile application with React Native (using TypeScript on all of them).
We've used a lot of libs to manage the database, encrypt passwords, format date and time, make API requests, create unique IDs, manipulate forms, data validation, code standardization, to make files upload to the backend, control user session, route navigation, to give styles to components and pages, to inject dependencies, to make unitary, integration and E2E tests, to send e-mails, to create e-mail templates, to send notifications, manipulate entities to remove/add sensitive information still in the backend before returning it as a response to an API request.

Users and Appointments are saved in a PostgreSQL database, while the notifications are saved in a MogoDB database.
We also used Amazon SES to send e-mails and Amazon S3 to store the users avatar


## 🚀 How to run the application

1. Clone this repository;
2. Navigate to the repository folder with `cd go-barber-backend`;
3. Run `yarn` to install the dependencies;
4. Create a `postgres` database with the name `gobarber`;
5. Rename the `ormconfig.json.example` to `ormconfig.json`;
6. Set the port used by the database and your credentials inside the `ormconfig.json` file;
7. Rename the `.env.example` to `.env`;
8. Set your App Secret inside the `.env` file;
9. Run `yarn typeorm migration:run` to execute the migrations;
10. Run `yarn dev:server` to initialize the server;
11. Test with Insomnia or run the frontend / mobile part of the project




# Versão em Português

## :rocket: Sobre o projeto

O GoBarber é uma aplicação web desenvolvida durante o Bootcamp GoStack da [RocketSeat](https://rocketseat.com.br/).
O intúito da aplicação é de que barbeiros possam se cadastrar na plataforma para oferecer seus serviços e clientes possam também se cadastrar para agendar horários com os prestadores de serviços.

Desenvolvemos o Backend em Node.js, a parte web com ReactJS e a parte mobile com React Native, todos eles também utilizando o TypeScript.
Várias libs foram utilizadas para gerenciamento de banco de dados, criptografia de senhas, formatação de datas e horas, requisições a API, geração de IDs únicos, manipulação dos formulários, validação de dados, padronização de código, envio de arquivos ao backend, controle de sessão do usuário, navegação de rotas, estilização dos componentes e páginas, injeção de dependencias, testes unitários, de integração e E2E, envio de e-mails, criação de templates para e-mails, envio de notificações, manipulação de entidades para adicionar/remover informações sensíveis no backend antes de retornar os dados como uma resposta à chamada a API.

Todos os Usuários e Appointments(Agendamentos) são salvos em um banco de dados PostgreSQL. Já as notificações, são salvas em um banco de dados MongoDB.
Também usamos o Amazon SES para enviar e-mails e o Amazon S3 para salvar os avatares dos usuários

## 🚀 Como rodar a aplicação

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd go-barber-backend`;
3. Rode `yarn` para instalar as dependências;
4. Crie um banco de dados `postgres` com o nome de `gobarber`;
5. Renomeie o arquivo `ormconfig.json.example` para `ormconfig.json`;
6. Coloque a porta utilizada pelo banco de dados e as suas credenciais dentro do `ormconfig.json`;
7. Renomeie o arquivo `.env.example` para `.env`;
8. Configure seu App Secret no arquivo `.env`;
9. Rode `yarn typeorm migration:run` para executar as migrations;
10. Rode `yarn dev:server` para iniciar o servidor.
11. Teste com o Insomnia ou rode a parte frontend / mobile do projeto.
