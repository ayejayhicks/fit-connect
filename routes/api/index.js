const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/login', loginRoutes);

module.exports = router;
