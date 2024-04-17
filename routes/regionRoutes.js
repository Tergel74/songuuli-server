const express = require("express");
const router = express.Router();
const RegionController = require("../controllers/regionController");

router.get("/getConstituencies", RegionController.getConstituencies);
router.post("/createConstituency", RegionController.createConstituency);
router.post("/createRegion", RegionController.createRegion);

module.exports = router;
