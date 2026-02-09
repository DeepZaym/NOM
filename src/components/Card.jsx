import React from "react";
import "./Card.css";

const Card = ({ name, price, description, image, whatsappNumber }) => {
  const message = encodeURIComponent(`Halo, saya mau pesan ${name}`);
  const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>Rp {price}</h4>
        <div className="card-buttons">
          <a
            className="btn whatsapp"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order via WhatsApp
          </a>
          <button className="btn">Deskripsi</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
