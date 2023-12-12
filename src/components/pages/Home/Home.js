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
        padding: '200px 30px',
      }}
    >
      <h1>Welcome to the start page of Phonebook app</h1>
    </Container>
  );
};
