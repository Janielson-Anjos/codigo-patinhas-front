// import { createContext, useState } from "react";


// export const AuthContext = createContext();


// const AuthProvider = ({children}) => {

//     const [usuarioId, setUsuarioId] = useState();
//     const [token, setToken] = useState();

//     const sign = (data) => {
//         setUsuarioId(data.id);
//         setToken(data.token);
//         localStorage.setItem("id", data.id);
//         localStorage.setItem("token", data.token);
//     }

//     const getToken = () => {
//         return token || localStorage.getItem("token");
//     }

//     return (
//         <AuthContext.Provider value={{ usuarioId, token, sign, getToken}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthProvider;

import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuarioId, setUsuarioId] = useState(localStorage.getItem("id") || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  const sign = (data) => {
    setUsuarioId(data.id);
    setToken(data.token);
    setRole(data.role); // Adiciona o papel do usuário
    localStorage.setItem("id", data.id);
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role); // Salva o papel no localStorage
  };

  const signOut = () => {
    setUsuarioId(null);
    setToken(null);
    setRole(null);
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  const getRole = () => {
    return role || localStorage.getItem("role");
  };

  const isAdmin = role === "admin";

  return (
    <AuthContext.Provider value={{ usuarioId, token, role, sign, signOut, getRole, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
