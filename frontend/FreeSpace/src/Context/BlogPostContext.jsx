import React, { useEffect, useState, createContext } from "react";
export const PostContext = createContext(null);

export const BlogContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      const result = await fetch("http://localhost:5000/api/v1/blog");
      const { data } = await result.json();
      setPosts(data);
      console.log(data);
    })();
  }, []);

  return (
    <BlogContextProvider value={{ posts, isLoading }}>
      {children}
    </BlogContextProvider>
  );
};
