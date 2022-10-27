import React, { Component, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

class Layout extends Component {
  //const [show, setShow] = useState(false);
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 1000);
  }

  render() {
    const show = this.state.show;
    return (
      <div className="wrapper">
        {show && (
          <div className="preloader flex-column justify-content-center align-items-center">
            <img
              className="animation__shake"
              src="/src/assets/img/AdminLTELogo.png"
              alt="AdminLTELogo"
              height="60"
              width="60"
            />
          </div>
        )}

        <nav className="main-header navbar navbar-expand navbar-dark bg-navy text-white">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#"
                role="button"
              >
                <i className="fas fa-search"></i>
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Buscar"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="fas fa-bell"></i>
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2"></i> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <img
                  src="/src/assets/img/user2-160x160.jpg"
                  className="img-circle"
                  alt="User Image"
                  width={30}
                />
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  Sergio Garcia Moya
                </span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> Perfil
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> Configuracion
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> Salir
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <aside className="main-sidebar sidebar-light-navy elevation-2">
          <Link to={`/`} className="brand-link">
            <img
              src="/src/assets/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-1"
              // style="opacity: .8"
            />
            <span className="brand-text font-weight-light">
              INVENTARIO UAJMS
            </span>
          </Link>

          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="/src/assets/img/user2-160x160.jpg"
                  className="img-circle"
                  alt="User Image"
                />
              </div>
              <div className="info">Chikilin Garcia Moya</div>
            </div>

            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Buscar..."
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw"></i>
                  </button>
                </div>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-header">EXAMPLES</li>
                <li className="nav-item">
                  <Link to={`/`} className="nav-link">
                    <i className="nav-icon fas fa-home"></i>
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Home
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to={`/material`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Material</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/reactivo`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Reactivo</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/reactivo`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Unidad Medida</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/reactivo`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Subgrupo</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/proveedor`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Proveedor</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/reactivo`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Ingresos</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/reactivo`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Egresos</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/reactivo`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Tipo almacen</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/reactivo`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Almancen</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/reactivo`} className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Pedido</p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-header">EXAMPLES</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-search"></i>
                    <p>
                      Search
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/search/simple.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Simple Search</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/search/enhanced.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Enhanced</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <Outlet />
              </div>
            </div>
          </div>

          <section className="content">
            <div className="container-fluid">
              <div className="row"></div>
            </div>
          </section>
        </div>

        <footer className="main-footer">
          <strong>
            Copyright &copy; 2022 <a href="https://adminlte.io">UAJMS</a>.
          </strong>
          Todos los derechos reservados.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
