// Appointments API
// Justin Barlowe
// 06/17/2024

// Loosely put together to get server running. Will need to be updated with actual API endpoints.

const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('Appointments API');
});

module.exports = router;
