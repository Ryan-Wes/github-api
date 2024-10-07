# GitHub User Info Fetcher

Este projeto é uma aplicação web que utiliza a API REST do GitHub para buscar informações detalhadas de qualquer usuário da plataforma. Com ele, você pode visualizar dados como nome, bio, seguidores, quem o usuário está seguindo, repositórios, eventos recentes e muito mais!

## Funcionalidades

- **Buscar Usuário do GitHub**: 
  - Nome completo do usuário
  - Nome de login
  - Bio
  - Imagem de perfil
  - Número de seguidores
  - Número de pessoas que o usuário está seguindo

- **Repositórios**:
  - Nome do repositório
  - Link para o repositório no GitHub
  - Quantidade de forks
  - Quantidade de estrelas
  - Quantidade de watchers
  - Linguagem de programação utilizada

- **Eventos Recentes**:
  - Exibe até 10 eventos recentes do tipo `CreateEvent` e `PushEvent`
  - Se for um `PushEvent`, mostra o nome do repositório e a mensagem de commit
  - Se for um `CreateEvent`, exibe a mensagem "Sem mensagem de commit"

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página
- **CSS3**: Estilização, responsividade e layout amigável
- **JavaScript**: Lógica da aplicação e manipulação de dados
- **API REST do GitHub**: Integração com a API para buscar dados em tempo real

## Como Utilizar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
