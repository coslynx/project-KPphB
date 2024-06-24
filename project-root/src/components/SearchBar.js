import React, { useState } from 'react';

const SearchBar = ({ logs, setFilteredLogs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredLogs = logs.filter(log => log.includes(searchTerm));
    setFilteredLogs(filteredLogs);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search logs..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;