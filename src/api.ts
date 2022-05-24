import { Router } from "express";
import { makeAPingInRedis } from "./redisConnector";

const baseRouter = Router();

baseRouter.get("/", (req, res)=> res.send("que pasa"));

baseRouter.get("/testRedisConnection", async (req, res) => {

    const text = await makeAPingInRedis();

    res.send(text);
});

export default baseRouter;