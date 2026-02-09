import React from "react";
import Header from "./components/header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import CardProduk from "./components/Card.jsx";
import mieGoreng from "./img/MieGorengJagoan.jpg";
import nasgorSosis from "./img/NasiGorengSosis.jpg";
import nasgorTelur from "./img/NasiGorengTelur.jpg";
import logo from "./img/logo.png";
import "./App.css";

function App() {
  const produkList = [
    {
      name: "Nasi Goreng Sosis",
      price: "10.000",
      description:
        "Nasi goreng dengan topping sosis, sayuran dan kerupuk",
      image: nasgorSosis,
    },
    {
      name: "Nasi Goreng Telur",
      price: "10.000",
      description:
        "Nasi goreng dengan topping telur, sayuran dan kerupuk",
      image: nasgorTelur,
    },
    {
      name: "Mie Jagoan",
      price: "10.000",
      description: "Mie ayam gurih dengan udang dan sawi segar.",
      image: mieGoreng,
    },
  ];

  return (
    <>
      <Header />
      <Hero />

      <div className="produk-container">
        {produkList.map((produk, index) => (
          <CardProduk
            key={index}
            name={produk.name}
            price={produk.price}
            description={produk.description}
            image={produk.image}
            whatsappNumber={"6282231637899"}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
