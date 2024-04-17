const Constituency = require("../model/constituency.model");
const Region = require("../model/region.model");

const createConstituency = async function (req, res) {
    try {
        const constituencyBody = req.body;
        const newConstituency = await Constituency.create(constituencyBody);
        newConstituency.regions = [];
        for (const regionId of constituencyBody.regions) {
            const region = await Region.findById(regionId);
            region.constituency = newConstituency._id;

            await region.save();
            newConstituency.regions.push(region);
        }
        await newConstituency.save();
        res.status(201).json("New Constituency Created");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createRegion = async function (req, res) {
    try {
        const regionBody = req.body;
        const newRegion = await Region.create(regionBody);

        res.status(201).json("New Region Created");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getConstituencies = async function (req, res) {
    try {
        const constituencies = await Constituency.find().populate("regions");
        const simple = [];
        for (let i = 0; i < constituencies.length; i++) {
            const name = constituencies[i].name;
            const type = constituencies[i].type;
            const regions = [];
            for (const r of constituencies[i].regions) {
                regions.push(r.name);
            }
            simple.push({
                name: name,
                type: type,
                regions: regions,
            });
        }
        res.status(200).json([constituencies, simple]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createConstituency, getConstituencies, createRegion };
