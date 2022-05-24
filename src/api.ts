import { Router } from "express";
import { makeAPingInRedis } from "./redisConnector";

const baseRouter = Router();

baseRouter.get("/", (req, res)=> res.status(200).send("que pasa"));

baseRouter.get("/testRedisConnection", async (req, res) => {

    try{
        const text = await makeAPingInRedis();
        res.status(200).send(text);
    }
    catch(err){
        res.status(500).json({
            success: false,
            errMsg: err.message
        });
    }

});

export default baseRouter;