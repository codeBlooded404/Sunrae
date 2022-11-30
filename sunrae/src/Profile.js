import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Profile() {
  const [{ user }] = useStateValue();

  const handleUserAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src={process.env.PUBLIC_URL + "images/logo.jpg"}
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Welcome to your Profile Page:</h1>
        <br />
        <h3>
          <u>
            <strong>Your Registered Email is: </strong>
          </u>
        </h3>
        <h3>{!user ? "Please Sign In First" : user.email}</h3>
      </div>

      <Link className="text-link" to="/">
        <div className="header__option">
          <span className="header__lineOne">Go back to Home Page</span>
        </div>
      </Link>
    </div>
  );
}

export default Profile;
