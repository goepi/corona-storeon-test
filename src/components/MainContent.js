import React, { useEffect, useState } from 'react';
import { useStoreon } from 'storeon/react';
import { CountryTable } from './CountryTable';
import { GoogleMap } from './GoogleMap';
import { Header } from './Header';

export const MainContent = () => {
  const { dispatch } = useStoreon('countries');
  const [showTable, setShowTable] = useState(false);

  const toggleShowTable = () => setShowTable((prevState) => !prevState);

  useEffect(() => {
    dispatch('countries/get');
  }, []);

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <Header toggleShowTable={toggleShowTable} />
      <GoogleMap />
      <CountryTable isVisible={showTable} />
    </div>
  );
};
