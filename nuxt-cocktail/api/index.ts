
import axios from 'axios';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const api = {
  get: (path: string) => axios.get(URL + path).catch(err => console.log(err))
}

export const getDrinkList = (type = 'randomselection') => {
  return api.get(`/${type}`);
}