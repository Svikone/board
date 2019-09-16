const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
app.use(express.static(__dirname + '/'));
cardRouter = require("./routes/card");
userRouter = require("./routes/user");
app.use (bodyParser.urlencoded ({
     extended: true,
  limit: '50mb'
}));
app.use (bodyParser.json ({
  extended: true,
limit: '50mb'
}));
app.use(cookieParser());
app.use("/", cardRouter);
app.use("/user", userRouter);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.post("/api/board/card/save",controller.saveCard);
db.connect('mongodb://localhost:27017/board', function(err){

  if(err){
    return console.log(err);
  }
    
  app.listen(9000, function(){
    console.log("server started 9000");
  })
    
});