import React from "react";

function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-screen bg-violet-950 h-30 text-white ">
        <div className="flex flex-row  justify-between p-5">
          <div className="flex-1 flex flex-col items-center">
            <h3>FreeSpace</h3>
            <div>Home</div>
            <div>Chat</div>
            <div>Topics</div>
            <div>Active Users</div>
            <div>About</div>
          </div>
          <div className=""></div>
          <div className="flex-1">
            <h3 className="flex-1">FreeSpace</h3>
            <p className="sm:text-sm flex-1">
              Share Your Opinons and ideas freely with anonmous accounts | no
              user data is collected or cached on the platform
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className=" font-serif">all right reserved </h3>
          <h3 className=" font-serif">
            Developed For Alx software enginnering Program portfolio project
          </h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
