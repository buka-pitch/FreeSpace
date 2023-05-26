const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: String,
  comment: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    default: null,
    required: false,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
});

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: null,
    required: false,
  },
  comments: [CommentSchema],

  createdAt: {
    type: Date,
    immutable: true,
    required: false,
    default: Date.now(),
  },
});

module.exports = new mongoose.model("post", PostSchema);
