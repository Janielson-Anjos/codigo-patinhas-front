// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
// import { buscarPetPorId, editarPet, salvarPet } from "../services/ApiService";

// function PetsForm() {
//   const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const { id } = useParams();  // Aqui capturamos o id da URL

//   // Carregar dados do pet para edição, se existir id
//   useEffect(() => {
//     if (id) {
//       const carregarPet = async () => {
//         const { data } = await buscarPetPorId(id);
//         reset(data);
//       };
//       carregarPet();
//     }
//   }, [id, reset]);

//   // Função de envio do formulário
//   const submit = async (data) => {
//     try {
//       const payload = {
//         ...data,
//         idade: parseInt(data.idade, 10),
//         imagens: data.imagens.split(",").map((img) => img.trim()), // Converte string em array
//       };
  
//       console.log("Payload enviado:", payload);
  
//       await salvarPet(payload);
//       navigate("/pets-list");
//     } catch (error) {
//       console.error("Erro ao salvar pet:", error.response?.data || error.message);
//       alert("Erro ao salvar pet: " + (error.response?.data?.message || "Erro desconhecido"));
//     }
//   };
  
  

//   // Função de cancelamento para voltar à lista de pets
//   const cancelar = () => {
//     navigate("/pets-list");
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
//               {id ? "Editar Pet" : "Cadastrar Pet"}
//             </h2>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Nome</label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder="Digite o nome do pet"
//                   {...register("nome", { required: "Nome é obrigatório" })}
//                 />
//                 {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Espécie</label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder="Digite a espécie"
//                   {...register("especie", { required: "Espécie é obrigatória" })}
//                 />
//                 {errors.especie && <p className="text-danger">{errors.especie.message}</p>}
//               </div>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Idade</label>
//               <input
//                 className="form-control"
//                 type="number"
//                 placeholder="Digite a idade"
//                 {...register("idade")}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Data de Nascimento</label>
//               <input
//                 className="form-control"
//                 type="date"
//                 placeholder="Digite a data de nascimento"
//                 {...register("data_nascimento")}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Descrição</label>
//               <textarea
//                 className="form-control"
//                 rows="3"
//                 placeholder="Digite uma descrição do pet"
//                 {...register("descricao")}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Status</label>
//               <select className="form-select" {...register("status", { required: "Status é obrigatório" })}>
//                 <option value="">Selecione o status</option>
//                 <option value="adotado">Adotado</option>
//                 <option value="disponivel">Disponível</option>
//                 <option value="em tratamento">Em tratamento</option>
//               </select>
//               {errors.status && <p className="text-danger">{errors.status.message}</p>}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Imagens (URL)</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 placeholder="URL da imagem"
//                 {...register("imagens")}
//               />
//             </div>

//             <div className="d-flex justify-content-between">
//               <button className="btn btn-secondary" type="button" onClick={cancelar}>
//                 Cancelar
//               </button>
//               <button className="btn btn-primary" type="submit">
//                 {id ? "Salvar Alterações" : "Cadastrar"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PetsForm;

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { buscarPetPorId, editarPet, salvarPet } from "../services/ApiService";

function PetsForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { id } = useParams(); // Captura o id da URL

  // Carrega os dados do pet para edição se existir um id
//   useEffect(() => {
//     if (id) {
//       const carregarPet = async () => {
//         try {
//           const { data } = await buscarPetPorId(id);
//           reset({
//             ...data,
//             imagens: data.imagens ? data.imagens.join(", ") : "", // Converte o array para string separada por vírgulas
//           });
//         } catch (error) {
//           console.error("Erro ao carregar pet:", error.message);
//           alert("Erro ao carregar informações do pet.");
//         }
//       };
//       carregarPet();
//     }
//   }, [id, reset]);

