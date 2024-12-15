import "./Sidebar.css";
import igName from '../assets/igName.png';
import { useNavigate, Link } from "react-router-dom";
import profilePic from '../assets/profile-pic copy.jpeg';


function Sidebar(){
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate("/home"); // Navigate to HomePage
    };

    const goToProfile = () => {
        navigate("/profile");
    }

    return(
        <>
    <div className="sidebar">
        <div className = "sidebar-item">
            <img src= {igName} />
        </div>

        <Link to="/home" className="sidebar-link">
        <div className="sidebar-item">
            <i className="fa-solid fa-house"></i>
            <h2>Home</h2>
        </div>
        </Link>

        <div className="sidebar-item">
            <i className="fa-solid fa-search"></i>
            <h2>Search</h2>
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-compass"></i>
            <h2>Explore</h2>
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-video"></i>
            <h2>Reels</h2>
        </div>
        <div className="sidebar-item">
            <i class="fa-solid fa-message"></i>
            <h2>Messages</h2>
        </div>
        <div className="sidebar-item">
            <i class="fa-solid fa-heart"></i>
            <h2>Notifications</h2>
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-plus-square"></i>
            <h2>Create</h2>
        </div>

        <Link to="/profile" className="sidebar-link">
        <div className="sidebar-item profiles">
            <img src = {profilePic}/>
            <h2>Profile</h2>
        </div>
        </Link>

        <div className = "sidebar-item more">
        <i class="fa-solid fa-bars"></i>
        <h2>More</h2>
        </div>
</div>
    
    
        </>
    )
}

export default Sidebar;