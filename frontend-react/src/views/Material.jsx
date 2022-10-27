import React, { useEffect } from "react";
import { useState } from "react";
import { proveedorService } from "../services/proveedor.service";
import Swal from "sweetalert2";

const { getAllData, getData, saveData, updateData, deleteData } =
  proveedorService();

export default function Material() {
  // useState -> es un hook de react para declarar variables reactivas
  /** Declaracion de variables */
  const [lista, setLista] = useState([]);
  const [form, setForm] = useState({
    id: 0,
    nombre: "",
    estado: false,
  });

  /** Declaracion de metodos */
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onGetDataList = async () => {
    const res = await getAllData();
    setLista(res);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataSend = {
      id: form.id,
      nombre: form.nombre,
      estado: form.estado,
    };
    if (form.id !== 0) {
      await updateData(dataSend);
    } else {
      await saveData(dataSend);
    }

    closeModal();
    await onGetDataList();
  };

  const onGetData = async (id) => {
    const res = await getData(id);
    setForm(res);
  };

  //eliminar fisico
  const handleStateConfirm = (id) => {
    console.log(id);
    Swal.fire({
      title: "Dar de baja?",
      text: "Se dará de baja este registro.",
      icon: "error",
      confirmButtonText: "Si, inhabilitar",
      confirmButtonColor: "#cf2525",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteData(id);
        await onGetDataList();
        Swal.fire({
          icon: "success",
          title: "Correcto¡",
          text: "Acción realizada con exito",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDisable = (id) => {
    const dataSend = {
      id: id,
      estado: false,
    };

    Swal.fire({
      title: "Dar de baja?",
      text: "Se dará de baja este registro.",
      icon: "error",
      confirmButtonText: "Si, inhabilitar",
      confirmButtonColor: "#cf2525",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateData(dataSend);
        await onGetDataList();
        Swal.fire({
          icon: "success",
          title: "Correcto¡",
          text: "Acción realizada con exito",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const closeModal = () => {
    setForm({ nombre: "", id: 0, estado: false });
    console.log("entrando a la funcion");
    $("#modal-default").modal("toggle");
  };

  /** inicializador */
  useEffect(() => {
    onGetDataList();
  });

  return (
    <>
      <div className="col-sm-6">
        <h1 className="m-0">Materiales (usar este como ejemplo)</h1>
      </div>
      <div className="row p-2 col-12">
        <div className="col-12">
          <div className="card ">
            <div className="card-header">
              <h3 className="card-title">Lista de materiales</h3>

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
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{el.nombre}</td>
                        <td>
                          {el.estado ? (
                            <span className="badge bg-success">Activo</span>
                          ) : (
                            <span className="badge bg-secondary">Inactivo</span>
                          )}
                        </td>
                        <td>
                          <a
                            href="#"
                            onClick={() => onGetData(el.id)}
                            data-toggle="modal"
                            data-target="#modal-default"
                          >
                            <i className="fas fa-edit text-dark mr-3"></i>
                          </a>
                          <a href="#" onClick={() => handleDisable(el.id)}>
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
          <form onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  {form.id !== 0 ? "Modificar proveedor" : "Agregar proveedor"}
                </h4>
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
                <input
                  type="hidden"
                  name="id"
                  onChange={handleChange}
                  value={form.id}
                />
                <label>Nombre del proveedor</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre"
                  name="nombre"
                  onChange={handleChange}
                  value={form.nombre}
                />
              </div>
              <div className="modal-footer justify-center">
                <button type="submit" className="btn btn-primary">
                  {form.id !== 0 ? "Modificar " : "Guardar"}
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  onClick={closeModal}
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
