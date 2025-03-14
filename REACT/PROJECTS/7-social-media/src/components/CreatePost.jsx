import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const hashtags = hashtagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reactions, hashtags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value == "";
    reactionsElement.current.value = "";
    hashtagsElement.current.value=" ";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h1 className="form-group mb-4">Create a New Post</h1>
      <div className="form-group mb-4">
        <label htmlFor="userId">User-ID</label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your  user ID"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today....?"
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="body">Post Content</label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Rell me more about it..."
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="reactions">Number of Reactions</label>
        <input
          type="number"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="tags">Please enter tags using space</label>
        <input
          type="text"
          ref={hashtagsElement}
          className="form-control"
          id="tags"
          placeholder="Emter your hashtags here"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
