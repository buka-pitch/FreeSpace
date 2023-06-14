import React from "react";
import "./Home.css";
import { PostContext } from "../App";
import { useNavigate } from "react-router-dom";
import PostCards from "../components/PostCards";
import TopicCard from "../components/TopicsCard";
import LoadingPost from "../components/LoadingPost";
function Home() {
  const { posts, isLoading } = React.useContext(PostContext);
  const navigate = useNavigate();
  console.log(posts);

  function handleOpenPost(id) {
    navigate("/posts/" + id);
  }
  return (
    <div className="container">
      <div className="header">
        <h1 className="titleH">FreeSpace</h1>
        <section className="card">
          <div className="text title">FreeSpace</div>
          <div className="text">Share your ideas freely</div>
          <div className="text">No User Data Collected</div>
          <div className="text">with optional registeration</div>
        </section>
      </div>
      <TopicCard />
      <div className="headline-text">New Posts</div>
      <div className="posts-container">
        {posts ? (
          posts.map((post) => (
            <div key={post._id} onClick={() => handleOpenPost(post._id)}>
              <PostCards
                title={post.title}
                description={post.description}
                topic={post.topic}
                author={post.author}
                likes={post.likes}
              />
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
