const db = require("../db");
var objectid = require('objectid');

exports.getCards = async (user_id) => {
    return await db.get().collection('cards').find({name: user_id}).toArray();
}

exports.saveCard = async (card) => {
    const result = await  db.get().collection("cards").insert({
        name: card.name,
        posX: "1",
        posY: "1",
        content: card.content
    })
    if (result) return {status: 200, messsage: "query sucessfull"}
    return {status: 500, message: "query failed"}
}

exports.updateCard = async (card) => {
    // console.log(card)
    const result = await db.get().collection("cards").updateOne(
        {
            '_id': objectid(card.id_notes)
        
        },
        {$set:{
                'posX': card.posX,
                'posY': card.posY
            }
        }
    )
    if (result) return {status: 200, messsage: "query sucessfull"}
    return {status: 500, message: "query failed"}
}