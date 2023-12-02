import { Container } from '@mui/material';
import React from 'react';

export const Home = () => {
  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px 30px',
      }}
    >
      <h1>Welcome on the start page 😊</h1>
    </Container>
  );
};
