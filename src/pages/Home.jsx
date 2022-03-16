import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const tweets = useSelector((state) => state);
  return <div>Home</div>;
}

export default Home;
