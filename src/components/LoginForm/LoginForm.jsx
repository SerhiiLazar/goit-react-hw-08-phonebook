import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';
import { TextField, Button } from '@mui/material';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);


  const handleSubmit = e => {
    e.preventDefault();

    if(email.trim() === '') {
      setEmailError(true);
      return toast.error('💩 Please fill in all fields!');
    }
    if(password.length < 7) {
      setPasswordError(true);
      return toast.error('Passwords must be at least 7 characters long!');
    }
    
    
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(logIn)
    form.reset();
  };

  return (
    <Form noValidate onSubmit={handleSubmit} autoComplete="off">
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        variant="outlined"
        size="small"
        name="email"
        type="email"
        required
        sx={{mb: '20px'}}

        error={emailError}


        >
      </TextField>
      <TextField
      onChange={(e) => setPassword(e.target.value)}
      label="Password"
      variant="outlined"
      size="small"
      name="password"
      type="password"
      required
      sx={{ mb: '20px' }}
      error={passwordError}
      >
      </TextField>
      <Button variant="contained" type="submit">Log In</Button>
    </Form>
  );
};
