import React from 'react';
// import { FilterLabel } from './Filter.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { redChangeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Container, TextField } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = value => {
    dispatch(redChangeFilter(value));
  };
  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px ',
      }}
    >
      <h2>Find contact by name or number</h2>

      <TextField
        variant="outlined"
        type="text"
        name="filter"
        required
        margin="normal"
        minLength="2"
        autoComplete="on"
        size="small"
        color="primary"
        value={filter}
        onChange={e => handleChange(e.target.value)}
        sx={{
          minWidth: '240px',

          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'primary.hover',
            },
            '& fieldset': {
              borderColor: 'primary.main',
              transition: 'border-color 250ms ease',
            },
          },

          '& .MuiOutlinedInput-input': {
            color: 'primary.main',
          },
        }}
      />
    </Container>
  );
};
