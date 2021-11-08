import axios from 'axios';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const URL2 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const makeQuery = (query?: object): string | undefined => {
  if (query) {
    let qs = '?';
    Object.entries(query).forEach(([k,v]) => { qs += `${k}=${v}` });
    return qs;
  }
}

const api = {
<<<<<<< HEAD
  // get: (path: string) => axios.get(URL + `${path}.php`).catch((err: string) => console.log(err))
  get: (path: string) => axios.get(URL2).catch((err: string) => console.log(err))
}

export const getDrinkList = (type = 'random') => {
  // return api.get(type);
  return api.get('/');
=======
  get: (path: string, query?: object) => axios.get(`${URL}${path}.php` + makeQuery(query)),
}

export const getDrinkListByInitial = (char: string) => {
  return api.get('/search', {f: char});
>>>>>>> 3e468f5dd0a04d742280d302e542bd950c2b7b7a
}