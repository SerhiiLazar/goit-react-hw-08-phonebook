import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        sx={{
          textTransform: 'capitalize',
          ml: 1,
        }}
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};