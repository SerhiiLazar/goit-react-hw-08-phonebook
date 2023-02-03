import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { TextField, Button, Box } from '@mui/material';
import css from './Form.module.css';
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

    console.log(e.target.value)
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
    <form className={css.phonebookForm} onSubmit={hendleSubmit}>
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
      <Box>
      <Button className={css.formBtn} type="submit">
        Add contact
      </Button>
      <Button className={css.formBtn} type="submit">
        Add contact
      </Button>
      </Box>
    </form>
  );
}

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
