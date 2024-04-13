const router = require('express').Router();
const JobsApplication = require('../../models/JobsApplication');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const jobApplicationData = await JobsApplication.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(jobApplicationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const jobApplicationtData = await JobsApplication.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!jobApplicationtData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }

        res.status(200).json(jobApplicationtData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;