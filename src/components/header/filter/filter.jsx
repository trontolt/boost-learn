import { useState, useEffect } from 'react';
import './filter.css';

const Filter = props => {
    const { filterAction } = props;
    const [inputValue, setInputValue] = useState('');

    useEffect(() => filterAction(inputValue), [inputValue, filterAction]);

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input
                type="search"
                placeholder="enter to filter"
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default Filter;
