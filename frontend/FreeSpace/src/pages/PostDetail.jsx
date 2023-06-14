import React from "react";

import { useParams, useLocation } from "react-router-dom";

const PostDetail = ({}) => {
  const { state } = useLocation();
  const { post } = state || {};

  if (!post) {
    return <> 404 No Post</>;
  }

  return (
    <div className="post-container">
      <div className="post-title">{post.title}</div>
      <div className="post-body">{post.description}</div>
      <div>{post.topic}</div>
      <div>{post.author}</div>
      <span>{post.likes}</span>
    </div>
  );
};

export default PostDetail;
