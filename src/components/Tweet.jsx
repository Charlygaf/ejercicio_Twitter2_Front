import { format as formatDate } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";

function Tweet() {
  return (
    <div className="border-bottom-section position-relative" id="">
      {" "}
      <div className="d-flex p-3">
        {/* <div clasName="dropstart btn-options-tweet">
            <a
              clasName="text-white"
              href="#"
              id="options-tw"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i clasName="fas fa-ellipsis-h"></i>
            </a>
            <div clasName="dropdown-menu bg-black tw-dropdown p-0" aria-labelledby="options-tw">
              <form action="/delete-tweet?_method=DELETE" method="POST">
                <input type="hidden" name="id" value="tweet.id" />
                <button clasName="dropdown-item text-danger dropdown-options-tweet">
                  <i clasName="fas fa-trash-alt me-3"></i>Eliminar
                </button>
              </form>
            </div>
          </div> */}

        <a className="w-15" href="/<%= tweet.user.userName %>">
          <img className="w-100 rounded-circle" src="Surubi" alt="#" />
        </a>
        <div className="ms-2 pe-3 w-100">
          <div className="mb-2">
            <Link className="link-profile-tweet" to="#">
              <span className="underline">
                {/* {tweet.user.firstname} {tweet.user.lastname}{" "} */}
              </span>
              <span className="text-secondary">
                @{/* {tweet.user.userName} */} ·{/* {" "} */}
              </span>
            </Link>
            <Link className="date-tweet text-secondary" to="#">
              {formatDate(new Date(), "d MMM'.' Y", {
                locale: es,
              })}
            </Link>
          </div>
          {/* body tweet */}
          <div className="fw-lighter">{/* {tweet.content} */}</div>
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
              <input type="hidden" name="id" /* value={tweet.id} */ />
              <button className="rounded-circle btn-action-tweet like">
                <i className="far fa-heart"></i>
              </button>
              {/* <span>{tweet.likes.length}</span> */}
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
