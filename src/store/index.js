import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';
import { countries } from '../state/countries/index.js';

export const store = createStoreon([countries, process.env.NODE_ENV !== 'production' && storeonDevtools]);
