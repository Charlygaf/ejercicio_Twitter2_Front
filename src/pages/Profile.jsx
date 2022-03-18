import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RighSidebar from "../components/RightSidebar";
import Tweet from "../components/Tweet";
import { format } from "date-fns";
import axios from "axios";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`http://localhost:8000/${username}`);
      setUser(request.data.user);
      setTweets(request.data.user.tweets);
      console.log(tweets);
      return request;
    };
    fetchData();
  }, [username]);

  return (
    <div className="my-container">
      <div className="row m-0">
        <div className="col-sm-3 p-0 d-flex justify-content-end action-col">
          <LeftSidebar />
        </div>
        <div className="col-sm-6 my-col-auto border-horizon-main p-0">
          <div className="ps-3 bg-nav sticky-top">
            <div className="d-flex justify-content-start align-items-center">
              <a className="text-decoration-none text-white me-3" href="/home">
                <i className="fas fa-arrow-left"></i>
              </a>
              <div className="ps-4 py-1">
                <h1 className="fs-5 m-0">
                  {user.firstname} {user.lastname}
                </h1>
                <span className="text-secondary info-profile">
                  {user.tweets && <span>{user.tweets.length}</span>} Tweets
                </span>
              </div>
            </div>
          </div>
          <section className="border-bottom-section">
            <div
              className="ph-cover"
              style={{ backgroundImage: `/img/${user.photoProfile}` }}
            ></div>
            <div className="d-flex justify-content-end p-3 position-relative">
              <img
                style={{ width: "8rem", height: "8rem", objectFit: "cover" }}
                className="rounded-circle ph-profile"
                src={`/img/${user.photoProfile}`}
                alt="l"
              />
              {/*              { if (currentUser.userName === user.userName) {
              } <button
            type="button"
            className="btn btn-outline-default rounded-pill height-fit px-3"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
          >
            Editar perfil
          </button> 
           } else if (user.followers.includes(currentUser.id)) { */}
              <form className="d-none d-lg-inline me-0" method="POST">
                <input type="hidden" name="objectId" value="<%= user.id %>" />
                <button
                  type="submit"
                  className="btn btn-light rounded-pill px-3"
                >
                  Siguiendo
                </button>
              </form>
              } else{" "}
              {
                <form
                  className="d-none d-lg-inline me-0"
                  action="/follow"
                  method="POST"
                >
                  <input type="hidden" name="objectId" value="<%= user.id %>" />
                  <button
                    type="submit"
                    className="btn btn-outline-default rounded-pill px-3"
                  >
                    Seguir
                  </button>
                </form>
              }{" "}
              */}
            </div>
            <div className="p-3">
              <h2 className="fs-4 mb-0">
                {user.firstname} {user.lastname}
              </h2>
              <p className="text-secondary fs-5 fw-light">@{user.userName}</p>
              {user.biography && <p>{user.biography}</p>}
              {user.birthDate && (
                <p className="text-secondary info-profile mb-0">
                  <img
                    src="/img/balloon.svg"
                    alt="Baloon"
                    style={{ width: "0.9rem" }}
                  />
                  Fecha de nacimiento:{" "}
                  {format(new Date(user.birthDate), "dd 'de' MMMM 'de' Y")}
                </p>
              )}{" "}
              <p className="text-secondary info-profile mb-2">
                {/*                 <img
                  src="/img/calendar.svg"
                  alt="Baloon"
                  style="width: 0.9rem"
                />{" "} */}
                {/*                 Se unió en
                {formatDate(new Date(user.createdAt), "MMMM 'de' Y", {
                  locale: es, */}
                })}
              </p>
              <Link className="info-follow text-secondary" to="#">
                {user.following && <span> {user.following.length}</span>}{" "}
                Siguiendo
              </Link>
              <Link className="info-follow text-secondary ms-2" to="#">
                {user.followers && <span>{user.following.length}</span>}{" "}
                Seguidores
              </Link>
            </div>
            <div className="d-flex justify-content-around">
              <Link className="nav-info-profile text-secondary" to="#">
                Tweets
              </Link>
              <Link className="nav-info-profile text-secondary" to="#">
                Tweets y respuestas
              </Link>
              <Link className="nav-info-profile text-secondary" to="#">
                Fotos y videos
              </Link>
              <Link className="nav-info-profile text-secondary" to="#">
                Me gusta
              </Link>
            </div>
            {tweets.map((tweet) => (
              <ul
                key={tweet.id}
                className="col-md-3  d-flex justify-content-around"
              >
                <Tweet user={user} tweet={tweet} />
              </ul>
            ))}
          </section>
        </div>
        <div className="col-sm-3 info-col">
          {/*           <RighSidebar /> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
