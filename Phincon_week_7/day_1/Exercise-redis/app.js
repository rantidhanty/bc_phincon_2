const express = require("express");
const Redis = require("ioredis");

const app = express();
const port = process.env.PORT || 3000;

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("error", async (err) => {
  console.log("Redis error: ", err);
});

app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const redisLogin = {
      username,
      password,
    };

    const dataRedis = await redis.get("redisLogin");
    if (dataRedis) {
      return res.json("Login success");
    }
    await redis.set("redisLogin", JSON.stringify(redisLogin), "EX", 100);
    return res.json(dataRedis);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
