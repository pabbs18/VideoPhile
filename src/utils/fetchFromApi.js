import axios from 'axios';


const apiKey = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,//'ac73a800e6mshc3bdfcb5d5b46d0p145725jsn9c39342e15e2',//process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(uri) =>{
    const {data} = await axios.get(`${BASE_URL}/${uri}`, options);
    return data;
  }