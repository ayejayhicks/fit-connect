var db = require("../models");
var router = require('express').Router();


router.get("/users", function (req, res) {
    db.User.find({})
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/users", (req, res) => {
    db.User.create(req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router