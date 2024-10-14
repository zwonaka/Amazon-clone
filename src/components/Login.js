import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useHistory();

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"
          alt="Amazon Logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          
          <h5>Password</h5>
          <input type="password" />
          
          {/* You can remove the button or replace it with another action */}
          <button type="button" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon fake clone conditions of use & sale
        </p>
        {/* Remove or replace this button if not needed */}
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
