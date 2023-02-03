import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box>
      <NavLink to="/register">
        <Button 
          variant="inherit"
          sx={{
            textTransform: 'capitalize',
          }}>Register</Button>
      </NavLink>
      <NavLink to="/login">
        <Button 
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'capitalize',
          }}>Log In</Button>
      </NavLink>
    </Box>
  );
};