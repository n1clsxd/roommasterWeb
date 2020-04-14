const User = require('../models/user.model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log("Requisition object: " + req.body)
    const user = req.body;
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        }

        else res.send(data);
    })
}

exports.login = (req, res) => {
    let credentials = {
        email : req.headers.email,
        password: req.headers.password
    }
    User.login(credentials, (err, data) => {
        console.log("procurando por por ", credentials)
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${credentials}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + credentials
                });
            }
        } else res.status(200).send(data);
    })
}

exports.findById = (req, res) => {
    
}

exports.findByCompanyId = (req, res) => {
    
}

exports.findByDomain = (req, res) => {

}

exports.edit = (req, res) => {
    
}

exports.deactivate = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}

