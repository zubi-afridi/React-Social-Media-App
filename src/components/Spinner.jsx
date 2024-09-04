import React from "react";
const Spinner = () => {
  return (
    <div className="text-center my-5 py-5">
      <div
        className="spinner-border my-5"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      ></div>
    </div>
  );
};
export default Spinner;
