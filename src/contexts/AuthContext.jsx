import { createContext, useState } from "react";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [usuarioId, setUsuarioId] = useState();
    const [token, setToken] = useState();

    const sign = (data) => {
        setUsuarioId(data.id);
        setToken(data.token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("token", data.token);
    }

    return (
        <AuthContext.Provider value={{ usuarioId, token, sign}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;