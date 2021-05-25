const db = require('../../models');
const app = require('express');
const bcrypt = require('bcrypt');
const router = app.Router();

router.post("/", async (req, res) => {
    try {
        const userData = await db.User.findOne({ email: req.body.email });

        console.log(userData);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = bcrypt.compareSync(req.body.password, userData.password);
        console.log(validPassword);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_email = userData.email;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;
