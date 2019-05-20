import React from 'react';

// hardcoded as API limited to 1000 records
const FilterByYear = ({ handleFilterByYear }) => {
    return (
        <select onChange={handleFilterByYear}>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
        </select>
    )
}

export default FilterByYear;