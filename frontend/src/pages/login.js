import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../media/loginlogo.png";
import "./Login.css";

function Login() {
  const [auth, setAuth] = useState({email:"",password:""});
  function handleChange(e) {
    e.stopPropagation();
    setAuth({ ...auth,[e.target.name]: e.target.value });
  }
  function handleLogin(e) {
    e.preventDefault();
    if (auth.email==="" || auth.password === "") {
      alert("Please fill all fields and select an image!");
    } else {
    }
  }
  return (
    <div className="login-container">
    <div className="login-card">
      <div className="header-card">
      <img src={logo} alt="Digital" className="logo" />
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
        //   value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        //   value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? 
        <Link to="/signup">Sign Up</Link>
      </p>
      </div>
    </div>
    
  );
}

export default Login;
