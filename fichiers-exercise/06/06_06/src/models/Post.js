const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  author: { type: String, required: true },
});

PostSchema.methods.toLocalString = function () {
  return this.created_at.toLocalString();
};

module.exports = mongoose.model("Post", PostSchema);
