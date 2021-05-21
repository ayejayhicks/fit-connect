const router = require('express').Router();
const apiRoutes = require('./api');
const path = require("path");

router.use('/api', apiRoutes);

// If no API routes hit, send the React app
router.use(function(req, res) {
    if (req.path != "/" && req.path != "/signup" && req.path != "/signin" && req.session.logged_in != true) {
        console.log("Redirecting to Login as user is not logged in");
        res.redirect("/signin");
        return;
    } 
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
