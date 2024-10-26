const { Redis } = require("ioredis");

const redis = new Redis({
  host: "redis-11356.c334.asia-southeast2-1.gce.redns.redis-cloud.com",
  password: "l0SarRbtVFyURiQRP0TUggPvotsMxIxj",
  port: 11356,
});

redis.on("connect", () => {
  console.log("Redis connected");
});

module.exports = redis;
