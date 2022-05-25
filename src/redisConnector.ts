import Redis from "ioredis";

export async function makeAPingInRedis(){

    const client = new Redis({
        host: process.env.REDIS_HOST,
        port: 6379
    });

    //await client.connect();
    await client.set("value", "Connection stablished");
    const message = await client.get("value");
    //await client.quit();

    console.log(message);
    return message;
    return "didnt failed";
}