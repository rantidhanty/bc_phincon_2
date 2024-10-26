const express = require("express");
const {
  createMatch,
  getAllMatches,
  competeMatch,
  getAllScores,
} = require("../controller/games");

const router = express.Router();

router.post("/createMatch", createMatch);
router.get("/getAllMatches", getAllMatches);
router.patch("/complete/:id", competeMatch);
router.get("/getAllScores", getAllScores);

module.exports = router;
