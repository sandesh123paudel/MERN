import { act, createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    confirm(`${"Do you want to delete this post?"}`);
    if (confirm) {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    }

    console.log(`${postId}`);
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Lovely Valley in Nepal: Kathmandu",
    body: "Vacation Going On!! Exploring the beauty of Kathmandu.",
    reactions: 2,
    userID: "user-9",
    tags: ["travel", "nature", "adventure"],
    image: "",
  },
  {
    id: "2",
    title: "Sunset at the Beach",
    body: "Watching the sunset at the beach is so relaxing!",
    reactions: 5,
    userID: "user-3",
    tags: ["sunset", "beach", "relaxation"],
    image: "",
  },
  {
    id: "3",
    title: "Mountain Hiking Adventure",
    body: "Just completed a challenging hike in the mountains.",
    reactions: 8,
    userID: "user-5",
    tags: ["hiking", "mountains", "adventure"],
    image: "",
  },
  {
    id: "4",
    title: "City Lights at Night",
    body: "The city looks beautiful with all the lights at night.",
    reactions: 3,
    userID: "user-7",
    tags: ["cityscape", "nightlife", "urban"],
    image: "",
  },
  {
    id: "5",
    title: "Delicious Homemade Pizza",
    body: "Made a delicious pizza at home today!",
    reactions: 10,
    userID: "user-2",
    tags: ["food", "homemade", "delicious"],
    image: "",
  },
];

export default PostListProvider;
