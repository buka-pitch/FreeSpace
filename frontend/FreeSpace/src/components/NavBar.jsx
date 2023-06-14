import React,   from "react";
import "./NavBar.css";
import {Link, useLocation} from "react-router-dom"



function MyLink({href,children,...props}){
  const location = useLocation()
  return (
  <div className={href===location.pathname?"active btn":"btn"} >
  <Link  to={href}>{children}</Link>
  </div>
  )
}


function NavBar() {

  

  return (
    <div className="nav-container">
    <Link to="/">
      <h1 className="sitename">FreeSpace</h1>
    </Link>
      <div className="menubar">
        <div className="for-user">
          <MyLink  href="/feed">Feed</MyLink>
          <MyLink  href="/chat">Chat</MyLink>
          <MyLink href="/blog">Blog</MyLink>
        </div>
        <div className="for-guest">
        <MyLink className="about" href="/about" >About</MyLink>
         
          <MyLink  href="/login">Login</MyLink>
          <MyLink  href="/register">Signup</MyLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
