require("../config/dbconfig");
const mongoose = require("mongoose");
const postSchema = require("../model/PostSchema");
const postsData = require("./posts.json");

const getAllPosts = async (req, res) => {
  try {
    // const posts = await postSchema.find({});
    const posts = postsData;
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({
      message: "erro occured " + err.message,
    });
  }
};

const addPost = async (req, res) => {
  if (req.body.title && req.body.description) {
    const { title, description } = req.body;
    try {
      const post = await postSchema.create({
        title,
        description,
      });

      await post.save();

      res.status(201).json({
        message: "post created " + post,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        message: "error occured " + err.message,
      });
    }
  }
};

// const likeOnPost = async (req,res) =>{
//   if (req.isAuthenticated){
//     const {userid, postid} = req.body;
//     const post = await postSchema.find({"_id":postid})

//   }
// }

const commentOnPost = async (req, res) => {
  const { comments } = req.body;
  if (req.params.id && comments) {
    console.log(req.params.id);
    try {
      const post = await postSchema.updateOne(
        {
          _id: req.params.id,
        },
        {
          $push: {
            comments: comments,
          },
        }
      );

      res.status(201).json({
        message: "comment created " + post,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        message: "error occured " + err.message,
      });
    }
  }
};
const deletePost = async (req, res) => {
  if (req.params.id) {
    let id = req.params.id;
    try {
      const post = await postSchema.findByIdAndDelete(id);
      res.status(200).json({
        message: "post deleted succesfully",
      });
    } catch (err) {
      res.status(404).json({
        message: "post not found " + err.message,
      });
    }
  }
};

module.exports = {
  getAllPosts,
  commentOnPost,
  addPost,
  deletePost,
};
