import React, { Component } from "react";

class FormManager extends Component {
  state = {
    form: {
      nombre_hotel: "",
      nombre_persona: "",
      telefono: "",
      fecha_renovacion: "",
      email: "",
      password: "",
      isEdit: false,
    },
    btnName: "Guardar",
    btnClass:
      "bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-textButton hover:bg-white hover:text-textButton transition duration-500",
  };

  isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  //Cambiar boton Guardar a Update
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmpty(this.props.manager)) {
      //   console.log("update");
      this.setState({
        form: { ...this.props.manager, isEdit: true },
        btnName: "Actualizar",
        btnClass:
          "bg-btnEdit w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-btnEdit hover:bg-white hover:text-textButton transition duration-500",
      });
    }
  }

  //Mover los valores a los inputs
  handleChange = (event) => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  onFormSubmit = (event) => {
    //prevent
    event.preventDefault();
    //Validacion form
    if (this.formValidation()) {
      //   console.log("listo para crear");
      //Enviar info de form a la app
      this.props.onFormSubmit(this.state.form);
    }
    //Limpiar inputs
    this.clearFormFields();
  };

  formValidation = () => {
    //Nombre hotel
    // if (document.getElementsByName("nombre_hotel")[0].value === "") {
    //   alert("Ingrese el nombre del hotel");
    //   return false;
    // }
    // if (document.getElementsByName("nombre_persona")[0].value === "") {
    //   alert("Ingrese el nombre del manager");
    //   return false;
    // }
    // if (document.getElementsByName("telefono")[0].value === "") {
    //   alert("Ingrese el telefono del manager");
    //   return false;
    // }
    // if (document.getElementsByName("fecha_renovacion")[0].value === "") {
    //   alert("Ingrese la fecha de renovacion");
    //   return false;
    // }
    // if (document.getElementsByName("email")[0].value === "") {
    //   alert("Ingrese el email del manager");
    //   return false;
    // }
    // if (document.getElementsByName("password")[0].value === "") {
    //   alert("Ingrese la contraseña predeterminada del manager");
    //   return false;
    // }
    return true;
  };

  clearFormFields = () => {
    this.setState({
      form: {
        nombre_hotel: "",
        nombre_persona: "",
        telefono: "",
        fecha_renovacion: "",
        email: "",
        password: "",
        isEdit: false,
      },
    });

    this.setState({
      btnName: "Guardar",
      btnClass:
        "bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-textButton hover:bg-white hover:text-textButton transition duration-500",
    });

    document.querySelector("form").reset();
  };

  render() {
    return (
      <form className="max-w-screen-md mx-auto mt-8 space-y-4 mb-12">
        <div className="flex items-center">
          <label className="w-1/4">Nombre Hotel</label>
          <input
            type="text"
            name="nombre_hotel"
            placeholder="Nombre de hotel"
            onChange={this.handleChange}
            value={this.state.form.nombre_hotel}
            className="border border-gray-300 rounded px-3 py-2 w-3/4"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/4">Nombre persona</label>
          <input
            type="text"
            name="nombre_persona"
            placeholder="Nombre completo"
            onChange={this.handleChange}
            value={this.state.form.nombre_persona}
            className="border border-gray-300 rounded px-3 py-2 w-3/4"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/4">Teléfono</label>
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            onChange={this.handleChange}
            value={this.state.form.telefono}
            className="border border-gray-300 rounded px-3 py-2 w-3/4"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/4">Fecha renovación</label>
          <input
            type="text"
            name="fecha_renovacion"
            placeholder="Fecha de renovación"
            onChange={this.handleChange}
            value={this.state.form.fecha_renovacion}
            className="border border-gray-300 rounded px-3 py-2 w-3/4"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/4">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            onChange={this.handleChange}
            value={this.state.form.email}
            className="border border-gray-300 rounded px-3 py-2 w-3/4"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/4">Contraseña</label>
          <input
            type="text"
            name="password"
            placeholder="Ingrese correo predeterminado"
            onChange={this.handleChange}
            value={this.state.form.password}
            className="border border-gray-300 rounded px-3 py-2 w-3/4"
          />
        </div>
        <div className="flex justify-center">
          <button className={this.state.btnClass} onClick={this.onFormSubmit}>
            {this.state.btnName}
          </button>
        </div>
      </form>
    );
  }
}

export default FormManager;
