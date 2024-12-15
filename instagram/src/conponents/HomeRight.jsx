import React from "react";
import "./HomeRight.css";
import { profilePic2 } from "../assets";
import { post2 } from "../assets";


function HomeRight() {
  return (
    <>
    <div className = "RContainer">

        <div className = "RTop">

            <img src = {profilePic2}/>

            <div className="pInfo">
                <p><b>phoebechen_</b></p>
                <p className="sub">Phoebe Chen</p>
            </div>

            <a href="#" className="switch">Switch</a>


        </div>

        <div className="pDivider">
            <p id = "grey"><b>Suggested for you</b></p>
            <p id = "white">See all</p>
        </div>

        <div className = "RTop">
            <img src = {post2}/>

            <div className="pInfo">
                <p><b>foodDaily</b></p>
                <p className="sub">Popular</p>
            </div>

            <a href="#" className="follow">Follow</a>
        </div>

        <div className="pFooter0">
            <p>Meta</p>
            <p>•</p>
            <p>About </p>
            <p>•</p>
            <p>Blog</p>
            <p>•</p>
            <p>Jobs</p>
            <p>•</p>
            <p>Help</p>
            <p>•</p>
            <p>API</p>
            <p>•</p>
            <p>Privacy</p>
            <p>•</p>
            <p>Consumer Health Privacy</p>
            <p>•</p>
            <p>Terms</p>
            <p>•</p>
            <p>Locations</p>
            <p>•</p>
            <p>Language</p>
            <p>•</p>
            <p>Meta Verified</p>
        </div>

        <div className="rightLast">
            <i class="fa-regular fa-copyright"></i>
            <p>2024 INSTAGRAM FROM META</p>
        </div>

    </div>

    
    
    </>
  );
}

export default HomeRight;