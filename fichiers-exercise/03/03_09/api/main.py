

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from typing import List, Optional
import os

app = FastAPI()

origins = ["*"]

client = MongoClient(f"mongodb+srv://sandy:{os.getenv(
    "PASSWORD")}@cluster0.4ihtptd.mongodb.net/?retryWrites=true&w=majority")
db = client.posts
posts_collection = db.posts

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    role: str
    content: str


class PromptMessage(BaseModel):
    messages: List[Message]


class Input(BaseModel):
    content: str


@ app.get("/")
def read():
    return "API is running!"


class Post(BaseModel):
    title: str
    content: str
    completed: bool = False


@app.get("/posts", response_model=List[Post])
async def get_posts():
    posts = list(posts_collection.find())
    if not posts:
        raise HTTPException(status_code=404, detail="No posts recorded!")
    return posts


@app.get("/post/{post_id}", response_model=Post)
async def get_one_post(post_id: str):
    post = posts_collection.find_one({"_id": post_id})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


@app.post("/posts/create", response_model=Post)
async def create_post(post: Post):
    new_post = posts_collection.insert_one(post.dict())
    return post


@app.put("/posts/{post_id}", response_model=Post)
async def update_post(post_id: str, updated_post: Post):
    post = posts_collection.find_one({"_id": post_id})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    # Update specific fields of the post
    updated_data = {"$set": updated_post.dict()}
    posts_collection.update_one({"_id": post_id}, updated_data)

    return updated_post


@app.delete("/posts/{post_id}")
async def delete_post(post_id: str):
    result = posts_collection.delete_one({"_id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "successfully deleted"}
