const express = require("express");
const Controller = require("../controller/user");
const homeRouter = express.Router();


homeRouter.get("/signup", Controller.pageSignup);
homeRouter.post("/signup", Controller.signup);
homeRouter.post("/signin", Controller.signin);
homeRouter.post("/full", Controller.users);

module.exports = homeRouter;