import React from "react";
import "./Header.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={process.env.PUBLIC_URL + "images/logo.jpg"}
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchText" type="text"></input>
        <SearchTwoToneIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__lineOne">Hello,</span>
            <span className="header__lineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/profile">
          <div className="header__option">
            <span className="header__lineOne">Your</span>
            <span className="header__lineTwo">Profile</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__lineOne">Your</span>
            <span className="header__lineTwo">Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionCart">
            <ShoppingCartTwoToneIcon />
            <span className="header__lineTwo header__cartQuantity">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
