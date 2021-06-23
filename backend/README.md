## Chat API

### Requisitos

- Node
- NPM ou Yarn

### Execução

Instale as dependências:
```bash
$ npm install
# ou
$ yarn install
```

Execute o servidor:
```bash
$ npm start
# ou
$ yarn start
```

A API poderá ser acessada em `http://localhost:3000`.

### Endpoints

Aqui estão alguns endpoints úteis suportados pela API. Para uma lista detalhada, consulte a [documentação do JSON Server](https://github.com/typicode/json-server).

### Rooms (Salas)

- Lista todas as salas:
```http
GET /rooms
Response:
[
  {
    "id": 1,
    "name": "Sala Front-end"
  },
  ...
]
```

- Obtém uma sala específica por ID:
```http
GET /rooms/1
Response:
{
  "id": 1,
  "name": "Sala Front-end"
}
```

- Adiciona uma nova sala:
```http
POST /rooms
Content-Type: application/json
Body:
{
  "name": "Sala Back-end"
}
Response:
{
  "id": 2,
  "name": "Sala Back-end"
}
```

### Users (Usuários)

- Lista todos os usuários:
```http
GET /users
Response:
[
  {
    "id": 1,
    "name": "Frodo Bolseiro"
  },
  ...
]
```

- Obtém um usuário por ID:
```http
GET /users/2
Response:
{
  "id": 2,
  "name": "Gandalf, O Cinzento"
}
```

- Busca usuários pelo nome exato:
```http
GET /users?name=Gandalf
Response:
[
  {
    "id": 2,
    "name": "Gandalf"
  }
]
```

- Busca usuários pelo nome contendo um termo:
```http
GET /users?name_like=Gandalf
Response:
[
  {
    "id": 2,
    "name": "Gandalf, O Cinzento"
  }
]
```

- Adiciona um novo usuário:
```http
POST /users
Content-Type: application/json
Body:
{
  "name": "Samwise Gamgee"
}
Response:
{
  "id": 3,
  "name": "Samwise Gamgee"
}
```

### Room History (Histórico das conversas de uma sala)

- Lista **todo** histórico de uma sala:
```http
GET /room_history?roomId=1
Response:
[
  {
    "id": 1,
    "roomId": 1,
    "userId": 4,
    "timestamp": "2021-06-23T07:19:43.819Z",
    "message": "Você pode encontrar as coisas que perdeu, mas nunca as que abandonou."
  },
  ...
]
```

- Lista **todo** histórico de uma sala com dados dos usuários aninhados:
```http
GET /room_history?roomId=1&_expand=user
Response:
[
  {
    "id": 1,
    "roomId": 1,
    "userId": 4,
    "timestamp": "2021-06-23T07:19:43.819Z",
    "message": "Você pode encontrar as coisas que perdeu, mas nunca as que abandonou.",
    "user": {
      "id": 1,
      "name": "Gandalf"
    }
  },
  ...
]
```

- Adiciona uma nova mensagem ao histórico de uma sala:
```http
POST /room_history
Content-Type: application/json
Body:
{
  "roomId": 1,
  "userId": 1,
  "timestamp": "2021-06-23T15:13:39.426Z",
  "message": "Tudo o que temos de decidir é o que fazer com o tempo que nos é dado."
}
```

### Paginação e ordenação

Todos os endpoints suportam paginação por meio dos query params `_page` e `_limit`.
```http
GET /users?_page=1&_limit=2
```

Todos os endpoints suportam ordenação por meio dos query params `_sort` e `_order`.
```http
GET /users?_sort=name&_order=desc

GET /room_history?_sort=timestamp,userId&_order=desc,asc
```