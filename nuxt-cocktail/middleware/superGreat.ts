import { Middleware } from '@nuxt/types';

const superGreatMdwr: Middleware =  ({ params, redirect }) => {
  if (+params.id > 17000) return redirect('/');
}

export default superGreatMdwr;