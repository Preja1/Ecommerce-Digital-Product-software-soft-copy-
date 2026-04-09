import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [auth, setAuth] = useState("");
  function handleChange(e) {
    e.stopPropagation();
    setAuth({ [e.target.name]: e.target.value });
  }
  function handleLogin(e) {
    e.preventDefault();
    if (auth.email === "" || auth.password === "") {
      alert("Please fill all fields and select an image!");
    } else {
    }
  }
  return (
    <div className="login-card">
    <div className="login-container">
      <h2>Login</h2>
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
