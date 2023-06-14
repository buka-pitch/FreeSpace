import React from "react";
import "./Home.css";
import "./Feed.css";
import { BlogContext } from "../App";

import { Link, useNavigate, useParams } from "react-router-dom";
import PostCards from "../components/PostCards";
import LoadingPost from "../components/LoadingPost";
import { BlogContextProvider } from "../Context/BlogPostContext";
function Blog() {
  const { blogPosts } = React.useContext(BlogContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="headline-text">Blog Posts</div>
      <div className="posts-container">
        {blogPosts ? (
          blogPosts.map((post) => (
            <div key={post._id}>
              <Link to={"/blog/" + post._id} state={{ post: post }}>
                <PostCards
                  title={post.title}
                  description={post.body}
                  author={post.author}
                  likes={post.likes}
                />
              </Link>
            </div>
          ))
        ) : (
          <>
            <LoadingPost />
            <LoadingPost />
            <LoadingPost />
            <LoadingPost />
            <LoadingPost />
            <LoadingPost />
          </>
        )}
      </div>
      <div>Pagination</div>
    </div>
  );
}

export default Blog;
