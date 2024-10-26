const { User } = require("@/models");
const redis = require("@/controller/redis");
const bcrypt = require("bcrypt");
const { Op, where } = require("sequelize");
const registerUser = async (req, res) => {
  try {
    const { fullname, username, email, password, phoneNumber } = req.body;
    const newUser = await User.create({
      us_fullname: fullname,
      us_username: username,
      us_email: email,
      us_password: await bcrypt.hash(password, 10),
      us_phone_number: phoneNumber,
      us_active: false,
    });
    return res.status(200).send({
      status: "success",
      code: 200,
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error, code: 500 });
  }
};

const loginUser = async (req, res) => {
  try {
    const { userLogin, password } = req.body;

    const user = await User.findOne({
      where: {
        [Op.or]: [
          { us_username: userLogin },
          { us_email: userLogin },
          { us_phone_number: userLogin },
        ],
      },
    });

    if (!user) {
      return res.status(400).send({
        status: "fail",
        code: 400,
        message: "User not found",
      });
    }

    const hashPassword = await bcrypt.compare(password, user.us_password);
    if (!hashPassword) {
      return res.status(400).send({
        status: "fail",
        code: 400,
        message: "Wrong password",
      });
    }
    res.cookie("id", user.us_id, { maxAge: 24 * 60 * 60 * 30 });
    await redis.set(
      `user:${user.us_id}:data`,
      JSON.stringify(user),
      "EX",
      24 * 60 * 60 * 30
    );
    return res.status(200).send({
      status: "success",
      code: 200,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error, code: 500 });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { id } = req.cookies;
    await redis.del(`user:${id}:data`);
    res.clearCookie("id");
    return res.status(200).send({
      status: "success",
      code: 200,
      message: "Logout success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error, code: 500 });
  }
};

module.exports = { registerUser, loginUser, logoutUser };
