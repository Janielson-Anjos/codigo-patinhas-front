import React from "react";
import "./HeroSection.css";
import imagem from "../../assets/image/dog-cat.png";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Encontre o Seu <span className="highlight">Melhor Amigo</span> Hoje!
          {/* <span className="highlight">melhor amigo</span> */}
        </h1>
        <p>
          Transforme a vida de um pet adotando com facilidade e segurança. Nosso
          abrigo modernizou o processo de adoção, conectando você ao seu novo
          companheiro de maneira rápida e sem burocracia.
        </p>
        <a href="#acessar" className="hero-button">
        Conheça Nossos Pets
        </a>
      </div>
      <div className="hero-image">
        <img src={imagem} alt="Cachorro e Gato" />
      </div>
    </section>
  );
};

export default HeroSection;
