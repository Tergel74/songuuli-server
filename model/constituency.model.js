const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConstituencySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["outer", "inner"],
    },
    regions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Region",
        },
    ],
});

module.exports = Constituency = mongoose.model(
    "Constituency",
    ConstituencySchema
);
