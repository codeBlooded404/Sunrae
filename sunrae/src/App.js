import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SearchBar from "./Searchbar";

//public key
const promise = loadStripe(
  "pk_test_51M4vGoHFTpE6Z20QHAKbFZPUfl10dLURsvcF0cWAUpvDNmrFQCscW0mvzeCaPDQkKGm42YN8B68B8r2wlu7jnfSm00pgNLO5eJ"
);

function App() {
  const [dispatch] = useStateValue();

  //keeping track of who is signed in using a listener
  //runs only once when this function is loaded if [] is empty - App in this case
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER: ", authUser);
      if (authUser) {
        //user either logged in or just logged in
        dispatch({
          type: "SET_USER_NAME",
          user: authUser,
        });
      } else {
        //user log out
        dispatch({
          type: "SET_USER_NAME",
          user: null,
        });
      }
    });
  }, []);

  return (
    //following the BEM convention
    <div className="app">
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/profile" element={<h1>profile page</h1>} />
          <Route
            path="/orders"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
