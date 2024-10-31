import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    _id: { type: Number, required: true, unique: true},
    typeOfIncident: { type: String, required: true },
    dateAndTime: { type: Date, required: true },
    description: { type: String, required: true },
    evidence: { type: String },
    status: {type: String, default: 'pending'},
    witnessInfo: {
        name: { type: String },
        phone: { type: Number }
    }
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;