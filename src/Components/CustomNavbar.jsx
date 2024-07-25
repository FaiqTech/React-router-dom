import React from "react";
import { NavLink } from "react-router-dom";
import "./customNavbar.css";

function CustomNavbar() {
  // Naviqasiya linklərini tərtib edirik
  const links = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/services", text: "Services" },
    { id: 3, path: "/about", text: "About" },
    { id: 4, path: "/contact", text: "Contact" },
  ];

  // Linkin aktiv olub olmadığını yoxlayan funksiya
  const getClassName = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  // Aktiv linkə stil əlavə edən funksiya
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "black",
    };
  };

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={getClassName}
              style={navLinkStyle}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CustomNavbar;
