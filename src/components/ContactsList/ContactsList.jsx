import React from 'react';
// import { ContactsLi, ContactsPhonelist } from './ContactsList.Styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => handleDeleteContact(id)} type="button">
              Delete
              <RiDeleteBin6Line size={18} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
