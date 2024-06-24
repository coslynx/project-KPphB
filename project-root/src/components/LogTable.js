import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import HighlightingMenu from './HighlightingMenu';
import SearchBar from './SearchBar';
import { getLogs } from '../utils/logUtils';

const LogTable = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightColor, setHighlightColor] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      const logsData = await getLogs();
      setLogs(logsData);
      setFilteredLogs(logsData);
    };

    fetchLogs();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredLogs(logs);
    } else {
      const filtered = logs.filter(log => log.includes(searchTerm));
      setFilteredLogs(filtered);
    }
  }, [searchTerm, logs]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleHighlight = (color) => {
    setHighlightColor(color);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <HighlightingMenu onHighlight={handleHighlight} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Log Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLogs.map((log, index) => (
              <TableRow key={index}>
                <TableCell style={{ backgroundColor: log.includes(searchTerm) ? highlightColor : 'transparent' }}>{log}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LogTable;