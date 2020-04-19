import React, { useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { CountryTable } from './CountryTable';

export const MainContent = () => {
  const { dispatch } = useStoreon('countries');

  const getCountries = async () => {
    try {
      const response = await fetch('http://localhost:5000/countries');
      const countries = await response.json();
      dispatch('countries/add', countries.data);
    } catch (e) {
      console.log('Errors', e);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return <CountryTable />;
};
