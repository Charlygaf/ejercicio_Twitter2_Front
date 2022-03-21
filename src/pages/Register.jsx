import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userActions from "../redux/userActions";

function Register() {
  const accessToken = useSelector((state) => state.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken, navigate]);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    userName: "",
    birthDate: "",
    password: "",
  });
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:8000/user",
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        userName: user.userName,
        birthDate: user.birtDate,
        password: user.password,
      },
    });
    dispatch(userActions.signUp(response.data));
    navigate("/home");
  };
  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3 bg-dark">
              <img
                src="https://ciphertrace.com/wp-content/uploads/2020/07/twitter-hack-1200x679.jpg"
                className="w-100"
                style={{
                  borderTopLeftRadius: "0.3rem",
                  borderTopRightRadius: "0.3rem",
                }}
                alt=""
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-3 px-md-2 text-white">
                  Crear usuario
                </h3>

                <form
                  onSubmit={handleSubmit}
                  id="registro"
                  className="px-md-2"
                  method="POST"
                >
                  <div className="d-flex justify-content-between">
                    <div className="form-outline mb-2">
                      <label
                        className="form-label text-white font-register"
                        htmlFor="firstname"
                      >
                        Nombre
                      </label>
                      <input
                        value={user.firstname}
                        onChange={(ev) => {
                          setUser({ ...user, firstname: ev.target.value });
                        }}
                        type="text"
                        id="firstname"
                        className="form-control rounded-pill"
                        name="firstname"
                        placeholder="Inserte su nombre aquí.."
                      />
                    </div>
                    <div className="form-outline mb-2">
                      <label
                        className="form-label text-white font-register"
                        htmlFor="lastname"
                      >
                        Apellido
                      </label>
                      <input
                        value={user.lastname}
                        onChange={(ev) => {
                          setUser({ ...user, lastname: ev.target.value });
                        }}
                        type="text"
                        id="lastname"
                        className="form-control rounded-pill"
                        name="lastname"
                        placeholder="Inserte su apellido aquí.."
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-outline mb-2">
                      <label
                        className="form-label text-white font-register"
                        htmlFor="email"
                      >
                        E-mail
                      </label>
                      <input
                        value={user.email}
                        onChange={(ev) => {
                          setUser({ ...user, email: ev.target.value });
                        }}
                        type="email"
                        id="email"
                        className="form-control rounded-pill"
                        name="email"
                        placeholder="Inserte su email aquí.."
                      />
                    </div>
                    <div className="form-outline mb-2">
                      <label
                        className="form-label font-register text-white me-5"
                        htmlFor="birthDate"
                      >
                        Fecha de nacimiento
                      </label>
                      <input
                        value={user.birthDate}
                        onChange={(ev) => {
                          setUser({ ...user, birtDate: ev.target.value });
                        }}
                        className="rounded-pill form-control mb-2"
                        type="date"
                        id="birthDate"
                        name="birthDate"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-outline mb-2 text-white">
                      <label
                        className="form-label font-register"
                        htmlFor="userName"
                      >
                        Username
                      </label>
                      <div className="rounded-pill">
                        <input
                          value={user.userName}
                          onChange={(ev) => {
                            setUser({ ...user, userName: ev.target.value });
                          }}
                          type="text"
                          id="userName"
                          className="form-control rounded-pill"
                          name="userName"
                          placeholder="Inserte su usuario aquí.."
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <label
                        className="form-label text-white font-register"
                        htmlFor="password"
                      >
                        Contraseña
                      </label>
                      <input
                        value={user.password}
                        onChange={(ev) => {
                          setUser({ ...user, password: ev.target.value });
                        }}
                        type="password"
                        id="password"
                        className="form-control rounded-pill"
                        name="password"
                        placeholder="Inserte su contraseña aquí.."
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <a
                      href="/"
                      className="font-register text-white mt-4 text-decoration-none"
                    >
                      Home
                    </a>
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill mt-4 font-register"
                    >
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
