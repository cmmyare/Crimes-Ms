import mongoose from "mongoose";

const assignIncidentSchema = new mongoose.Schema({
    incident_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Incident', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {type: String},
    priority: {type: String}
});

const AssignIncident = mongoose.model('AssignIncident', assignIncidentSchema);
module.exports = AssignIncident;