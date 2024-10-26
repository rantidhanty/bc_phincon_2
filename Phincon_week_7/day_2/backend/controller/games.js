const { Matches, User } = require("@/models");
const redis = require("@/controller/redis");
const { where, Op } = require("sequelize");

const createMatch = async (req, res) => {
  try {
    const { id } = req.cookies;
    const { playerOneValue } = req.body;
    const newMatch = await Matches.create({
      mc_player_one: id,
      mc_player_one_value: playerOneValue,
    });
    const match = await redis.get(`match:${newMatch.mc_id}:data`);
    if (!match) {
      await redis.set(
        `match:${newMatch.mc_id}:data`,
        JSON.stringify(newMatch),
        "EX",
        24 * 60 * 60 * 30
      );
    }
    return res.status(200).send({
      status: "success",
      code: 200,
      data: newMatch,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

const competeMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const { playerTwoValue } = req.body;
    const { id: userId } = req.cookies;

    const match = await Matches.findOne({ where: { mc_id: id } });

    if (!match) {
      return res.status(404).send({
        status: "fail",
        code: 404,
        message: "Match not found",
      });
    }

    const playerOneValue = match.mc_player_one_value;
    let result;

    if (playerOneValue === playerTwoValue) {
      result = "Draw";
    } else if (
      (playerOneValue === "Rock" && playerTwoValue === "Scissors") ||
      (playerOneValue === "Scissors" && playerTwoValue === "Paper") ||
      (playerOneValue === "Paper" && playerTwoValue === "Rock")
    ) {
      result = "Player One Win";
    } else {
      result = "Player Two Win";
    }

    const updates = {
      mc_player_two: userId,
      mc_player_two_value: playerTwoValue,
    };
    await Matches.update(updates, { where: { mc_id: id } });

    return res.status(200).send({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: "error",
      message: "An error occurred",
    });
  }
};
const getAllMatches = async (req, res) => {
  try {
    const matches = await Matches.findAll({
      where: { mc_player_two: null, mc_player_two_value: null },
      attributes: ["mc_id", "mc_player_one", "mc_player_one_value"],
      include: [
        {
          model: User,
          as: "player_one",
          attributes: ["us_fullname", "us_username"],
        },
      ],
    });
    return res.status(200).send({
      status: "success",
      code: 200,
      data: matches,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

const getAllScores = async (req, res) => {
  try {
    const scores = await Matches.findAll({
      attributes: [
        "mc_player_one",
        "mc_player_one_value",
        "mc_player_two",
        "mc_player_two_value",
      ],
      where: {
        mc_player_two: { [Op.ne]: null },
        mc_player_two_value: { [Op.ne]: null },
      },
    });
    let playerScores = {};

    scores.forEach((match) => {
      const {
        mc_player_one,
        mc_player_one_value,
        mc_player_two,
        mc_player_two_value,
      } = match;
      if (!playerScores[mc_player_one]) playerScores[mc_player_one] = 0;
      if (!playerScores[mc_player_two]) playerScores[mc_player_two] = 0;

      if (
        (mc_player_one_value === "Rock" &&
          mc_player_two_value === "Scissors") ||
        (mc_player_one_value === "Scissors" &&
          mc_player_two_value === "Paper") ||
        (mc_player_one_value === "Paper" && mc_player_two_value === "Rock")
      ) {
        playerScores[mc_player_one]++;
      } else if (
        (mc_player_two_value === "Rock" &&
          mc_player_two_value === "Scissors") ||
        (mc_player_two_value === "Scissors" &&
          mc_player_two_value === "Paper") ||
        (mc_player_two_value === "Paper" && mc_player_two_value === "Rock")
      ) {
        playerScores[mc_player_two]++;
      }
    });
    return res.status(200).send({
      status: "success",
      code: 200,
      data: playerScores,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  createMatch,
  getAllMatches,
  competeMatch,
  getAllScores,
};
