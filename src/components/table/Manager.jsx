import ButtonEdit from "../buttons/ButtonEdit";
import ButtonDelete from "../buttons/ButtonDelete";
import React, { Component } from "react";

class Manager extends Component {
  onDelete = () => {
    // alert("Custormer delete");
    this.props.onDelete(this.props.manager.id_manager);
  };

  render() {
    const {
      id_manager,
      nombre_hotel,
      nombre_persona,
      telefono,
      fecha_renovacion,
      email,
    } = this.props.manager;

    return (
      <tr>
        <td>{id_manager}</td>
        <td>{nombre_hotel}</td>
        <td>{nombre_persona}</td>
        <td>{telefono}</td>
        <td>{fecha_renovacion}</td>
        <td>{email}</td>
        <td>
          <ButtonEdit />
          <ButtonDelete onClick={this.onDelete} />
        </td>
      </tr>
    );
  }
}

export default Manager;
