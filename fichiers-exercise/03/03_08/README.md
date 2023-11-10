## REST API

- **[express](https://expressjs.com/)**: Node.js framework to create and run a Node server
- **mongodb**: MongoDB driver for Node.js
- **[mongoose](https://mongoosejs.com/docs/index.html)**: MongoDB object modeling tool
- **nodemon**: tool to restart the server automatically on file changes
- **[dotenv](https://www.npmjs.com/package/dotenv)**: to load environment variables from a .env file

les outils

- **(postman)[https://www.postman.com/]** : to test the API
- **curl** : to test the API
- **[MongoDB Atlas](https://cloud.mongodb.com/v2/64b917401dc5d758befbbec6#/clusters)** : to check the database

## Installation :

`npm install`

`npm install mongodb`

## Start the project :

`npm start`

## Test the project :

### Send a GET request : get all posts

`curl http://localhost:5000/posts`

### Send a POST request : create a new post

```
curl -X POST \
  http://localhost:5000/posts/create \
  -H 'Content-Type: application/json' \
  -d '{  "title": "new post", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lacus in lorem interdum, at mollis sem consequat. Vestibulum tempus fermentum justo, id molestie risus rhoncus ac. Phasellus augue purus, finibus non posuere molestie, laoreet at metus. Nam posuere non tellus nec laoreet. Etiam eu blandit lacus." }'
```
