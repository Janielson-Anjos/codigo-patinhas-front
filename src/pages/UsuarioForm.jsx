// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
// import { buscarUsuarioPorId, editarUsuario, salvarUsuario } from "../services/ApiService";

// function UsuariosForm() {
//   const { register, handleSubmit, reset } = useForm();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       const carregarUsuario = async () => {
//         const { data } = await buscarUsuarioPorId(id);
//         reset(data);
//       };
//       carregarUsuario();
//     }
//   }, [id, reset]);

//   const submit = async (data) => {
//     if (id) {
//       await editarUsuario(data, id);
//     } else {
//       await salvarUsuario(data);
//     }
//     navigate("/usuarios-list");
//   };

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-8 col-md-10">
//           <form
//             onSubmit={handleSubmit(submit)}
//             className="p-4 border rounded shadow-lg bg-white"
//           >
//             <h2 className="mb-4 text-center text-uppercase text-primary">
//               {id ? "Editar Usuário" : "Cadastrar Usuário"}
//             </h2>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Nome</label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder="Digite o nome"
//                   {...register("nome", { required: "Nome é obrigatório" })}
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">E-mail</label>
//                 <input
//                   className="form-control"
//                   type="email"
//                   placeholder="Digite o e-mail"
//                   {...register("email", { required: "Email é obrigatório" })}
//                 />
//               </div>
//             </div>
//             {!id && (
//               <div className="mb-3">
//                 <label className="form-label">Senha</label>
//                 <input
//                   className="form-control"
//                   type="password"
//                   placeholder="Digite uma senha"
//                   {...register("senha", { required: "Senha é obrigatória" })}
//                 />
//               </div>
//             )}

//             <div className="mb-3">
//               <label className="form-label">Telefone</label>
//               <input
//                 className="form-control"
//                 type="tel"
//                 placeholder="Digite o telefone"
//                 {...register("telefone")}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="form-label">Perfil</label>
//               <select
//                 {...register("perfil", { required: "Perfil é obrigatório" })}
//                 className="form-select"
//               >
//                 <option value="">Selecione</option>
//                 <option value="ADMIN">Admin</option>
//                 <option value="FUNCIONARIO">Funcionário</option>
//                 <option value="CLIENTE">Cliente</option>
//               </select>
//             </div>
//             <button
//               className="btn btn-primary w-100 py-2"
//               type="submit"
//             >
//               {id ? "Salvar Alterações" : "Cadastrar"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UsuariosForm;

///////////////////////////////// funcionando ////////////////////////////////////////

// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
// import { buscarUsuarioPorId, editarUsuario, salvarUsuario } from "../services/ApiService";

// function UsuariosForm() {
//   const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const senha = watch("senha");
//   const confirmarSenha = watch("confirmarSenha");

//   useEffect(() => {
//     if (id) {
//       const carregarUsuario = async () => {
//         const { data } = await buscarUsuarioPorId(id);
//         reset(data);
//       };
//       carregarUsuario();
//     }
//   }, [id, reset]);

//   const submit = async (data) => {
//     if (id) {
//       await editarUsuario(data, id);
//     } else {
//       await salvarUsuario(data);
//     }
//     navigate("/usuarios-list");
//   };

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-8 col-md-10">
//           <form
//             onSubmit={handleSubmit(submit)}
//             className="p-4 border rounded shadow-lg bg-white"
//           >
//             <h2 className="mb-4 text-center text-uppercase text-primary">
//               {id ? "Editar Usuário" : "Cadastrar Usuário"}
//             </h2>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Nome Completo</label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder="Digite o nome completo"
//                   {...register("nome_completo", { required: "Nome completo é obrigatório" })}
//                 />
//                 {errors.nome_completo && <p className="text-danger">{errors.nome_completo.message}</p>}
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">E-mail</label>
//                 <input
//                   className="form-control"
//                   type="email"
//                   placeholder="Digite o e-mail"
//                   {...register("email", { required: "Email é obrigatório" })}
//                 />
//                 {errors.email && <p className="text-danger">{errors.email.message}</p>}
//               </div>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Telefone</label>
//               <input
//                 className="form-control"
//                 type="tel"
//                 placeholder="Digite o telefone"
//                 {...register("telefone")}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Endereço</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 placeholder="Digite o endereço"
//                 {...register("endereco")}
//               />
//             </div>

