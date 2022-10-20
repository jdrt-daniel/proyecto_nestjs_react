import React, { Component, useState, useEffect } from "react";
import { proveedorService } from "../services/proveedor.service";
const { getAllData, getData, saveData, updateData } = proveedorService();

export class Reactivo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      nombre: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ nombre: event.target.value });
  }

  closeModal() {
    this.setState({ nombre: "" });
    $("#modal-default").modal("toggle");
  }

  async handleSubmit(e) {
    e.preventDefault();
    await saveData({ nombre: this.state.nombre });
    this.closeModal();
    await this.onGetDataList();
  }

  async onGetDataList() {
    const data = await getAllData();
    this.setState({ lista: data });
  }

  async componentDidMount() {
    await this.onGetDataList();
  }
  render() {
    const lista = this.state.lista;
    return (
      <>
        <div className="col-sm-6">
          <h1 className="m-0">Reactivo</h1>
        </div>
        <div className="row p-2 col-12">
          <div className="col-12">
            <div className="card ">
              <div className="card-header">
                <h3 className="card-title">Lista de proveedores</h3>

                <div className="card-tools">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      name="table_search"
                      className="form-control float-right"
                      placeholder="Buscar..."
                    />

                    <div className="input-group-append">
                      <button type="submit" className="btn btn-default">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                    <button
                      className="btn btn-success float-right btn-sm ml-3"
                      data-toggle="modal"
                      data-target="#modal-default"
                    >
                      <i className="fa fa-plus mr-2"></i>
                      Agregar
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Estado</th>
                      <th style={{ width: "40px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lista.map((el, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{el.nombre}</td>
                          <td>
                            {el.estado ? (
                              <span class="badge bg-success">Activo</span>
                            ) : (
                              <span class="badge bg-secondary">Inactivo</span>
                            )}
                          </td>
                          <td>
                            <a href="">
                              <i className="fas fa-edit text-dark mr-3"></i>
                            </a>
                            <a href="">
                              <i className="fas fa-trash text-danger"></i>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      &laquo;
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      &raquo;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modal-default">
          <div className="modal-dialog modal-center">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Agregar proveedor</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <label>Nombre del proveedor</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="nombre"
                    onChange={this.handleChange}
                    value={this.state.nombre}
                  />
                </div>
                <div className="modal-footer justify-center">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    onClick={this.closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Reactivo;
