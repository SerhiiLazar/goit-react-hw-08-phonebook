import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box, Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Register() {
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
      
        <Typography variant="h5" component="h2" sx={{ mb: '16px' }}>Registration</Typography>
      
      <RegisterForm />
    </Box>
  );
}
