const apiKey = import.meta.env.VITE_RAPID_API_KEY;

export const exerciseOptions = {
  method: 'GET',
  // params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}