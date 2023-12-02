import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div sx={{}}>
      <Button
        sx={{ marginRight: '10px' }}
        variant="outlined"
        size="small"
        component={NavLink}
        to="/login"
      >
        Log In
      </Button>
      <Button
        variant="contained"
        size="small"
        component={NavLink}
        to="/register"
      >
        Register
      </Button>
    </div>
  );
};
