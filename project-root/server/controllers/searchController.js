import express from 'express';
import logsController from '../controllers/logsController';

const searchController = {
  searchLogs: (req, res) => {
    const searchTerm = req.query.term;
    if (!searchTerm) {
      return res.status(400).json({ error: 'Search term is required' });
    }

    const filteredLogs = logsController.getFilteredLogs(searchTerm);
    if (filteredLogs.length === 0) {
      return res.status(404).json({ error: 'No logs found matching the search term' });
    }

    return res.status(200).json(filteredLogs);
  }
};

export default searchController;