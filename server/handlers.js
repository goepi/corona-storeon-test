const axios = require('axios');
const baseUrl = 'https://api.coronatab.app';

let cachedPlaces = null;

const handleGetCountries = async (res) => {
  if (cachedPlaces) {
    return res.send(cachedPlaces);
  }
  try {
    const places = await axios(`${baseUrl}/places`);
    cachedPlaces = JSON.stringify(places.data);
    res.send(cachedPlaces);
  } catch (e) {
    console.log('Error fetching', e);
  }
};

module.exports = { handleGetCountries };
