import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import TodoListContext from "../context/TodoListContext";
import WellcomeMsg from "./WellcomeMsg";
import Spinner from "./Spinner";
const PostList = () => {
  const { postList, fetchPosts, postsFetched } = useContext(TodoListContext);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    if (!postsFetched) {
      setFetching(true);
      const controller = new AbortController();
      const signal = controller.signal;
      fetch("https://dummyjson.com/posts", { signal })
        .then((res) => res.json())
        .then((data) => {
          fetchPosts(data.posts);
          setFetching(false);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
          setFetching(false);
        });
      return () => {
        controller.abort();
      };
    }
  }, [postsFetched, fetchPosts]);
  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <WellcomeMsg />}
      {!fetching && postList.length > 0 && (
        <div className="container my-4">
          <div className="row">
            {postList.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default PostList;
