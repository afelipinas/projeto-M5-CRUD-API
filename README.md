# PROJETO Módulo 5 - CRUD API

Fomos escalados para desenvolver uma proposta de API que será o produto mínimo viável de um
aplicativo. <br>Escolhemos Hamburgueria para o tema do aplicativo.

## Funcionalidades

⇨ Listagem de todos os registros;<br>
⇨ Listagem de um único registro com base em um parâmetro de rota;<br>
⇨ Inserção de um registro;<br>
⇨ Modificação de um registro;<br>
⇨ Exclusão de um registro.<br>

## Autores

- [@fernandorussie](https://www.github.com/fernandorussie)
- [@millenakeli](https://www.github.com/millenakeli)
- [@afelipinas](https://www.github.com/afelipinas)
- [@kayllane29](https://www.github.com/kayllane29)
- [@fernandorussie](https://www.github.com/octokatherine)

## Referência
Projeto que tivemos de inspiração para a criação do nosso

 - [Video aula no youtube](https://www.youtube.com/watch?v=yEpiT-N2DUc&list=PLygIEirBzJi4lTC-5nzfhEyxuKq2y1uiR)
 - [Yuri Marcon](https://github.com/yurimarcon/api-node-sqlite)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/fernandorussie/projeto-M5-CRUD-API
```

Entre no diretório do projeto

```bash
  cd projeto-M5-CRUD-API
```

Instale as dependências

```bash
  npm install
```

Para fazer o deploy desse projeto rode

```bash
  npm run dev
```

## Documentação da API

#### Retorna todos os itens

```http
  GET http://localhost:3000/sanduiches
```

| EndPoint   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `sanduiches` | `string` | **Obrigatório**. <br>O diretório da sua entidade na API |


#### Retorna um item especifico

```http
  GET http://localhost:3000/sanduiches:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. <br>O ID do item que você quer |

#### Adiciona um item

```http
  POST http://localhost:3000/sanduiche
```

| EndPoint   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `sanduiches` | `string` | **Obrigatório**. <br>Enviar dados por JSON |

#### Atualiza um item

```http
  POST or PUT http://localhost:3000/sanduiche:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. <br>Enviar dados por JSON<br> e o ID do item que você quer atualizar<br> junto no corpo do JSON |

#### Excluir um item especifico

```http
  DELETE http://localhost:3000/sanduiche:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. <br>O ID do item que você quer excluir|


## Demonstração

![image](https://user-images.githubusercontent.com/81422214/221953257-50ec8395-61e4-4090-89ec-8b97f77bb8dc.png)


## FAQ

#### Questão 1

Resposta 1

#### Questão 2

Resposta 2


## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/81422214/221953257-50ec8395-61e4-4090-89ec-8b97f77bb8dc.png)
![App Screenshot](https://user-images.githubusercontent.com/81422214/221953837-d9d96340-63d2-4994-897d-bcb3a393b39c.png)
![App Screenshot](https://user-images.githubusercontent.com/81422214/221954131-3436707f-6892-4832-b420-4ef0504194d8.png)

## Ferramentas utilizada

**Back-end:** NodeJS, Express, Cors, Https, SQLite, SQLite3, Nodemon, FS, PostMan, DataBase Client

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
    
