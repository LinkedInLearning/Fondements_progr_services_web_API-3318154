const User = require("../models/User");
const {
  createPost,
  findOnePostAndUpdate,
  findOnePostAndDelete,
} = require("../controllers/post");

module.exports = (router) => {
  router.post("/posts/create", createPost);
  router.put( "/posts/update/:id", findOnePostAndUpdate);
  router.delete("/posts/delete/:id", findOnePostAndDelete);
};
 