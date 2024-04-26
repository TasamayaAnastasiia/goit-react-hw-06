import css from './SearchBar.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const SearchBar = ({task}) => {

    const [inputValue, setInputValue] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.search.value;
        setInputValue(value);
        task(value);
        !inputValue ? toast.error('Your field is empty') : toast.success('Added');
        setInputValue('');
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
            <form className={css.forma} onSubmit={handleSubmit}>
                <input className={css.input} onChange={handleChange} type="text" name="search" value={inputValue} placeholder="Writing..."/>
                <button type="submit">Add</button>
            </form>
    );

};