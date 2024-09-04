import React, { useContext, useRef } from "react";
import TodoListContext from "../context/TodoListContext";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const { addPost } = useContext(TodoListContext);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const likes = parseInt(reactionsElement.current.value); // Use this for likes
    const tags = tagsElement.current.value.split(",").map((tag) => tag.trim());
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, { likes, dislikes: 0 }, tags);
    navigate("/");
  };
  return (
    <>
      <form className="container my-4" onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="text-center mb-4 text-primary fw-bolder">
              Post Today!
            </h1>
            <div className="mb-3">
              <label htmlFor="exampleInputID" className="form-label">
                User-ID:
              </label>
              <input
                type="text"
                className="form-control border-primary"
                id="exampleInputID"
                placeholder="Enter your user-ID"
                ref={userIdElement}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="PostTitle" className="form-label">
                Post Title:
              </label>
              <input
                type="text"
                className="form-control border-primary"
                id="PostTitle"
                placeholder="Write Your Post Title Here"
                ref={postTitleElement}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="PostContent" className="form-label">
                Post Content:
              </label>
              <textarea
                className="form-control border-primary"
                id="PostContent"
                placeholder="What's on your mind?"
                ref={postBodyElement}
                rows="4"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Reaction" className="form-label">
                Reactions:
              </label>
              <input
                type="number"
                className="form-control border-primary"
                id="Reaction"
                placeholder="Enter the number of reactions"
                ref={reactionsElement}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="Tags" className="form-label">
                Tags (comma-separated):
              </label>
              <input
                type="text"
                className="form-control border-primary"
                id="Tags"
                placeholder="Enter tags separated by commas"
                ref={tagsElement}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Post
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default CreatePost;
