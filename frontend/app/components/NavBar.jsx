import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>FreeSpace</h1>
      </div>
      <div>
        <button className={styles.Popbutton}>Join</button>
      </div>
    </div>
  );
}

export default NavBar;
