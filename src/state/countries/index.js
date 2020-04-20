import { getCountries } from '../../api';

export const countries = (store) => {
  store.on('@init', () => ({ countries: { byId: {}, isRequesting: false, error: null } }));

  store.on('countries/get', async () => {
    store.dispatch('countries/requestCountries', true);
    try {
      const countries = await getCountries();
      store.dispatch('countries/add', countries);
    } catch (e) {
      store.dispatch('countries/error', e.message);
    } finally {
      store.dispatch('countries/requestCountries', false);
    }
  });

  store.on('countries/requestCountries', (state, isRequesting) => ({
    countries: { ...state.countries, isRequesting },
  }));

  store.on('countries/error', (state, error) => ({
    countries: { ...state.countries, error },
  }));

  store.on('countries/add', (state, countries) => {
    const byId = {};
    const countriesWithLocation = countries.filter((country) => !!country.location);

    countriesWithLocation.forEach((c) => (byId[c.id] = c));

    return { countries: { ...state.countries, byId } };
  });
};
