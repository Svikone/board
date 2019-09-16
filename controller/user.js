const Modules = require("../model/user");
const jwt = require('jsonwebtoken');

exports.pageSignup = (req, res) => {
    res.render("reg.ejs",{});
}

exports.signup = (req, res) => {
    const user = {
        name: req.body.regName,
        password:  req.body.regPass
    }

    Modules.signup(user, (result) => {
        res.send(result);
    })
}

exports.signin = (req, res) => {
    const user = {
        name: req.body.name,
        password:  req.body.password
    }
    Modules.signin(user, (result) => {

        if(result){
            
            jwt.sign({user:user}, 'secretkey', (err, token) => {
                req.headers['x-access-token'] = token;
                // 
                console.log(token)
                res.json({
                    token
                });
            });

        }
    })
}
