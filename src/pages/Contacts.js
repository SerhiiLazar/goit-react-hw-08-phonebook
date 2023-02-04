import { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Section } from 'components/Section';
import { ContactList } from 'components/Contacts/ContactList';
import { FilterInput } from 'components/FilterInput';
import { Loader } from 'components/Loader';
import { Form } from 'components/Form/Form';
import { selectContacts } from 'redux/contacts/selectors';
import { Box, Modal, Button, Stack } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseIcon from '@mui/icons-material/Close';
import Notification from 'components/Notification';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '1px solid #808080',
  boxShadow: 24,
  pt: 6,
  px: 4,
  pb: 3,
};

export default function Contactc() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contact = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpen = e => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        width: 350,
      }}
    >
      <Section title="Contacts">
        

        <Stack direction="row" spacing={2} sx={{padding: '10px', margin: '0 auto', ml: 'auto',  }}>
          <Button
            size="large"
            variant="text"
            startIcon={<AddBoxIcon />}
            onClick={handleOpen}
          >
            ADD CONTACT
          </Button>
        </Stack>

        <Fragment>
          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 350 }}>
              <CloseIcon
                sx={{
                  position: 'absolute',
                  top: '3%',
                  right: '3%',
                  color: '#808080',
                  '&:hover': {
                    color: '#1976d2',
                  },
                }}
                onClick={handleClose}
              />
              <Form modalClose={handleClose} />
            </Box>
          </Modal>
        </Fragment>
        <FilterInput />
        {!contact.length ? (
        <Notification message="Contact list is empty !" />
        ) : (
        <ContactList />)}
        {isLoading && !error && <Loader />}
      </Section>
    </Box>
  );
}