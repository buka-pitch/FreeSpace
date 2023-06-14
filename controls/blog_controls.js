require("../config/dbconfig");
const mongoose = require("mongoose");
const BlogSchema = require("../model/BlogSchema");
const postsData = require("./posts.json");

const CreateBlogPost = async (req, res) => {
  if (req.body.title && req.body.body && req.body.author) {
    try {
      const { title, body, author } = req.body;
      const blog = await BlogSchema.create({
        title,
        body,
        author,
      });
      await blog.save();
      res.status(200).json(blog);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
};

const GetAllBlogPosts = async (req, res) => {
  try {
    const blog = await BlogSchema.find({});
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "Something went wrong",
    });
  }
};
module.exports = {
  CreateBlogPost,
  GetAllBlogPosts,
};
