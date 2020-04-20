import React from 'react';
import { Tooltip } from '@material-ui/core';

export const MapMarker = ({ scale = 1, maxDiameter = 50, title }) => {
  const diameter = `${scale * maxDiameter}px`;

  return (
    <Tooltip title={title}>
      <div
        style={{
          height: diameter,
          width: diameter,
          borderRadius: diameter,
          backgroundColor: 'rgba(3, 43, 22, 0.4)',
        }}
      />
    </Tooltip>
  );
};
