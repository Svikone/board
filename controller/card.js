const Modules = require("../model/card");

exports.getCards = (req, res) => {
    Modules.getCards((result) => {
        res.render("index.ejs",{message:result});
    
    })
}

exports.saveCard = (req,res) => {
    const card = req.body.card;
    console.log(card)
    Modules.saveCard(card, (result) => {
        if(result) {
            // res.send({status:200,messsage:"query sucessfull"});
            res.send(result);
        }

    })
}