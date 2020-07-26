const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter the exercise type',
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter the exercies name',
            },
            duration: {
                type: Number,
                required: "Enter excercise duration"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        },
    ],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;