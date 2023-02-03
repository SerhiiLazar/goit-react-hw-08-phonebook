// import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box, Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px' 
    }}
    >
    <Avatar sx={{ m:1, bgcolor: 'secondary.main'}}>
      <LockOutlinedIcon />
    </Avatar>
      
        <Typography variant="h5" component="h2" sx={{ mb: '16px' }}>Login</Typography>
      
      <LoginForm />
    </Box>
  );
}
