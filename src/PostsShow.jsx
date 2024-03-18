/* eslint-disable react/prop-types */
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPost(props.post.id);
  };

  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <img src={props.post.image} />
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button className="update-button" type="submit">
          Update Post
        </button>
      </form>
      <button className="destroy-button" onClick={handleClick}>
        Delete Post
      </button>
    </div>
  );
}
