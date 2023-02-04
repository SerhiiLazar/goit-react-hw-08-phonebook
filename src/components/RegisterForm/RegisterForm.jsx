import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField, Button } from '@mui/material';
import toast from 'react-hot-toast';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    
    if(email.trim() === '' || name.trim() === '') {
      setEmailError(true);
      setNameError(true);
      return toast.error('💩 Please fill in all fields!');
    }
    if(password.length < 7) {
      setPasswordError(true);
      return toast.error('Passwords must be at least 7 characters long!');
    }
    
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form noValidate onSubmit={handleSubmit} autoComplete="off">
      <TextField
        onChange={(e) => setName(e.target.value)}
        label="Username"
        variant="outlined"
        size="small"
        name="name"
        type="text"
        required
        sx={{ mb: '20px' }}
        
        error={nameError}
      />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        variant="outlined"
        size="small"
        name="email"
        type="email"
        required
        sx={{ mb: '20px' }}

        error={emailError}

      />
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
      />
      <Button variant="contained" type="submit">Register</Button>
    </Form>
  );
};
