## :rocket: Sobre o projeto

O GoBarber é uma aplicação web desenvolvida durante o Bootcamp GoStack da [RocketSeat](https://rocketseat.com.br/).
O intúito da aplicação é de que barbeiros possam se cadastrar na plataforma para oferecer seus serviços e clientes possam também se cadastrar para agendar horários com os prestadores de serviços.

Desenvolvemos o Backend em Node.js, a parte web com ReactJS e a parte mobile com React Native, todos eles também utilizando o TypeScript.
Várias libs foram utilizadas para gerenciamento de banco de dados, criptografia de senhas, formatação de datas e horas, chamadas a API, geração de IDs únicos, validação de dados, padronização de código, envio de arquivos ao backend, controle de sessão do usuário,

Todos os registros são salvos em um banco de dados PostgreSQL

## 🚀 Como rodar a aplicação

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd go-barber-backend`;
3. Rode `yarn` para instalar as dependências;
4. Crie um banco de dados `postgres` com o nome de `gobarber`;
5. Renomeie o arquivo `ormconfig.json.example` para `ormconfig.json`;
6. Coloque a porta utilizada pelo banco de dados e as suas credenciais dentro do `ormconfig.json`;
7. Rode `yarn typeorm migration:run` para executar as migrations;
8. Rode `yarn dev:server` para iniciar o servidor.
9. Teste com o Insomnia.
