import React, { Component } from "react";
import axios from "../../../node_modules/axios";
import Header from "../../components/Header";
import ManagerList from "../../components/table/ManagerList";
import Loader from "../../components/Loader";
import FormManager from "../../components/forms/FormManager";

class Admin extends Component {
  state = {
    managers: [],
    manager: {},
    loader: false,
    url: "https://squirrel-chief-rightly.ngrok-free.app/laravel-rest-api/public/api/managers",
  };

  getManagers = async () => {
    this.setState({ loader: true });
    const managers = await axios.get(this.state.url);
    this.setState({ managers: managers.data, loader: false });
  };

  deleteManager = async (id) => {
    this.setState({ loader: true });
    await axios.delete(`${this.state.url}/${id}`);

    this.getManagers();
  };

  createManager = async (data) => {
    this.setState({ loader: true });

    await axios.post(this.state.url, {
      nombre_hotel: data.nombre_hotel,
      nombre_persona: data.nombre_persona,
      telefono: data.telefono,
      fecha_renovacion: data.fecha_renovacion,
      email: data.email,
      password: data.password,
    });

    this.getManagers();
  };

  editManager = async (data) => {
    //Limpiar managers
    this.setState({ manager: {}, loader: true });

    await axios.put(`${this.state.url}/${data.id_manager}`, {
      nombre_hotel: data.nombre_hotel,
      nombre_persona: data.nombre_persona,
      telefono: data.telefono,
      fecha_renovacion: data.fecha_renovacion,
      email: data.email,
      password: data.password,
    });
    this.getManagers();
  };

  componentDidMount() {
    this.getManagers();
  }

  onDelete = (id) => {
    this.deleteManager(id);
  };

  //Editar datos
  onEdit = (data) => {
    // console.log("app ", data);
    this.setState({ manager: data });
  };

  onFormSubmit = (data) => {
    // console.log("app", data);
    if (data.isEdit) {
      //Si edit es true
      this.editManager(data);
    } else {
      this.createManager(data);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <h1 className="text-[36px] font-bold">
          Administración de encargados de hoteles
        </h1>

        <FormManager
          manager={this.state.manager}
          onFormSubmit={this.onFormSubmit}
        />

        {/* TO DO: Agregar un pequeño Loader para las columnas y tablas */}
        {this.state.loader ? <Loader /> : ""}
        {/* Cambio de Loader a loader */}
        <ManagerList
          managers={this.state.managers}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
      </div>
    );
  }
}

export default Admin;
