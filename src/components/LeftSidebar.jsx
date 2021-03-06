import React from "react";
import { BsFillHouseDoorFill, BsBell, BsPerson } from "react-icons/bs";
import {
  FaHashtag,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegListAlt,
} from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalTweet from "./ModalTweet";

function LeftSidebar() {
  const user = useSelector((state) => state.user);
  return (
    <div className="height-all-views position-fixed">
      <div className="d-flex flex-column justify-content-between w-100 h-100 align-items-center pe-2">
        <ul className="sidebar p-0 ">
          <li className="mt-2">
            <Link className="sidebar-btn d-flex align-items-center" to="/home">
              <BsFillHouseDoorFill size={20} />
              <span className="ms-2  sidebar-btn-text">Inicio</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn d-flex align-items-center" to="#">
              <FaHashtag size={20} />
              <span className="ms-2  sidebar-btn-text">Explorar</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn d-flex align-items-center" to="#">
              <BsBell size={20} />
              <span className="ms-2  sidebar-btn-text ">Notificaciones</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn d-flex align-items-center" to="#">
              <FaRegEnvelope size={20} />
              <span className="ms-2  sidebar-btn-text ">Explorar</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn d-flex align-items-center" to="#">
              <FaRegBookmark size={20} />
              <span className="ms-2  sidebar-btn-text ">Guardados</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn d-flex align-items-center" to="#">
              <FaRegListAlt size={20} />
              <span className="ms-2  sidebar-btn-text ">Listas</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              className="sidebar-btn d-flex align-items-center"
              to={`/${user.userName}`}
            >
              <BsPerson size={20} />
              <span className="ms-2  sidebar-btn-text ">Perfil</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link className="sidebar-btn d-flex align-items-center" to="#">
              <CgMoreO size={20} />
              <span className="ms-2  sidebar-btn-text ">M??s opciones</span>
            </Link>
          </li>
          <ModalTweet />
        </ul>
        <ul className="sidebar p-0 mb-5">
          <li className="p-2 rounded-pill">
            <div className="dropup">
              <Link
                className="text-decoration-none"
                to="#"
                id="btn-logout"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <div className="w-15 rounded-circle overflow-none">
                    <img className="w-100" src="# " alt="Profile" />
                  </div>
                  <div className="me-5 ms-2 sidebar-btn-text">
                    <h2 className="fs-5 mb-0 text-white">{user.firstname} </h2>
                    <p className="text-secondary fs-5 fw-light m-0">
                      {user.userName}
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
                <form action="" method="POST">
                  <button
                    className="btn btn-outline-danger border-0 w-100"
                    type="submit"
                  >
                    Cerrar sesi??n
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
