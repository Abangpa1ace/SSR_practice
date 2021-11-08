
import axios from 'axios';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const URL2 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const api = {
  // get: (path: string) => axios.get(URL + `${path}.php`).catch((err: string) => console.log(err))
  get: (path: string) => axios.get(URL2).catch((err: string) => console.log(err))
}

export const getDrinkList = (type = 'random') => {
  // return api.get(type);
  return api.get('/');
}