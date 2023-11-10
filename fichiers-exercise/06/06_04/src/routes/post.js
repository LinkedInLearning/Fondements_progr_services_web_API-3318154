const { findPosts, findOnePost } = require("../controllers/post");

module.exports = (router) => {
  router.get("/posts", findPosts);
  router.get("/posts/:id", findOnePost);
};
