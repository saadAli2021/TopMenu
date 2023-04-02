import React from "react";
import { UseGlobalContext } from "./context";
import { HiMenuAlt1 } from "react-icons/hi";
const Navbar = () => {
  const { positionSubMenu, openSidebar } = UseGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;

    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    positionSubMenu(center, page);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="navHeader">
          <div className="logo">
            <h3>LOGO</h3>
          </div>
          <button className="toggle" onClick={openSidebar}>
            <HiMenuAlt1 />
          </button>
        </div>

        <ul className="navLinks">
          <li>
            <a href="#" onMouseOver={displaySubmenu}>
              Products
            </a>
          </li>
          <li>
            <a href="#" onMouseOver={displaySubmenu}>
              Developers
            </a>
          </li>
          <li>
            <a href="#" onMouseOver={displaySubmenu}>
              Company
            </a>
          </li>
        </ul>

        <button className="signIn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
