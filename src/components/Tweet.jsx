import axios from "axios";
import { format as formatDate } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";

function Tweet({ tweet, user }) {
  const handleDeleteTweet = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:8000/api/token",
      data: {
        id: tweet.id,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <div className="border-bottom-section position-relative" id={tweet.id}>
      <div className="d-flex p-3">
        <div className="dropstart btn-options-tweet">
          <Link
            className="text-white"
            to={"/home"}
            id="options-tw"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-h"></i>
          </Link>
          <div
            className="dropdown-menu bg-black tw-dropdown p-0"
            aria-labelledby="options-tw"
          >
            <form onSubmit={handleDeleteTweet}>
              <input type="hidden" name="id" value={tweet.id} />
              <button className="dropdown-item text-danger dropdown-options-tweet">
                <i className="fas fa-trash-alt me-3"></i>Eliminar
              </button>
            </form>
          </div>
        </div>

        <Link className="w-15" to={`/${tweet.user.username}`}>
          <img
            className="w-100 rounded-circle"
            src="https://thispersondoesnotexist.com"
            alt="#"
          />
        </Link>
        <div className="ms-2 pe-3 w-100">
          <div className="mb-2">
            <Link className="link-profile-tweet" to="#">
              <span className="underline">
                {tweet.user.firstname} {tweet.user.lastname}{" "}
              </span>
              <span className="text-secondary">@{tweet.user.userName}</span>
            </Link>
            <Link className="date-tweet text-secondary" to="#">
              {formatDate(new Date(), "d MMM'.' Y", {
                locale: es,
              })}
            </Link>
          </div>
          {/* body tweet */}
          <div className="fw-lighter text-light"> {tweet.content} </div>
          {/* footer tweet */}
          <div className="d-flex mb-0 mt-3">
            <div className="me-5">
              <button
                className="rounded-circle btn-action-tweet comment"
                to="#"
              >
                <i className="far fa-comment"></i>
              </button>
              {/* Contador de respuestas */}
            </div>
            <div className="me-5">
              <button
                className="rounded-circle btn-action-tweet retweet"
                href="#"
              >
                <i className="fa-solid fa-repeat"></i>
              </button>
              {/* Contador de retweets */}
            </div>

            <form className="me-5" action="/like" method="post">
              <input type="hidden" name="id" value={tweet.id} />
              <button className="rounded-circle btn-action-tweet like">
                <i className="far fa-heart"></i>
              </button>
              {tweet.likes && <span>{tweet.likes.length}</span>}
            </form>
            <div className="me-5">
              <button
                className="rounded-circle btn-action-tweet share"
                href="#"
              >
                <i className="fas fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
