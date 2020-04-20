import React from 'react';
import styled from '@emotion/styled';
import { Box, Button } from '@material-ui/core';

const HeaderStyled = styled(Box)({
  height: '100px',
  position: 'fixed',
  top: 20,
  left: 20,
  right: 20,
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  borderRadius: '4px',
  paddingRight: '20px',
});

export const Header = ({ toggleShowTable }) => {
  return (
    <HeaderStyled>
      <Button onClick={toggleShowTable} variant="contained" color="primary" disableElevation>
        Show Table
      </Button>
    </HeaderStyled>
  );
};
