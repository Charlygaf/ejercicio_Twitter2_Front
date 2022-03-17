import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import userActions from "../redux/userActions";

function Portal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/token",
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response.data);
        dispatch(userActions.login(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="row">
      <div className="col-md-6 d-none d-lg-block bg-img p-5">
        <img height="200rem" src="./img/twitter.svg" alt="logo" />
      </div>

      <div className="col-md-6 m-auto p-5">
        <div className="row">
          <div className="col-md-12">
            <img width="30 rem" src="img/twitter.svg" alt="logo" />
          </div>
          <div className="col-md-12">
            <h1 className="text-light">It's Happening now</h1>
          </div>
          <div className="col-md-12">
            <h3 className="text-light">Join twitter today</h3>
          </div>
        </div>
        <header>
          <div className="m-0 p-0 text-light">
            <form
              onSubmit={handleLogin}
              className="text-start text-light"
              style={{ maxWidth: "700px" }}
              action="/api/token"
              method="POST"
            >
              <label htmlFor="email">Correo electronico</label>
              <input
                value={email}
                className="form-control"
                name="email"
                type="email"
                required
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <label htmlFor="password">Contraseña</label>
              <input
                value={password}
                className="form-control"
                name="password"
                type="password"
                required
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <button type="submit" className="btn btn-primary my-5">
                Iniciar sesión
              </button>
            </form>
          </div>

          <a className="btn btn-outline-primary text-white" href="/registro">
            Registrarse
          </a>
        </header>
      </div>
    </div>
  );
}

export default Portal;
