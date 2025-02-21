import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/home" &&
    location.pathname !== "/sign-up" &&
    location.pathname !== "/login";

  return (
    <>
      {!isNotFound && <Navbar />}
      <Outlet />
      {!isNotFound && <Footer />}
    </>
  );
}

export default Layout;
