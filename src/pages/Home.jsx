import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";

import { useEffect } from "react";
import RightSidebar from "../components/RightSidebar";

import axios from "axios";
import Tweet from "../components/Tweet";

function Home() {
  const tweetList = useSelector((state) => state.tweets[0].data);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const tweets = await axios.get("http://localhost:8000/tweets");

        dispatch({
          type: "INITIAL_STATE",
          payload: tweets.data[0],
        });
      } catch (error) {
        console.log("error");
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row m-auto">
        <div className="col-lg-3">
          <LeftSidebar />
        </div>
        <div className="col-lg-6">
          {tweetList.slice(0, 5).map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </div>

        <div className="col-lg-3">
          {" "}
          <RightSidebar />{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
