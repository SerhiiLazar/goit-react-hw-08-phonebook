import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';
export const FilterInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
     <TextField
     label="Find contacts by name"
     variant='outlined'
     size="small"
     type="text"
     name="filter"
     value={filter}
     required
     sx={{ mb: '20px'}}
     onChange={e => dispatch(setFilter(e.target.value))}
   />
  );
};
