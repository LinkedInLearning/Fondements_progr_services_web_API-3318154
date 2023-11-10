## Create a virtual environment :

use `pip3 on a mac`

```
python -m venv env
```

## Activate the virtual environment :

use `pip3 on a mac`

```
source env/bin/activate
```

## Deactivate the virtual environment :

`deactivate`

## Installation:

### install requirements :

use `pip3 on a mac`
`pip install -r requirements.txt`

if needed :
`pip install fastapi`
`pip install pymongo`

### install server [uvicorn ASGI server](https://www.uvicorn.org/)

`pip install "uvicorn[standard]"`

## Start the server:

`uvicorn main:app --reload`

## Test API :

### Send a GET request : get all posts

`curl http://localhost:5000/posts`

### Send a POST request : create a new post

```
curl -X POST \
  http://localhost:5000/posts/create \
  -H 'Content-Type: application/json' \
  -d '{  "title": "new post", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lacus in lorem interdum, at mollis sem consequat. Vestibulum tempus fermentum justo, id molestie risus rhoncus ac. Phasellus augue purus, finibus non posuere molestie, laoreet at metus. Nam posuere non tellus nec laoreet. Etiam eu blandit lacus." }'
```

## Documentation API :

`http://127.0.0.1:8000/docs`
