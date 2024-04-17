const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    constituency: {
        type: Schema.Types.ObjectId,
        ref: "Constituency",
    },
});

module.exports = Region = mongoose.model("Region", RegionSchema);
