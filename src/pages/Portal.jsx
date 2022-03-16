import React from "react";

function Portal() {
  return (
    <div className="row">
      <div className="col-md-6 d-none d-lg-block bg-img p-5">
        <img height="200rem" src="../img/twitter.svg" alt="logo" />
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
              className="text-start text-light"
              style={{ maxWidth: "700px" }}
              action="/login"
              method="POST"
            >
              <label for="email">Correo electronico</label>
              <input
                className="form-control"
                name="email"
                type="email"
                required
              />
              <label for="password">Contraseña</label>
              <input
                className="form-control"
                name="password"
                type="password"
                required
              />
              <button className="btn btn-primary my-5">Iniciar sesión</button>
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
