const db = require("../db");

exports.signup = (user, cb) => {
    db.get().collection("users").findOne({name:user.name},function (err, result) {

        if(result == null){

            db.get().collection("users").insert({
                name: user.name,
                password: user.password
            }).then(res => {
                cb({status: 200, messsage: "query sucessfull"})
            }).catch(error => {
                cb({status: 500, message: "query failed"})
            })
        }
        else {
            cb({status: 500, message: "user exist"})
        }
    });


}

exports.signin = (user, cb) => {
    db.get().collection("users").findOne({name:user.name, password:user.password},function (err, result) {
        if(!err && result != null) {
            cb(result);
        }
    });
}