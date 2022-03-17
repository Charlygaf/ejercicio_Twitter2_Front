import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import Home from "../pages/Home";

function PrivateHome({ element, ...rest }) {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return element;
  }
}
export default PrivateHome;
