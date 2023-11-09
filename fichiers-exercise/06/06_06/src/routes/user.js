const { register, login } = require("../controllers/user");

module.exports = (router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
};
