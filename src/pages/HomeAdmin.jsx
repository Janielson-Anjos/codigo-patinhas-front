import { Link } from "react-router-dom";

function HomeAdmin() {
  return (
    <div className="home">
      <section
        className="hero-section text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1920x1080/?technology,teamwork')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold">Bem-vindo</h1>
          <p className="lead my-4 text-dark">
            Simplifique sua gestão de usuários e pets de forma fácil e intuitivas.
          </p>
          <Link to="/usuarios-list" className="btn btn-success btn-lg">
            Começar Agora
          </Link>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-5">O que você pode fazer</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="feature-card shadow p-4">
                <i className="bi bi-person-plus-fill text-primary fs-1 mb-3"></i>
                <h5>Cadastrar Usuários</h5>
                <p>
                  Adicione novos usuários facilmente com nosso formulário simples.
                </p>
                <Link to="/usuarios-form" className="btn btn-outline-primary">
                  Cadastrar
                </Link>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-card shadow p-4">
                <i className="bi bi-people-fill text-success fs-1 mb-3"></i>
                <h5>Gerenciar Usuários</h5>
                <p>
                  Edite, exclua ou visualize usuários cadastrados rapidamente.
                </p>
                <Link to="/usuarios-list" className="btn btn-outline-success">
                  Gerenciar
                </Link>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-card shadow p-4">
                <i className="bi bi-person-plus-fill text-warning fs-1 mb-3"></i>
                <h5>Cadastrar Pets</h5>
                <p>
                Adicione novos pets facilmente com nosso formulário simples.
                </p>
                <Link to="/pets-form" className="btn btn-outline-warning">
                  Cadastrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeAdmin;
