
import { ContactsItem, ContactsList } from './ContactList.styled';
import { Contact } from './Contact/Contact';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  
  return (
    <>
      <ContactsItem>
        {contacts.map(({ name, number, id }) => (
          <ContactsList key={id}>
            <Contact name={name} number={number} id={id} />
          </ContactsList>
        ))}
      </ContactsItem>
    </>
  );
};


