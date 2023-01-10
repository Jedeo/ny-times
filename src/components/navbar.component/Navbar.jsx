import { Link } from "react-router-dom"
import "./Navbar.css"
import home from "../../resources/home.svg"
const Navbar = () => {
   return <nav className="nav-container"><Link to="/"> <img className="home-icon"src={home} alt="" /> </Link></nav>
}


export default Navbar