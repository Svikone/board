const Modules = require("../model/card");
const jwt = require('jsonwebtoken');


exports.getCards = (req, res) => {
    // console.log(req.body.token)
    const user_id = jwt.decode(req.body.token);
    // console.log(user_id)
    Modules.getCards(user_id.user.name).then(result => {
       res.send({result:result,user: user_id.user.name});
    
    }).catch( err => {
        console.log(err)
    });
}

exports.updateCard = (req,res) => {
    const card = req.body.card;
    Modules.updateCard(card).then(result => {
        res.sendStatus(200);
    });
}

exports.saveCard = (req,res) => {
    
    const card = req.body.card;
    Modules.saveCard(card).then(result => {
        res.send({status:200,messsage:"query sucessfull"});

    }).catch(err => {
        console.log(err)
    })
}