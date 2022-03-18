import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

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

        console.log(tweetList);
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
        <Navbar />
        <div className="col-lg-3">
          <LeftSidebar />
        </div>
        <div className="col-lg-6">
          {tweetList.slice(0, 5).map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>

        <div className="col-lg-3">
          {" "}
          {/* <RighSidebar users={users} />{" "} */}
        </div>
      </div>
    </div>
  );
}

export default Home;
