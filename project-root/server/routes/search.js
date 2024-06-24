import express from 'express';
import searchController from '../../controllers/searchController';

const router = express.Router();

router.get('/search', searchController.searchLogs);

export default router;