// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          minLength="7"
          autoComplete="on"
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
