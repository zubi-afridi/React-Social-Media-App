import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import TodoListContext from "../context/TodoListContext";
const Post = ({ post }) => {
  const { deletePost } = useContext(TodoListContext);
  const { title, body, reactions, views, tags } = post;
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border border-primary">
        <div className="card-body position-relative">
          <span
            className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <MdDelete size={19} />
          </span>
          <h5 className="card-title border-bottom border-primary pb-2 text-primary">
            {title}
          </h5>
          <p className="card-text text-muted">{body}</p>
          <div className="d-flex justify-content-between mt-3">
            <button type="button" className="btn btn-outline-primary">
              Likes{" "}
              <span className="badge bg-secondary">{reactions.likes}</span>
            </button>
            <button type="button" className="btn btn-outline-danger">
              Dislikes{" "}
              <span className="badge bg-secondary">{reactions.dislikes}</span>
            </button>
            <button type="button" className="btn btn-outline-info">
              Views <span className="badge bg-secondary">{views}</span>
            </button>
          </div>
          <div className="mt-3">
            {tags.map((tag, index) => {
              const badgeColors = [
                "bg-primary",
                "bg-secondary",
                "bg-success",
                "bg-danger",
                "bg-warning",
                "bg-info",
                "bg-dark",
              ];
              const colorClass = badgeColors[index % badgeColors.length];
              return (
                <span
                  key={index}
                  className={`badge ${colorClass} rounded-pill me-1`}
                >
                  #{tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
