import React from "react";
import "./AdditionalLandingPage.css";
import imagem from "../../assets/image/additional.png";
import imagemicone from "../../assets/image/icone-logo.png";

const AdditionalLandingPage = () => {
  return (
    <div className="Additional-container">
      <section className="Additional">
        <div className="Additional-content">
          <h2>
            Adote um pet{" "}
            <span className="highlight">
              <img src={imagemicone} alt="" />
            </span>
          </h2>
          <h3>Precisamos de ajuda, eles também.</h3>
          <p>
            Adote um animal de estimação e dê-lhe um lar, ele retribuirá o seu
            amor incondicionalmente.
          </p>
          <a href="#acessar" className="hero-button">
          Adote Agora
          </a>
        </div>
        <div className="hero-image">
          <img src={imagem} alt="Cachorro e Gato" />
        </div>
      </section>
    </div>
  );
};

export default AdditionalLandingPage;
