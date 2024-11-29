// import axios from "axios";

// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

// console.log(import.meta.env.VITE_API_URL)

// export const buscarUsuarios = () => api.get('/usuario');
// export const buscarUsuarioPorId = (id) => api.get(`/usuario/${id}`)
// export const salvarUsuario = (usuario) => api.post(`/usuario`, usuario)
// export const deleteUsuario = (id) => api.delete(`/usuario/${id}`)
// export const editarUsuario = (usuario, id) => api.put(`/usuario/${id}`, usuario)

// export const buscarPets = () => api.get('/pet');
// export const buscarPetPorId = (id) => api.get(`/pet/${id}`)
// export const salvarPet = (pet) => api.post(`/pet`, pet)
// export const editarPet = (pet, id) => api.put(`/pet/${id}`, pet)
// export const excluirPet = (id) => api.delete(`/pet/${id}`)

// export const login = (email, senha) => api.post(`/login`, {email, senha})


// export const buscarAgendamentos = () => api.get('/agendamentos');
// export const buscarAgendamentoPorId = (id) => api.get(`/agendamentos/${id}`)
// export const salvarAgendamento = (agendamento) => api.post(`/agendamentos`, agendamento)
// export const editarAgendamento = (agendamento, id) => api.put(`/agendamentos/${id}`, agendamento)
// export const excluirAgendamento = (id) => api.delete(`/agendamentos/${id}`)


// const testLogin = async () => {
//     const email = "testando@test.com"; // Substitua pelo email que deseja testar
//     const senha = "12345"; // Substitua pela senha correspondente
//     try {
//         // Chamando a função de login com os dados de teste
//         const response = await login(email, senha);
        
//         // Verificando a resposta da API
//         console.log("Login bem-sucedido:", response.data);
//     } catch (error) {
//         // Tratando erro caso a requisição falhe
//         console.error("Erro no login:", error.response ? error.response.data : error.message);
//     }
// };

// // Executando o teste de login
// testLogin();



// import axios from 'axios';
// import { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext'; // ou o caminho correto para o seu contexto

// const useAxios = () => {
//     const { getToken } = useContext(AuthContext);

//     const api = axios.create({
//         baseURL: 'import.meta.env.VITE_API_URL',  // Altere para o endereço da sua API
//         headers: {
//                     'Content-Type': 'application/json',
//                 },
//     });

//     // Interceptador de requisição para incluir o token no cabeçalho
//     api.interceptors.request.use(
//         (config) => {
//             const token = getToken();
//             if (token) {
//                 config.headers['Authorization'] = `Bearer ${token}`;
//             }
//             return config;
//         },
//         (error) => {
//             return Promise.reject(error);
//         }
//     );

//     return api;
// }

// export default useAxios;





import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const buscarUsuarios = () => api.get('/usuario');
export const buscarUsuarioPorId = (id) => api.get(`/usuario/${id}`)
export const salvarUsuario = (usuario) => api.post(`/usuario`, usuario)
export const deleteUsuario = (id) => api.delete(`/usuario/${id}`)
export const editarUsuario = (usuario, id) => api.put(`/usuario/${id}`, usuario)

// export const buscarPets = () => api.get('/pet');
export const buscarPetPorId = (id) => api.get(`/pet/${id}`)
export const salvarPet = (pet) => api.post(`/pet`, pet)
export const editarPet = (pet, id) => api.put(`/pet/${id}`, pet)
export const excluirPet = (id) => api.delete(`/pet/${id}`)

export const login = (email, senha) => api.post(`/login`, {email, senha})


export const buscarAgendamentos = () => api.get('/agendamentos');
export const buscarAgendamentoPorId = (id) => api.get(`/agendamentos/${id}`)
export const salvarAgendamento = (agendamento) => api.post(`/agendamentos`, agendamento)
export const editarAgendamento = (agendamento, id) => api.put(`/agendamentos/${id}`, agendamento)
export const excluirAgendamento = (id) => api.delete(`/agendamentos/${id}`)

export const buscarPets = async () => {
    try {
      const response = await api.get('/pets');  // Aqui estamos utilizando a instância 'api'
      return response.data;  // Retorna os dados dos pets
    } catch (error) {
      console.error("Erro ao buscar os pets:", error);
      throw error;  // Lança o erro para ser tratado no componente
    }
  };


// const testLogin = async () => {
//     const email = "testando@test.com"; 
//     const senha = "12345"; 
//     try {
        
//         const response = await api.post(`/login`, { email, senha });
//         console.log("Login bem-sucedido:", response.data);
//     } catch (error) {
        
//         console.error("Erro no login:", error.response ? error.response.data : error.message);
//     }
// };

// testLogin();
