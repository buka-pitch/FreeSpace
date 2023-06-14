import React from "react";
import "./BlogPostDetail.css";
import { useParams, useLocation } from "react-router-dom";

const BlogPostDetail = () => {
  const { state } = useLocation();
  const { post } = state || {};

  if (!post) {
    return <> 404 No Post</>;
  }

  return (
    <div className="blog-container">
      <div className="blog-title">{post.title}</div>
      <div className="blog-body">{post.body}</div>
      <div>{post.topic}</div>
      <div>{post.author}</div>
      <span>{post.likes}</span>
    </div>
  );
};

export default BlogPostDetail;
