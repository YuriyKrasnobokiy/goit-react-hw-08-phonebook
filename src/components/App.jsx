import { useDispatch, useSelector } from 'react-redux';
import { AppContainer } from './AppStyled';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { AddForm } from './Form/Form';
import { FormWrapper } from './Form/Form.Styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppContainer>
        <FormWrapper>
          <h2>Phonebook</h2>
          <AddForm />
        </FormWrapper>
        {isLoading && !error && <b>Request in progress...</b>}
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </AppContainer>
    </>
  );
};
