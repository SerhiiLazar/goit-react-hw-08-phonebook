import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Avatar, Typography, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: 'background.paper',
  border: '1px solid #808080',
  boxShadow: 24,
  pt: 6,
  px: 4,
  pb: 3,
};

export const Contact = ({ name, number, id }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Avatar sx={{ mr: '10px' }}>{name[0]}</Avatar>
      <Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'flex-start', width: '100%' }}>
        <Typography  sx={{mr: 1, wordWrap: 'break-word' }}>Name: {name}</Typography>
        <Typography  sx={{ wordWrap: 'break-word' }}>Tel: {number}</Typography>
      </Box>
      <Box sx={{ ml: 'auto' }}>
        <React.Fragment>
          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 300 }}>
              <CloseIcon
                sx={{
                  position: 'absolute',
                  top: '5%',
                  left: '89%',
                  color: '#808080',
                  '&:hover': {
                    color: '#1976d2',
                  },
                }}
                onClick={handleClose}
              />
            </Box>
          </Modal>
        </React.Fragment>
        <Box sx={{ display: 'flex', ml: '10px' }}>
          <DeleteIcon
            aria-label="delete"
            type="button"
            sx={{
              color: '#808080',
              '&:hover': {
                color: '#1976d2',
                scale: '120%',
              },
            }}
            onClick={() => dispatch(deleteContact(id))}
          />
        </Box>
      </Box>
    </>
  );
};
