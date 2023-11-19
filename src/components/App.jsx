import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Layout } from './Layout/Layout';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Contacts from './pages/Contacts/Contacts';
import { refresh } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
