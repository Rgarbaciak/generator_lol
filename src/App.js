import React, { useState } from "react";
import { fetchChampions } from "./api/request"; 
const App = () => {

  const [champions, setChampions] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const handleFetchRandomChampions = async () => {
    setLoading(true); 
    setError(null); 

    try {
      const allChampions = await fetchChampions(); 
      const randomChampions = allChampions
        .sort(() => Math.random() - 0.5)
        .slice(0, 15); 

      setChampions(randomChampions); 
    } catch (error) {
      setError("Impossible de récupérer les champions. Réessayez.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
  
    <div style={{ textAlign: "center", margin: "20px" }}>
        <title>Random League Champions</title>
      <h1>Random League Champions</h1>
      <button
        onClick={handleFetchRandomChampions}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Random
      </button>

      {loading && <p>Chargement des champions...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!loading && champions.map((champion) => (
          <div key={champion.id} style={{ textAlign: "center" }}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${champion.image.full}`}
              alt={champion.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <p>{champion.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;