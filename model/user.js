const db = require("../db");

exports.signup = async (user) => {
    const result = await db.get().collection("users").findOne({name:user.name});
        if(result == null){
            const succes = await db.get().collection("users").insert({
                name: user.name,
                password: user.password
            });
            if(succes) return {status: 200, message: "succes true"}
        }
        else {
            return {status: 500, message: "user exist"}
        }
}

exports.signin = async (user) => {
    return await db.get().collection("users").findOne({name:user.name, password:user.password});
}


exports.users = async () => {
    return await db.get().collection("users").find().toArray();

}