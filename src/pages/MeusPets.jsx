import React, { useState } from "react";
import PetCards from "../components/CardPets/CardPets.jsx";
import { Link } from "react-router-dom";
import MeusPetsAdotados from "../components/MeusPetsAdotados/MeusPetsAdotados.jsx";

function HomeUsuario() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        marginTop: "20px",
      }}
    >
      <section>
        <div className="container">
          <MeusPetsAdotados />
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-5">Desejo ver</h2>
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-md-4 text-center">
              <div className="feature-card shadow p-4">
                <i className="bi bi-person-circle text-success fs-1 mb-3"></i>
                <h5>Meus Pets</h5>
                <p>Veja seu histórico de pets adotados.</p>
                <Link to="/usuarios-form" className="btn btn-outline-success">
                  Ver mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeUsuario;
