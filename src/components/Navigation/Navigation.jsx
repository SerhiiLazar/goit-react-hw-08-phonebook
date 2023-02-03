import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button } from '@mui/material';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Button variant="inherit">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant="inherit">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
