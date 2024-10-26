const { User, Token, UserRole, Profile, Role } = require("@/models");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { generateToken } = require("@/controllers/token");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { Op, where } = require("sequelize");
const { getClientIP } = require("@/controllers/helper");
const { Navigator } = require("node-navigator");

const registerUser = async (req, res) => {
  try {
    const name = "VERIFICATION";
    const { fullname, username, email, password, phoneNumber } = req.body;
    const newUser = await User.create({
      us_fullname: fullname,
      us_username: username,
      us_email: email,
      us_password: await bcrypt.hash(password, 10),
      us_phone_number: phoneNumber,
      us_active: false,
    });
    const verificationToken = generateToken(
      newUser.us_id,
      newUser.us_email,
      name,
      "1h"
    );
    const emailTemplateSource = fs.readFileSync(
      path.join(__dirname, "../views/templates/emailVerification.hbs"),
      "utf8"
    );
    const template = handlebars.compile(emailTemplateSource);
    const htmlToSend = template({
      logoUrl: `${process.env.BASE_URL}:${process.env.PORT}/images/logo-phincon-academy.png`,
      username: username,
      verificationLink: `${process.env.BASE_URL}:${process.env.PORT}/auth/verify-email?token=${verificationToken}`,
    });

    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });
    const mailOptions = {
      from: "phinconacademy@gmail.com",
      to: email,
      subject: "Hello ✔",
      html: htmlToSend,
    };
    await transporter.sendMail(mailOptions);
    await Token.create({
      tkn_value: verificationToken,
      tkn_type: "Register",
      tkn_description: `Successfully create token user VERIFICATION for ${newUser.us_id}`,
      tkn_client_ip: (await getClientIP()).ip,
      tkn_client_agent: new Navigator().userAgent,
      tkn_us_id: newUser.us_id,
      tkn_expired_on: new Date(new Date().getTime() + 60 * 60 * 1000),
      tkn_active: true,
      tkn_create_on: new Date(),
      tkn_created_by: newUser.us_id,
    });
    await UserRole.create({
      ur_us_id: newUser.us_id,
      ur_rl_id: 3,
      ur_active: true,
    });
    await Profile.create({
      pr_us_id: newUser.us_id,
      pr_gender: "male",
      pr_description: null,
      pr_address: null,
      pr_active: true,
    });
    delete newUser.dataValues.us_password;
    return res.status(201).json({
      code: 201,
      message: "User registered successfully! Verification email sent.",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error, error: error, code: 500 });
  }
};
const loginUser = async (req, res) => {
  try {
    const { input, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { us_username: input },
          { us_email: input },
          { us_phone_number: input },
        ],
      },
      attributes: [
        "us_password",
        "us_id",
        "us_username",
        "us_fullname",
        "us_email",
        "us_phone_number",
      ],
      includes: [
        {
          model: Role,
          as: "roles",
          attributes: ["rl_code"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!user) {
      return res
        .status(400)
        .json({ status: "failed", code: 400, message: " User not found" });
    }
    const loginToken = generateToken(user.us_id, user.us_email, "LOGIN", "1d");
    if (!user) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "User not found",
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.us_password);
    if (!isValidPassword) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "Invalid Password password",
      });
    }
    await Token.create({
      tkn_type: "LOGIN",
      tkn_value: loginToken,
      tkn_description: `Login token user created with user ${input}`,
      tkn_client_ip: (await getClientIP()).ip,
      tkn_client_agent: new Navigator().userAgent,
      tkn_us_id: user.us_id,
      tkn_expired_on: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      tkn_active: true,
      tkn_create_on: new Date(),
      tkn_created_by: user.us_id,
    });
    delete user.dataValues.us_password;
    user.dataValues.token = loginToken;
    // Set Cookie
    const options = {
      httpOnly: false,
      expires: new Date(Number(new Date()) + 24 * 60 * 60 * 1000),
    };
    return res.cookie("user", JSON.stringify(user), options).status(200).send({
      code: 200,
      message: "User successfully logged in",
      user: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error, code: 500 });
  }
};
const logoutUser = async (req, res) => {
  try {
    if (req.cookies.user) {
      const { token } = JSON.parse(req.cookies.user);
      await Token.update(
        { tkn_active: false },
        { where: { tkn_value: token } }
      );
    }
    res.clearCookie("user", {
      httpOnly: false,
    });
    return res.status(200).send({
      code: 200,
      message: "User successfully logged out!",
      status: "success",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error login", error: error, code: 500 });
  }
};

module.exports = { registerUser, loginUser, logoutUser };
