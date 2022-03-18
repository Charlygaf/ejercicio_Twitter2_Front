import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import RighSidebar from "../components/RightSidebar";
import tweetsActions from "../redux/tweetActions";
import axios from "axios";

function Home() {
  const [tweets, setTweets] = useState([]);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const tweets = await axios.get("http://localhost:8000/tweets");
        setTweets(tweets);
        dispatch(tweetsActions.initialState(tweets));
        console.log(tweets);
      } catch (error) {
        console.log("error");
      }
    }
    getData();
  }, []);

  return (
    <div className="container row">
      <Navbar />
      <div className="col-lg-3">
        <LeftSidebar />
      </div>
      <div className="col-lg-6"></div>

      <div className="col-lg-3">{/* <RighSidebar users={users} /> */}</div>
    </div>
  );
}

export default Home;
