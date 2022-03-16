import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RighSidebar() {
  const users = useSelector((state) => state);

  return (
    <section class="">
      {/* <!-- sticky Search Nav --> */}
      <div class="row bg-black sticky-top py-2">
        <form class="d-flex justify-content-between">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* <!-- Friend suggestions --> */}
      <div class="friend-suggestions bg-dark p-3 mt-2 rounded w-100">
        <h4 class="text-light">You might like</h4>

        <div class="row">
          <div class="col m-0 p-0">
            <ul class="sidebar mx-1 my-0 p-0">
              {users.slice(0, 5).map((user) => (
                <li class="">
                  <form
                    class="d-flex justify-content-between align-items-center me-0"
                    action="/follow"
                    method="POST"
                  >
                    <Link to={`/${user.firstname}`}>
                      <img
                        className="rounded-circle w-15 side-bar-icon d-inline m-0"
                        src={`/img/${user.photoProfile}`}
                        alt="Profile_Img"
                      />
                      <p class="d-none d-lg-inline"> {user.firstname}</p>
                    </Link>
                    <input type="hidden" name="objectId" value={user.id} />

                    <button
                      type="submit"
                      class="btn btn-primary rounded-pill font-register"
                    >
                      follow
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RighSidebar;
