const express = require("express");
const Controller = require("../controller/card");
const homeRouter = express.Router();
const auth = require("../middleware/auth");

homeRouter.get("/", function(req, res) {
    res.render("index.ejs",{});
});
homeRouter.post("/api/board/card/save",Controller.saveCard);
homeRouter.post("/api/board/card/update",Controller.updateCard);
homeRouter.post("/api/board/card/get",Controller.getCards);

module.exports = homeRouter;