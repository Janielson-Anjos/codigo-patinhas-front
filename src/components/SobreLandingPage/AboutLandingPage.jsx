import React from "react";
import imagem from "../../assets/image/aboutus.jpg";

function AboutSection() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="mb-4">Sobre Nós</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={imagem} // Substitua com a imagem da empresa
              alt="Imagem sobre a empresa"
              className="img-fluid rounded"
              style={{width: '500px', height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6" style={{paddingRight:'80px'}}>
            <h3 className="mb-3" style={{ fontSize: "20px" }}>
              Transformando Vidas, Conectando Corações
            </h3>
            <p className="lead">
              Somos um abrigo dedicado a dar uma segunda chance aos animais que
              precisam de um lar. Nossa missão é facilitar a adoção responsável,
              oferecendo uma experiência simples, transparente e acolhedora
              tanto para os pets quanto para seus novos donos.
            </p>
            <p>
              Nosso compromisso vai além de encontrar um lar para cada animal.
              Oferecemos suporte contínuo, orientações sobre cuidados,
              alimentação e saúde, garantindo que cada pet tenha uma vida feliz
              e saudável com sua nova família. Acreditamos que cada animal
              merece amor, e cada adotante merece um companheiro leal. Junte-se
              a nós na missão de transformar a vida de um pet e trazer mais
              felicidade para o seu lar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
