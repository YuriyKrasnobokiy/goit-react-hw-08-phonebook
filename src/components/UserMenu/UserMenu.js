import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        // textAlign: 'center',
        alignItems: 'center',
        padding: '0',
        margin: '0',
      }}
    >
      <p>Welcome, {user.email}</p>
      <Button
        variant="outlined"
        size="medium"
        type="button"
        onClick={() => dispatch(logout())}
        sx={{
          marginLeft: '10px',
        }}
      >
        Logout
      </Button>
    </Container>
  );
};
