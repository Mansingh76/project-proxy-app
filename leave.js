const express = require('express');
const router = express.Router();

router.post('/apply', (req, res) => {
    res.json({ message: 'Leave request received' });
});

module.exports = router;
