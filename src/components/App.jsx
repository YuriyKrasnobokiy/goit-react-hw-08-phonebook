import { useDispatch } from 'react-redux';
// import { AppContainer } from './AppStyled';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { AddForm } from './Form/Form';
// import { FormWrapper } from './Form/Form.Styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './Layout/Layout';
import Register from './pages/Register';
import Login from './pages/Login';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );

  // return (
  //   <>
  //     <AppContainer>
  //       <FormWrapper>
  //         <h2>Phonebook</h2>
  //         <AddForm />
  //       </FormWrapper>
  //       {isLoading && !error && <b>Request in progress...</b>}
  //       <div>
  //         <h2>Contacts</h2>
  //         <Filter />
  //         <ContactsList />
  //       </div>
  //     </AppContainer>
  //   </>
  // );
};
