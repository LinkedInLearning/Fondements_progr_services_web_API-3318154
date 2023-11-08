const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./Post");
const app = express();
const PORT = process.env.PORT || 5000;

let posts = []

app.use(express.json());

app.get("/", (_, res) => res.send("Hello World"));

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts.length === 0) {
      return res.send("No posts recorded!");
    }
    res.send(posts);
  } catch {
    res.status(500);
    res.send({ error: "Internal server error!" });
  }
});

app.post("/posts/create", async (req, res) => {
    try {
      const post = new Post(req.body);
      await post.save();
      res.send(post);
    } catch (e) {
        res.status(500);
        res.send({ error: "Internal server error!" });
    }
})
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
  mongoose
    .connect(`mongodb+srv://sandy:${process.env.PASSWORD}@cluster0.4ihtptd.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(() => console.log("Connected to database!"));
});
