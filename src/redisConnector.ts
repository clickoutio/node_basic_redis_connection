import Redis from "ioredis";

export async function makeAPingInRedis(){

    const client = new Redis({
        host: process.env.REDIS_HOST,
        port: 6379,
        timeout: 2000
    });

    await client.set("value", "Connection stablished");
    const message = await client.get("value");

    console.log(message);
    return message;
}