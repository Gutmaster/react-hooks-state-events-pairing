import React, {useState} from "react";
import Comments from "./Comments"

function Controls({commentData}){
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [commentsVisible, setCommentsVisible] = useState(true)

    function handleLikes(){
        setLikes(likes+1)
    }
    function handleDislikes(){
        setDislikes(dislikes+1)
    }
    function  handleComments(){
        setCommentsVisible(!commentsVisible)
    }

    return <div>
        <div>
            <button onClick={handleLikes}>{likes} 👍</button>
            <button onClick={handleDislikes}>{dislikes} 👎</button>
        </div>
        <button onClick={handleComments}>Hide Comments</button>
        {commentsVisible ? <Comments comments={commentData}/> : null}
    </div>
}

export default Controls