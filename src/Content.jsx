import axios from "axios";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [];
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      posts = response.data;
      console.log(posts);
    });
  };

  return (
    <main>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex posts={posts} />
    </main>
  );
}
