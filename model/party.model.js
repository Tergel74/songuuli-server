const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    candidates: [
        {
            type: Schema.Types.ObjectId,
            ref: "Candidates",
        },
    ],
});

module.exports = Party = mongoose.model("Party", PartySchema);
