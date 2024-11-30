// import { useEffect, useState } from "react";
// import { buscarUsuarios, deleteUsuario } from "../services/ApiService";
// import { useNavigate } from "react-router-dom";
// import { Modal } from "react-bootstrap";

// function UsuariosLista() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const listarUsuarios = async () => {
//       const { data } = await buscarUsuarios();
//       setUsuarios(data);
//     };
//     listarUsuarios();
//   }, []);

//   const deleteUser = async () => {
//     if (userToDelete) {
//       await deleteUsuario(userToDelete);
//       setUsuarios((u) => u.filter((user) => user.id !== userToDelete));
//       setShowModal(false);
//     }
//   };

//   const handleDeleteClick = (id) => {
//     setUserToDelete(id);
//     setShowModal(true);
//   };

//   return (
//     <div className="container py-5">
//       <h2 className="mb-5 text-center text-primary font-weight-bold">Lista de Usuários</h2>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {usuarios.map((usuario) => (
//           <div key={usuario.id} className="col">
//             <div className="card shadow-lg border-0 rounded-3 overflow-hidden h-100">
//               <div className="card-img-top d-flex justify-content-center">
//                 <img
//                   src="https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg"
//                   alt={usuario.nome}
//                   className="rounded-circle mt-3"
//                   style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                 />
//               </div>

//               <div className="card-body">
//                 <h5 className="card-title text-center text-dark">{usuario.nome_completo}</h5>
//                 <p className="card-text text-muted text-center">
//                   <strong>Email:</strong> {usuario.email} <br />
//                   <strong>Perfil:</strong> {usuario.perfil}
//                 </p>
//               </div>

//               <div className="card-footer d-flex justify-content-around align-items-center bg-light border-top-0">
//                 <button
//                   className="btn btn-primary btn-sm rounded-pill"
//                   onClick={() => navigate(`/usuarios-form/${usuario.id}`)}
//                 >
//                   <i className="bi bi-pencil-square"></i> Editar
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm rounded-pill"
//                   onClick={() => handleDeleteClick(usuario.id)}
//                 >
//                   <i className="bi bi-trash"></i> Excluir
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirmar Exclusão</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Você tem certeza de que deseja excluir usuário?
//         </Modal.Body>
//         <Modal.Footer>
//           <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
//             Cancelar
//           </button>
//           <button className="btn btn-danger" onClick={deleteUser}>
//             Confirmar Exclusão
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default UsuariosLista;


////////////////////funcioando ;////////////////////////////////

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext"; // Importe o contexto
// import { buscarUsuarios, deleteUsuario } from "../services/ApiService"; // Função de API
// import { useNavigate } from "react-router-dom";

// function UsuariosLista() {
//   const { token } = useContext(AuthContext); // Acesse o token do contexto
//   const [usuarios, setUsuarios] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);
//   const navigate = useNavigate();

//   console.log(token);

//   useEffect(() => {
//     const listarUsuarios = async () => {
//       try {
//         // Verifique se o token existe
//         if (!token) {
//           alert("Você não está autenticado. Faça login novamente.");
//           navigate("/login"); // Redirecione para a página de login se não houver token
//           return;
//         }

//         // Envie o token no cabeçalho da requisição
//         const response = await buscarUsuarios(token);
//         setUsuarios(response.data);
//       } catch (error) {
//         console.error("Erro ao buscar usuários:", error);
//         // Trate outros erros aqui, como a resposta 401
//         if (error.response && error.response.status === 401) {
//           alert("Sessão expirada. Faça login novamente.");
//           navigate("/login"); // Redirecione para o login caso o token seja inválido
//         }
//       }
//     };
//     listarUsuarios();
//   }, [token, navigate]); // Adicione 'token' e 'navigate' ao array de dependências

//   const handleDeleteClick = (id) => {
//     setUserToDelete(id);
//     setShowModal(true);
//   };

//   const deleteUser = async () => {
//     if (userToDelete) {
//       try {
//         await deleteUsuario(userToDelete, token); // Passa o ID e token para a API
//         setUsuarios((u) => u.filter((user) => user.id !== userToDelete)); // Remove o usuário da lista
//         setShowModal(false); // Fecha o modal
//       } catch (error) {
//         console.error("Erro ao excluir usuário:", error);
//         alert("Ocorreu um erro ao excluir o usuário.");
//       }
//     }
//   };

