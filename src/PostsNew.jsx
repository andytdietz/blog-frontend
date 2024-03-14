export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form method="POST" action="http://localhost:3000/posts.json">
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div className="post-body">
          Body: <input name="body" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <button type="submit" className="submit-post-button">
          Create Post
        </button>
      </form>
    </div>
  );
}
