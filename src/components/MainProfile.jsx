import { Link } from "react-router-dom";
import { format as formatDate } from "date-fns";
import { es } from "date-fns/locale";
import Tweet from "./Tweet";

function MainProfile({ user, tweets }) {
  console.log(user.createdAt);
  return (
    <>
      <div className="ps-3 bg-nav sticky-top">
        <div className="d-flex justify-content-start align-items-center">
          <a className="text-decoration-none text-white me-3" href="/home">
            <i className="fas fa-arrow-left"></i>
          </a>
          <div className="ps-4 py-1">
            <h1 className="fs-5 m-0 text-whi">
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
          style={{
            backgroundImage: `url(../img/${user.photoCover})`,
            backgroundColor: "blueviolet",
          }}
        ></div>
        <div className="d-flex justify-content-end p-3 position-relative contain-photo-profile">
          <img
            className="rounded-circle ph-profile"
            src={`../img/${user.photoProfile}`}
            alt="Ph Profile"
          />
        </div>
        <div className="p-3">
          <h2 className="fs-4 mb-0 text-white">
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-secondary fs-5 fw-light">@{user.userName}</p>
          {user.biography && <p>{user.biography}</p>}
          {user.birthDate && (
            <p className="text-secondary info-profile mb-0">
              <span>
                <i class="fa-solid fa-balloon"></i>
              </span>
              Fecha de nacimiento:{" "}
              {formatDate(new Date(user.birthDate), "d 'de' MMMM 'de' Y", {
                locale: es,
              })}
            </p>
          )}{" "}
          <p className="text-secondary info-profile mb-2">
            Se unió en
            {formatDate(new Date(), "MMMM 'de' Y", {
              locale: es,
            })}
          </p>
          <Link className="info-follow text-secondary" to="#">
            {user.following && <span> {user.following.length}</span>} Siguiendo
          </Link>
          <Link className="info-follow text-secondary ms-2" to="#">
            {user.followers && <span>{user.following.length}</span>} Seguidores
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
      </section>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
}

export default MainProfile;
