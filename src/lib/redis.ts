import { createClient } from "redis";

let redisClient: ReturnType<typeof createClient>;

export async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      username: process.env.USERNAME as string,
      password: process.env.PASSWORD as string,
      socket: {
        host: process.env.HOST as string,
        port: parseInt(process.env.PORT as string),
      },
    });
    redisClient.on("error", (err) => {
      console.error("Redis Client Error", err);
    });
  }
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }

  return redisClient;
}
