import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { useStoreon } from 'storeon/react';
import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

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

const CountryTableStyled = styled(Box)(({ isVisible }) => ({
  height: '80%',
  width: '800px',
  position: 'absolute',
  right: isVisible ? 0 : '-800px',
  top: '130px',
  transition: 'right 0.2s',
}));

export const CountryTable = ({ isVisible }) => {
  const {
    countries: { byId },
  } = useStoreon('countries');
  const gridApi = useRef({});

  const rowData = Object.keys(byId).map((id) => ({
    country: byId[id].name,
    cases: byId[id].latestData.cases,
    deaths: byId[id].latestData.deaths,
    recovered: byId[id].latestData.recovered,
  }));

  return (
    <CountryTableStyled className="ag-theme-balham" isVisible={isVisible}>
      <AgGridReact
        onGridReady={(params) => (gridApi.current = params.api)}
        columnDefs={columnDefs}
        groupSelectsChildren={true}
        rowData={rowData}
      />
    </CountryTableStyled>
  );
};
