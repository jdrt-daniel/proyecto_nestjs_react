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
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <a>Reactivo</a>
            </li>
            <li className="breadcrumb-item active">Lista de proveedores</li>
          </ol>
        </div>
        <div className="col-12 p-2">
          <div className="card">
            <div className="card-body">
              <div>
                Lista de proveedores
                <button
                  className="btn btn-success float-right"
                  data-toggle="modal"
                  data-target="#modal-default"
                >
                  <i className="fa fa-plus mr-2"></i>
                  Agregar
                </button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lista.map((el, index) => {
                    return (
                      <tr key={index}>
                        <td> {el.id} </td>
                        <td> {el.nombre} </td>
                        <td> {el.estado ? "Activo" : "Inactivo"} </td>
                        <td>
                          <button className="btn btn-primary mr-2">Edit</button>
                          <button className="btn btn-danger">Del</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
