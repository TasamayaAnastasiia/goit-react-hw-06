import style from '../SearchBox/SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/constant.js';

const SearchBox = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    }
    return (
        <div className={style.boxForSeacrh}>
            <label>Find contacts by name</label>
            <input onChange={handleChange} type="text" name="search" value={value}/>
        </div>
    );
}
export default SearchBox;