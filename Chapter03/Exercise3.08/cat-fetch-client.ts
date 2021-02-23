import { catFetch } from './cat-fetch-solution';

const api = catFetch('http://localhost:8080');

const catResource = api('cats');

const getCats = catResource('get');
getCats();

const saveCat = catResource('post'); // POST verb and useJson
saveCat({ name: 'Robert', color: 'gray' });
