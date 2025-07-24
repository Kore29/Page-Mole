import React from 'react';

const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre..."
      className="w-full p-2 border border-gray-300 rounded mb-6"
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
