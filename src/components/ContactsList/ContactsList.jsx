import React from 'react';
// import { ContactsLi, ContactsPhonelist } from './ContactsList.Styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactsH,
  ContactsLi,
  ContactsP,
  ContactsPhonelist,
} from './ContactsList.Styled';
import { Button } from '@mui/material';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ContactsPhonelist>
        <ContactsH>Your contacts</ContactsH>
        {contacts.map(({ id, name, number }) => (
          <ContactsLi key={id}>
            <ContactsP>{name}</ContactsP>
            <ContactsP>{number}</ContactsP>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
              <RiDeleteBin6Line size={18} />
            </Button>
          </ContactsLi>
        ))}
      </ContactsPhonelist>
    </>
  );
};
