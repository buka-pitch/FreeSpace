import React from "react";

function MessageBox({ message, time, author }) {
  return (
    <>
      <div className="message-box">
        <div className="messagebox-header">{author}</div>
        <div className="messagebox-body">{message}</div>
        <div className="messagebox-footer">{time}</div>
      </div>
    </>
  );
}

function ChatBody() {
  const currentUser = "buka";
  const chatHistory = [
    { user: "buka", message: "hey there", time: "3:00" },
    { user: "malic", message: "hey buka", time: "3:02" },
    { user: "buka", message: "whats up", time: "3:03" },
    { user: "buka", message: "hey there", time: "3:00" },
    { user: "malic", message: "hey buka", time: "3:02" },
    { user: "buka", message: "whats up", time: "3:03" },
    { user: "buka", message: "hey there", time: "3:00" },
    { user: "malic", message: "hey buka", time: "3:02" },
    { user: "buka", message: "whats up", time: "3:03" },
    { user: "buka", message: "hey there", time: "3:00" },
    { user: "malic", message: "hey buka", time: "3:02" },
    { user: "buka", message: "whats up", time: "3:03" },
    { user: "buka", message: "hey there", time: "3:00" },
    { user: "malic", message: "hey buka", time: "3:02" },
    { user: "buka", message: "whats up", time: "3:03" },
  ];

  return (
    <div className="chat-body-wrapper">
      <div id="chat" className="chat-body-container">
        {chatHistory.map((msg) => (
          <div className="message" key={msg.message}>
            {msg.user === currentUser ? (
              <div className="sender">
                <MessageBox
                  message={msg.message}
                  time={msg.time}
                  author={msg.user}
                />
              </div>
            ) : (
              <div key={msg.message} className="reciver">
                <MessageBox
                  message={msg.message}
                  time={msg.time}
                  author={msg.user}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="message-field">
        <form className="message-field-inputs" action="" method="post">
          <input type="text" name="message" id="message" />
          <input className="sendbtn" type="button" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default ChatBody;
