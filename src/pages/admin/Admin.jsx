import React, { Component } from "react";
import axios from "axios";
import Header from "../../components/Header";
import ManagerList from "../../components/table/ManagerList";
import Loader from "../../components/Loader";

class Admin extends Component {
  state = {
    managers: [],
    loader: false,
    url: "http://localhost/laravel-rest-api/public/api/managers",
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

  componentDidMount() {
    this.getManagers();
  }

  onDelete = (id) => {
    this.deleteManager(id);
  };

  render() {
    return (
      <div>
        <Header />
        <h1 className="text-[36px] font-bold">
          Administración de encargados de hoteles
        </h1>
        <div>
          <label htmlFor="id_manager">ID</label>
          <input
            type="text"
            name="id_manager"
            placeholder="Ingrese id que quiere buscar"
          />
        </div>
        <div>
          <button>Guardar</button>
        </div>
        {/* TO DO: Agregar un pequeño Loader para las columnas y tablas */}
        {this.state.loader ? <Loader /> : ""}
        {/* Cambio de Loader a loader */}
        <ManagerList managers={this.state.managers} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default Admin;
