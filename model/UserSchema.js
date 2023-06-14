const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },

  email: {
    type: String,
  },

  role: {
    type: String,
  },
});

module.exports = new mongoose.model("user", UserSchema);
