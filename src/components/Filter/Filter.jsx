import React from 'react';
import { FilterLabel } from './Filter.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { redChangeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = value => {
    dispatch(redChangeFilter(value));
  };
  return (
    <>
      <FilterLabel>
        Find contact by name or number
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={e => handleChange(e.target.value)}
        />
      </FilterLabel>
    </>
  );
};
