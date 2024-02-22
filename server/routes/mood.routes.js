const express = require('express');
const router = express.Router();

const controller = require("../controller/moodController");

router.post('/getMood', controller.getMoodInfo);

module.exports = router;