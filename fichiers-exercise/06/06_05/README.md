## REST API

- **express**: framework web pour créer des application web et des serveurs Node.js
- **nodemon**: utilitaire qui permet de redémarrer automatiquement le serveur à chaque modification des fichiers javascript
- **MongoDB Node.js Driver**: pilote Node.js pour MongoDB
- **mongoDB Compass** [télécharger](https://www.mongodb.com/products/tools/compass): interface graphique pour MongoDB
- **dotenv**: module qui charge les variables d'environnement à partir d'un fichier .env
- **bcrypt**: module qui permet de hasher les mots de passe
- **jsonwebtoken**: module qui permet de créer et de vérifier les tokens d'authentification

## Installation :

`npm install`

`npm install jsonwebtoken bcrypt`

## Lancer le projet :

`npm start`

## Tester le projet :

### Requêtes POST pour créer un utilisateur http://localhost:5000/auth/register

```
curl -X POST \
  http://localhost:5000/auth/register  \
  -H 'Content-Type: application/json' \
  -d '{
    "firstName": "Diana",
    "lastName": "Linares",
    "username": "diana2023",
    "email": "diana2023@gmail.com",
    "password": "0./<>@5/#89"
  }'
```

### Requêtes POST pour connecter un utilisateur http://localhost:5000/auth/login

```
curl -X POST \
  http://localhost:5000/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "diana2023@gmail.com",
    "password": "0./<>@5/#89"
  }'
```

### Send a GET request : get all posts

`curl http://localhost:5000/posts`

### Send a POST request : create a new post

```
curl -X POST \
  http://localhost:5000/posts/create \
  -H 'Content-Type: application/json' \
  -d '{  "title": "new post", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lacus in lorem interdum, at mollis sem consequat. Vestibulum tempus fermentum justo, id molestie risus rhoncus ac. Phasellus augue purus, finibus non posuere molestie, laoreet at metus. Nam posuere non tellus nec laoreet. Etiam eu blandit lacus." }'
```

## Documentation API:

[Documentation sur Postman](https://documenter.getpostman.com/view/19676848/2s9YR84CzK)
