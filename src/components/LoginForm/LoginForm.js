import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        size="small"
        name="email"
        type="email"
        required
        sx={{mb: '20px'}}
        >
      </TextField>
      <TextField
      label="Password"
      variant="outlined"
      size="small"
      name="password"
      type="password"
      required
      sx={{ mb: '20px' }}
      >
      </TextField>
      <Button variant="contained" type="submit">Log In</Button>
    </form>
  );
};
