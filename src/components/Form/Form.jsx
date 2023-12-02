import { nanoid } from 'nanoid';
import React from 'react';
import { FormInput, FormLabel, FormPhoneBook } from './Form.Styled';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button, Container } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().min(2).required('Required'),
  number: yup.string().min(13).required('Required'),
});

export const AddForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return alert(
        `${newContact.name} or ${newContact.number} is already in contacts!`
      );
    }
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h2>Add contacts</h2>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormPhoneBook>
          <FormLabel>
            Name
            <FormInput type="text" name="name" />
            <ErrorMessage component="div" name="name" />
          </FormLabel>
          <FormLabel>
            Number
            <FormInput type="text" name="number" />
            <ErrorMessage component="div" name="number" />
          </FormLabel>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '10px' }}
          >
            Add contact
          </Button>
        </FormPhoneBook>
      </Formik>
    </Container>
  );
};
