const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElectionSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ["general", "presidential"],
        default: "general",
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    seatNumber: {
        type: Number,
        required: true,
    },
    parties: [{ type: Schema.Types.ObjectId, ref: "Party" }],
});

module.exports = Election = mongoose.model("Election", ElectionSchema);
