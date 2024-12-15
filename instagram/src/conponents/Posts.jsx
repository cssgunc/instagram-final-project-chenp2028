import "./Posts.css";
import React from "react";

const Posts = ({ name, likes, comments, onClick }) => {
  return (
    <div className="post" onClick={onClick}>
      <img src={name} alt="Post" className="post-image" />
      <div className="post-overlay">
        <div className="post-info-">
          <i className="fa-solid fa-heart"></i> {likes}
          <i className="fa-regular fa-comment"></i> {comments}
        </div>
      </div>
    </div>
  );
};

export default Posts;
