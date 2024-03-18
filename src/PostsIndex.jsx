/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="cards">
        {props.posts.map((post) => (
          <div className="card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} />
            <button className="read-more-button" onClick={() => props.onShowPost(post)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
