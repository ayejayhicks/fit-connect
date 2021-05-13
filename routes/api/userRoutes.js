const db = require('../../models');
const app = require('express');
const router = app.Router();

// GET: /api/users
router.get("/", (req, res) => {
    db.User.find({})
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

// POST: /api/users
router.post("/", (req, res) => {
    db.User.create(req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
