import React from "react";
import "../components/PostCards.css";
function LoadingPost() {
  return (
    <div>
      <div className="card-container">
        <div className="card-header">
          <div className="loading"></div>
        </div>
        <div className="content-area">
          <div className="loading"></div>
        </div>
        <div className="card-footer">
          <div className="loading"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPost;
