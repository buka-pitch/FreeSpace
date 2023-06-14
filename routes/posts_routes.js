const express = require("express");
const router = express.Router();
const session = require("express-sessions");
const {
    getAllPosts,
    addPost,
    deletePost,
    commentOnPost
} = require("../controls/posts_controls");

const UserManager = require("../middlewares/UserManager");

router.use(UserManager);
router.route("/posts").get(getAllPosts);
router.route("/post").post(addPost);
router.route("/post/comment/:id").put(commentOnPost);
router.route("/post/:id").delete(deletePost);

module.exports = router;