import { useTheme } from '@emotion/react';
import { Button, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = useTheme();

  return (
    <nav>
      <Container
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          textAlign: 'center',
          alignItems: 'center',
          padding: '0',
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column', // Змініть напрямок для малих екранів
          },
        }}
      >
        <Button component={NavLink} to="/">
          Home
        </Button>
        {isLoggedIn && (
          <Button component={NavLink} to="/contacts">
            Contacts
          </Button>
        )}
      </Container>
    </nav>
  );
};
