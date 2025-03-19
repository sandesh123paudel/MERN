import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src="images/brand_logo.png" alt="" />
      </div>
      <nav className={css.nav}>
        <ul>
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>

      <button className={css.loginBtn}>Login</button>
    </header>
  );
};

export default Header;
