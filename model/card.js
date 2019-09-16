const db = require("../db");
exports.getCards = (cb) => {
    
    db.get().collection('cards').find().toArray(function(err,result){
        console.log(result)
        cb(result)
    })
}

exports.saveCard = (card,cb) => {
    db.get().collection("cards").insert({
        name: card.name,
        posX: card.posX,
        posY: card.posY,
        content: card.content
    }).then(result => {
        cb({status: 200, messsage: "query sucessfull"})
    }).catch(error => {
        cb({status: 500, message: "query failed"})
    })

}