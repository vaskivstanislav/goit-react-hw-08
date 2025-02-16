import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    e.preventDefault();
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="search" className={s.input} onChange={handleSearch} />
    </div>
  );
};

export default SearchBox;