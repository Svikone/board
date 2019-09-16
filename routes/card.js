const express = require("express");
const Controller = require("../controller/card");
const homeRouter = express.Router();
const auth = require("../middleware/auth");

homeRouter.get("/", Controller.getCards);
homeRouter.post("/api/board/card/save",Controller.saveCard);

module.exports = homeRouter;