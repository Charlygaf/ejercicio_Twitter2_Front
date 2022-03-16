import { format as formatDate } from "date-fns";
import { es } from "date-fns/locale";

function Tweet() {
  return (
    <div class="border-bottom-section position-relative" id="">
      {" "}
      //tweet.id
      <div class="d-flex p-3">
        {/* <div class="dropstart btn-options-tweet">
            <a
              class="text-white"
              href="#"
              id="options-tw"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-ellipsis-h"></i>
            </a>
            <div class="dropdown-menu bg-black tw-dropdown p-0" aria-labelledby="options-tw">
              <form action="/delete-tweet?_method=DELETE" method="POST">
                <input type="hidden" name="id" value="tweet.id" />
                <button class="dropdown-item text-danger dropdown-options-tweet">
                  <i class="fas fa-trash-alt me-3"></i>Eliminar
                </button>
              </form>
            </div>
          </div> */}

        <a class="w-15" href="/<%= tweet.user.userName %>">
          <img class="w-100 rounded-circle" src="Surubi" alt="Photo" />
        </a>
        <div class="ms-2 pe-3 w-100">
          <div class="mb-2">
            <a class="link-profile-tweet" href="#">
              <span class="underline">
                {/* {tweet.user.firstname} {tweet.user.lastname}{" "} */}
              </span>
              <span class="text-secondary">
                @{/* {tweet.user.userName} */} ·{/* {" "} */}
              </span>
            </a>
            <a class="date-tweet text-secondary" href="#">
              {formatDate(new Date(), "d MMM'.' Y", {
                locale: es,
              })}
            </a>
          </div>
          {/* body tweet */}
          <div class="fw-lighter">{/* {tweet.content} */}</div>
          {/* footer tweet */}
          <div class="d-flex mb-0 mt-3">
            <div class="me-5">
              <button class="rounded-circle btn-action-tweet comment" href="#">
                <i class="far fa-comment"></i>
              </button>
              {/* Contador de respuestas */}
            </div>
            <div class="me-5">
              <button class="rounded-circle btn-action-tweet retweet" href="#">
                <i class="fa-solid fa-repeat"></i>
              </button>
              {/* Contador de retweets */}
            </div>

            <form class="me-5" action="/like" method="post">
              <input type="hidden" name="id" /* value={tweet.id} */ />
              <button class="rounded-circle btn-action-tweet like">
                <i class="far fa-heart"></i>
              </button>
              {/* <span>{tweet.likes.length}</span> */}
            </form>
            <div class="me-5">
              <button class="rounded-circle btn-action-tweet share" href="#">
                <i class="fas fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
