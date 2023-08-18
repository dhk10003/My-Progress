import { Link } from "react-router-dom";
import {Nav, NavLink} from "./style"

const Navbar = () => {
  return (
    <Nav>
      <div className="HomeLogo">
        <h2>
          <Link to="/">David's Recipe App</Link>
        </h2>
      </div>
      <NavLink>
        <Link to="/about">About</Link>
        <a href="https://github.com/dhk10003" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <Link to="/login">LogOut</Link>
      </NavLink>
    </Nav>
  );
};

export default Navbar;
