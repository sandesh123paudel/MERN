import { act, createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
    // console.log(
    //   `${userId}, ${postTitle}, ${postBody}, ${reactions}, ${hashtags}`
    // );
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts: posts,
      },
    });
  };

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
        addInitialPosts,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
