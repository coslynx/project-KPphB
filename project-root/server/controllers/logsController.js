import express from 'express';
import logs from '../data/logs';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(logs);
});

router.post('/', (req, res) => {
  const newLog = req.body;
  
  if (!newLog.text || !newLog.timestamp) {
    return res.status(400).json({ msg: 'Text and timestamp are required' });
  }
  
  logs.push(newLog);
  res.json(logs);
});

export default router;