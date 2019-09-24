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

    Modules.signup(user).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err)
    });
}

exports.users = (req, res) => {
    Modules.users().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err)
    })
    
}

exports.signin = (req, res) => {
    const user = {
        name: req.body.name,
        password:  req.body.password
    }
    Modules.signin(user).then(result => {
        jwt.sign({user:user}, 'secretkey', (err, token) => {
            req.headers['x-access-token'] = token;
            res.json({token});
        });
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
}
