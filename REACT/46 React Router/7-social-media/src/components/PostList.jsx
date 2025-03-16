import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}

      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = async () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data.posts);
};

export default PostList;
