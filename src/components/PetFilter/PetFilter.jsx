import React, { useState } from "react";

function SearchComponent({ onSearchChange }) {
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = () => {
    onSearchChange({ species, status });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <div>
        <label>Espécie:</label>
        <input
          type="text"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="Ex: Cachorro, Gato"
          style={{ marginRight: "10px" }}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Ex: Disponível, Indisponível"
          style={{ marginRight: "10px" }}
        />
      </div>
      <button onClick={handleSearch}>Filtrar</button>
    </div>
  );
}

export default SearchComponent;
