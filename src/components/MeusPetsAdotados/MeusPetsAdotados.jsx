import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { buscarPets, buscarAdocoes } from '../../services/ApiService';  // Supondo que 'buscarAdocoes' seja o método para buscar adoções
import './MeusPetsAdotados.css';

const MeusPetsAdotados = () => {
  const { usuarioId, token } = useContext(AuthContext);
  const [petsAdotados, setPetsAdotados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetsAdotados = async () => {
      try {
        // 1. Buscar as adoções do usuário logado
        const adocoes = await buscarAdocoes(usuarioId, token);  // Buscar adoções com adotante_id igual ao usuarioId

        if (adocoes.length > 0) {
          // 2. Buscar os pets com os pet_id relacionados às adoções
          const petIds = adocoes.map(adocao => adocao.pet_id);  // Pega todos os pet_id das adoções
          const pets = await buscarPetsPorIds(petIds, token);  // Busca os pets correspondentes
          setPetsAdotados(pets);
        } else {
          setPetsAdotados([]);
        }
      } catch (error) {
        console.error('Erro ao buscar pets adotados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetsAdotados();
  }, [usuarioId, token]);

  const buscarPetsPorIds = async (petIds, token) => {
    try {
      const pets = await Promise.all(petIds.map(id => buscarPetPorId(id, token)));  // Busca individualmente os pets
      return pets;
    } catch (error) {
      console.error('Erro ao buscar pets:', error);
      return [];
    }
  };

  return (
    <div className="meus-pets-adotados">
      <h2>Meus Pets Adotados</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : petsAdotados.length === 0 ? (
        <p>Você ainda não adotou nenhum pet.</p>
      ) : (
        <div className="pets-list">
          {petsAdotados.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.imagem} alt={pet.nome} className="pet-image" />
              <div className="pet-info">
                <h3>{pet.nome}</h3>
                <p>{pet.descricao}</p>
                <p>Status: {pet.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeusPetsAdotados;
