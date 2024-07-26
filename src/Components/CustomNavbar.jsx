import React from "react";
import { NavLink } from "react-router-dom";
import "./customNavbar.css";

function CustomNavbar() {
  // Naviqasiya linklərini tərtib edirik
  const links = [
    { path: "/", text: "Home" },
    { path: "/services", text: "Services" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
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
          <li key={link.path}>
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
