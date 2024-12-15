import { story } from "../assets";
import "./stories.css"

function Stories(){
    return(
        <>
        <div className = "story">
            <img src = {story}/>
        </div>
        </>
    );
}

export default Stories