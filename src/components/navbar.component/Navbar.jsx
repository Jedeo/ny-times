import { Link } from "react-router-dom";
import "./Navbar.css";
import home from "../../resources/home.svg";
import logo from "../../resources/Logo.svg";
const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* <img className="page-logo" src={logo} alt="" /> */}
      <Link to="/">
        <img className="home-icon" src={home} alt="" />
      </Link>
    </nav>
  );
};

export default Navbar;
