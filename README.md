<h1 align="center">
  :rocket: Aftersale - Teste Backend
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/goncadanilo/aftersale-backend-test.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/goncadanilo/aftersale-backend-test.svg">

  <a href="https://github.com/goncadanilo/aftersale-backend-test/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/goncadanilo/aftersale-backend-test.svg">
  </a>

  <a href="https://github.com/goncadanilo/aftersale-backend-test/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/goncadanilo/aftersale-backend-test.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

  <a href="https://github.com/goncadanilo/">
    <img alt="Author" src="https://img.shields.io/badge/author-Danilo%20Gon%C3%A7alves-blue">
  </a>
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="Desafio Fale Mais" src=".github/banner.png" width="85%">
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nest.js](https://nestjs.com/) para criação da aplicação.
- [MySql](https://www.mysql.com/) para armazenamento dos dados.
- [Docker](https://www.docker.com/) para conteinerização da aplicação.

## 📋 Descrição

Esse projeto é um serviço que faz a integração com uma loja [Shopify](https://www.shopify.com.br/) e permite os usuários favoritar e desfavoritar produtos. Os usuários também podem ver a sua lista de favoritos. Para isso o usuário deve se cadastrar e se autenticar no serviço.

Esse projeto foi desenvolvido durante o processo seletivo da [Aftersale](https://after.sale/).

[Documentação](https://github.com/goncadanilo/aftersale-backend-test/blob/develop/docs.md).

## :arrow_forward: Como rodar

Antes de tudo, instale as dependências do projeto com o seguinte comando `yarn` ou `npm install`. Também crie uma cópia do `.env.example` como `.env` e defina as variáveis de ambiente.

#### Node.js

- Para rodar a aplicação use o comando `yarn start` ou `npm run start`.
- Para rodar a aplicação em modo watch, use o comando `yarn start:dev` ou `npm run start:dev`.
- Se tudo ocorrer bem a aplicação vai estar disponível no endereço: **http://localhost:3000/v1/**.

#### Docker

#### Testes

- Para rodar os testes use o comando `yarn test` ou `npm run test`.
- Para rodar os testes e2e use o comando `yarn test:e2e` ou `npm run test:e2e`.
- Para rodar os testes com coverage, use o comando `yarn test:cov` ou `npm run test:cov`.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by [Danilo Gonçalves](https://github.com/goncadanilo). Me adicione no [LinkedIn](https://www.linkedin.com/in/goncadanilo/) :wave:
