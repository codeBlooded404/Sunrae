import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function Login() {
  //create states
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useNavigate();

  const [setUser] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // const logout = async () => {
  //   await signOut(auth);
  // };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if (auth) {
        history("/");
      }
      //console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const registration = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      if (auth) {
        history("/");
      }
      console.log(user);
    } catch (error) {
      alert(error.message);
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
        <h1>Please Sign In</h1>

        <form>
          <h4>Enter Your Email: </h4>
          <input
            type="text"
            onChange={(event) => {
              setLoginEmail(event.target.value);
              setRegisterEmail(event.target.value);
            }}
          ></input>
          <h4>Enter Your Password: </h4>
          <input
            type="password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
              setRegisterPassword(event.target.value);
            }}
          ></input>

          <button className="login__signIn" type="submit" onClick={login}>
            Click To Sign In
          </button>

          <h5>Click below to become a SunRae member: </h5>
        </form>

        <button
          className="login__register"
          type="submit"
          onClick={registration}
        >
          Create Your Account
        </button>

        {/* <h4> User Logged In: </h4>
        {user?.email}
        <button onClick={logout}> Sign Out </button> */}
      </div>
    </div>
  );
}

export default Login;
