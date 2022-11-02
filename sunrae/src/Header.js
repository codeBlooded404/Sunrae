import React from "react";
import "./Header.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {

  const [{ cart }, dispatch] = useStateValue();

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
        <Link className="text-link" to="/login">
          <div className="header__option">
            <span className="header__lineOne">Hello,</span>
            <span className="header__lineTwo">Sign In</span>
          </div>
        </Link>

        <Link className="text-link" to="/profile">
          <div className="header__option">
            <span className="header__lineOne">Your</span>
            <span className="header__lineTwo">Profile</span>
          </div>
        </Link>

        <Link className="text-link" to="/orders">
          <div className="header__option">
            <span className="header__lineOne">Your</span>
            <span className="header__lineTwo">Orders</span>
          </div>
        </Link>

        <Link className="text-link" to="/checkout">
          <div className="header__optionCart">
            <ShoppingCartTwoToneIcon />
            {/* ? ==>> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
            <span className="header__lineTwo header__cartQuantity">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
