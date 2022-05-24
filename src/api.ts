import { Router } from "express";
import { makeAPingInRedis } from "./redisConnector";

const baseRouter = Router();

baseRouter.get("/", (req, res)=> res.status(200).send("que pasa"));

baseRouter.get("/testRedisConnection", async (req, res) => {

    const text = await makeAPingInRedis();

    res.status(200).send(text);
});

export default baseRouter;