// Set up express
const express = require('express');
const router = express.router();

// require the userController methods
const userController = require('../controller/userController');

// Routes that control endpoints
router.get("/getUsers", userController.getUsers);
router.post("/createUser", userController.createUser);
router.get("/getUserById", userController.getUserById);
router.get("/getUserByEmail", userController.getUserByEmail);
router.get("getUserByUsername", userController.getUserByUsername);

module.exports = router;