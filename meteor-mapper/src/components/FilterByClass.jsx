import React from 'react';

const FilterByClass = ({ handleFilterByClass, uniqueClasses }) => {
  return (
    <select onChange={handleFilterByClass}>
      {uniqueClasses.sort().map(mclass => <option key={mclass} value={mclass}>{mclass}</option>)}
    </select>
  )
}

export default FilterByClass