/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {/* <div className="cards">
        {props.posts.map((post) => (
          <div className="card" key={post.id}>
            <h2>{post.title}</h2>
            <img src={post.image} />
            <p>{post.body}</p>
            <button className="read-more-button" onClick={() => props.onShowPost(post)}>
              Read More
            </button>
          </div>
        ))} */}
      {/* </div> */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card border-primaray mb-3">
              <img src={post.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <button onClick={() => props.onShowPost(post)} className="btn btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
