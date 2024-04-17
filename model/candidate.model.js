const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    party: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Party",
    },
});

module.exports = Candidate = mongoose.model("Candidate", CandidateSchema);
