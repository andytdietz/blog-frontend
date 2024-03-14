import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  };

  const handleShowPosts = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const [currentPost, setCurrentPost] = useState({});

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} onShowPosts={handleShowPosts} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>{currentPost.title}</p>
        <p>{currentPost.body}</p>
        <img src={currentPost.image} alt="" />
      </Modal>
    </main>
  );
}
