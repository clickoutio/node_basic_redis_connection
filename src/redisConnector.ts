import { createClient } from "redis";

export async function makeAPingInRedis(){

    const client = createClient({
      url: process.env.REDIS_URL,
    });

    client.connect();
    const message = await client.get("ping");
    client.quit();

    return message;
}