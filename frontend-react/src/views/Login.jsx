import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="card card-outline card-navy">
            <div className="card-header text-center">
              <img
                src="/src/assets/react.svg"
                alt=""
                srcset=""
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

              <form action="../../index3.html" method="post">
                <div className="input-group mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" />
                      <label>Remember Me</label>
                    </div>
                  </div> */}

                  <div className="col-12">
                    <button type="submit" className="btn btn-dark btn-block">
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
}

export default Login;
