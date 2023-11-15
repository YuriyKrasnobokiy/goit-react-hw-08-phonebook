import { nanoid } from 'nanoid';
import React from 'react';
import { FormBtn, FormLabel, FormPhoneBook } from './Form.Styled';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

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
          <Field type="text" name="name" />
          <ErrorMessage component="div" name="name" />
        </FormLabel>
        <FormLabel>
          Number
          <Field type="text" name="number" />
          <ErrorMessage component="div" name="number" />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormPhoneBook>
    </Formik>
  );
};
