import React, { Component, useState } from "react";

function Login() {
  const [login, setlogin] = useState("");
  const [password, setpassword] = useState("");

  const iniciarSesion = () => {
    console.log("ingresar", login, password);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-navy">
          <div className="card-header text-center">
            <img
              src={"/src/assets/react.svg"}
              alt=""
              className="col-12"
              style={{ width: "80px", marginBottom: "1rem", color: "black" }}
            />
            <br />
            <a href="../../index2.html" className="h4">
              LABORATORIO <b>UAJMS</b>
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">INICIAR SESIÓN</p>

            <form action="" method="post">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usuario"
                  value={login}
                  onChange={(e) => setlogin(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-dark btn-block"
                    onClick={iniciarSesion}
                  >
                    Ingresar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
