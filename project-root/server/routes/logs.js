const express = require('express');
const router = express.Router();
const logsController = require('../../controllers/logsController');

router.get('/', logsController.getAllLogs);
router.post('/', logsController.addLog);
router.put('/:id', logsController.updateLog);
router.delete('/:id', logsController.deleteLog);

module.exports = router;