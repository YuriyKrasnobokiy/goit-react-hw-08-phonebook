import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import emailRegexp from 'emailRegex/emailRegex';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = input => {
    if (emailRegexp.test(input)) {
      setError('');
      return true;
    } else {
      setError('Invalid email.');
      return false;
    }
  };

  const handleEmailChange = e => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(login({ email, password }));
    form.reset();
  };

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
      <FormControl
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
          width: '400px',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          required
          margin="normal"
          autoComplete="off"
          size="normal"
          color="primary"
          placeholder="Example@mail.com"
          value={email}
          onChange={handleEmailChange}
          error={Boolean(error)}
          helperText={error}
          sx={{
            width: '100%',
            '& .MuiInputLabel-outlined': {
              // колір placeholder
              color: 'primary.main',
            },

            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                // колір для ховеру
                borderColor: 'primary.hover',
              },
              '& fieldset': {
                borderColor: 'primary.main',
                transition: 'border-color 250ms ease',
              },
            },

            '& .MuiOutlinedInput-input': {
              color: 'primary.main',
            },
          }}
        />
        <TextField
          variant="outlined"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          minLength="7"
          autoComplete="on"
          required
          margin="normal"
          color="primary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? (
                    <VisibilityIcon
                      sx={{
                        color: 'primary.main',
                        transition: 'color 250ms ease',
                        '&:hover': {
                          color: 'primary.hover',
                        },
                      }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{
                        color: 'primary.main',
                        transition: 'color 250ms ease',
                        '&:hover': {
                          color: 'primary.hover',
                        },
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',

            '& .MuiInputLabel-outlined': {
              color: 'primary.main',
            },

            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.hover',
              },
              '& fieldset': {
                borderColor: 'primary.main',
                transition: 'border-color 250ms ease',
              },
            },

            '& .MuiOutlinedInput-input': {
              color: 'primary.main',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: '10px' }}
        >
          Log In
        </Button>
      </FormControl>
    </Container>
  );
};
