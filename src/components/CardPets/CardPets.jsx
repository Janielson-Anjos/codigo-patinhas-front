// import React, { useContext, useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL;



// function PetCards() {
//   const [pets, setPets] = useState([]);


//   const loadPets = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/pet`);
//       setPets(response.data); 
//     } catch (error) {
//       console.error("Erro ao buscar pets", error);
//     }
//   };

//   useEffect(() => {
//     loadPets();  
//   }, []);  

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent:"center" }}>
//       {pets.map((pet) => (
//         <Card sx={{   width: "800px", maxWidth: 345 }} key={pet.id}>
//           <CardHeader
//             // avatar={
//             //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             //     {pet.nome[0]}  {/* Mostra a primeira letra do nome do pet */}
//             //   </Avatar>
//             // }
            
//             title={pet.nome}
//             subheader={`Espécie: ${pet.especie}`}
//           />
//           <CardMedia
//             component="img"
//             height="400"
//             image={
//               Array.isArray(pet.imagens) && pet.imagens.length > 0
//                 ? pet.imagens[0]
//                 : "URL_DE_IMAGEM_PADRAO"
//             }
//             alt={`Imagem de ${pet.nome}`}
//           />
//           <CardContent>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               {pet.descricao}
//             </Typography>
//             <Typography variant="body2" sx={{ marginTop: 1 }}>
//               <strong>Data de nascimento:</strong> {new Date(pet.data_nascimento).toLocaleDateString("pt-BR")}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Idade:</strong> {pet.idade} anos
//             </Typography>
//           </CardContent>
//           <CardContent>
//               <Typography variant="body2">
//                 <strong>Status:</strong> {pet.status}
//               </Typography>
//             </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//               <ShareIcon />
//             </IconButton>
            
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default PetCards;


import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

function PetCards({ searchText }) {
  const [pets, setPets] = useState([]);

  const loadPets = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/pet`);
      setPets(response.data);
    } catch (error) {
      console.error("Erro ao buscar pets", error);
    }
  };

  useEffect(() => {
    loadPets();
  }, []);

  const filteredPets = pets.filter((pet) => {
    const searchLowerCase = searchText.toLowerCase();
    return (
      pet.especie.toLowerCase().includes(searchLowerCase) ||
      pet.status.toLowerCase().includes(searchLowerCase)
    );
  });

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
      {filteredPets.map((pet) => (
        <Card sx={{ width: "800px", maxWidth: 345 }} key={pet.id}>
          <CardHeader title={pet.nome} subheader={`Espécie: ${pet.especie}`} />
          <CardMedia
            component="img"
            height="400"
            image={Array.isArray(pet.imagens) && pet.imagens.length > 0 ? pet.imagens[0] : "URL_DE_IMAGEM_PADRAO"}
            alt={`Imagem de ${pet.nome}`}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              {pet.descricao}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              <strong>Data de nascimento:</strong> {new Date(pet.data_nascimento).toLocaleDateString("pt-BR")}
            </Typography>
            <Typography variant="body2">
              <strong>Idade:</strong> {pet.idade} anos
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2">
              <strong>Status:</strong> {pet.status}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default PetCards;