//   return (
//     <div className="container py-5">
//       <h2 className="mb-5 text-center text-primary font-weight-bold">
//         Lista de Usuários
//       </h2>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {usuarios.map((usuario) => (
//           <div key={usuario.id} className="col">
//             <div className="card shadow-lg border-0 rounded-3 overflow-hidden h-100">
//               <div className="card-img-top d-flex justify-content-center">
//                 <img
//                   src={
//                     usuario.imagem ||
//                     "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg"
//                   }
//                   alt={usuario.nome_completo}
//                   className="rounded-circle mt-3"
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>

//               <div className="card-body">
//                 <h5 className="card-title text-center text-dark">
//                   {usuario.nome_completo}
//                 </h5>
//                 <p className="card-text text-muted text-center">
//                   <strong>Email:</strong> {usuario.email} <br />
//                   <strong>Telefone:</strong> {usuario.telefone} <br />
//                   <strong>Endereço:</strong> {usuario.endereco}
//                 </p>
//               </div>

//               <div className="card-footer d-flex justify-content-around align-items-center bg-light border-top-0">
//                 <button
//                   className="btn btn-primary btn-sm rounded-pill"
//                   onClick={() => navigate(`/usuarios-form/${usuario.id}`)}
//                 >
//                   <i className="bi bi-pencil-square"></i> Editar
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm rounded-pill"
//                   onClick={() => handleDeleteClick(usuario.id)}
//                 >
//                   <i className="bi bi-trash"></i> Excluir
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <div
//           className="modal fade show"
//           style={{ display: "block" }}
//           tabIndex="-1"
//           aria-labelledby="deleteModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="deleteModalLabel">
//                   Confirmar Exclusão
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowModal(false)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 Você tem certeza que deseja excluir este usuário?
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancelar
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={deleteUser}
//                 >
//                   Excluir
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UsuariosLista;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Importe o contexto
import { buscarUsuarios, deleteUsuario } from "../services/ApiService"; // Função de API
import { useNavigate } from "react-router-dom";

function UsuariosLista() {
  const { token } = useContext(AuthContext); // Acesse o token do contexto
  const [usuarios, setUsuarios] = useState([]);
  const [searchText, setSearchText] = useState(""); // Estado para o texto da busca
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listarUsuarios = async () => {
      try {
        if (!token) {
          alert("Você não está autenticado. Faça login novamente.");
          navigate("/login"); 
          return;
        }

        const response = await buscarUsuarios(token);
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        if (error.response && error.response.status === 401) {
          alert("Sessão expirada. Faça login novamente.");
          navigate("/login");
        }
      }
    };
    listarUsuarios();
  }, [token, navigate]);

  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    setShowModal(true);
  };

  const deleteUser = async () => {
    if (userToDelete) {
      try {
        await deleteUsuario(userToDelete, token); 
        setUsuarios((u) => u.filter((user) => user.id !== userToDelete)); 
        setShowModal(false); 
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        alert("Ocorreu um erro ao excluir o usuário.");
      }
    }
  };

  // Função de filtragem
  const filteredUsuarios = usuarios.filter((usuario) => {
    const searchLowerCase = searchText.toLowerCase();
    return (
      usuario.nome_completo.toLowerCase().includes(searchLowerCase) ||
      usuario.email.toLowerCase().includes(searchLowerCase)
    );
  });

  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center text-primary font-weight-bold">
        Lista de Usuários
      </h2>

      {/* Campo de busca */}
      <div className="mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Pesquisar por nome ou email..."
          className="form-control"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredUsuarios.map((usuario) => (
          <div key={usuario.id} className="col">
            <div className="card shadow-lg border-0 rounded-3 overflow-hidden h-100">
              <div className="card-img-top d-flex justify-content-center">
                <img
                  src={
                    usuario.imagem ||
                    "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg"
                  }
                  alt={usuario.nome_completo}
                  className="rounded-circle mt-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-center text-dark">
                  {usuario.nome_completo}
                </h5>
                <p className="card-text text-muted text-center">
                  <strong>Email:</strong> {usuario.email} <br />
                  <strong>Telefone:</strong> {usuario.telefone} <br />
                  <strong>Endereço:</strong> {usuario.endereco}
                </p>
              </div>

              <div className="card-footer d-flex justify-content-around align-items-center bg-light border-top-0">
                <button
                  className="btn btn-primary btn-sm rounded-pill"
                  onClick={() => navigate(`/usuarios-form/${usuario.id}`)}
                >
                  <i className="bi bi-pencil-square"></i> Editar
                </button>
                <button
                  className="btn btn-danger btn-sm rounded-pill"
                  onClick={() => handleDeleteClick(usuario.id)}
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
                Você tem certeza que deseja excluir este usuário?
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
                  onClick={deleteUser}
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

export default UsuariosLista;

