import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import RighSidebar from "../components/RightSidebar";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUsers() {
      try {
        const tweets = await axios.get("http://localhost:8000/tweets");
        setUsers(tweets);
        dispatch({ type: "INITIAL_STATE", payload: tweets });
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
      <div className="col-lg-3">
        <RighSidebar users={users} />
      </div>
    </div>
  );
}

export default Home;
