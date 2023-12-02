import styled from 'styled-components';

export const ContactsPhonelist = styled.ul`
  padding: 24px;
  list-style: none;
`;

export const ContactsLi = styled.li`
  padding: 20px;
  border: 1px solid #1976d2;
  width: 60%;
  margin-bottom: 10px;
  transition: border-color 300ms ease;
  &:focus {
    border-color: #154575;
  }
  &:hover {
    border-color: #154575;
  }
`;

export const ContactsP = styled.p`
  margin-bottom: 12px;
`;

export const ContactsH = styled.h2`
  margin-bottom: 12px;
`;
