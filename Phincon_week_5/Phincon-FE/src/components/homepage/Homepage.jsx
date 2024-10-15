import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Cookies from "js-cookie";
import Header from "../header/Header";

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = Cookies.get("user");
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <>
      <Header />
      <div>
        <h1>hallo</h1>
      </div>
    </>
  );
};

export default Homepage;