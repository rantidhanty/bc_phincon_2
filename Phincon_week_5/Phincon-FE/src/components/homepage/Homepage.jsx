import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Cookies from "js-cookie";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/feature/cookie/cookieSlice";

const Homepage = () => {
  const { value } = useSelector((state) => state.cookie);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch({ type: "cookie/getCookie" });
  //   console.log(value);
  // }, [dispatch, value]);
  useEffect(() => {
    dispatch({ type: "cookie/getCookie" });
  }, []);

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
