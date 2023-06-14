import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import PostDetail from "./pages/PostDetail";

export const PostContext = React.createContext(null);
export const BlogContext = React.createContext(null);
function App() {
  const [posts, setPosts] = React.useState(null);
  const [blogPosts, setBlogPosts] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    (async () => {
      const result = await fetch("http://localhost:5000/api/v1/posts");
      const data = await result.json();
      setPosts(data);
      console.log(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await fetch("http://localhost:5000/api/v1/blog");
      const data = await result.json();
      setBlogPosts(data);
      console.log(data);
    })();
  }, []);

  return (
    <>
      <PostContext.Provider value={{ posts, isLoading }}>
        <BlogContext.Provider value={{ blogPosts }}>
          <NavBar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/chat" element={<Chat />} />{" "}
              <Route exact path="/about" element={<About />} />{" "}
              <Route exact path="/feed" element={<Feed />} />{" "}
              <Route
                exact
                path="/post/:postId"
                element={<PostDetail posts={posts} />}
              />
              <Route exact path="/login" element={<Login />} />{" "}
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/blog/:blogId" element={<BlogPostDetail />} />
              <Route exact path="*" element={<PageNotFound />} />{" "}
            </Routes>
          </div>{" "}
          <Footer />
        </BlogContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export default App;
