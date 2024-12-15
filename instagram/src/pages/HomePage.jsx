import React from "react";
import Sidebar from "../conponents/Sidebar";
import HomeRight from "../conponents/HomeRight";
import FeedPost from "../conponents/FeedPost";
import "./Homepage.css";
import { post2, post3 } from "../assets";

function HomePage() {
  return (
    <>

    <div className="homepage-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Middle Feed */}
      <div className="middle-home">
      <FeedPost
        profilePic={post2}
        username="foodDaily"
        timeAgo="1w"
        location="Indian Grill"
        postImage={post2}
        description="Meal at the Indian Grill!"
      />

      <FeedPost
        profilePic={post3}
        username="sunsets_"
        timeAgo="1w"
        location="Somewhere"
        postImage={post3}
        description="Another sunset!"
      />
      </div>

      {/* Right Sidebar */}
      <div className="home-right">
        <HomeRight />
      </div>
    </div>
        

    </>
  );
}

export default HomePage;