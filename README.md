# Projeto Labeddit Full Stack

O projeto Labeddit Full Stack é um desafio final do bootcamp Web Full Stack da Labenu, que abrange desenvolvimento em backend e frontend. O foco é criar um aplicativo com design mobile-first, onde consiste em quatro páginas: Login, Signup, Postagens e Comentários. Este projeto utiliza tecnologias como React, React Router, Styled-components, React Context e Axios para integração com a Labeddit Api, onde foram utilizados TypeScript, Knex e Express, e a implementação de funcionalidades como autenticação de usuários e gerenciamento de banco de dados.

[Clique para conferir o site!](https://projeto-labeddit-micaeli.surge.sh/)

# [Link do repositório Back-end!](https://github.com/micaeli-takara/projeto-labeddit-backend)

### Gerais

- O site possui 4 páginas: Login, Signup, Postagens e Comentários.
- O fluxo de trocas de páginas segue o fluxograma proposto.

### Página de Login

- Exibe um formulário de login que inclui campos para o email e senha.
-  permite ao usuário enviar as informações de login.
- Um botão "Criar uma conta!" permite ao usuário direcionar para a página de Signup.

![WhatsApp Image 2023-09-19 at 18 14 55](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/35e42563-71fa-44df-ba7b-00e3bfd981bc)

### Página de Signup (cadastro)

- Exibe um formulário de cadastro que inclui campos para nome, e-mail, nome de usuário e senha.
- Um botão "Cadastrar" permite ao usuário criar uma nova conta.
- Pode haver validação de campos para garantir que as informações sejam inseridas corretamente.
- Um botão "Entrar" na parte superior da página direciona para a página de Login.
  
![WhatsApp Image 2023-09-19 at 18 18 51](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/7c96a20a-7c77-455a-a764-b8e535b6a244)

### Página de Postagens

- Exibe uma caixa de texto para realizar uma postagem.
- Exibe uma lista de postagens feitas por usuários do site.
- Cada postagem é representada por um card.
- Cada card de postagem pode incluir o conteúdo, o autor(a), opção de dar like e dislike, o total de likes, um botão para deletar a postagem e outro que redireciona para os comentários.
- O header pode conter um botão de "Logout" que direciona para a página de Login.

![WhatsApp Image 2023-09-19 at 18 15 33](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/2e08caf7-d4c4-48c4-b550-5d71585cc3f4)
![WhatsApp Image 2023-09-19 at 18 16 06](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/b7e78586-a425-41bc-a980-31e9fd0aafdc)
![WhatsApp Image 2023-09-19 at 18 16 22](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/43dd6eea-3a82-45b4-92f6-751b0d4d1f00)
![WhatsApp Image 2023-09-19 at 18 19 56](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/cdd32be1-5d26-47b6-9c49-1ca1fe0989ac)


### Página de Comentários

- Exibe a postagem escolhida juntamente com o conteúdo, o autor(a) e a opção de dar like e dislike com o total de likes.
- Abaixo da postagem, há uma seção de comentários que lista todos os comentários feitos sobre essa postagem.
- Cada card de comentário pode incluir o conteúdo, o autor(a), opção de dar like e dislike, o total de likes e um botão para deletar.
Cada comentário é representado por um card.
- Exibe uma caixa de texto para realizar um comentário na postagem.
- O header da página pode conter um botão para um "Logout" e um botão para voltar à página de postagens.

![WhatsApp Image 2023-09-19 at 18 17 11](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/eb942c8c-c9f7-4656-8137-fb27fe99c4e4)
![WhatsApp Image 2023-09-19 at 18 17 51](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/0b6ccf9a-e640-4387-8c8e-8f33fac77bd6)
![WhatsApp Image 2023-09-19 at 18 22 17](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/70a32389-aaab-47b0-9e32-88e26c2c7948)
![WhatsApp Image 2023-09-19 at 18 18 04](https://github.com/micaeli-takara/projeto-labeddit-frontend/assets/127133387/8cd32c59-381c-4e65-9b47-a3cfe6ebc5cb)
