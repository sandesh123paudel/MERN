import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  // const { addPost } = useContext(PostListContext);

  const handleSubmit = (event) => {
    //navigates to end of home
    // navigate("/");
  };

  return (
    <Form method="POST" className="create-post">
      <h1 className="form-group mb-4">Create a New Post</h1>
      <div className="form-group mb-4">
        <label htmlFor="userId">User-ID</label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter your  user ID"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today....?"
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="body">Post Content</label>
        <textarea
          type="text"
          name="body"
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
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="tags">Please enter tags using space</label>
        <input
          type="text"
          name="hashtags"
          className="form-control"
          id="tags"
          placeholder="Enter your hashtags here"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.hashtags = postData.hashtags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
