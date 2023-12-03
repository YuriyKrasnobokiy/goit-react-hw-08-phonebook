import { Button, Container, FormControl, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

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
          type="password"
          name="password"
          minLength="7"
          autoComplete="on"
          required
          margin="normal"
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
