import React, { useState } from "react";
import "./FeedPost.css";

function FeedPost({ profilePic, username, timeAgo, location, postImage, description }) {
  const [hasUserLike, setHasUserLike] = useState(false);

  return (
    <>
      <div className="feedPost">
        {/* Header Section */}
        <div className="feedHeader">
          <img src={profilePic} alt="profile-pic" className="profile-pic" />

          <div className="pInfo">
            <div className="infoLine1">
              <p><b>{username}</b></p>
              <p className="grey1">•</p>
              <p className="grey1">{timeAgo}</p>
            </div>
            <p className="sub">{location}</p>
          </div>

          <i className="fa-solid fa-ellipsis fa-lg"></i>
        </div>

        {/* Post Image Section */}
        <div className="feedPic">
          <img src={postImage} alt="post-pic" />
        </div>

        {/* Post Interaction Section */}
        <div className="feedBottom">
          <i
            className="fa-solid fa-heart fa-xl"
            onClick={() => setHasUserLike(!hasUserLike)}
            style={{ color: hasUserLike ? "red" : "lightgrey" }}
          ></i>
          <i className="fa-regular fa-comment fa-xl"></i>
          <i className="fa-solid fa-location-arrow fa-xl"></i>
          <i id="bookmark" className="fa-regular fa-bookmark fa-xl"></i>
        </div>

        {/* Post Description Section */}
        <div className="feedInfo">
          <p><b>{username}</b> {description}</p>
        </div>

        {/* Add Comment Section */}
        <div className="comment">
          <p>Add a comment...</p>
        </div>
      </div>
    </>
  );
}

export default FeedPost;
