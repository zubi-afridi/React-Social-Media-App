const TodoListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST": {
      const newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
      return newPostList;
    }
    case "ADD_POST": {
      const newPostList = [action.payload, ...currPostList];
      return newPostList;
    }
    case "FETCH_POST": {
      const newPostList = action.payload.posts;
      return newPostList;
    }
    default:
      return currPostList;
  }
};
export default TodoListReducer;
