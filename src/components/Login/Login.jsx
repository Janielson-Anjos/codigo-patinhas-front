// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import { HiOutlineArrowRight } from "react-icons/hi";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await login(email, senha);
//       if (response.status !== 200) {
//         setError(true);
//         return;
//       }
//       sign(response.data);
//       navigate("/");
//     } catch (error) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="login-conteudo">
//       <div className="glass-effect">
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//           <div
//             className="card p-4 shadow"
//             style={{ width: "100%", maxWidth: "400px" }}
//           >
//             <h2 className="text-center mb-4">Login</h2>
//             <form onSubmit={handleLogin}>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Digite seu email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="senha" className="form-label">
//                   Senha
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Digite sua senha"
//                   value={senha}
//                   onChange={(e) => setSenha(e.target.value)}
//                 />
//               </div>
//               {error && (
//                 <label style={{ color: "red" }}>
//                   Email ou senha incorretos
//                 </label>
//               )}
//               <button type="submit" className="btn-cta-login">
//                 Entrar
//               </button>{" "}
//             </form>
//             <br />
//             <a className="link-cadastro" href="cadastro.html">Desejo fazer cadastro <HiOutlineArrowRight style={{ fontSize: '18px'}} /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Login.css";
// import { HiOutlineArrowRight } from "react-icons/hi";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [confirmarSenha, setConfirmarSenha] = useState("");
//   const [nomeCompleto, setNomeCompleto] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [endereco, setEndereco] = useState("");
//   const [error, setError] = useState(false);
//   const [senhaErro, setSenhaErro] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const isCadastro = location.pathname === "/cadastro";

//   const handleFormToggle = () => {
//     if (isCadastro) {
//       navigate("/login");
//     } else {
//       navigate("/cadastro");
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login(email, senha); // Função de login (adicione sua lógica aqui)
//       if (response.status !== 200) {
//         setError(true);
//         return;
//       }
//       sign(response.data); // Salvar token ou usuário logado
//       navigate("/");
//     } catch (error) {
//       setError(true);
//     }
//   };

//   const handleCadastro = (e) => {
//     e.preventDefault();

//     // Verifica se as senhas coincidem
//     if (senha !== confirmarSenha) {
//       setSenhaErro(true);
//       return;
//     }

//     setSenhaErro(false);

//     // Lógica para cadastro (substitua com sua API ou backend)
//     console.log({
//       nomeCompleto,
//       email,
//       telefone,
//       endereco,
//       senha,
//     });
//     alert("Cadastro realizado com sucesso!");
//     navigate("/login");
//   };

//   return (
//     <div className="login-conteudo">
//       <div className="glass-effect">
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//           <div
//             className="card p-4 shadow"
//             style={{ width: "100%", maxWidth: "400px" }}
//           >
//             <h2 className="text-center mb-4">
//               {isCadastro ? "Cadastro" : "Login"}
//             </h2>
//             <form onSubmit={isCadastro ? handleCadastro : handleLogin}>
//               {isCadastro && (
//                 <>
//                   <div className="mb-3">
//                     <label htmlFor="nomeCompleto" className="form-label">
//                       Nome completo
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Digite seu nome completo"
//                       value={nomeCompleto}
//                       onChange={(e) => setNomeCompleto(e.target.value)}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="telefone" className="form-label">
//                       Telefone
//                     </label>
//                     <input
//                       type="tel"
//                       className="form-control"
//                       placeholder="Digite seu telefone"
//                       value={telefone}
//                       onChange={(e) => setTelefone(e.target.value)}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="endereco" className="form-label">
//                       Endereço
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Digite seu endereço"
//                       value={endereco}
//                       onChange={(e) => setEndereco(e.target.value)}
//                     />
//                   </div>
//                 </>
//               )}
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Digite seu email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="senha" className="form-label">
//                   {isCadastro ? "Crie sua senha" : "Senha"}
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder={isCadastro ? "Crie sua senha" : "Digite sua senha"}
//                   value={senha}
//                   onChange={(e) => setSenha(e.target.value)}
//                 />
//               </div>
//               {isCadastro && (
//                 <div className="mb-3">
//                   <label htmlFor="confirmarSenha" className="form-label">
//                     Confirme sua senha
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Confirme sua senha"
//                     value={confirmarSenha}
//                     onChange={(e) => setConfirmarSenha(e.target.value)}
//                   />
//                   {senhaErro && (
//                     <label style={{ color: "red" }}>
//                       As senhas não são iguais
//                     </label>
//                   )}
//                 </div>
//               )}
//               {error && !isCadastro && (
//                 <label style={{ color: "red" }}>Email ou senha incorretos</label>
//               )}
//               <button type="submit" className="btn-cta-login">
//                 {isCadastro ? "Cadastrar" : "Entrar"}
//               </button>
//             </form>
//             <br />
//             <a className="link-cadastro" onClick={handleFormToggle}>
//               {isCadastro
//                 ? "Desejo fazer login"
//                 : "Desejo fazer cadastro"}{" "}
//               <HiOutlineArrowRight style={{ fontSize: "18px" }} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


