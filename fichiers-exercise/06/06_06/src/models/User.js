const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  apiKey: {
    type: String,
    unique: true,
  },
  hashedPassword: { type: String },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.virtual("fullname").get(function () {
  return this.firstName + " " + this.lastName;
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword);
};

module.exports = mongoose.model("User", UserSchema);
