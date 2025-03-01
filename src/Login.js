import React from "react";
import "./style.css";
import Home from "./Home";
import { Navigate } from "react-router-dom";

function Login() {
  var userdetails = [
    { username: "esu", password: 123 },
    { username: "dixon", password: 111 },
    { username: "Ishmael", password: 222 },
  ];
  const signup = () => {
  
    var name = document.getElementById("usebox").value;
    var password = document.getElementById("passbox").value;
    const activeuser = userdetails.filter((value) => name == value.username);

    if (activeuser.length > 0) {
      if (activeuser[0].password == password) {
        window.location.replace("./home");
        localStorage.setItem("username", activeuser[0].username);
      }
    } else {
      console.log("incorrect username and password");
    }
  };

  return (
    <div className="wrapper">
      <div>
        <h1>login</h1>
        <div className="input-box">
          <input type="text" placeholder="username" id="usebox" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required id="passbox" />
        </div>
        <div className="remember-forgot">
          <div className="row">
            <input type="checkbox" id="check" />
            <label for="check">Remember me</label>
          </div>
          <a href="amazon.com">Forgot password?</a>
        </div>
        <button type="submit" class="btn" onClick={signup}>
          Login{" "}
        </button>

        <div className="register-link">
          <p>
            Dont have an account? <a href="amazon.com">Yes/No</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
