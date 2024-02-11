import axios from 'axios';

const base=`https://youtube138.p.rapidapi.com`
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '25e05a513amsh2fbedf3dc819f4ep118d82jsn5a420f24e119',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  },
};

export const fetchData = async (url)=>{
    const {data} = await axios.get(`${base}/${url}`,options);
    return data;
}

