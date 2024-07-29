import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/404";
import CustomNavbar from "./Components/customNavbar/CustomNavbar";
import SingleProduct from "./pages/services/SingleProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/login/Login";
import Profile from "./pages/profile/Profile";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/services/:id",
      element: <SingleProduct />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/profile/:username",
      element: <Profile />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
