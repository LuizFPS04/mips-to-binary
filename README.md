# mips-to-binary

## Instalação

Instale:
* Node.js - [Install Node.js 18](https://nodejs.org/en/), including the NPM package management tool.

Código e dependências:
- Clone o repositório
- Instale os módulos: `npm install`

## Rodar
Existem algumas maneiras:

Você pode rodar com: ```npm run build``` e depois com ```npm start```<br>
Ou com:  ```npm run dev```

## Pastas

* dist - não commitar, pasta com builds Typescript
* src - código fonte
* src/*docs* - pasta com arquivos .txt para conversão
* src/*types* - pasta com os tipos e interfaces utilizadas
* src/*utils* - pasta com funções utilitárias e helpers
* src/*services* - pasta com funções lógicas de serviços que realizam tarefas específicas, como conversão e tratativa de MIPS para Binário
* src/*doc-parsed* - pasta para inclusão do arquivo  .txt MIPS convertido p/ Binário
* src/server.ts - ponto de entrada da aplicação