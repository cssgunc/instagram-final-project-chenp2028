import "./Middle.css";

function Posts(){
    return (
    <>
    

    <div className = 'middle'>

      <div className = "items">
        <div className = "middle-item">
          <i class="fa-solid fa-table-cells"></i>
          <p><b>Posts</b></p>  
        </div>

        <div className = "middle-item">
          <i class="fa-solid fa-video"></i>
          <p><b>Reels</b></p>
        </div>

        <div className = "middle-item">
          <i class="fa-regular fa-user"></i>
          <p><b>Tagged</b></p>
        </div>
      </div>

    </div>
    
    </>
);
}

export default Posts;