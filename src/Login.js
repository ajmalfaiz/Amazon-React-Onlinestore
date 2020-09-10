import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const signIn = e => {
        e.preventDefault();
       auth.signInWithEmailAndPassword(email, password).then(auth => {
           history.push('/')
       }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG12.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" className="login__signin" onClick={signIn}>Sign In</button>
        <p>
          By signing in you agree to Femshopi conditions of use and sale. please
          see our privacy notice.
        </p>
        <button onClick={register} className="login__register"> Create A Femshopi Account</button>
      </div>
    </div>
  );
}

export default Login;
