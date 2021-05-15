const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;
