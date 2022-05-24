import Redis from "ioredis";

export async function makeAPingInRedis(){

    const cluster = new Redis.Cluster([
        {
            host: '127.0.0.1',
            port: 6379
        }
    ]);

    //await client.connect();
    await cluster.set("value", "Connection stablished");
    const message = await cluster.get("value");
    //await client.quit();

    console.log(message);
    return message;
}