import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  //create states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

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
        <h1>Please Sign In</h1>

        <form>
          <h4>Enter Your Email: </h4>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
          <h4>Enter Your Password: </h4>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>

          <button className="login__signIn" type="submit" onClick={signIn}>Click To Sign In</button>
        </form>

        <button className="login__register" type="submit" onClick={registration}>Create Your Account</button>
      </div>
    </div>
  );
}

export default Login;
