import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isAuthenticated = !!localStorage.getItem("login");

  if (!isAuthenticated && pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "lightgray",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        margin: "20px",
        width: "80%",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
