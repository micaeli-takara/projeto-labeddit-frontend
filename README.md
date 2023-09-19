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

### Página de Signup (cadastro)

- Exibe um formulário de cadastro que inclui campos para nome, e-mail, nome de usuário e senha.
- Um botão "Cadastrar" permite ao usuário criar uma nova conta.
- Pode haver validação de campos para garantir que as informações sejam inseridas corretamente.
- Um botão "Entrar" na parte superior da página direciona para a página de Login.

### Página de Postagens

- Exibe uma caixa de texto para realizar uma postagem.
- Exibe uma lista de postagens feitas por usuários do site.
- Cada postagem é representada por um card.
- Cada card de postagem pode incluir o conteúdo, o autor(a), opção de dar like e dislike, o total de likes, um botão para deletar a postagem e outro que redireciona para os comentários.
- O header pode conter um botão de "Logout" que direciona para a página de Login.

### Página de Comentários

- Exibe a postagem escolhida juntamente com o conteúdo, o autor(a) e a opção de dar like e dislike com o total de likes.
- Abaixo da postagem, há uma seção de comentários que lista todos os comentários feitos sobre essa postagem.
- Cada card de comentário pode incluir o conteúdo, o autor(a), opção de dar like e dislike, o total de likes e um botão para deletar.
Cada comentário é representado por um card.
- Exibe uma caixa de texto para realizar um comentário na postagem.
- O header da página pode conter um botão para um "Logout" e um botão para voltar à página de postagens.