//             {!id && (
//               <div className="mb-3">
//                 <label className="form-label">Senha</label>
//                 <input
//                   className="form-control"
//                   type="password"
//                   placeholder="Digite uma senha"
//                   {...register("senha", { required: "Senha é obrigatória" })}
//                 />
//                 {errors.senha && <p className="text-danger">{errors.senha.message}</p>}
//               </div>
//             )}

//             {!id && (
//               <div className="mb-3">
//                 <label className="form-label">Confirmar Senha</label>
//                 <input
//                   className="form-control"
//                   type="password"
//                   placeholder="Confirme a senha"
//                   {...register("confirmarSenha", {
//                     validate: value =>
//                       value === senha || "As senhas não coincidem",
//                   })}
//                 />
//                 {errors.confirmarSenha && <p className="text-danger">{errors.confirmarSenha.message}</p>}
//               </div>
//             )}

//             <div className="mb-3">
//               <label className="form-label">Imagem (URL)</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 placeholder="URL da imagem"
//                 {...register("imagem")}
//               />
//             </div>

//             <button className="btn btn-primary w-100 py-2" type="submit">
//               {id ? "Salvar Alterações" : "Cadastrar"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UsuariosForm;


import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { buscarUsuarioPorId, editarUsuario, salvarUsuario } from "../services/ApiService";

function UsuariosForm() {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();  // Aqui capturamos o id da URL

  const senha = watch("senha");
  const confirmarSenha = watch("confirmarSenha");

  // Carregar dados do usuário para edição, se existir id
  useEffect(() => {
    if (id) {
      const carregarUsuario = async () => {
        const { data } = await buscarUsuarioPorId(id);
        reset(data);
      };
      carregarUsuario();
    }
  }, [id, reset]);

  // Função de envio do formulário
  const submit = async (data) => {
    if (id) {
      await editarUsuario(data, id);  // Edita o usuário existente
    } else {
      await salvarUsuario(data);  // Cria um novo usuário
    }
    navigate("/usuarios-list");  // Redireciona para a lista de usuários
  };

  // Função de cancelamento para voltar à lista de usuários
  const cancelar = () => {
    navigate("/usuarios-list");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <form
            onSubmit={handleSubmit(submit)}
            className="p-4 border rounded shadow-lg bg-white"
          >
            <h2 className="mb-4 text-center text-uppercase text-primary">
              {id ? "Editar Usuário" : "Cadastrar Usuário"}
            </h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Nome Completo</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Digite o nome completo"
                  {...register("nome_completo", { required: "Nome completo é obrigatório" })}
                />
                {errors.nome_completo && <p className="text-danger">{errors.nome_completo.message}</p>}
              </div>
              <div className="col-md-6">
                <label className="form-label">E-mail</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Digite o e-mail"
                  {...register("email", { required: "Email é obrigatório" })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Telefone</label>
              <input
                className="form-control"
                type="tel"
                placeholder="Digite o telefone"
                {...register("telefone")}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Endereço</label>
              <input
                className="form-control"
                type="text"
                placeholder="Digite o endereço"
                {...register("endereco")}
              />
            </div>

            {!id && (
              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Digite uma senha"
                  {...register("senha", { required: "Senha é obrigatória" })}
                />
                {errors.senha && <p className="text-danger">{errors.senha.message}</p>}
              </div>
            )}

            {!id && (
              <div className="mb-3">
                <label className="form-label">Confirmar Senha</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Confirme a senha"
                  {...register("confirmarSenha", {
                    validate: value =>
                      value === senha || "As senhas não coincidem",
                  })}
                />
                {errors.confirmarSenha && <p className="text-danger">{errors.confirmarSenha.message}</p>}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Imagem (URL)</label>
              <input
                className="form-control"
                type="text"
                placeholder="URL da imagem"
                {...register("imagem")}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" type="button" onClick={cancelar}>
                Cancelar
              </button>
              <button className="btn btn-primary" type="submit">
                {id ? "Salvar Alterações" : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UsuariosForm;
