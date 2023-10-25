import "./NavbarStylecss.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="navbarItems">
        <h1 className="navbarLogo">Gym</h1>
        <div className="menuIcons" onClick={() => setToggle(!toggle)}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul
          onClick={() => setToggle(!toggle)}
          className={toggle ? "nav-menu active " : "nav-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
