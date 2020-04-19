export const countries = (store) => {
  store.on('@init', () => ({ countries: [] }));

  store.on('countries/add', (_, countries) => ({ countries }));
};
