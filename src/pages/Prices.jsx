import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AwardCard from '../components/AwardCard';

export default function Prices() {
  return (
    <>
    <Header></Header>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <h2 className="text-2xl font-semibold mb-4">Nuestros Premios y Reconocimientos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AwardCard
          imagen="url_de_la_imagen"
          alt="Descripción de la imagen"
          titulo="Nombre del Premio"
          descripcion="Descripción del premio o reconocimiento."
          fecha="Año de obtención"
        />
        <AwardCard
          imagen="url_de_la_imagen"
          alt="Descripción de la imagen"
          titulo="Nombre del Premio"
          descripcion="Descripción del premio o reconocimiento."
          fecha="Año de obtención"
        />
      </div>
    </div>


    </div>
      <Footer></Footer>
    </>
  );
}

