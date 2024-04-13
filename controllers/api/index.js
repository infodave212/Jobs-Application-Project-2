const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const applicationRoutes = require('./applicationRoutes');
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/applications', applicationRoutes)
module.exports = router;
