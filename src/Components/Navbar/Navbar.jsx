import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <div className={styles.nav}>
        <img
          src="https://img-premium.flaticon.com/png/512/3353/premium/3353712.png?token=exp=1624363155~hmac=67c81cd837b73c9f9e56810dc951142e"
          alt=""
          className="logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