/////////////////////////////// funcionando ////////////////////////////////////

// import { useContext, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Login.css";
// import { HiOutlineArrowRight } from "react-icons/hi";
// import { login, salvarUsuario } from "../../services/ApiService"
// import { AuthContext } from "../../contexts/AuthContext";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [confirmarSenha, setConfirmarSenha] = useState("");
//   const [nome_completo, setNomeCompleto] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [endereco, setEndereco] = useState("");
//   const [error, setError] = useState(false);
//   const [senhaErro, setSenhaErro] = useState(false);
//   const { sign } = useContext(AuthContext)

//   const navigate = useNavigate();
//   const location = useLocation();

//   const isCadastro = location.pathname === "/cadastro";

//   const handleFormToggle = () => {
//     if (isCadastro) {
//       navigate("/login");
//     } else {
//       navigate("/cadastro");
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("entrou aqui");
//     try {
//       const response = await login(email, senha);
//       if (response.status !== 200) {
//         setError(true);
//         return;
//       }
//       sign(response.data);
//       navigate("/home");
//     } catch (error) {
//       setError(true);
//       console.log("2");
      
//     }
//   };

//   const handleCadastro = async (e) => {
//     e.preventDefault();  // Certifique-se de evitar o comportamento padrão
  
//     if (senha !== confirmarSenha) {
//       setSenhaErro(true);
//       return;
//     }
  
//     setSenhaErro(false);
  
//     // Criação do objeto de dados
//     const data = {
//       nome_completo,
//       email,
//       telefone,
//       endereco,
//       senha,
//     };
  
//     try {
//       const response = await salvarUsuario(data);
//       if (response.status !== 201) {
//         setError(true);
//         return;
//       }
//       alert("Cadastro realizado com sucesso!");
//       navigate("/login");  // Navegar para a página de login após sucesso
//     } catch (error) {
//       setError(true);
//       console.log("Erro no cadastro:", error);
//       alert('Erro ao fazer cadastro, reveja os campos e tente novamente');
//     }
//   };

//   return (
//     <div className="login-conteudo">
//       <div className="glass-effect">
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//           <div
//             className={`card p-4 shadow ${
//               isCadastro ? "cadastro-card" : ""
//             }`}
//           >
//             <h2 className="text-center mb-4">
//               {isCadastro ? "Cadastro" : "Login"}
//             </h2>
//             <form onSubmit={isCadastro ? handleCadastro : handleLogin}>
//               {isCadastro && (
//                 <>
//                   <div className="row">
//                     <div className="col-12 mb-3">
//                       <label htmlFor="nome_completo" className="form-label">
//                         Nome completo
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Digite seu nome completo"
//                         value={nome_completo}
//                         onChange={(e) => setNomeCompleto(e.target.value)}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label htmlFor="telefone" className="form-label">
//                         Telefone
//                       </label>
//                       <input
//                         type="tel"
//                         className="form-control"
//                         placeholder="Digite seu telefone"
//                         value={telefone}
//                         onChange={(e) => setTelefone(e.target.value)}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label htmlFor="endereco" className="form-label">
//                         Endereço
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Digite seu endereço"
//                         value={endereco}
//                         onChange={(e) => setEndereco(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Digite seu email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="senha" className="form-label">
//                   {isCadastro ? "Crie sua senha" : "Senha"}
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder={isCadastro ? "Crie sua senha" : "Digite sua senha"}
//                   value={senha}
//                   onChange={(e) => setSenha(e.target.value)}
//                 />
//               </div>
//               {isCadastro && (
//                 <div className="mb-3">
//                   <label htmlFor="confirmarSenha" className="form-label">
//                     Confirme sua senha
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Confirme sua senha"
//                     value={confirmarSenha}
//                     onChange={(e) => setConfirmarSenha(e.target.value)}
//                   />
//                   {senhaErro && (
//                     <label style={{ color: "red" }}>
//                       As senhas não são iguais
//                     </label>
//                   )}
//                 </div>
//               )}
//               {error && !isCadastro && (
//                 <label style={{ color: "red" }}>Email ou senha incorretos</label>
//               )}
//               <button type="submit" className="btn-cta-login">
//                 {isCadastro ? "Cadastrar" : "Entrar"}
//               </button>
//             </form>
//             <br />
//             <a className="link-cadastro" onClick={handleFormToggle}>
//               {isCadastro
//                 ? "Desejo fazer login"
//                 : "Desejo fazer cadastro"}{" "}
//               <HiOutlineArrowRight style={{ fontSize: "18px" }} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import { useContext, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Login.css";
// import { HiOutlineArrowRight } from "react-icons/hi";
// import { login, salvarUsuario } from "../../services/ApiService"
// import { AuthContext } from "../../contexts/AuthContext";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [confirmarSenha, setConfirmarSenha] = useState("");
//   const [nome_completo, setNomeCompleto] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [endereco, setEndereco] = useState("");
//   const [error, setError] = useState(false);
//   const [senhaErro, setSenhaErro] = useState(false);
//   const { sign } = useContext(AuthContext)

