const express = require('express');
const router = express.Router();

// Example route for Teacher Guardians
router.post('/request-leave', (req, res) => {
    res.json({ message: 'TG leave request received' });
});

module.exports = router;
