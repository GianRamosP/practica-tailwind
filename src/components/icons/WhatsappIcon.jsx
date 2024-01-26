import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  const phoneNumber = "+51987652903";

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        padding: "10px",
        borderRadius: "50%",
        zIndex: "1000",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        textDecoration: "none",
        color: "#FFF",
      }}
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsappIcon;
