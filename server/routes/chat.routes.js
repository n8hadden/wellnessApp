const {Router} = require("../utils/socket.io");
const controller = require("../controller/chatController");

const router = new Router();

router.On("test",controller.OnChat);

module.exports = router;
