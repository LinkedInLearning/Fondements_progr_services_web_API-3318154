const mongoose = require("mongoose");

const Postschema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, nullable: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", Postschema);
