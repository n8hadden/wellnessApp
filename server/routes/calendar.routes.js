const express = require('express');
const router = express.Router();

const calendarController = require("../controller/calendarController");

router.post("/getDays", calendarController.getDays);
router.post("/addDay", calendarController.addDay);

module.exports = router;