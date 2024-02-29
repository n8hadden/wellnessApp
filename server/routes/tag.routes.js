// import and use express to setup a server
const express = require('express');
const router = express.Router();

// import the tag Controller methods
const tagController = require('../controller/tagController');

// routes that control endpoints
router.post("/getTags", tagController.getTags);
router.post("/addTag", tagController.addTag);
router.post("/removeTag", tagController.removeTag);
router.get("/getAllTags", tagController.getAllTags);
router.post("/getTagNameById", tagController.getTagNameById);
router.post("/getTagIdByTagName", tagController.getTagIdByTagName);

// export the router
module.exports = router;