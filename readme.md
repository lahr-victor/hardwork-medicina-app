# Hardwork Medicina App

A aplicação é parte do desafio técnico de um processo seletivo e simula uma aplicação que permite que usuários estudem conteúdos de medicina.

## Deploy

https://hardwork-medicina-app.vercel.app/

## Como a aplicação funciona?

A aplicação possui três telas ativas: DASHBOARD (homepage), QUESTÕES e PERSONALIZAR, que apresentam um layout para dispositivos móveis.

## Tecnologias utilizadas

- Node.js (versão 20.10.0);
- Next.js;
- React;
- Tailwind CSS.

## Como rodar em desenvolvimento?

Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

- Clonar o repositório;
- Instalar ou atualizar o Node.js (https://nodejs.org/en);
- Baixar as dependências necessárias com o comando: `npm install`;
- Criar o arquivo `.env.local` com base no `.env.local.example`;
- Este arquivo `.env.local` é composto pela seguinte propriedade:

```
  # api base url
    NEXT_PUBLIC_API_URL=https://your-api-url.com/questions.json
```

- A propriedade `NEXT_PUBLIC_API_URL` é usada para declarar o endereço usado para acessar a API;
- Executar o comando `npm run dev`.
