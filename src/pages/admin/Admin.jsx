import React from "react";
import Header from "../../components/Header";
import ButtonEdit from "../../components/buttons/ButtonEdit";
import ButtonDelete from "../../components/buttons/ButtonDelete";
import ButtonBlue from "../../components/buttons/ButtonBlue";

export default function Admin() {
  return (
    <>
      <Header />
      <h2 className="font-bold text-[28px]">
        Listado de Propietarios de hoteles
      </h2>
      <ButtonBlue text="Agregar gestor" />
      <div className="mt-[33px]">
        <table className="custom-table w-full">
          <thead>
            <tr>
              <th>N°</th>
              <th>Hotel</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Fecha de renovación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hotel 1</td>
              <td>Juan</td>
              <td>987654321</td>
              <td>12/02/24</td>
              <td>
                <ButtonEdit />
                <ButtonDelete />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Hotel 2</td>
              <td>Orlando</td>
              <td>987654321</td>
              <td>21/02/24</td>
              <td>
                <ButtonEdit />
                <ButtonDelete />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Hotel 3</td>
              <td>Juan</td>
              <td>987654321</td>
              <td>12/02/24</td>
              <td>
                <ButtonEdit />
                <ButtonDelete />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Hotel 4</td>
              <td>Orlando</td>
              <td>987654321</td>
              <td>21/02/24</td>
              <td>
                <ButtonEdit />
                <ButtonDelete />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Hotel 5</td>
              <td>Juan</td>
              <td>987654321</td>
              <td>12/02/24</td>
              <td>
                <ButtonEdit />
                <ButtonDelete />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Hotel 6</td>
              <td>Orlando</td>
              <td>987654321</td>
              <td>21/02/24</td>
              <td>
                <ButtonEdit />
                <ButtonDelete />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Hotel 7</td>
              <td>Juan</td>
              <td>987654321</td>
              <td>12/02/24</td>
              <td>
                <ButtonEdit />
                <ButtonDelete />
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Hotel 8</td>
              <td>Orlando</td>
              <td>987654321</td>
              <td>21/02/24</td>
              <td>
                <ButtonEdit />
                <ButtonDelete />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
