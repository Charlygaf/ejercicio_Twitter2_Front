import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RighSidebar from "../components/RightSidebar";
import axios from "axios";
import MainProfile from "../components/MainProfile";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/users/${username}`
      );
      setUser(data.user);
      setTweets(data.tweets);
      return data;
    };
    fetchData();
  }, [username]);

  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-sm-3 p-0 d-flex justify-content-end action-col">
          <LeftSidebar />
        </div>
        <div className="col-sm-6 my-col-auto border-horizon-main p-0">
          <MainProfile user={user} tweets={tweets} />
        </div>
        <div className="col-sm-3 info-col">{/* <RighSidebar /> */}</div>
      </div>
    </div>
  );
}

export default Profile;
