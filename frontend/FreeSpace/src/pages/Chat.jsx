import React from "react";
import "./Chat.css";
import ChatSideBar from "../components/ChatSideBar";
import ChatBody from "../components/ChatBody";
import ChatBrowseUsers from "../components/ChatBrowseUsers";

function Chat() {
  const [chatInit, setChatinit] = React.useState(true);

  return (
    <div className="chat-container">
      {chatInit ? (
        <>
          <ChatSideBar />
          <ChatBody />
        </>
      ) : (
        <>
          <ChatBrowseUsers />
        </>
      )}
    </div>
  );
}

export default Chat;
