/* eslint-disable react/prop-types */
export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset());
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input className="form-control" name="title" type="text" />
        </div>
        <div>
          Body: <input className="form-control" name="body" type="text" />
        </div>
        <div>
          Image: <input className="form-control" name="image" type="text" />
        </div>
        <button type="button" className="btn btn-outline-success btn-lg">
          Create Post
        </button>
      </form>
    </div>
  );
}
