import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={onSearchChange}
        className="ba b--green bg-lightest-blue pa3 mb2 db w-50 center"
        placeholder="search robots"
        type="search"
      />
    </div>
  );
};
export default SearchBox;
