import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormPhoneBook = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  /* width: 100%; */
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormInput = styled(Field)`
  font-size: large;
  color: #1976d2;
  /* width: 100%; */
  /* height: 32px; */
  padding: 8px 14px;
  border: 1px solid #1976d2;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  transition: border-color 300ms ease;
  &:focus {
    border-color: #154575;
  }
  &:hover {
    border-color: #154575;
  }
`;