//   const navigate = useNavigate();
//   const location = useLocation();

//   const isCadastro = location.pathname === "/cadastro";

//   const handleFormToggle = () => {
//     if (isCadastro) {
//       navigate("/login");
//     } else {
//       navigate("/cadastro");
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("entrou aqui");
//     try {
//       if (email === "admin" && senha === "admin") {
//         // Credenciais de administrador
//         const adminData = { id: "adminId", token: "adminToken", role: "admin" };
//         sign(adminData);
//         navigate("/admin");
//       } else {
//         // Chamada para o serviço de login
//         const response = await login(email, senha);
//         if (response.status !== 200) {
//           setError(true);
//           return;
//         }
//         // Credenciais de usuário comum
//         const userData = { ...response.data, role: "user" };
//         sign(userData);
//         navigate("/home");
//       }
//     } catch (error) {
//       setError(true);
//       console.log("2");
      
//     }
//   };

//   const handleCadastro = async (e) => {
//     e.preventDefault();  // Certifique-se de evitar o comportamento padrão
  
//     if (senha !== confirmarSenha) {
//       setSenhaErro(true);
//       return;
//     }
  
//     setSenhaErro(false);
  
//     // Criação do objeto de dados
//     const data = {
//       nome_completo,
//       email,
//       telefone,
//       endereco,
//       senha,
//     };
  
//     try {
//       const response = await salvarUsuario(data);
//       if (response.status !== 201) {
//         setError(true);
//         return;
//       }
//       alert("Cadastro realizado com sucesso!");
//       navigate("/login");  // Navegar para a página de login após sucesso
//     } catch (error) {
//       setError(true);
//       console.log("Erro no cadastro:", error);
//       alert('Erro ao fazer cadastro, reveja os campos e tente novamente');
//     }
//   };

