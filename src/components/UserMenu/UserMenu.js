import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

import * as React from 'react';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <p>Welcome, {user.email}</p>
      <Button
        variant="outlined"
        size="medium"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </>
  );
};
