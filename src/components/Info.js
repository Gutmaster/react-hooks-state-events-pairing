import React from "react";

function Info({title, views, date}){
    return <div>
        <h1>{title}</h1>
        <p>👁 {views} | Uploaded {date}</p>
    </div>
}

export default Info