const router = require('express').Router();
const workout = require('../models/workout');

//create a new workout:
router.post('/workouts', (req, res) => {
    workout
        .create({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// add or update an exercise:
router.put('/workouts/:id', (req, res) => {
    workout
        .findOneAndUpdate({ _id: req.params.id }, { $push: {} })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get('/workouts/range', (req, res) => {
    workout
        .find({})
        .sort({ date: -1 })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});



module.exports = router;