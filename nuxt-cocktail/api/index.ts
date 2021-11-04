import axios from 'axios';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const makeQuery = (query?: object): string | undefined => {
  if (query) {
    let qs = '?';
    Object.entries(query).forEach(([k,v]) => { qs += `${k}=${v}` });
    return qs;
  }
}

const api = {
  get: (path: string, query?: object) => axios.get(`${URL}${path}.php` + makeQuery(query)),
}

export const getDrinkListByInitial = (char: string) => {
  return api.get('/search', {f: char});
}