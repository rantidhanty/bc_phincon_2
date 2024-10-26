require("module-alias/register");
const express = require("express");
const Redis = require("ioredis");
const authRoutes = require("./routes/auth");
const gamesRoutes = require("./routes/games");
const cookieParser = require("cookie-parser");

const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoutes);
app.use("/", gamesRoutes);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
