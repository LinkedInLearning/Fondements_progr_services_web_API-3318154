const User = require("../models/User");
const {
  createPost,
  findOnePostAndUpdate,
  findOnePostAndDelete,
} = require("../controllers/post");

const { generateAPIKey } = require("../controllers/user");

const loginRequired = (req, res, next) => {
  if (!req.user) {
    return res.json({ message: "Unauthorized user!" });
  }
  next();
}

async function adminRequired(req, res, next) {
  const apiKey = req.header("x-api-key");
  const users = await User.find({});
  const account = users.find((user) => user.apiKey === apiKey);
  console.log(account);
  if (!apiKey || !account) {
    return res.status(403).json({
      code: 403,
      message: "You are not allowed. Register for a new Api key",
    });
  }

  next();
}


module.exports = (router) => {
  router.post("/generateApiKey", loginRequired, generateAPIKey);
  router.post("/posts/create", loginRequired, createPost);
  router.put( "/posts/:id", loginRequired, adminRequired, findOnePostAndUpdate);
  router.delete("/posts/:id",loginRequired, adminRequired, findOnePostAndDelete);
};
 