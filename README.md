# 📚 Projeto API de Livros em TypeScript

Esta é uma API RESTful desenvolvida com **TypeScript** e **Express**, que permite realizar operações de **CRUD** (Create, Read, Update, Delete) sobre uma lista de livros armazenada em memória.

---

## 🧠 Arquitetura

O projeto segue os princípios da **Clean Architecture**, separando responsabilidades de forma clara entre camadas:

```
├── src
│   ├── app/controllers/
│   ├── config/
│   ├── core/
│   ├── infra/
│   ├── shared/
│   ├── test/
│   └── index.ts
│   └── main.ts

```

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [UUID](https://www.npmjs.com/package/uuid)
- [Cors](https://www.npmjs.com/package/cors)
- [Jest](https://jestjs.io/) - Testes
- [Supertest](https://www.npmjs.com/package/supertest) - Testes de integração

---

## ✅ Testes Automatizados

A aplicação possui **testes unitários** e **testes de integração** para garantir a estabilidade das funcionalidades principais.

### 🔬 Como Executar os Testes

```bash
npm run test

```
---
## 📂 Estrutura de Testes

```
├── src
│   └── test
│       ├── unit/              
│       └── integration/  

```
## 📋 Cobertura de Testes

Criar livro (POST /books)

Listar livros (GET /books)

Atualizar livro (PUT /books/:id)

Excluir livro (DELETE /books/:id)
## 📸 Exemplos de Testes

### ✅ Teste com Thunder Client - POST Update Task
  ![POST Task](./API/src/images/post.task.jpeg)

### ✅ Teste com Thunder Client - GET Task
  ![GET Task](./API/src/images/get.task.jpeg)


### 🔧 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

2. Instale as dependências:
    ```bash
    npm install

3. Execute a API:
    ```bash
    npx ts-node-dev src/index.ts

4. Acesse:
    ```bash
    http://localhost:3000/api/books

👩‍💻 Desenvolvido por

Ingred Conceição – Desenvolvedora Fullstack em formação





