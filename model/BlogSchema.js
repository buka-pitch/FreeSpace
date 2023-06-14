const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  picture: {
    type: String,
  },

  body: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: null,
    required: false,
  },
  author: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    immutable: true,
    required: false,
    default: Date.now(),
  },
});

module.exports = new mongoose.model("blog", BlogSchema);
