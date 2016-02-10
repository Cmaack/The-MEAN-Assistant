var mongoose = require('mongoose');


var appointmentSchema = mongoose.Schema({
  name:        { type: String, required: true },
  date:        { type: Date },
  time:        { type: Date },
  location:    {type: String},
  description: {type: Text}

}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
