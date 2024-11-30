// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdocaoAdmin = () => {
//   const [pets, setPets] = useState([]);
//   const [adotantes, setAdotantes] = useState([]);
//   const [selectedPet, setSelectedPet] = useState("");
//   const [selectedAdotante, setSelectedAdotante] = useState("");
//   const [message, setMessage] = useState("");
//   const BASE_URL = import.meta.env.VITE_API_URL;
//   // Carregar pets e adotantes ao montar o componente
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [petsRes, adotantesRes] = await Promise.all([
//           axios.get(`${BASE_URL}pet`),
//           axios.get(`${BASE_URL}usuario`),
//         ]);

//         setPets(petsRes.data);
//         setAdotantes(adotantesRes.data);
//       } catch (error) {
//         console.error("Erro ao buscar dados:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAdocao = async () => {
//     if (!selectedPet || !selectedAdotante) {
//       setMessage("Por favor, selecione um pet e um adotante.");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}adocao`, {
//         pet_id: selectedPet,
//         adotante_id: selectedAdotante,
//       });
//       setMessage("Adoção criada com sucesso!");
//       setSelectedPet("");
//       setSelectedAdotante("");
//     } catch (error) {
//       console.error("Erro ao criar adoção:", error);
//       setMessage("Erro ao criar adoção.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Criar Adoção</h2>
//       <div style={styles.formGroup}>
//         <label htmlFor="pet" style={styles.label}>Selecione o Pet:</label>
//         <select
//           id="pet"
//           value={selectedPet}
//           onChange={(e) => setSelectedPet(e.target.value)}
//           style={styles.select}
//         >
//           <option value="">Selecione um pet</option>
//           {pets.map((pet) => (
//             <option key={pet.id} value={pet.id}>
//               {pet.nome}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div style={styles.formGroup}>
//         <label htmlFor="adotante" style={styles.label}>Selecione o Adotante:</label>
//         <select
//           id="adotante"
//           value={selectedAdotante}
//           onChange={(e) => setSelectedAdotante(e.target.value)}
//           style={styles.select}
//         >
//           <option value="">Selecione um adotante</option>
//           {adotantes.map((adotante) => (
//             <option key={adotante.id} value={adotante.id}>
//               {adotante.nome}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button onClick={handleAdocao} style={styles.button}>
//         Criar Adoção
//       </button>

//       {message && <p style={styles.message}>{message}</p>}
//     </div>
//   );
// };

// // Estilo simples inline
// const styles = {
//   container: {
//     maxWidth: "500px",
//     margin: "0 auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     textAlign: "center",
//     color: "#333",
//   },
//   formGroup: {
//     marginBottom: "20px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "8px",
//     fontWeight: "bold",
//   },
//   select: {
//     width: "100%",
//     padding: "8px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     display: "block",
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   message: {
//     marginTop: "20px",
//     textAlign: "center",
//     color: "#333",
//   },
// };

// export default AdocaoAdmin;


import React, { useState, useEffect } from "react";
import { buscarPets, buscarUsuarios } from "../services/ApiService";
import axios from "axios";

const AdocaoAdmin = () => {
  const [pets, setPets] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedUsuario, setSelectedUsuario] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const token = localStorage.getItem("token");

        // Buscar pets
        const petsData = await buscarPets();
        const petsDisponiveis = petsData.filter((pet) => pet.status === "disponivel");
        setPets(petsDisponiveis);

        // Buscar usuários
        const usuariosResponse = await buscarUsuarios(token);
        console.log(usuariosResponse.data);
        
        setUsuarios(usuariosResponse.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setMessage("Erro ao carregar dados.");
      }
    };

    carregarDados();
  }, []);

  const handleAdocao = async () => {
    if (!selectedPet || !selectedUsuario) {
      setMessage("Por favor, selecione um pet e um usuário.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_URL}/adocao`,
        {
          pet_id: selectedPet,
          adotante_id: selectedUsuario,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Adoção criada com sucesso!");
      setSelectedPet("");
      setSelectedUsuario("");
    } catch (error) {
      console.error("Erro ao criar adoção:", error);
      setMessage("Erro ao criar adoção.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Criar Adoção</h2>
      <div style={styles.formGroup}>
        <label htmlFor="pet" style={styles.label}>Selecione o Pet:</label>
        <select
          id="pet"
          value={selectedPet}
          onChange={(e) => setSelectedPet(e.target.value)}
          style={styles.select}
        >
          <option value="">Selecione um pet</option>
          {pets.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.nome}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="usuario" style={styles.label}>Selecione o Usuário:</label>
        <select
          id="usuario"
          value={selectedUsuario}
          onChange={(e) => setSelectedUsuario(e.target.value)}
          style={styles.select}
        >
          <option value="">Selecione um usuário</option>
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nome_completo}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleAdocao} style={styles.button}>
        Criar Adoção
      </button>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

// Estilo inline
const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  select: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  message: {
    marginTop: "20px",
    textAlign: "center",
    color: "#333",
  },
};

export default AdocaoAdmin;
