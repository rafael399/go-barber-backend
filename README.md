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
