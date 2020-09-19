var express = require('express');
var router = express.Router();

const messageController = require('../../controller/messageController');

router.post('/api/message/create', messageController.create);
router.get('/api/message',messageController.list);

module.exports = router;