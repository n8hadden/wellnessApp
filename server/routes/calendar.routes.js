// Importing the express library
const express = require('express');

// Creating a new router instance from Express
const router = express.Router();

// Importing the controller module responsible for handling calendar-related operations
const calendarController = require("../controller/calendarController");

// Defining a POST route '/getDays' which will be handled by the getDays function from the calendarController module
router.post("/getDays", calendarController.getDays);

// Defining a POST route '/addDay' which will be handled by the addDay function from the calendarController module
router.post("/addDay", calendarController.addDay);

// Exporting the router object so it can be used in other parts of the application
module.exports = router;
