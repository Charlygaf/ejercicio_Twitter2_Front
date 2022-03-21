import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import Home from "../pages/Home";

function PrivateHome({ element, ...rest }) {
  const token = useSelector((state) => state.user.accessToken);
  if (!token) {
    return <Navigate to="/" />;
  } else {
    return element;
  }
}
export default PrivateHome;
