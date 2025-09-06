import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
  url: process.env.UPSTASH_REDIS_URL
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

await client.connect();

await client.set("foo", "bar");
console.log(await client.get("foo")); // test output

await client.disconnect();

export default client;
