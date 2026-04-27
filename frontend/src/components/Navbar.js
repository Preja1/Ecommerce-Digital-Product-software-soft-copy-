import { Link } from "react-router-dom";
import logo from "../media/logo.png";
import emoji from "../media/search.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <img src={logo} alt="Digital" className="logo" />
      </Link>

      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        <div className="nav-search">
        <input type="text" placeholder="Search..." className="search"/>
        <img src={emoji} alt="" className="search-emoji" />
        </div >
        <div>
        <Link to="/login " className="nav-login">
          Login
        </Link>
        <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
