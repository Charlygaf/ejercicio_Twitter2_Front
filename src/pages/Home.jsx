import React from "react";
// import { useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import RighSidebar from "../components/RightSidebar";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await axios.get("http://localhost:8000/users");
        dispatch({ type: "INIT_USERS", payload: data.data.users });
        console.log(users);
      } catch (error) {
        console.log("error");
      }
    }
    getUsers();
  }, []);

  return (
    <div className="container row">
      <Navbar />
      <div className="col-lg-3">
        <LeftSidebar />
      </div>
      <div className="col-lg-6"></div>

      <div className="col-lg-3"></div>
    </div>
  );
}

export default Home;
