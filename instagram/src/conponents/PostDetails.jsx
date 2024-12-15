import React from "react";
import "./PostDetails.css";
import profilePic from '../assets/profile-pic copy.jpeg';

const PostDetails = ({ post, onClose }) => {
  return (
    <div className="post-details-overlay">
      <button className="close-button" onClick={onClose}>
          &times;
        </button>
      <div className="post-details-container">
        
        <div className="post-details-content">
          <div className="post-image-container">
            <img src={post.imageUrl} alt="Post" className="post-details-image" />
          </div>
          <div className="post-info">

            <div className="post-header">

              <div className="header1">
              <img
                src={profilePic}
                alt="User"
                className="user-avatar"
              />
              </div>

              <span className="username">phoebechen_</span>


            </div>
            <div className="post-description">
              <img src = {profilePic} className="user-avatar"/>
              <p><b>phoebechen_ </b>{post.description}</p>
            </div>

          <div className="postBottom">
          <i
            className="fa-solid fa-heart fa-xl"
          ></i>
          <i className="fa-regular fa-comment fa-xl"></i>
          <i className="fa-solid fa-location-arrow fa-xl"></i>
          <i id="bookmark1" className="fa-regular fa-bookmark fa-xl"></i>
        </div>

        <div className="date">
          <p>October 13</p>
        </div>

        <div className="comment1">
          <div className="comment1_1">
          <i class="fa-regular fa-face-smile fa-xl"></i>
          <p>Add a comment...</p>  
          </div>
          

          <p id = "end1">Post</p>
        </div>

          </div>



          
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
