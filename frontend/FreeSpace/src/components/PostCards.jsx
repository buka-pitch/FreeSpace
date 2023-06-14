import React from "react";
import "./PostCards.css";

function PostCards({ title, description, author, likes, topic,_id }) {

  function handleOpenPost(e){
    e.preventDefault
    console.log(e)
  }

  return (
    <div className="card-container" >
    <div className="card-header" >{author ? author : "author"}</div>
      <div className="content-area">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-right">
          <h4>{author}</h4>
          <h5>{topic}</h5>
        </div>
        <div className="card-footer-left">
          <h4 className="likes"><img width="20" height="20" src="/like.png"/>{likes ? likes : 13}</h4>
        </div>
      </div>
    </div>
  );
}

export default PostCards;
