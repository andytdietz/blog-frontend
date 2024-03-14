export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="posts card">
            <h2>{post.title}</h2>
            <img src={post.image} alt="" />
            <button className="more-info-button" onClick={() => props.onShowPosts(post)}>
              More info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
