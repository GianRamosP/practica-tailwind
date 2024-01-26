import { Link } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import WhyUsImg from "../assets/images/rooms/whyus_img.jpg";
import habitacion from "../assets/images/rooms/habitacion.jpg";
import ButtonWhite from "../components/buttons/ButtonWhite";
import Line from "../components/Line";
import buffet from "../assets/images/amenities/buffetcomida.jpg";
import Vision from "../assets/icons/icon_vision.png";
import Mission from "../assets/icons/icon_mission.png";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/icons/WhatsappIcon";

export default function WhyUs() {
  return (
    <>
      <Header />
      <div style={{ position: "relative" }}>
        <img
          src={WhyUsImg}
          alt=""
          style={{
            width: "100%",
            height: "800px",
            objectFit: "cover",
          }}
        />
        <h2
          className="mt-[32px] text-center text-[36px] font-bold"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
          }}
        >
          CONOCE MAS SOBRE NOSOTROS
        </h2>
      </div>

      <section>
        <div className="flex w-full items-center justify-between bg-white p-10 text-black">
          <div className="flex w-[486px] flex-col">
            <h2 className="text-[36px] font-bold">¿Por qué hotel ...?</h2>
            <Line />
            <p className="text-[18px] text-text">
              Somos una firma hotelera establecida en febrero de 9999, centrada
              en brindar a nuestros visitantes una experiencia de viaje
              excepcional. Incorporamos las características distintivas de cada
              ubicación en la que estamos presentes, abarcando desde la
              arquitectura y decoración hasta la gastronomía, las actividades y
              la música. De este modo, ofrecemos a nuestros huéspedes una
              experiencia de viaje verdaderamente singular.
            </p>
            <ButtonWhite />
          </div>
          <img
            src={buffet}
            alt="Imagen de habitación"
            className="ml-4 w-1/2"
          ></img>
        </div>
        <h2 className="mt-[150px] text-center text-[36px] font-bold">
          Visión y misión
        </h2>
        <div className="mx-auto mb-[120px] flex justify-around">
          <div className="my-[66px] flex w-[25%] flex-col items-center">
            <img src={Vision} alt="" />
            <p>Destino de preferencia para experiencias excepcionales.</p>
          </div>
          <div className="my-[66px] flex w-[25%] flex-col items-center">
            <img src={Mission} alt="" />
            <p>
              Ofrecer estancias inigualables con atención meticulosa. Superar
              expectativas con autenticidad y calidez.
            </p>
          </div>
        </div>
        <h2 className="text-center text-[36px] font-bold">Nuestros logros</h2>
        <div className="my-20 flex justify-around p-10">
          <div className="h-[410px] w-[350px] bg-red-200">
            <h2>Logro # ...</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="h-[410px] w-[350px] bg-red-200">
            <h2>Logro # ...</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="h-[410px] w-[350px] bg-red-200">
            <h2>Logro # ...</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </section>
      <WhatsappIcon />
      <Footer />
    </>
  );
}
