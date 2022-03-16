import React from "react";

function Register() {
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
                  id="registro"
                  className="px-md-2"
                  action="/registro"
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
                        for="email"
                      >
                        E-mail
                      </label>
                      <input
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
