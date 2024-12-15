import Sidebar from '../conponents/Sidebar';
import Posts from '../conponents/Posts';
import Footer from '../conponents/Footer';
import Middle from '../conponents/Middle';
import './profile_page.css';
import { post1, post2, post3 } from '../assets';
import ProfileHeader from '../conponents/ProfileHeader';
import React, { useState } from "react";
import PostDetails from "../conponents/PostDetails";
import Stories from '../conponents/Stories';


function Profile_page() {
  const [selectedPost, setSelectedPost] = useState(null); // Manage the currently selected post

  const posts = [
    {
      id: 1,
      imageUrl: post1,
      likes: 120,
      comments: 34,
    },
    {
      id: 2,
      imageUrl: post2,
      likes: 95,
      comments: 20,
    },
    {
      id: 3,
      imageUrl: post3,
      likes: 150,
      comments: 45,
    },
  ];
  

  const handlePostClick = (post) => {
    setSelectedPost(post); // Show the clicked post in the modal
  };

  const closePostDetails = () => {
    setSelectedPost(null); // Close the modal
  };


  return (
    <>
      <Sidebar />
      
      <div className="profile">
        <ProfileHeader />
      </div>

      <Stories/>

      <Middle />
      
      <div className="post-grid">
        {posts.map((post) => (
          <Posts
            key={post.id}
            name={post.imageUrl}
            likes={post.likes} // Pass likes dynamically
            comments={post.comments} // Pass comments dynamically
            onClick={() => handlePostClick(post)} // Handle click to open modal
          />
        ))}
      </div>

      {selectedPost && (
        <PostDetails post={selectedPost} onClose={closePostDetails} />
      )}

      <div className = "pFooter">
      <Footer />
      </div>
        
      
    </>
  );
}

export default Profile_page;
