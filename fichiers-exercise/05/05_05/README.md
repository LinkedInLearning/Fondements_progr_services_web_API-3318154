## REST API

- **[express](https://expressjs.com/)**: Node.js framework to create and run a Node server
- **mongodb**: MongoDB driver for Node.js
- **[mongoose](https://mongoosejs.com/docs/index.html)**: MongoDB object modeling tool
- **nodemon**: tool to restart the server automatically on file changes
- **[graphql](https://graphql.org/)**: query language for APIs and a runtime for fulfilling those queries with your existing data
- **[express-graphql](https://graphql.org/graphql-js/express-graphql/)**: GraphQL HTTP server middleware
- **[dotenv](https://www.npmjs.com/package/dotenv)**: to load environment variables from a .env file

les outils

- **(postman)[https://www.postman.com/]** : to test the API
- **curl** : to test the API
- **[MongoDB Atlas](https://cloud.mongodb.com/v2/64b917401dc5d758befbbec6#/clusters)** : to check the database

## Installation :

`npm install`

## Start the project :

`npm start`

## Test the project :

### ADD books (from json file)

`curl -X POST http://localhost:5000/api/books/create`

### GET request :

`curl http://localhost:5000/api/books`

### examples of GraphQL queries :

récupérer tous les livres

```
{
  books {
    id
    title
    author
    available
  }
}
```

récupérer tous les livres par catégorie

```
{
  booksByCategory(category: "Fiction") {
    id
    title
    author
    description
  }
}

```

```
{
  books {
    id
    title
    author
    available
  }
}
```

récupérer 1 livre par son id

```
{
  book(id: 1) {
    id
    title
    author
    available
    isbn
  }
}
```

récupérer 1 livre par son ISBN

```
{
  bookByIsbn(isbn: "978-2-212-67291-9") {
    id
    title
    author
    available
    isbn
  }
}
```
