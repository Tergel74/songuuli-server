const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubRegionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    region: {
        type: Schema.Types.ObjectId,
        ref: "Region",
    },
});

module.exports = SubRegion = mongoose.model("SubRegion", SubRegionSchema);
