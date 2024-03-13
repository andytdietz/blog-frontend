import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <main>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex posts={posts} />
    </main>
  );
}
