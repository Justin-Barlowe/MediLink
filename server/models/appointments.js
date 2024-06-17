// Appointments model
// Justin Barlowe
// 06/17/2024

// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Appointments Schema
const AppointmentsSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    reason: {
        type: String,
        required: true
    }
});

// Export
module.exports = mongoose.model('Appointments', AppointmentsSchema);
