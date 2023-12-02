import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Button component={NavLink} to="/">
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts">
          Contacts
        </Button>
      )}
    </nav>
  );
};
