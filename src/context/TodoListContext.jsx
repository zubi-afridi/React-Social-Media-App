import { createContext } from "react";
const TodoListContext = createContext({
  postList: [],
  addPost: () => {},
  fetchPosts: () => {},
  deletePost: () => {},
});
export default TodoListContext;
