import React from "react";
import "./Header.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={process.env.PUBLIC_URL + "images/logo.jpg"}
        alt="logo"
      />

      <div className="header__search">
        <input className="header__searchText" type="text"></input>
        <SearchTwoToneIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__lineOne">Hello,</span>
          <span className="header__lineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__lineOne">Your</span>
          <span className="header__lineTwo">Profile</span>
        </div>

        <div className="header__option">
          <span className="header__lineOne">Your</span>
          <span className="header__lineTwo">Orders</span>
        </div>

        <div className="header__optionCart">
          <ShoppingCartTwoToneIcon className="header__cart" />
          <span className="header__cartQuantity">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
