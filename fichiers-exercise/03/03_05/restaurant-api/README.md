## Restaurant API

- **express**: Node.js framework to create and run a Node server
- **nodemon**: tool to restart the server automatically on file changes
- **mongoose**: MongoDB object modeling tool

les outils

- **(postman)[https://www.postman.com/]** : to test the API
- **curl** : to test the API
- **[MongoDB Compass](https://cloud.mongodb.com/v2/64b917401dc5d758befbbec6#/clusters)** : to check the database

- **postman** :

## Installation :

`npm install`

## Start the project :

`npm start`

## Test the project :

### Send a GET requests

`curl http://localhost:5000/menu`
`curl http://localhost:5000/menu/appetizers`
`curl http://localhost:5000/menu/entrees`
`curl http://localhost:5000/menu/salads`
`curl http://localhost:5000/menu/desserts`
`curl http://localhost:5000/menu/drinks`
`curl http://localhost:5000/menu/orders`

### Send a POST request : create a new order

```
curl -X POST \
  http://localhost:5000/menu/order/create \
  -H 'Content-Type: application/json' \
  -d '{  "num": 2 }'
```
