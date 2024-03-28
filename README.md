### API Breaking News

Este projeto é uma API desenvolvida por Rafael Soeiro para um projeto pessoal chamado Breaking News. Ele fornece funcionalidades relacionadas à autenticação, gerenciamento de notícias e muito mais.

#### Instalação

Para começar com a API Breaking News, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/your-username/api-breakingnews.git`
2. Navegue até o diretório do projeto: `cd api-breakingnews`
3. Instale as dependências: `npm install`

#### Uso

Depois de instalar as dependências, você pode executar a API em dois modos:

- **Modo de Produção**: Execute `npm start` para iniciar o servidor.
- **Modo de Desenvolvimento**: Execute `npm run dev` para iniciar o servidor com nodemon para reinicialização automática em caso de alterações nos arquivos.

#### Endpoint's da API

Esta API fornece os seguintes pontos de extremidade:

- `/auth`: Pontos de extremidade relacionados à autenticação para login e registro de usuário.
- `/news`: Pontos de extremidade para gerenciar artigos de notícias.

#### Tecnologias Utilizadas

A API Breaking News é construída utilizando as seguintes tecnologias:

- **Node.js**: Um runtime JavaScript para desenvolvimento no lado do servidor.
- **Express**: Um framework web rápido, sem opiniões, e minimalista para Node.js.
- **MongoDB**: Um banco de dados NoSQL usado com Mongoose ODM para armazenamento de dados.
- **bcrypt**: Uma biblioteca para ajudar na geração de hashes de senhas.
- **jsonwebtoken**: Implementação de JSON Web Token para geração e verificação de JWTs.
- **dotenv**: Carrega variáveis de ambiente de um arquivo .env em process.env.
- **nodemon**: Uma ferramenta que monitora mudanças e reinicia automaticamente o servidor.
- **swagger-ui-express**: Middleware para servir Swagger UI para documentação da API.

#### Licença

Este projeto está licenciado nos termos da licença MIT.

#### Autor

API Breaking News é desenvolvida e mantida por Rafael Soeiro.

#### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um PR (pull requests).

