import React, { useReducer, useState } from "react";
import TodoListContext from "./TodoListContext";
import TodoListReducer from "./TodoListReducer";
const TodoListState = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(TodoListReducer, []);
  const [postsFetched, setPostsFetched] = useState(false);
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: {
          likes: reactions.likes || 0,
          dislikes: reactions.dislikes || 0,
        },
        views: 0,
        userId: userId,
        tags: tags,
      },
    });
  };
  const fetchPosts = (posts) => {
    dispatchPostList({
      type: "FETCH_POST",
      payload: {
        posts,
      },
    });
    setPostsFetched(true);
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };
  return (
    <TodoListContext.Provider
      value={{ postList, addPost, deletePost, fetchPosts, postsFetched }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
export default TodoListState;
