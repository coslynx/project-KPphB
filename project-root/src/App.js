import React, { useState, useEffect } from 'react';
import LogTable from './components/LogTable';
import SearchBar from './components/SearchBar';
import HighlightingMenu from './components/HighlightingMenu';
import TableConfig from './components/TableConfig';
import { getLogs } from './utils/logUtils';
import { applyHighlighting } from './utils/highlightingUtils';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightColor, setHighlightColor] = useState('');
  const [highlightedLogs, setHighlightedLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const logsData = await getLogs();
      setLogs(logsData);
      setFilteredLogs(logsData);
    };

    fetchLogs();
  }, []);

  useEffect(() => {
    const filtered = logs.filter(log => log.includes(searchTerm));
    setFilteredLogs(filtered);
  }, [searchTerm, logs]);

  useEffect(() => {
    const highlighted = applyHighlighting(filteredLogs, searchTerm, highlightColor);
    setHighlightedLogs(highlighted);
  }, [filteredLogs, searchTerm, highlightColor]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleHighlightColor = (color) => {
    setHighlightColor(color);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <HighlightingMenu onHighlightColor={handleHighlightColor} />
      <TableConfig />
      <LogTable logs={highlightedLogs} />
    </div>
  );
};

export default App;