import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [signInStatus, setSignInStatus] = useState(null);

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      console.log("User logged in");
      setSignInStatus(true);
    } else {
      console.log("User logged out");
      setSignInStatus(false);
    }
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        {!signInStatus && <Login />}
        {signInStatus && (
          <div>
            <p style={{ textAlign: "center" }}>DashBoard</p>
            <h1 style={{ textAlign: "center" }}>Hello World</h1>
            <div>
              <button onClick={handleLogout} style={{ textAlign: "center" }}>Logout</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Home;
