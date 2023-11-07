
## REST API
project that is part of the course - Building AI products with OpenAI, to build an LLM app that summarizes a podcast episode, identifies podcast guests, identifies key highlights and more!

- **express**: Node.js framework to create and run a Node server
- **nodemon**: tool to restart the server automatically on file changes


## Installation :
`npm install`

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
