import React from "react";
import { Link } from "react-router-dom";

function LeftSidebar() {
  return (
    <div className="height-all-views position-fixed">
      <div className="d-flex flex-column justify-content-between w-100 h-100 align-items-center pe-2">
        <ul className="sidebar p-0">
          <li className="mt-2">
            <Link className="sidebar-btn" href="#">
              <div className="mb-2 sidebar-text">
                <img
                  className="side-bar-icon d-inline"
                  src="img/home.svg"
                  alt="home"
                />
                <p className="sidebar-btn-text">Inicio</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn" href="#">
              <div className="mb-2 sidebar-text">
                <img
                  className="side-bar-icon d-inline"
                  src="img/glass.svg"
                  alt="search"
                />
                <p className="sidebar-btn-text">Explorar</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn" href="#">
              <div className="mb-2 sidebar-text">
                <img
                  className="side-bar-icon d-inline"
                  src="img/bell.svg"
                  alt="notifications"
                />
                <p className="sidebar-btn-text">Notificaciones</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn" href="#">
              <div className="mb-2 sidebar-text">
                <img
                  className="side-bar-icon d-inline"
                  src="img/mail.svg"
                  alt="message"
                />
                <p className="sidebar-btn-text">Mensajes</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn" href="#">
              <div className="mb-2 sidebar-text">
                <img
                  className="side-bar-icon d-inline"
                  src="img/pin.svg"
                  alt="save"
                />
                <p className="sidebar-btn-text">Guardados</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn" href="#">
              <div className="mb-2 sidebar-text">
                <img
                  className="side-bar-icon d-inline"
                  src="img/note.svg"
                  alt="lists"
                />
                <p className="sidebar-btn-text">Listas</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn" href="/<%=currentUser.userName%>">
              <div className="mb-2 sidebar-text">
                <img
                  className="side-bar-icon d-inline"
                  src="img/user.svg"
                  alt="profile"
                />
                <p className="sidebar-btn-text">Perfil</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn" href="#">
              <div className="mb-2 sidebar-text">
                <img
                  className="side-bar-icon d-inline"
                  src="img/more.svg"
                  alt="more"
                />
                <p className="sidebar-btn-text">Más opciones</p>
              </div>
            </Link>
          </li>
          <button
            id="button-tweet"
            className="btn btn-primary rounded-pill mt-3 p-1 px-2 sidebar-btn w-100"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <span className="sidebar-btn-text">Twittear</span>
            <span className="sidebar-btn-icon">
              <i className="fas fa-feather-alt"></i>
            </span>
          </button>
        </ul>
        <ul className="sidebar p-0 mb-5">
          <li className="p-2 rounded-pill">
            <div className="dropup">
              <Link
                className="text-decoration-none"
                href="#"
                id="btn-logout"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <div className="w-15 rounded-circle overflow-none">
                    <img
                      className="w-100"
                      src="/img/<%=currentUser.photoProfile%> "
                      alt="Profile"
                    />
                  </div>
                  <div className="me-5 ms-2 sidebar-btn-text">
                    <h2 className="fs-5 mb-0 text-white">Current User</h2>
                    <p className="text-secondary fs-5 fw-light m-0">
                      Current User
                    </p>
                  </div>
                  <div className="sidebar-btn-text">
                    <i className="fas fa-ellipsis-h text-white"></i>
                  </div>
                </div>
              </Link>
              <div
                className="dropdown-menu bg-black tw-dropdown p-0"
                aria-labelledby="options-tw"
              >
                <form action="/logout?_method=DELETE" method="POST">
                  <button
                    className="btn btn-outline-danger border-0 w-100"
                    type="submit"
                  >
                    Cerrar sesión
                  </button>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
