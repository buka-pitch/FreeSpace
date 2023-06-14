import React from "react";
import "./Home.css";
import "./Feed.css";
import { PostContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import PostCards from "../components/PostCards";
import TopicCard from "../components/TopicsCard";
import LoadingPost from "../components/LoadingPost";
function Home() {
  const { posts, isLoading } = React.useContext(PostContext);
  const navigate = useNavigate();
  console.log(posts);

  return (
    <div className="container">
      <div className="option-tags">
        <button>+ New Post</button>
        <button>Topics</button>
        <button>Get Random Post</button>
        <button>Chat</button>
        <button>Get New Connection</button>
      </div>
      <div className="headline-text">New Posts</div>
      <div className="posts-container">
        {posts ? (
          posts.map((post) => (
            <div key={post._id}>
              <Link to={"/post/" + post._id} state={{ post: post }}>
                <PostCards
                  title={post.title}
                  description={post.description}
                  topic={post.topic}
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

export default Home;
