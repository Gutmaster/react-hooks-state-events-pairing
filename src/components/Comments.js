import React from "react";

function Comments({comments}){
    return comments.map((comment) => <p key={comment.id}>{comment.user}: {comment.comment}</p>)
}

export default Comments