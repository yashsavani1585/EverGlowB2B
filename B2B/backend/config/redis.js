import { createClient } from "redis";

let redisClient;

const connectRedis = async () => {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL || undefined,
      socket: {
        host: process.env.REDIS_HOST || "127.0.0.1",
        port: process.env.REDIS_PORT || 6379,
      },
      username: process.env.REDIS_USERNAME || undefined,
      password: process.env.REDIS_PASSWORD || undefined,
    });

    redisClient.on("error", (err) => console.error("Redis Error:", err));
    redisClient.on("connect", () => console.log("Redis Connected"));

    await redisClient.connect();
  }

  return redisClient;
};

export default connectRedis;
