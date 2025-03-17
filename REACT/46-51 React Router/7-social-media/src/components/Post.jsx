import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card">
      <div className="card-body" style={{ justifyItems: "center" }}>
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
            onClick={() => deletePost(post.id)}
          >
            <RxCross1 />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-dark hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-warning reactions" role="alert">
          Total Likes In This Post: {post.reactions.likes}
        </div>
      </div>
    </div>
  );
};

export default Post;
