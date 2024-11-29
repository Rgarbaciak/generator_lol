import axios from "axios";

export const fetchChampions = async () => {
  const url =
    "https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json";

  try {
    const response = await axios.get(url);
    const champions = Object.values(response.data.data);
    return champions; 
  } catch (error) {
    console.error("Erreur lors de la récupération des champions :", error.message);
    throw error; 
  }
};
