// import { Link } from "react-router-dom";
// import { BsCalendar2Check, BsHouse, BsPeople, BsPersonPlus } from "react-icons/bs";
// import logo from "../assets/image/logo-branca.png";

// function Header() {
//   return (
//     <header className="bg-dark text-dark">
//       <div className="container">
//         <nav className="navbar navbar-expand navbar-dark">
//           <Link to="/" className="navbar-brand">
//             <img src={logo} alt="" />
//           </Link>
//           <div className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 <BsHouse className="me-2" /> Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/usuarios-list" className="nav-link">
//                 <BsPeople className="me-2" /> Usuários
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/usuarios-form" className="nav-link">
//                 <BsPersonPlus className="me-2" /> Cadastrar
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/agendamentos" className="nav-link">
//                 <BsCalendar2Check className="me-2" /> Agendamentos
//               </Link>
//             </li>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BsCalendar2Check, BsHouse, BsPeople, BsPersonPlus } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { AuthContext } from "../contexts/AuthContext";
import logo from "../assets/image/logo-branca.png";

function Header() {
  const { isAdmin, signOut } = useContext(AuthContext); // Acesso ao contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/login"); // Redirecionar para o login após logout
  };

  return (
    <header className="bg-dark text-dark">
      <div className="container">
        <nav className="navbar navbar-expand navbar-dark">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="navbar-nav ms-auto">
            {isAdmin ? (
              // Links do admin
              <>
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    <BsHouse className="me-2" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/usuarios-list" className="nav-link">
                    <BsPeople className="me-2" /> Usuários
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/usuarios-form" className="nav-link">
                    <BsPersonPlus className="me-2" /> Cadastrar Usuário
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pets-list" className="nav-link">
                    <MdPets className="me-2" /> Pets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pets-form" className="nav-link">
                    <MdPets className="me-2" /> Cadastrar Pets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/adocao-form" className="nav-link">
                    <BsCalendar2Check className="me-2" /> Adoção
                  </Link>
                </li>
              </>
            ) : (
              // Links do usuário comum
              <>
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    <BsHouse className="me-2" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/meus-pets" className="nav-link">
                    <BsPeople className="me-2" /> Meus Pets
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-outline-light ms-3">
                Logout
              </button>
            </li>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