//   return (
//     <div className="login-conteudo">
//       <div className="glass-effect">
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//           <div
//             className={`card p-4 shadow ${
//               isCadastro ? "cadastro-card" : ""
//             }`}
//           >
//             <h2 className="text-center mb-4">
//               {isCadastro ? "Cadastro" : "Login"}
//             </h2>
//             <form onSubmit={isCadastro ? handleCadastro : handleLogin}>
//               {isCadastro && (
//                 <>
//                   <div className="row">
//                     <div className="col-12 mb-3">
//                       <label htmlFor="nome_completo" className="form-label">
//                         Nome completo
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Digite seu nome completo"
//                         value={nome_completo}
//                         onChange={(e) => setNomeCompleto(e.target.value)}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label htmlFor="telefone" className="form-label">
//                         Telefone
//                       </label>
//                       <input
//                         type="tel"
//                         className="form-control"
//                         placeholder="Digite seu telefone"
//                         value={telefone}
//                         onChange={(e) => setTelefone(e.target.value)}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label htmlFor="endereco" className="form-label">
//                         Endereço
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Digite seu endereço"
//                         value={endereco}
//                         onChange={(e) => setEndereco(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Digite seu email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="senha" className="form-label">
//                   {isCadastro ? "Crie sua senha" : "Senha"}
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder={isCadastro ? "Crie sua senha" : "Digite sua senha"}
//                   value={senha}
//                   onChange={(e) => setSenha(e.target.value)}
//                 />
//               </div>
//               {isCadastro && (
//                 <div className="mb-3">
//                   <label htmlFor="confirmarSenha" className="form-label">
//                     Confirme sua senha
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Confirme sua senha"
//                     value={confirmarSenha}
//                     onChange={(e) => setConfirmarSenha(e.target.value)}
//                   />
//                   {senhaErro && (
//                     <label style={{ color: "red" }}>
//                       As senhas não são iguais
//                     </label>
//                   )}
//                 </div>
//               )}
//               {error && !isCadastro && (
//                 <label style={{ color: "red" }}>Email ou senha incorretos</label>
//               )}
//               <button type="submit" className="btn-cta-login">
//                 {isCadastro ? "Cadastrar" : "Entrar"}
//               </button>
//             </form>
//             <br />
//             <a className="link-cadastro" onClick={handleFormToggle}>
//               {isCadastro
//                 ? "Desejo fazer login"
//                 : "Desejo fazer cadastro"}{" "}
//               <HiOutlineArrowRight style={{ fontSize: "18px" }} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import { HiOutlineArrowRight } from "react-icons/hi";
import { login, salvarUsuario } from "../../services/ApiService"
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome_completo, setNomeCompleto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [error, setError] = useState(false);
  const [senhaErro, setSenhaErro] = useState(false);
  const { sign } = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();

  const isCadastro = location.pathname === "/cadastro";

  const handleFormToggle = () => {
    if (isCadastro) {
      navigate("/login");
    } else {
      navigate("/cadastro");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Iniciando login...");
    try {
      // Chamada para o serviço de login
      const response = await login(email, senha);
      if (response.status !== 200) {
        setError(true);
        return;
      }
  
      const isAdmin = response.data.data.nome === "admin";
      
      const userData = {
        ...response.data,
        role: isAdmin ? "admin" : "user",
      };
  
      // Salva os dados do usuário autenticado no contexto
      sign(userData);
  
      // Redireciona com base na role
      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      setError(true);
      console.error("Erro durante o login:", error);
    }
  };
  

  const handleCadastro = async (e) => {
    e.preventDefault();  // Certifique-se de evitar o comportamento padrão
  
    if (senha !== confirmarSenha) {
      setSenhaErro(true);
      return;
    }
  
    setSenhaErro(false);
  
    // Criação do objeto de dados
    const data = {
      nome_completo,
      email,
      telefone,
      endereco,
      senha,
    };
  
    try {
      const response = await salvarUsuario(data);
      if (response.status !== 201) {
        setError(true);
        return;
      }
      alert("Cadastro realizado com sucesso!");
      navigate("/login");  // Navegar para a página de login após sucesso
    } catch (error) {
      setError(true);
      console.log("Erro no cadastro:", error);
      alert('Erro ao fazer cadastro, reveja os campos e tente novamente');
    }
  };

  return (
    <div className="login-conteudo">
      <div className="glass-effect">
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div
            className={`card p-4 shadow ${
              isCadastro ? "cadastro-card" : ""
            }`}
          >
            <h2 className="text-center mb-4">
              {isCadastro ? "Cadastro" : "Login"}
            </h2>
            <form onSubmit={isCadastro ? handleCadastro : handleLogin}>
              {isCadastro && (
                <>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="nome_completo" className="form-label">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu nome completo"
                        value={nome_completo}
                        onChange={(e) => setNomeCompleto(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="telefone" className="form-label">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="endereco" className="form-label">
                        Endereço
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu endereço"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="senha" className="form-label">
                  {isCadastro ? "Crie sua senha" : "Senha"}
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder={isCadastro ? "Crie sua senha" : "Digite sua senha"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              {isCadastro && (
                <div className="mb-3">
                  <label htmlFor="confirmarSenha" className="form-label">
                    Confirme sua senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirme sua senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                  />
                  {senhaErro && (
                    <label style={{ color: "red" }}>
                      As senhas não são iguais
                    </label>
                  )}
                </div>
              )}
              {error && !isCadastro && (
                <label style={{ color: "red" }}>Email ou senha incorretos</label>
              )}
              <button type="submit" className="btn-cta-login">
                {isCadastro ? "Cadastrar" : "Entrar"}
              </button>
            </form>
            <br />
            <a className="link-cadastro" onClick={handleFormToggle}>
              {isCadastro
                ? "Desejo fazer login"
                : "Desejo fazer cadastro"}{" "}
              <HiOutlineArrowRight style={{ fontSize: "18px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;