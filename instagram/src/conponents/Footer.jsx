import "./Footer.css";

function Footer(){

    return (
    <>
    <footer>
        <div className = "top">
            <p>Meta</p>
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Help</p>
            <p>API</p>
            <p>Privacy</p>
            <p>Consumer Health Privacy</p>
            <p>Terms</p>
            <p>Locations</p>
            <p>Instagram Lite</p>
            <p>Theads</p>
            <p>Contact Uploading & Non-Users</p>
            <p>Meta Verified</p>
        </div>

        <div className = "bottom">
            <div className = "footer-item">
                <p>English</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>

            <div className="footer-item">
                <i class="fa-regular fa-copyright"></i>
                <p>2024 Instagram from Meta</p>
            </div>
                
            
        </div>

    </footer>

    </>
)
}

export default Footer;