useEffect(() => {
    if (id) {
      const carregarPet = async () => {
        try {
          const { data } = await buscarPetPorId(id);
          console.log('Dados do pet:', data);
          const dataNascimento = new Date(data.data_nascimento).toISOString().split("T")[0]; // Convertendo a data
          
          // Verifica se 'imagens' existe e é um array, caso contrário, define como array vazio
          const imagens = Array.isArray(data.imagens) ? data.imagens.join(", ") : "";
  
          // Reseta o formulário com os dados do pet
          reset({
            ...data,
            imagens: imagens,  // Converte imagens para uma string separada por vírgulas, ou string vazia
            data_nascimento: dataNascimento,
          });
        } catch (error) {
          console.error("Erro ao carregar pet:", error.message);
          alert("Erro ao carregar informações do pet.");
        }
      };
      carregarPet();
    }
  }, [id, reset]);
  
  

  // Função de envio do formulário
//   const submit = async (data) => {
//     try {
//       const payload = {
//         ...data,
//         idade: parseInt(data.idade, 10),
//         imagens: data.imagens.split(",").map((img) => img.trim()), // Converte a string para um array
//       };

//       console.log("Payload enviado:", payload);

//       if (id) {
//         await editarPet(payload, id); // Edita o pet existente
//       } else {
//         await salvarPet(payload); // Cria um novo pet
//       }
      
//       navigate("/pets-list"); // Redireciona para a lista de pets
//     } catch (error) {
//       console.error("Erro ao salvar pet:", error.response?.data || error.message);
//       alert("Erro ao salvar pet: " + (error.response?.data?.message || "Erro desconhecido"));
//     }
//   };

const submit = async (data) => {
    try {

        const token = localStorage.getItem("token"); // Pega o token do localStorage

    if (!token) {
      throw new Error("Token ausente. Faça login novamente.");
    }
      const payload = {
        ...data,
        idade: parseInt(data.idade, 10),
        
        // Converte a string para um array de URLs, tratando os espaços extra
        imagens: data.imagens.split(",").map((img) => img.trim()).filter((img) => img !== ""), 
      };
  
      console.log("Payload enviado:", payload);
  
      if (id) {
        await editarPet(payload, id, token); // Edita o pet existente
      } else {
        await salvarPet(payload); // Cria um novo pet
      }
      
      navigate("/pets-list"); // Redireciona para a lista de pets
    } catch (error) {
      console.error("Erro ao salvar pet:", error.response?.data || error.message);
      alert("Erro ao salvar pet: " + (error.response?.data?.message || "Erro desconhecido"));
    }
  };
  

  // Função de cancelamento para voltar à lista de pets
  const cancelar = () => {
    navigate("/pets-list");
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
              {id ? "Editar Pet" : "Cadastrar Pet"}
            </h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Nome</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Digite o nome do pet"
                  {...register("nome", { required: "Nome é obrigatório" })}
                />
                {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Espécie</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Digite a espécie"
                  {...register("especie", { required: "Espécie é obrigatória" })}
                />
                {errors.especie && <p className="text-danger">{errors.especie.message}</p>}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Idade</label>
              <input
                className="form-control"
                type="number"
                placeholder="Digite a idade"
                {...register("idade")}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Data de Nascimento</label>
              <input
                className="form-control"
                type="date"
                placeholder="Digite a data de nascimento"
                {...register("data_nascimento")}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Descrição</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Digite uma descrição do pet"
                {...register("descricao")}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>
              <select className="form-select" {...register("status", { required: "Status é obrigatório" })}>
                <option value="">Selecione o status</option>
                <option value="adotado">Adotado</option>
                <option value="disponivel">Disponível</option>
                <option value="em tratamento">Em tratamento</option>
              </select>
              {errors.status && <p className="text-danger">{errors.status.message}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Imagens (URLs separadas por vírgulas)</label>
              <input
                className="form-control"
                type="text"
                placeholder="Digite as URLs das imagens, separadas por vírgulas"
                {...register("imagens")}
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

export default PetsForm;

