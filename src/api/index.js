export const getData = async (url) => {
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};

export const getCountries = async () => getData('http://localhost:5000/countries');

export const getPlaceWithChildren = async (placeId) =>
  getData(`http://localhost:5000/places/${placeId}?include[]=children`);
