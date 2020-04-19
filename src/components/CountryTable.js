import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { useStoreon } from 'storeon/react';

const columnDefs = [
  {
    headerName: 'Country',
    field: 'country',
  },
  {
    headerName: 'Cases',
    field: 'cases',
  },
  {
    headerName: 'Deaths',
    field: 'deaths',
  },
  {
    headerName: 'Recovered',
    field: 'recovered',
  },
];

export const CountryTable = () => {
  const { countries } = useStoreon('countries');
  const gridApi = useRef({});

  console.log(countries);
  const rowData = countries.map((country) => ({
    country: country.name,
    cases: country.latestData.cases,
    deaths: country.latestData.deaths,
    recovered: country.latestData.recovered,
  }));

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: '500px',
        width: '100%',
      }}
    >
      <AgGridReact
        onGridReady={(params) => (gridApi.current = params.api)}
        columnDefs={columnDefs}
        groupSelectsChildren={true}
        rowData={rowData}
      />
    </div>
  );
};
