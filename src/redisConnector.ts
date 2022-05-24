import { createClient } from "redis";

export async function makeAPingInRedis(){

    const client = createClient({
      url: process.env.REDIS_URL,
    });

    client.connect();
    await client.set("value", "Connection stablished");
    const message = await client.get("value");
    await client.quit();

    console.log(message);
    return message;
}