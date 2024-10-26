const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controller/auth");
const router = express.Router();
// const { registerUser } = require("@/controllers/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;
