import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { TextField, Button, Box } from '@mui/material';
import { FormStyled } from './Form.styled';
// import PropTypes from 'prop-types';

export function Form({modalClose}) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameContact = contacts.map(contact => contact.name);

  const hendleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (nameContact.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({name, number}));

    form.reset();
    modalClose();

  };

  const handleChenge = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <FormStyled onSubmit={hendleSubmit}>
        <TextField
          label="Name"
          variant='outlined'
          size="small"
          type="text"
          name="name"
          onChange={handleChenge}
          value={name}
          required
          sx={{ mb: '20px'}}
        />
        <TextField
          label="Number"
          variant='outlined'
          size='small'
          type="tel"
          name="number"
          onChange={handleChenge}
          value={number}
          autoCapitalize="off"
          required
          sx={{ mb: '20px'}}
        />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Button variant="contained" color="success" type="submit" sx={{ mb: 2, width: '50%' }}>
          Add contact
        </Button>
        <Button
          variant="contained"
          color="error"
          type="button"
          sx={{ width: '50%' }}
          onClick={modalClose}
        >
          Сancel
        </Button>
      </Box>
    </FormStyled>
  );
}

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
