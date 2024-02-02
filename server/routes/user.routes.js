// Set up express
const express = require('express');
const router = express.Router();

// require the userController methods
const userController = require('../controller/userController');

// Routes that control endpoints
router.get("/getUsers", userController.getUsers);
router.post("/createUser", userController.createUser);
router.post("/getUserById", userController.getUserById);
router.post("/getUserByEmail", userController.getUserByEmail);
router.post("/getUserByUsername", userController.getUserByUsername);
router.post("/login", userController.login);
router.post("/verify", userController.verifySession)

module.exports = router;