const express = require("express");
const userController = require("../Controller/ApiController");
const router = express();

router.post("/api", userController.getApi);

router.get("/postapi", userController.getComments);

module.exports = router;