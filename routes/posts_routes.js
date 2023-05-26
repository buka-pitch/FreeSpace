const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  addPost,
  deletePost,
  commentOnPost,
} = require("../controls/posts_controls");

router.route("/posts").get(getAllPosts);

router.route("/post").post(addPost);

router.route("/post/comment/:id").put(commentOnPost);

router.route("/post/:id").delete(deletePost);

module.exports = router;
