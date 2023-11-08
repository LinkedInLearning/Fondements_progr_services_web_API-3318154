const bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
  async register(req, res) {
    try {
      const newUser = await new User(req.body);
      newUser.hashedPassword = bcrypt.hashSync(req.body.password, salt);
      await newUser.save();
      const userObj = newUser.toObject();
      delete userObj.hashedPassword;
      res.json(userObj);
    } catch (e) {
      res.json("Error while registering new account :" + e);
    }
  },
  async login(req, res) {
    const user = await User.findOne({ email: req.body.email });

    try {
      if (!user) {
        res.status(401).json("No user account found");
      }
      const match = user.comparePassword(req.body.password);

      if (!match) {
        res.status(401).json("Authentication failed. Invalid user or password");
      }
      return res.json({
        token: jwt.sign(
          {
            email: user.email,
            fullName: user.fullName,
            _id: user._id,
          },
          process.env.TOKEN_SECRET
        ),
      });
    } catch (e) {
      res.json(e);
    }
  }, 
  loginRequired(req, res, next) {
    // compléter le code ici
    if (!req.user) {
      console.log("login required");
    }
    next();
  }
};
