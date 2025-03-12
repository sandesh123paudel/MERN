import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  const tagColors = {
    travel: "text-bg-primary",
    nature: "text-bg-success",
    adventure: "text-bg-danger",
    sunset: "text-bg-warning",
    beach: "text-bg-info",
    relaxation: "text-bg-secondary",
    hiking: "text-bg-dark",
    mountains: "text-bg-light",
    cityscape: "text-bg-primary",
    nightlife: "text-bg-danger",
    urban: "text-bg-success",
    food: "text-bg-warning",
    homemade: "text-bg-info",
    delicious: "text-bg-secondary",
  };

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <img
        className="card-img-top"
        src={
          post.image
            ? post.image
            : "https://chiefexecutive.net/wp-content/uploads/2021/06/AdobeStock_435196429-1024x652.jpg"
        }
        alt=""
        height="300px"
      />

      <div className="card-body" style={{ justifyItems: "center" }}>
        <h5 className="card-title">
          {post.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
            onClick={() => deletePost(post.id)}
          >
            <RxCross1 />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className={`badge ${tagColors[tag] || "text-bg-dark"} hashtag`}
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-warning reactions" role="alert">
          Total Reactions In This Post: {post.reactions}
        </div>
      </div>
    </div>
  );
};

export default Post;
