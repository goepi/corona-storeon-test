import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useStoreon } from 'storeon/react';
import { MapMarker } from './MapMarker';
import { getMaxCases } from '../state/countries/selectors';

export const GoogleMap = () => {
  const {
    countries: { byId },
  } = useStoreon('countries');

  const maxCases = getMaxCases(byId);

  const handleApiLoaded = (map, maps) => {
    console.log(map);
    console.log(maps);
  };

  return (
    <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      bootstrapURLKeys={{ key: process.env.REACT_APP_GMP_API_KEY }}
      defaultCenter={{ lat: 30, lng: 0 }}
      defaultZoom={0}
    >
      {Object.keys(byId).map((countryId) => {
        const country = byId[countryId];
        const title = `${country.name} 
        Cases: ${country.latestData.cases}
        Deaths: ${country.latestData.deaths}
        Recovered: ${country.latestData.recovered}`;
        return (
          <MapMarker
            key={country.name}
            lat={country.location.coordinates[1]}
            lng={country.location.coordinates[0]}
            scale={Math.log(country.latestData.cases) / Math.log(maxCases)}
            title={title}
          />
        );
      })}
    </GoogleMapReact>
  );
};
