# <div align="center"> Labetube - backend </div>


## Stack
Esse é um projeto de Backend feito utilizando NodeJS, Express, Typescript e Firebase. Além disso, ele segue uma arquitetura em camadas simples:
1. Presentation: responsável pela comunicação com agentes externos (como o Frontend);
1. Data: responsável pela comunicação direta com o banco de dados;
1. Business: responsável pela lógica de negócio;
Por fim, ressalta-se que a comunicação da camada `Data` e a `Business` é feita através de interfaces denominadas `Gateway`, para possibilitar os testes unitários desta última camada (inversão de dependências)

## Sobre
Esse foi um projeto de Backend que utilizei para treinar os casos básicos de CRUD de uma API: Create, Read, Update e Delete.
A proposta é criar um site inspirado no Youtube e suas funcionalidades, onde o usuário possa postar vídeos e assistir os vídeos já disponíveis na plataforma.  

> status: 70% concluído 

## Deploy
#### > 

## Como contribuir:
- Faça um fork desse repositório;
- Crie uma branch: `git checkout -b minha-branch`;
- Faça um commit com suas alterações: `git commit -m " Minha minhas contribuições"`;
- Faça push para a sua branch:`git push origin minha-branch` e depois confirme a abertura do PR.
