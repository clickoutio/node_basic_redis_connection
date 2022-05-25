import { Request, Response, Router } from "express";
import { makeAPingInRedis } from "./redisConnector";
import { UserModel } from "./user";

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

baseRouter.post("/user", async (req: Request, res: Response) => {

    const user = req.body;

    const userEntity = new UserModel(user);

    userEntity.save();

    res.status(200).send();
});

baseRouter.get("/user/:name", async (req: Request, res: Response) => {
    const name = req.params.name;

    const user = await UserModel.findOne({firstName: name});

    res.json(user);
});


export default baseRouter;