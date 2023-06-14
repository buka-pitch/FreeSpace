const express = require("express");
const router = express.Router();
const {
  GetAllBlogPosts,
  CreateBlogPost,
} = require("../controls/blog_controls");

router.route("/blog").get(GetAllBlogPosts);
router.route("/blog").post(CreateBlogPost);

module.exports = router;
