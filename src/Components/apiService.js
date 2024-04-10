import axios from 'axios';

const fetchLeagueTables = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_ENDPOINT, {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
      },
      params: {
        season: '2020', 
        league: '39',  
      }
    });
    return response.data; // Returns the full API response for further processing
  } catch (error) {
    console.error("Error fetching league tables data:", error);
    throw error; // Rethrowing the error to handle it in the component
  }
};

export { fetchLeagueTables };
