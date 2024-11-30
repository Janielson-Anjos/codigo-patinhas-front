import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Importe o contexto
import { buscarPets, deletePet } from "../services/ApiService"; // Função de API
import { useNavigate } from "react-router-dom";

function PetsLista() {
  const { token } = useContext(AuthContext); // Acesse o token do contexto
  const [pets, setPets] = useState([]);
  const [searchText, setSearchText] = useState(""); // Estado para o texto da busca
  const [showModal, setShowModal] = useState(false);
  const [petToDelete, setPetToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listarPets = async () => {
      try {
        if (!token) {
          alert("Você não está autenticado. Faça login novamente.");
          navigate("/login");
          return;
        }

        const response = await buscarPets(token);
        setPets(response.data);
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
        if (error.response && error.response.status === 401) {
          alert("Sessão expirada. Faça login novamente.");
          navigate("/login");
        }
      }
    };
    listarPets();
  }, [token, navigate]);

  const handleDeleteClick = (id) => {
    setPetToDelete(id);
    setShowModal(true);
  };

  const deletePetHandler = async () => {
    if (petToDelete) {
      try {
        await deletePet(petToDelete, token);
        setPets((p) => p.filter((pet) => pet.id !== petToDelete));
        setShowModal(false);
      } catch (error) {
        console.error("Erro ao excluir pet:", error);
        alert("Ocorreu um erro ao excluir o pet.");
      }
    }
  };

  // Função de filtragem
  const filteredPets = pets.filter((pet) => {
    const searchLowerCase = searchText.toLowerCase();
    return (
      pet.nome.toLowerCase().includes(searchLowerCase) ||
      pet.descricao.toLowerCase().includes(searchLowerCase)
    );
  });

  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center text-primary font-weight-bold">
        Lista de Pets
      </h2>

      {/* Campo de busca */}
      <div className="mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Pesquisar por nome ou descrição..."
          className="form-control"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="col">
            <div className="card shadow-lg border-0 rounded-3 overflow-hidden h-100">
              <div className="card-img-top d-flex justify-content-center">
                <img
                  src={
                    pet.imagens[0] ||
                    "https://via.placeholder.com/150"
                  }
                  alt={pet.nome}
                  className="rounded-circle mt-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-center text-dark">{pet.nome}</h5>
                <p className="card-text text-muted text-center">
                  <strong>Espécie:</strong> {pet.especie} <br />
                  <strong>Idade:</strong> {pet.idade} anos <br />
                  <strong>Status:</strong> {pet.status} <br />
                  <strong>Descrição:</strong> {pet.descricao}
                </p>
              </div>

              <div className="card-footer d-flex justify-content-around align-items-center bg-light border-top-0">
                <button
                  className="btn btn-primary btn-sm rounded-pill"
                  onClick={() => navigate(`/pets-form/${pet.id}`)}
                >
                  <i className="bi bi-pencil-square"></i> Editar
                </button>
                <button
                  className="btn btn-danger btn-sm rounded-pill"
                  onClick={() => handleDeleteClick(pet.id)}
                >
                  <i className="bi bi-trash"></i> Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Confirmar Exclusão
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                Você tem certeza que deseja excluir este pet?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deletePetHandler}
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PetsLista;
