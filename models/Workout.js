const mongoose = require('mongoose');
const { isEmail } = require('validator');

const workoutSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    validate: [isEmail, 'Please enter a valid email']
  },
  workout: {
    type: String,
    required: [true, 'Please enter a password']
  },
  weight: {
    type: String,
    required: [true, 'Please enter a weight']
  }
});

const WorkoutData = mongoose.model('workoutData', workoutSchema);

module.exports = WorkoutData;