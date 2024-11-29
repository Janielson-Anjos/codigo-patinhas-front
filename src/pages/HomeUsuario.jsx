// import { Link } from "react-router-dom";
// import PetCards from "../components/CardPets/CardPets.jsx";

// function HomeUsuario() {
//   return (
//     <div className="" style={{ display: "flex", flexDirection:"column", gap: "80px", marginTop:"20px"}}>
//       <section>
//         <div className="container">
//           <PetCards />
//         </div>
//       </section>

//       <section className="features py-5">
//         <div className="container">
//           <h2 className="text-center mb-5">Desejo ver</h2>
//           <div className="row g-4 d-flex justify-content-center">
//             <div className="col-md-4 text-center ">
//               <div className="feature-card shadow p-4">
//                 <i className="bi bi-person-circle text-success fs-1 mb-3"></i>
//                 <h5>Meus Pets</h5>
//                 <p>
//                   Veja seu histórico de pets adotados.
//                 </p>
//                 <Link to="/usuarios-form" className="btn btn-outline-success">
//                   Ver mais
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HomeUsuario;


import React, { useState } from "react";
import PetCards from "../components/CardPets/CardPets.jsx";
import { Link } from "react-router-dom";

function HomeUsuario() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="" style={{ display: "flex", flexDirection: "column", gap: "80px", marginTop: "20px" }}>
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <label htmlFor="" style={{ fontSize: "60px", fontWeight:"bold", marginBottom: "10px" }}>Nossos Pets</label>
        
        <div className="container" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Pesquisar por espécie ou status..."
            style={{
              padding: "10px",
              width: "100%",
              maxWidth: "400px",
              marginBottom: "20px",
              textAlign: "center",
              borderRadius:"20px",
              border:"none",
              backgroundColor:"#F8EDE3",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
            }}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <PetCards searchText={searchText} />
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
