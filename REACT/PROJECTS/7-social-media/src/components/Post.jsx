const Post = ({ post }) => {
  return (
    <div
      className="card m-2 post-card"
      style={{ width: "18rem", display: "inline-grid" }}
    >
      <img
        className="card-img-top"
        src="https://img.freepik.com/premium-vector/red-simple-illustration-hands-international-human-rights-day-instagram-post_1072771-2403.jpg?w=360"
        alt="Card image cap"
        height="250px"
      />
      <div className="card-body" style={{ justifyItems: "center" }}>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <a href="#" className="btn btn-dark">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Post;
