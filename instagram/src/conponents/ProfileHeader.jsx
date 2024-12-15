import React, { useState } from 'react';
import profilePic from '../assets/profile-pic copy.jpeg';
import './ProfileHeader.css'

function ProfileHeader() {
   // Initial states
   const [isFollowing, setIsFollowing] = useState(false);
   const [followers, setFollowers] = useState(323); // Starting with 323 followers as per the image
 
   // Function to toggle follow/unfollow
   const handleFollow = () => {
     if (isFollowing) {
       setFollowers(followers - 1);
       setIsFollowing(false);
     } else {
       setFollowers(followers + 1);
       setIsFollowing(true);
     }
   };

  return (
    <>
    <div className="profile-header">

    <div className='profile-image'>
            <img src={profilePic} alt="Profile" />
        </div>

      <div className="profile-info">

        <div className = "hc">
            <h1 className="username">phoebechen_</h1>

            <button
            onClick={handleFollow}
            style={{
              backgroundColor: isFollowing ? '#efefef' : '#3897f0',
              color: isFollowing ? '#262626' : '#ffffff',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 'bold',
            }}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>

          <button className = "button">
            Message
          </button>

            <i class="fa-solid fa-ellipsis" width = "25px" height = "auto"></i>
        </div>
        
        <div className="stats">
            <span><b>3</b> posts</span>
            <span><b>{followers}</b> followers</span>
            <span><b>301</b> following</span>
            </div>

        <p className="bio"><b>Phoebe Chen</b> <br/>unc 28</p>

        </div>

    </div>

    </>
  );
}

export default ProfileHeader;
