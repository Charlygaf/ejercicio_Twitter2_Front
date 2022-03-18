import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RighSidebar() {
  const users = useSelector((state) => state.users);
  // traer lista de usaurios recomendados con un condicional de users y req.user
  return (
    <section className="">
      {/* <!-- sticky Search Nav --> */}
      <div className="row bg-black sticky-top py-2">
        <form className="d-flex justify-content-between">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* <!-- Friend suggestions --> */}
      <div className="friend-suggestions bg-dark p-3 mt-2 rounded w-100">
        <h4 className="text-light">You might like</h4>

        <div className="row">
          <div className="col m-0 p-0">
            <ul className="sidebar mx-1 my-0 p-0">
              {users.map((user) => (
                <li>
                  <form
                    className="d-flex justify-content-between align-items-center me-0"
                    action="/follow"
                    method="POST"
                  >
                    <Link to={`/${user.firstname}`}>
                      <img
                        classNameName="rounded-circle w-15 side-bar-icon d-inline m-0"
                        src={`/img/${user.photoProfile}`}
                        alt="Profile_Img"
                      />
                      <p className="d-none d-lg-inline"> {user.firstname}</p>
                    </Link>
                    <input type="hidden" name="objectId" value={user.id} />

                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill font-register"
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
