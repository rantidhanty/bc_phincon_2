import express from "express";
import Redis from "ioredis";

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

// app.get("/", (req, res) => {
//   res.send("Hello redis with Express.js");
// });

app.get("/cache", async (req, res) => {
  const cacheData = await redis.get("cache");

  if (cacheData) {
    return res.send("Ini hanya get tanpa set : " + cacheData);
  }
  const dataToCache = {
    code: 200,
    message: "Successfully get all products",
    data: [
      { id: 1, name: "Tas" },
      { id: 2, name: "Celana" },
      { id: 3, name: "Kemeja" },
    ],
  };

  await redis.set("cacheData", JSON.stringify(dataToCache), "EX", 10);
  return res.send(
    "Ini set ulang karena data tidak ada : " + JSON.stringify(dataToCache)
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
