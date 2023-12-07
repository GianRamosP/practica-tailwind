import React, { Component } from "react";
import Manager from "./Manager";
import ButtonBlue from "../buttons/ButtonBlue";

class ManagerList extends Component {
  onDelete = (id) => {
    // console.log("list", id);
    this.props.onDelete(id);
  };

  onEdit = (data) => {
    // console.log("list", data);
    this.props.onEdit(data);
  };

  render() {
    const { managers } = this.props;

    return (
      <>
        <h2 className="font-bold text-[28px]">
          Listado de Propietarios de hoteles
        </h2>

        <div className="mt-[33px]">
          <table className="custom-table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hotel</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Fecha de renovación</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager) => (
                <Manager
                  manager={manager}
                  key={manager.id_manager}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ManagerList;
